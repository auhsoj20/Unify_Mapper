const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 3000;

http.createServer((req, res) => {
    if (req.method === 'GET') {
        let filePath = req.url === '/' ? '/index.html' : req.url;
        let extname = path.extname(filePath);
        let contentType = 'text/html';
        
        switch (extname) {
            case '.js': contentType = 'text/javascript'; break;
            case '.json': contentType = 'application/json'; break;
            case '.css': contentType = 'text/css'; break;
        }
        
        fs.readFile(path.join(__dirname, filePath), (error, content) => {
            if (error) {
                res.writeHead(404);
                res.end('Not found');
            } else {
                res.writeHead(200, { 'Content-Type': contentType });
                res.end(content);
            }
        });
    } else if (req.url === '/update-db') {
        // Handle Preflight OPTIONS
        if (req.method === 'OPTIONS') {
            res.writeHead(204, {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'OPTIONS, POST',
                'Access-Control-Allow-Headers': 'Content-Type'
            });
            res.end();
            return;
        }

        if (req.method === 'POST') {
            let body = '';
            req.on('data', chunk => { body += chunk; });
            req.on('end', () => {
                fs.writeFile(path.join(__dirname, 'unifi-products.js'), body, (err) => {
                    if(err) {
                        res.writeHead(500, { 'Access-Control-Allow-Origin': '*' });
                        res.end('Error internally saving DB');
                    } else {
                        res.writeHead(200, { 'Access-Control-Allow-Origin': '*' });
                        res.end('OK');
                    }
                });
            });
        }
    }
}).listen(PORT, () => {
    console.log(`\n======================================================`);
    console.log(`🚀 UniFi Setup Planner läuft!`);
    console.log(`👉 Öffne in deinem Browser: http://localhost:${PORT}`);
    console.log(`======================================================\n`);
    console.log(`Wenn du in der App auf "Datenpaket aktualisieren" klickst,`);
    console.log(`wird die Datenbank (unifi-products.js) ab sofort komplett`);
    console.log(`lautlos im Hintergrund durch diesen Server überschrieben.\n`);
});
