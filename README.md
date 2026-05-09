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

Der Planer führt schrittweise durch sechs Abschnitte:

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

Der Projektstand wird automatisch im Browser (LocalStorage) gespeichert. Über den Reset-Button im Header kann das Projekt komplett zurückgesetzt werden.
Projekte können zusätzlich als `.json`-Datei exportiert und wieder importiert werden.

## Projektstruktur

| Datei | Zweck |
|---|---|
| [index.html](index.html) | Komplettes Frontend (HTML + Inline-JS) |
| [unifi-products.js](unifi-products.js) | Produkt- und Preisdatenbank (`window.UNIFI_DATA`) |
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
