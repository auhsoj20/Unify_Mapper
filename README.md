# UniFi Setup Planner

Ein Web-Tool zur Planung kompletter UniFi-Installationen: Etagen, Räume, APs mit Signal-Heatmap, Switches & PoE, VLANs, Backup-Internet, Rack-Ansicht und automatische Stückliste (BOM).

## Online-Version (GitHub Pages)

Die App läuft komplett im Browser und wird über GitHub Pages bereitgestellt:

`https://auhsoj20.github.io/Unify_Mapper/`

### Pages aktivieren

1. Im Repo unter **Settings → Pages** als Source **„Deploy from a branch"** wählen.
2. Branch: `main`, Ordner: `/ (root)` — speichern.
3. Nach kurzer Zeit ist die App unter der oben genannten URL erreichbar.

## Bedienung

Über das **Projekt-Menü** (☰-Button im Header, auf Desktop und Handy) sind
jederzeit erreichbar: Projekt speichern/laden (`.json`), Share-Link kopieren,
Beispielprojekt laden, Projekt zurücksetzen, das Farbschema
(**Automatisch / Hell / Dunkel**, wird im Browser gemerkt) sowie eine
**Hilfe-Übersicht** mit Tastenkürzeln und Touch-Gesten.

Der Planer führt schrittweise durch sechs Abschnitte — die **Schritt-Anzeige
ist anklickbar**: zurückliegende Schritte sind direkt erreichbar, vorwärts wird
gesprungen, sofern die bisherigen Eingaben gültig sind:

1. **Internetanschluss** — Anschlussart, Bandbreite, Anforderungen.
2. **Raumplanung & Etagen** — Etagen anlegen, Räume zeichnen, APs und Kameras platzieren. Über den Heatmap-Button lässt sich die WLAN-Abdeckung visualisieren.
3. **Switch & PoE Planung** — automatische Switch-Empfehlungen anhand der platzierten Geräte und Port-/Watt-Bedarfe.
4. **Erweiterte Funktionen** — VLANs, Gast-WLAN, Sicherheitsoptionen.
5. **Backup- / Zweit-Internet** — Failover-Konfiguration.
6. **Ergebnis & Zusammenfassung** — Stückliste mit Preisen, druckfähig und exportierbar.

### Raumplaner — Funktionen im Überblick

- **Etagen-Verwaltung**: Etagen umbenennen (Doppelklick auf den Tab), per ⋯-Menü
  duplizieren, verschieben oder löschen.
- **Raum-Werkzeuge**: Räume duplizieren (mit Versatz), Fläche in m² wird
  automatisch im Raum und im Inspektor angezeigt. Kantenlängen lassen sich per
  Doppelklick auf das Längenlabel exakt eingeben.
- **Hintergrund-Grundriss**: Pro Etage kann ein Bild (z. B. ein gescannter
  Grundriss) als Hintergrund hinterlegt werden — Deckkraft und Skalierung sind
  einstellbar.
- **Vollbild & Auto-Zoom**: Toolbar-Knöpfe für „Auf Räume zoomen" und
  Vollbildmodus (auf dem Handy verbergen sich Buttons hinter Icons).
- **Undo / Redo**: Letzte Schritte rückgängig machen oder wiederherstellen
  (`Strg+Z` / `Strg+Umschalt+Z`).
- **Touch-optimiert**: Pinch-Zoom, ein-Finger-Pan auf leerer Fläche,
  Lösch-Buttons an Ecken statt Rechtsklick. Tipp auf leere Fläche hebt die
  Auswahl auf.
- **Tastatur**: `Entf` löscht den ausgewählten Raum, `Esc` verlässt Vollbild
  oder hebt die Auswahl auf.

Über den Button **„Rack-Ansicht"** lassen sich die geplanten Geräte in ein 19"-Rack einsortieren und virtuell verkabeln.

### Mobil-Ansicht (Touchscreen)

