// =====================================================================
//  INHALTSLISTE der App „IGT: Lernstoff“
//  Hier steht, welche Fächer, Lehrjahre und Themen die App zeigt.
//  Neues Thema = neuer Eintrag. Am Programm (app.js) ändert sich nichts.
//
//  Aufbau:  Fach → Lehrjahre → Themen → Teile (Blätter, Selbstcheck …)
//  Ein „Teil“ hat:
//    name   – steht groß auf dem Knopf
//    info   – steht klein darunter
//    datei  – welche Seite sich öffnet (Pfad ab dem Ordner app\)
//
//  WICHTIG: Hier kommen nur Schüler-Seiten hinein, NIE Lösungsblätter.
// =====================================================================

const INHALTE = {
  faecher: [
    {
      id: "ait",
      name: "AIT",
      info: "Angewandte Installationstechnik",
      lehrjahre: [
        {
          id: "jg1",
          name: "1. Lehrjahr",
          themen: [
            {
              id: "01-leitungsarten",
              name: "01 Leitungsarten und Kennzeichnung",
              info: "Arbeitsblatt, Selbstcheck",
              teile: [
                { name: "Arbeitsblatt",  info: "Infokästen und Aufgaben zum Ausfüllen", datei: "inhalte/ait/jg1/01-leitungsarten/arbeitsblatt.html" },
                { name: "✓ Selbstcheck", info: "8 Fragen, ca. 5 Minuten", datei: "inhalte/ait/jg1/01-leitungsarten/selbstcheck.html#01" }
              ]
            },
            {
              id: "02-laengenberechnung",
              name: "02 Längenberechnung",
              info: "Arbeitsblatt, Selbstcheck",
              teile: [
                { name: "Arbeitsblatt", info: "Infokästen und Aufgaben zum Ausfüllen", datei: "inhalte/ait/jg1/02-laengenberechnung/arbeitsblatt.html" },
                { name: "✓ Selbstcheck", info: "8 Fragen, ca. 5 Minuten", datei: "inhalte/ait/jg1/02-laengenberechnung/selbstcheck.html#02" }
              ]
            }
          ]
        },
        {
          id: "jg3",
          name: "3. Lehrjahr",
          themen: [
            {
              id: "waermepumpe",
              name: "Wärmepumpe",
              info: "4 Blätter, Lernplakat, Selbstcheck",
              teile: [
                { name: "1 So funktioniert sie",      info: "Arbeitsblatt zum Ausfüllen", datei: "inhalte/ait/jg3/waermepumpe/blatt-1.html" },
                { name: "2 Woher kommt die Wärme?",   info: "Arbeitsblatt zum Ausfüllen", datei: "inhalte/ait/jg3/waermepumpe/blatt-2.html" },
                { name: "3 Wie sparsam ist sie?",     info: "Arbeitsblatt zum Ausfüllen", datei: "inhalte/ait/jg3/waermepumpe/blatt-3.html" },
                { name: "4 Auf der Baustelle beraten", info: "Arbeitsblatt zum Ausfüllen", datei: "inhalte/ait/jg3/waermepumpe/blatt-4.html" },
                { name: "Lernplakat",                 info: "Gruppenarbeit auf A3", datei: "inhalte/ait/jg3/waermepumpe/lernplakat.html" },
                { name: "✓ Selbstcheck",              info: "24 Fragen, ca. 15 Minuten", datei: "inhalte/ait/jg3/waermepumpe/selbstcheck.html" }
              ]
            }
          ]
        }
      ]
    }
  ]
};
