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
  const html = await fetchPage('https://techspecs.ui.com/unifi/switching');
  const match = html.match(/<script id="__NEXT_DATA__" type="application\/json">([\s\S]*?)<\/script>/);
  if (!match) return;
  const nextData = JSON.parse(match[1]);
  
  const subCats = nextData.props?.pageProps?.subCategoriesWithProducts || [];
  subCats.forEach(sc => {
     sc.products.forEach(p => {
         if(p.slug.includes('usw-16-poe') || p.slug.includes('usw-pro-max')) {
             console.log(p.slug, p.tags.map(t => t.name));
         }
     });
  });
}

run();