Auf Smartphones aktiviert sich automatisch ein **dedizierter Mobil-Modus**
(erkannt über Bildschirmbreite ≤ 768 px + Touch-Bedienung). Über den
**Smartphone-Button** im Header lässt er sich manuell umschalten
(Automatisch → An → Aus); die Wahl wird im Browser gemerkt.

- **Schlanke Navigation**: kompakter Fortschritts-Indikator „Schritt N/6 ·
  Label" mit Balken statt der sechs Stepper-Knoten; volle-Breite
  Zurück/Weiter-Leiste am unteren Rand (mit Safe-Area-Abstand).
- **Touch-Drag**: größere Trefferflächen für Raum-Ecken, Wände, APs und
  Kameras sowie kurzes Haptik-Feedback beim Ablegen.
- **Lesbare Tabellen**: breite Tabellen (Stückliste, Switch/PoE, Patchplan,
  VLANs, Firewall) werden als gestapelte Karten dargestellt statt horizontal
  zu scrollen.
- **Schnellnavigation**: Tipp auf den Fortschritts-Indikator öffnet eine
  Schritt-Liste zum direkten Springen; die Export-Buttons in Schritt 6 werden
  als daumenfreundliches 2-Spalten-Raster angezeigt.
- **Projekt-Menü**: Speichern, Laden, Share-Link, Demo, Reset und Farbschema
  sind über den ☰-Button im Header auch am Handy erreichbar.

Der Mobil-Modus ist eine reine Zusatzschicht: Alle Stile liegen in
[mobile.css](mobile.css) unter `body.mobile-mode`, die Desktop-Ansicht bleibt
unverändert.

Der Projektstand wird automatisch im Browser (LocalStorage) gespeichert. Über das Projekt-Menü im Header kann das Projekt komplett zurückgesetzt werden.
Projekte können zusätzlich als `.json`-Datei exportiert und wieder importiert werden (Projekt-Menü oder Schritt 6).
Im Schritt **Ergebnis & Zusammenfassung** lässt sich die Stückliste als **PDF** (clientseitig via jsPDF, mit Projekt-Eckdaten, BOM-Tabelle und Stromkosten) oder als **CSV** herunterladen; alternativ druckt der **Drucken**-Button die vollständige Zusammenfassung inklusive Topologie. Ist die PDF-Bibliothek nicht verfügbar (Offline/CDN blockiert), wird automatisch der Druckdialog geöffnet.

## Projektstruktur

| Datei | Zweck |
|---|---|
| [index.html](index.html) | Komplettes Frontend (HTML + Inline-JS) |
| [unifi-products.js](unifi-products.js) | Produkt- und Preisdatenbank (`window.UNIFI_DATA`) |
| [mobile.css](mobile.css) | Stile des Mobil-Modus (gescoped unter `body.mobile-mode`) |
| [src/tailwind.css](src/tailwind.css) | Tailwind-Source (nur `@tailwind`-Direktiven) |
| [tailwind.config.js](tailwind.config.js) | Tailwind-Konfiguration (Theme, Safelist) |
| [dist/tailwind.css](dist/tailwind.css) | Gebaute CSS — wird von index.html geladen |
| [.nojekyll](.nojekyll) | Verhindert Jekyll-Verarbeitung durch GitHub Pages |

## CSS bauen (lokal)

Tailwind wird nicht mehr per CDN geladen, sondern lokal gebaut — kein FOUC, ~35 % kleinere CSS-Datei und keine externe Abhängigkeit zur Laufzeit.

```bash
npm install        # einmalig
npm run build:css  # baut dist/tailwind.css minifiziert
npm run watch:css  # rebuildet automatisch bei Änderungen
```

Wer `index.html`, `tailwind.config.js` oder `src/tailwind.css` ändert, muss anschließend `npm run build:css` aufrufen und die aktualisierte `dist/tailwind.css` mitcommiten. Ein GitHub-Actions-Workflow ([.github/workflows/build-css.yml](.github/workflows/build-css.yml)) prüft bei jedem Pull Request, dass die committete CSS zum Source passt.

## Voraussetzungen

- Aktueller Browser (Chrome, Edge, Firefox).
- Für CSS-Änderungen: Node.js 22+ und npm.
