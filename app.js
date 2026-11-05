// =====================================================================
//  PROGRAMM der App „IGT: Lernstoff“
//  Liest die Inhaltsliste (inhalte.js) und baut daraus die Knöpfe.
//  Welche Seite gerade zu sehen ist, steht in der Adresse nach dem #:
//    #/                       → Fächer
//    #/ait                    → Lehrjahre von AIT
//    #/ait/jg3                → Themen im 3. Lehrjahr
//    #/ait/jg3/waermepumpe    → Blätter und Selbstcheck
// =====================================================================
(function () {
  "use strict";

  var haupt = document.getElementById("haupt");
  var titel = document.getElementById("titel");
  var zurueck = document.getElementById("zurueck");

  // Einen großen Knopf bauen (eigentlich ein Link, darum <a>)
  function knopf(name, info, ziel) {
    var a = document.createElement("a");
    a.className = "knopf";
    a.href = ziel;
    var gross = document.createElement("span");
    gross.className = "knopf-name";
    gross.textContent = name;
    a.appendChild(gross);
    if (info) {
      var klein = document.createElement("span");
      klein.className = "knopf-info";
      klein.textContent = info;
      a.appendChild(klein);
    }
    return a;
  }

  function suche(liste, id) {
    if (!liste || !id) return null;
    for (var i = 0; i < liste.length; i++) if (liste[i].id === id) return liste[i];
    return null;
  }

  function zeichnen() {
    // Adresse zerlegen: "#/ait/jg3" → ["ait", "jg3"]
    var teile = location.hash.replace(/^#\/?/, "").split("/").filter(Boolean);
    var fach = suche(INHALTE.faecher, teile[0]);
    var jahr = fach && suche(fach.lehrjahre, teile[1]);
    var thema = jahr && suche(jahr.themen, teile[2]);

    var ueberschrift, zurueckZiel, knoepfe = [];

    if (thema) {
      ueberschrift = thema.name;
      zurueckZiel = "#/" + fach.id + "/" + jahr.id;
      thema.teile.forEach(function (t) { knoepfe.push(knopf(t.name, t.info, t.datei)); });
    } else if (jahr) {
      ueberschrift = fach.name + " · " + jahr.name;
      zurueckZiel = "#/" + fach.id;
      jahr.themen.forEach(function (t) { knoepfe.push(knopf(t.name, t.info, "#/" + fach.id + "/" + jahr.id + "/" + t.id)); });
    } else if (fach) {
      ueberschrift = fach.name;
      zurueckZiel = "#/";
      fach.lehrjahre.forEach(function (j) { knoepfe.push(knopf(j.name, null, "#/" + fach.id + "/" + j.id)); });
    } else {
      ueberschrift = "IGT: Lernstoff";
      zurueckZiel = null;
      INHALTE.faecher.forEach(function (f) { knoepfe.push(knopf(f.name, f.info, "#/" + f.id)); });
    }

    // Auf der Startseite steht der Name im Logo-Stil: „IGT_“ klein, „Lernstoff“ groß
    if (zurueckZiel) {
      titel.textContent = ueberschrift;
    } else {
      titel.innerHTML = '<span class="logo-klein">IGT_</span>Lernstoff';
    }
    titel.classList.toggle("logo", !zurueckZiel);
    document.title = zurueckZiel ? ueberschrift + " – IGT: Lernstoff" : "IGT: Lernstoff";
    if (zurueckZiel) { zurueck.href = zurueckZiel; zurueck.hidden = false; } else { zurueck.hidden = true; }

    haupt.innerHTML = "";
    if (!zurueckZiel) {
      var hallo = document.createElement("p");
      hallo.className = "hinweis";
      hallo.textContent = "Wähle dein Fach.";
      haupt.appendChild(hallo);
    }
    var liste = document.createElement("nav");
    liste.className = "knopf-liste";
    knoepfe.forEach(function (k) { liste.appendChild(k); });
    haupt.appendChild(liste);
    window.scrollTo(0, 0);
  }

  window.addEventListener("hashchange", zeichnen);
  zeichnen();

  // Offline-Speicher einschalten (geht nur über http/https, nicht als Datei)
  if ("serviceWorker" in navigator && location.protocol !== "file:") {
    navigator.serviceWorker.register("sw.js").catch(function () { /* ohne Offline geht es auch */ });
  }
})();
