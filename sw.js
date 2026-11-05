// Offline-Speicher (Service Worker) der App „IGT: Lernstoff“.
// Wird von werkzeuge\baue-inhalte.ps1 erzeugt. NICHT von Hand ändern.
// Beim ersten Öffnen speichert das Handy alle Dateien. Danach geht die App auch ohne Internet.
const VERSION = "lernstoff-4b2e21da2f";
const DATEIEN = [
  "./",
  "app.js",
  "index.html",
  "inhalte.js",
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