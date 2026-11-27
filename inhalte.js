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
            },
            {
              id: "03-rohrdurchmesser",
              name: "03 Rohrdurchmesser, Dämmung, Rohrabstände",
              info: "Arbeitsblatt, Selbstcheck",
              teile: [
                { name: "Arbeitsblatt", info: "Infokästen und Aufgaben zum Ausfüllen", datei: "inhalte/ait/jg1/03-rohrdurchmesser/arbeitsblatt.html" },
                { name: "✓ Selbstcheck", info: "8 Fragen, ca. 5 Minuten", datei: "inhalte/ait/jg1/03-rohrdurchmesser/selbstcheck.html#03" }
              ]
            },
            {
              id: "04-rohrwerkstoffe",
              name: "04 Rohrwerkstoffe",
              info: "Arbeitsblatt, Selbstcheck",
              teile: [
                { name: "Arbeitsblatt", info: "Infokästen und Aufgaben zum Ausfüllen", datei: "inhalte/ait/jg1/04-rohrwerkstoffe/arbeitsblatt.html" },
                { name: "✓ Selbstcheck", info: "8 Fragen, ca. 5 Minuten", datei: "inhalte/ait/jg1/04-rohrwerkstoffe/selbstcheck.html#04" }
              ]
            },
            {
              id: "05-meterriss-gefaelle",
              name: "05 Meterriss, Steigung und Gefälle",
              info: "Arbeitsblatt, Selbstcheck",
              teile: [
                { name: "Arbeitsblatt", info: "Infokästen und Aufgaben zum Ausfüllen", datei: "inhalte/ait/jg1/05-meterriss-gefaelle/arbeitsblatt.html" },
                { name: "✓ Selbstcheck", info: "8 Fragen, ca. 5 Minuten", datei: "inhalte/ait/jg1/05-meterriss-gefaelle/selbstcheck.html#05" }
              ]
            },
            {
              id: "06-sinnbilder-hausanschluss",
              name: "06 Sinnbilder, Hausanschluss",
              info: "Arbeitsblatt, Selbstcheck",
              teile: [
                { name: "Arbeitsblatt", info: "Infokästen und Aufgaben zum Ausfüllen", datei: "inhalte/ait/jg1/06-sinnbilder-hausanschluss/arbeitsblatt.html" },
                { name: "✓ Selbstcheck", info: "8 Fragen, ca. 5 Minuten", datei: "inhalte/ait/jg1/06-sinnbilder-hausanschluss/selbstcheck.html#06" }
              ]
            },
            {
              id: "07-zmass",
              name: "07 z-Maß, Materialauszug",
              info: "Arbeitsblatt, Selbstcheck",
              teile: [
                { name: "Arbeitsblatt", info: "Infokästen und Aufgaben zum Ausfüllen", datei: "inhalte/ait/jg1/07-zmass/arbeitsblatt.html" },
                { name: "✓ Selbstcheck", info: "8 Fragen, ca. 5 Minuten", datei: "inhalte/ait/jg1/07-zmass/selbstcheck.html#07" }
              ]
            },
            {
              id: "08-flaechen",
              name: "08 Flächen",
              info: "Arbeitsblatt, Selbstcheck",
              teile: [
                { name: "Arbeitsblatt", info: "Infokästen und Aufgaben zum Ausfüllen", datei: "inhalte/ait/jg1/08-flaechen/arbeitsblatt.html" },
                { name: "✓ Selbstcheck", info: "8 Fragen, ca. 5 Minuten", datei: "inhalte/ait/jg1/08-flaechen/selbstcheck.html#08" }
              ]
            },
            {
              id: "09-kunststoffe-pe",
              name: "09 Kunststoffe, PE",
              info: "Arbeitsblatt, Selbstcheck",
              teile: [
                { name: "Arbeitsblatt", info: "Infokästen und Aufgaben zum Ausfüllen", datei: "inhalte/ait/jg1/09-kunststoffe-pe/arbeitsblatt.html" },
                { name: "✓ Selbstcheck", info: "8 Fragen, ca. 5 Minuten", datei: "inhalte/ait/jg1/09-kunststoffe-pe/selbstcheck.html#09" }
              ]
            },
            {
              id: "10-volumen",
              name: "10 Volumen",
              info: "Arbeitsblatt, Selbstcheck",
              teile: [
                { name: "Arbeitsblatt", info: "Infokästen und Aufgaben zum Ausfüllen", datei: "inhalte/ait/jg1/10-volumen/arbeitsblatt.html" },
                { name: "✓ Selbstcheck", info: "8 Fragen, ca. 5 Minuten", datei: "inhalte/ait/jg1/10-volumen/selbstcheck.html#10" }
              ]
            },
            {
              id: "11-edelstahl",
              name: "11 Edelstahl",
              info: "Arbeitsblatt, Selbstcheck",
              teile: [
                { name: "Arbeitsblatt", info: "Infokästen und Aufgaben zum Ausfüllen", datei: "inhalte/ait/jg1/11-edelstahl/arbeitsblatt.html" },
                { name: "✓ Selbstcheck", info: "8 Fragen, ca. 5 Minuten", datei: "inhalte/ait/jg1/11-edelstahl/selbstcheck.html#11" }
              ]
            },
            {
              id: "12-kupfer",
              name: "12 Kupfer",
              info: "Arbeitsblatt, Selbstcheck",
              teile: [
                { name: "Arbeitsblatt", info: "Infokästen und Aufgaben zum Ausfüllen", datei: "inhalte/ait/jg1/12-kupfer/arbeitsblatt.html" },
                { name: "✓ Selbstcheck", info: "8 Fragen, ca. 5 Minuten", datei: "inhalte/ait/jg1/12-kupfer/selbstcheck.html#12" }
              ]
            },
            {
              id: "14-kupferlegierungen-armaturen",
              name: "14 Kupferlegierungen, Armaturen",
              info: "Arbeitsblatt, Selbstcheck",
              teile: [
                { name: "Arbeitsblatt", info: "Infokästen und Aufgaben zum Ausfüllen", datei: "inhalte/ait/jg1/14-kupferlegierungen-armaturen/arbeitsblatt.html" },
                { name: "✓ Selbstcheck", info: "8 Fragen, ca. 5 Minuten", datei: "inhalte/ait/jg1/14-kupferlegierungen-armaturen/selbstcheck.html#14" }
              ]
            },
            {
              id: "15-mehrschichtverbund-pp-abfluss",
              name: "15 Mehrschichtverbund, PP, Abfluss",
              info: "Arbeitsblatt, Selbstcheck",
              teile: [
                { name: "Arbeitsblatt", info: "Infokästen und Aufgaben zum Ausfüllen", datei: "inhalte/ait/jg1/15-mehrschichtverbund-pp-abfluss/arbeitsblatt.html" },
                { name: "✓ Selbstcheck", info: "8 Fragen, ca. 5 Minuten", datei: "inhalte/ait/jg1/15-mehrschichtverbund-pp-abfluss/selbstcheck.html#15" }
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
