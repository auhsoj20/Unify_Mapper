@echo off
setlocal
chcp 65001 >nul
title UniFi Setup Planner

cd /d "%~dp0"

where node >nul 2>nul
if errorlevel 1 (
    echo [FEHLER] Node.js wurde nicht gefunden.
    echo Bitte installiere Node.js von https://nodejs.org und starte die Datei erneut.
    echo.
    pause
    exit /b 1
)

echo Starte UniFi Setup Planner...
start "" http://localhost:3000
node server.js

echo.
echo Server wurde beendet.
pause
