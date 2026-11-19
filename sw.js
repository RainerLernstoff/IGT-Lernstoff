// Offline-Speicher (Service Worker) der App „IGT: Lernstoff“.
// Wird von werkzeuge\baue-inhalte.ps1 erzeugt. NICHT von Hand ändern.
// Beim ersten Öffnen speichert das Handy alle Dateien. Danach geht die App auch ohne Internet.
const VERSION = "lernstoff-74622094e9";
const DATEIEN = [
  "./",
  "app.js",
  "ausfuellen.js",
  "index.html",
  "inhalte.js",
  "inhalte/ait/jg1/01-leitungsarten/arbeitsblatt.html",
  "inhalte/ait/jg1/01-leitungsarten/bilder/gastherme_aufgabe.png",
  "inhalte/ait/jg1/01-leitungsarten/bilder/leitungen_bad_aufgabe.png",
  "inhalte/ait/jg1/01-leitungsarten/selbstcheck.html",
  "inhalte/ait/jg1/02-laengenberechnung/arbeitsblatt.html",
  "inhalte/ait/jg1/02-laengenberechnung/bilder/etage_aufgabe.png",
  "inhalte/ait/jg1/02-laengenberechnung/bilder/hoehen_aufgabe.png",
  "inhalte/ait/jg1/02-laengenberechnung/bilder/rohr_umfang_aufgabe.png",
  "inhalte/ait/jg1/02-laengenberechnung/bilder/steigleitung_aufgabe.png",
  "inhalte/ait/jg1/02-laengenberechnung/bilder/strecke1_aufgabe.png",
  "inhalte/ait/jg1/02-laengenberechnung/bilder/strecke2_aufgabe.png",
  "inhalte/ait/jg3/waermepumpe/bilder/cop_vorlauf_aufgabe.png",
  "inhalte/ait/jg3/waermepumpe/bilder/energiefluss_aufgabe.png",
  "inhalte/ait/jg3/waermepumpe/bilder/kaeltekreislauf_aufgabe.png",
  "inhalte/ait/jg3/waermepumpe/bilder/waermequellen_aufgabe.png",
  "inhalte/ait/jg3/waermepumpe/blatt-1.html",
  "inhalte/ait/jg3/waermepumpe/blatt-2.html",
  "inhalte/ait/jg3/waermepumpe/blatt-3.html",
  "inhalte/ait/jg3/waermepumpe/blatt-4.html",
  "inhalte/ait/jg3/waermepumpe/lernplakat.html",
  "inhalte/ait/jg3/waermepumpe/selbstcheck.html",
  "manifest.json",
  "schriften/atkinson-400.woff2",
  "schriften/atkinson-700.woff2",
  "schriften/OFL.txt",
  "style.css",
  "symbole/symbol-180.png",
  "symbole/symbol-192.png",
  "symbole/symbol-512.png",
  "thema.js"
];

self.addEventListener("install", function (e) {
  e.waitUntil(caches.open(VERSION).then(function (c) { return c.addAll(DATEIEN); }).then(function () { return self.skipWaiting(); }));
});

// Alte Versionen wegräumen
self.addEventListener("activate", function (e) {
  e.waitUntil(caches.keys().then(function (namen) {
    return Promise.all(namen.filter(function (n) { return n !== VERSION; }).map(function (n) { return caches.delete(n); }));
  }).then(function () { return self.clients.claim(); }));
});

// Zuerst im Speicher am Handy nachschauen, sonst aus dem Internet holen
self.addEventListener("fetch", function (e) {
  if (e.request.method !== "GET") return;
  e.respondWith(caches.match(e.request, { ignoreSearch: true }).then(function (r) { return r || fetch(e.request); }));
});