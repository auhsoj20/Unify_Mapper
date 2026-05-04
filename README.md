# UniFi Setup Planner

Ein lokales Web-Tool zur Planung kompletter UniFi-Installationen: Etagen, Räume, APs mit Signal-Heatmap, Switches & PoE, VLANs, Backup-Internet, Rack-Ansicht und automatische Stückliste (BOM).

## Schnellstart

1. **Node.js** installieren (falls noch nicht vorhanden) — [nodejs.org](https://nodejs.org).
2. Doppelklick auf [Start Planner.bat](Start%20Planner.bat).
   Das Skript startet den lokalen Server und öffnet automatisch den Browser unter `http://localhost:3000`.
3. Zum Beenden das Konsolenfenster schließen.

Alternativ manuell starten:

```bash
node server.js
```

Anschließend `http://localhost:3000` im Browser öffnen.

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

## Datenbank aktualisieren

Die Produktdatenbank liegt in [unifi-products.js](unifi-products.js). Über den Button **„Datenpaket aktualisieren"** in der App wird sie via `POST /update-db` durch den lokalen `server.js` neu auf die Festplatte geschrieben.

## Projektstruktur

| Datei | Zweck |
|---|---|
| [index.html](index.html) | Komplettes Frontend (HTML/Tailwind/JS) |
| [unifi-products.js](unifi-products.js) | Produkt- und Preisdatenbank (`window.UNIFI_DATA`) |
| [server.js](server.js) | Node.js Static-Server + Update-Endpoint |
| [Start Planner.bat](Start%20Planner.bat) | Windows-Starter |

## Online-Version (GitHub Pages)

Eine statische Version dieses Tools kann direkt aus diesem Repository über GitHub Pages bereitgestellt werden:

1. Im Repo unter **Settings → Pages** als Source **„Deploy from a branch"** wählen.
2. Branch: `main`, Ordner: `/ (root)` — speichern.
3. Nach kurzer Zeit ist die App unter `https://<benutzername>.github.io/Unify_Mapper/` erreichbar.

Hinweis: Die Funktion **„Datenpaket aktualisieren"** schreibt die Datenbank über `POST /update-db` auf den lokalen `server.js` zurück — dieser Endpunkt existiert in der GitHub-Pages-Version nicht und schlägt dort erwartungsgemäß fehl. Für DB-Updates die lokale Variante verwenden.

## Voraussetzungen

- Node.js (eine beliebige aktuelle LTS-Version — es werden nur eingebaute Module genutzt, keine Abhängigkeiten).
- Aktueller Browser (Chrome, Edge, Firefox).
