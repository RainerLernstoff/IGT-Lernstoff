// =====================================================================
//  AUSFÜLLEN – macht ein Blatt zum Antippen und Prüfen
//  Kästchen (button.kreuz) antippen → ✗.  Felder (input.eintrag) → eintippen.
//  Unter jeder Aufgabe ein Knopf „Prüfen“: zeigt grün/rot und die Punkte.
//  Punkte wie auf dem Papierblatt:
//    - jedes richtige Feld = 1 Punkt
//    - jedes richtige Kreuz = 1 Punkt (eine Zeile zählt nur, wenn sie ganz stimmt)
//  Es wird NICHTS gespeichert.
// =====================================================================
(function () {
  "use strict";

  // Die richtige Antwort steht leicht verschlüsselt im Blatt (data-s), damit man sie nicht sofort sieht.
  function soll(el) {
    try { return decodeURIComponent(escape(atob(el.getAttribute("data-s")))); } catch (e) { return ""; }
  }

  // Eingaben vergleichbar machen: Groß/klein egal, Leerzeichen egal, "3,0" = "3", "-" = "–"
  function gleich(eingabe, richtig) {
    function sauber(t) {
      t = String(t).trim().toLowerCase().replace(/\s+/g, "").replace(/[-‐‑–—]/g, "–").replace(/\./g, "");
      if (/^\d+(,\d+)?$/.test(t)) t = String(parseFloat(t.replace(",", ".")));
      return t;
    }
    return sauber(eingabe) !== "" && sauber(eingabe) === sauber(richtig);
  }

  // Kästchen antippen (auch der Text daneben in derselben Zelle zählt)
  document.addEventListener("click", function (e) {
    var k = e.target.closest(".kreuz");
    if (!k) {
      var zelle = e.target.closest("td");
      if (zelle && zelle.querySelectorAll(".kreuz").length === 1) k = zelle.querySelector(".kreuz");
    }
    if (!k) return;
    var an = k.getAttribute("aria-pressed") !== "true";
    k.setAttribute("aria-pressed", an ? "true" : "false");
    k.textContent = an ? "✗" : "";
  });

  // Aufgaben finden: alles von einer Überschrift "Aufgabe …" bis zur nächsten Überschrift
  var haupt = document.querySelector(".blatt");
  var aufgaben = [];
  haupt.querySelectorAll("h2").forEach(function (h) {
    if (!/^Aufgabe\s+\d+/.test(h.textContent.trim())) return;
    var teile = [], el = h.nextElementSibling;
    while (el && el.tagName !== "H2") { teile.push(el); el = el.nextElementSibling; }
    var felder = [], kreuze = [];
    teile.forEach(function (t) {
      t.querySelectorAll("input.eintrag").forEach(function (x) { felder.push(x); });
      t.querySelectorAll("button.kreuz").forEach(function (x) { kreuze.push(x); });
    });
    if (!felder.length && !kreuze.length) return;
    var nr = parseInt(h.textContent.match(/\d+/)[0], 10);
    aufgaben.push({ nr: nr, felder: felder, kreuze: kreuze, letztes: teile[teile.length - 1] });
  });

  // Kreuze nach Tabellenzeilen ordnen
  function zeilen(kreuze) {
    var liste = [];
    kreuze.forEach(function (k) {
      var tr = k.closest("tr");
      var z = liste.find(function (x) { return x.tr === tr; });
      if (!z) { z = { tr: tr, kreuze: [] }; liste.push(z); }
      z.kreuze.push(k);
    });
    return liste;
  }

  // Felder mit "leer-lassen" müssen leer bleiben: werden geprüft, geben aber keinen Punkt (wie am Papier)
  function maxPunkte(a) {
    var p = a.felder.filter(function (f) { return !f.classList.contains("leer-lassen"); }).length;
    a.kreuze.forEach(function (k) { if (soll(k) === "1") p++; });
    return p;
  }

  function pruefen(a) {
    var punkte = 0;
    a.felder.forEach(function (f) {
      var leer = f.classList.contains("leer-lassen");
      var ok = leer ? f.value.trim() === "" : gleich(f.value, soll(f));
      f.classList.toggle("ist-richtig", ok);
      f.classList.toggle("ist-falsch", !ok);
      if (ok && !leer) punkte++;
    });
    zeilen(a.kreuze).forEach(function (z) {
      var ok = z.kreuze.every(function (k) { return (k.getAttribute("aria-pressed") === "true") === (soll(k) === "1"); });
      z.tr.classList.toggle("ist-richtig", ok);
      z.tr.classList.toggle("ist-falsch", !ok);
      if (ok) z.kreuze.forEach(function (k) { if (soll(k) === "1") punkte++; });
    });
    a.punkte = punkte;
    a.ausgabe.textContent = punkte + " von " + a.max + " Punkten" + (punkte === a.max ? " – super!" : " – schau bei Rot noch einmal nach.");
    a.ausgabe.className = "pruef-ergebnis " + (punkte === a.max ? "gut" : "nochmal");
    gesamtZeigen();
  }

  // Knopf "Prüfen" unter jede Aufgabe
  aufgaben.forEach(function (a) {
    a.max = maxPunkte(a);
    var box = document.createElement("div");
    box.className = "pruef-box";
    var knopf = document.createElement("button");
    knopf.type = "button";
    knopf.className = "pruef-knopf";
    knopf.textContent = "Prüfen";
    knopf.addEventListener("click", function () { pruefen(a); });
    a.ausgabe = document.createElement("p");
    a.ausgabe.className = "pruef-ergebnis";
    a.ausgabe.setAttribute("aria-live", "polite");
    box.appendChild(knopf);
    box.appendChild(a.ausgabe);
    a.letztes.after(box);
  });

  // Punkte-Tabelle am Ende ("Meine Punkte") und Ampel automatisch ausfüllen
  function gesamtZeigen() {
    var tabelle = [].find.call(haupt.querySelectorAll("table.gitter"), function (t) { return /Meine Punkte/.test(t.textContent); });
    if (!tabelle) return;
    var kopf = tabelle.rows[0], meine = tabelle.rows[1], summe = 0, alleGeprueft = true;
    for (var i = 1; i < kopf.cells.length; i++) {
      var text = kopf.cells[i].textContent.trim();
      if (/^\d+$/.test(text)) {
        var a = aufgaben.find(function (x) { return x.nr === parseInt(text, 10); });
        if (a && a.punkte != null) { meine.cells[i].textContent = a.punkte; summe += a.punkte; }
        else { meine.cells[i].textContent = ""; alleGeprueft = false; }
      } else {
        meine.cells[i].textContent = summe;
      }
    }
    // Ampel: "ab 36 Punkte", "24 – 35 Punkte", "unter 24 Punkte"
    var ampel = tabelle.nextElementSibling;
    if (!ampel || !ampel.rows) return;
    [].forEach.call(ampel.rows, function (r) {
      var t = (r.cells[1] && r.cells[1].textContent) || "", z = (t.match(/\d+/g) || []).map(Number), passt = false;
      if (/^\s*ab/.test(t)) passt = summe >= z[0];
      else if (/unter/.test(t)) passt = summe < z[0];
      else if (z.length === 2) passt = summe >= z[0] && summe <= z[1];
      r.classList.toggle("ampel-aktiv", alleGeprueft && passt);
    });
  }
})();
