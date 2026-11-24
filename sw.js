// Offline-Speicher (Service Worker) der App „IGT: Lernstoff“.
// Wird von werkzeuge\baue-inhalte.ps1 erzeugt. NICHT von Hand ändern.
// Beim ersten Öffnen speichert das Handy alle Dateien. Danach geht die App auch ohne Internet.
const VERSION = "lernstoff-fb533324bc";
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
  "inhalte/ait/jg1/02-laengenberechnung/selbstcheck.html",
  "inhalte/ait/jg1/03-rohrdurchmesser/arbeitsblatt.html",
  "inhalte/ait/jg1/03-rohrdurchmesser/bilder/konsole_aufgabe.png",
  "inhalte/ait/jg1/03-rohrdurchmesser/bilder/mitte_mitte_aufgabe.png",
  "inhalte/ait/jg1/03-rohrdurchmesser/bilder/pe_hd_aufgabe.png",
  "inhalte/ait/jg1/03-rohrdurchmesser/bilder/rohr_daemmung_aufgabe.png",
  "inhalte/ait/jg1/03-rohrdurchmesser/bilder/rohrbenennung_aufgabe.png",
  "inhalte/ait/jg1/03-rohrdurchmesser/bilder/rohrmasse_info_aufgabe.png",
  "inhalte/ait/jg1/03-rohrdurchmesser/bilder/schlitz_aufgabe.png",
  "inhalte/ait/jg1/03-rohrdurchmesser/selbstcheck.html",
  "inhalte/ait/jg1/04-rohrwerkstoffe/arbeitsblatt.html",
  "inhalte/ait/jg1/04-rohrwerkstoffe/bilder/misch_regel_aufgabe.png",
  "inhalte/ait/jg1/04-rohrwerkstoffe/selbstcheck.html",
  "inhalte/ait/jg1/05-meterriss-gefaelle/arbeitsblatt.html",
  "inhalte/ait/jg1/05-meterriss-gefaelle/bilder/decke_aufgabe.png",
  "inhalte/ait/jg1/05-meterriss-gefaelle/bilder/gefaelle_aufgabe.png",
  "inhalte/ait/jg1/05-meterriss-gefaelle/bilder/meterriss_bild_aufgabe.png",
  "inhalte/ait/jg1/05-meterriss-gefaelle/bilder/mr_wand3_aufgabe.png",
  "inhalte/ait/jg1/05-meterriss-gefaelle/bilder/mr_wand4_aufgabe.png",
  "inhalte/ait/jg1/05-meterriss-gefaelle/selbstcheck.html",
  "inhalte/ait/jg1/06-sinnbilder-hausanschluss/arbeitsblatt.html",
  "inhalte/ait/jg1/06-sinnbilder-hausanschluss/bilder/foto_druckminderer_aufgabe.png",
  "inhalte/ait/jg1/06-sinnbilder-hausanschluss/bilder/foto_kugelhahn_aufgabe.png",
  "inhalte/ait/jg1/06-sinnbilder-hausanschluss/bilder/foto_rueckflussverhinderer_aufgabe.png",
  "inhalte/ait/jg1/06-sinnbilder-hausanschluss/bilder/foto_schieber_aufgabe.png",
  "inhalte/ait/jg1/06-sinnbilder-hausanschluss/bilder/foto_schraegsitzventil_aufgabe.png",
  "inhalte/ait/jg1/06-sinnbilder-hausanschluss/bilder/foto_wasserzaehler_aufgabe.png",
  "inhalte/ait/jg1/06-sinnbilder-hausanschluss/bilder/hausanschluss_aufgabe.png",
  "inhalte/ait/jg1/06-sinnbilder-hausanschluss/bilder/hausanschluss_info_aufgabe.png",
  "inhalte/ait/jg1/06-sinnbilder-hausanschluss/bilder/sb_druckminderer_aufgabe.png",
  "inhalte/ait/jg1/06-sinnbilder-hausanschluss/bilder/sb_grundform_aufgabe.png",
  "inhalte/ait/jg1/06-sinnbilder-hausanschluss/bilder/sb_kugelhahn_aufgabe.png",
  "inhalte/ait/jg1/06-sinnbilder-hausanschluss/bilder/sb_pfeil_aufgabe.png",
  "inhalte/ait/jg1/06-sinnbilder-hausanschluss/bilder/sb_rueckfluss_aufgabe.png",
  "inhalte/ait/jg1/06-sinnbilder-hausanschluss/bilder/sb_schieber_aufgabe.png",
  "inhalte/ait/jg1/06-sinnbilder-hausanschluss/bilder/sb_schraegsitz_aufgabe.png",
  "inhalte/ait/jg1/06-sinnbilder-hausanschluss/bilder/sb_wasserzaehler_aufgabe.png",
  "inhalte/ait/jg1/06-sinnbilder-hausanschluss/selbstcheck.html",
  "inhalte/ait/jg1/07-zmass/arbeitsblatt.html",
  "inhalte/ait/jg1/07-zmass/bilder/ab10_aufgabe.png",
  "inhalte/ait/jg1/07-zmass/bilder/ab6_aufgabe.png",
  "inhalte/ait/jg1/07-zmass/bilder/ab9_aufgabe.png",
  "inhalte/ait/jg1/07-zmass/bilder/beispiel_leitung_aufgabe.png",
  "inhalte/ait/jg1/07-zmass/bilder/fittings_aufgabe.png",
  "inhalte/ait/jg1/07-zmass/bilder/zmass_prinzip_aufgabe.png",
  "inhalte/ait/jg1/07-zmass/bilder/zmass_t_aufgabe.png",
  "inhalte/ait/jg1/07-zmass/selbstcheck.html",
  "inhalte/ait/jg1/08-flaechen/arbeitsblatt.html",
  "inhalte/ait/jg1/08-flaechen/bilder/bad_aufgabe.png",
  "inhalte/ait/jg1/08-flaechen/bilder/einheiten_aufgabe.png",
  "inhalte/ait/jg1/08-flaechen/bilder/kreis_aufgabe.png",
  "inhalte/ait/jg1/08-flaechen/bilder/kreisring_aufgabe.png",
  "inhalte/ait/jg1/08-flaechen/bilder/lform_beispiel_aufgabe.png",
  "inhalte/ait/jg1/08-flaechen/bilder/rechteck_aufgabe.png",
  "inhalte/ait/jg1/08-flaechen/bilder/rohrmantel_aufgabe.png",
  "inhalte/ait/jg1/08-flaechen/bilder/technikraum_aufgabe.png",
  "inhalte/ait/jg1/08-flaechen/bilder/wand_bad_aufgabe.png",
  "inhalte/ait/jg1/08-flaechen/bilder/wand_beispiel_aufgabe.png",
  "inhalte/ait/jg1/08-flaechen/selbstcheck.html",
  "inhalte/ait/jg1/09-kunststoffe-pe/arbeitsblatt.html",
  "inhalte/ait/jg1/09-kunststoffe-pe/bilder/extruder_aufgabe.png",
  "inhalte/ait/jg1/09-kunststoffe-pe/bilder/kautschuk_aufgabe.png",
  "inhalte/ait/jg1/09-kunststoffe-pe/bilder/klemmfitting_aufgabe.png",
  "inhalte/ait/jg1/09-kunststoffe-pe/bilder/pe_rohr_aufgabe.png",
  "inhalte/ait/jg1/09-kunststoffe-pe/bilder/wc_sitz_aufgabe.png",
  "inhalte/ait/jg1/09-kunststoffe-pe/selbstcheck.html",
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