const https = require('https');

function fetchPage(url) {
  return new Promise((resolve, reject) => {
    https.get(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'
      }
    }, (res) => {
      let data = '';
      res.on('data', (chunk) => { data += chunk; });
      res.on('end', () => { resolve(data); });
    }).on('error', (err) => { reject(err); });
  });
}

async function run() {
  const html = await fetchPage('https://techspecs.ui.com/unifi/wifi');
  const match = html.match(/<script id="__NEXT_DATA__" type="application\/json">([\s\S]*?)<\/script>/);
  if (!match) {
    console.log("No NEXT DATA found");
    return;
  }
  const nextData = JSON.parse(match[1]);
  // fs write nextData to check
  const fs = require('fs');
  fs.writeFileSync('dev_ui_wifi.json', JSON.stringify(nextData, null, 2));
  console.log("Written dev_ui_wifi.json");
}

run();
