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

Über den Button **„Rack-Ansicht"** lassen sich die geplanten Geräte in ein 19"-Rack einsortieren und virtuell verkabeln.

Der Projektstand wird automatisch im Browser (LocalStorage) gespeichert. Über den Reset-Button im Header kann das Projekt komplett zurückgesetzt werden.
Projekte können zusätzlich als `.json`-Datei exportiert und wieder importiert werden.

## Projektstruktur

| Datei | Zweck |
|---|---|
| [index.html](index.html) | Komplettes Frontend (HTML/Tailwind/JS) |
| [unifi-products.js](unifi-products.js) | Produkt- und Preisdatenbank (`window.UNIFI_DATA`) |
| [.nojekyll](.nojekyll) | Verhindert Jekyll-Verarbeitung durch GitHub Pages |

## Voraussetzungen

- Aktueller Browser (Chrome, Edge, Firefox).
