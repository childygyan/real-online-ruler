// Automated IndexNow Submission Script
// Submits all canonical URLs to Bing / Yandex / IndexNow API.
// Key file must be live at https://realonlineruler.online/<key>.txt before
// submitting (IndexNow validates keyLocation on first use).

const INDEXNOW_KEY = '518559bc872b0b2805d05ed0aa8df9ca';
const HOST = 'realonlineruler.online';
const KEY_LOCATION = `https://${HOST}/${INDEXNOW_KEY}.txt`;

async function submitIndexNow() {
  console.log(`Submitting URLs to IndexNow for host: ${HOST}...`);

  const fs = await import('node:fs');
  const path = await import('node:path');
  let urlList = [];

  // Follow sitemap-index.xml -> individual sitemap files in dist/
  const indexPath = 'dist/sitemap-index.xml';
  if (fs.existsSync(indexPath)) {
    const indexContent = fs.readFileSync(indexPath, 'utf8');
    const sitemapLocs = [...indexContent.matchAll(/<loc>(.*?)<\/loc>/g)].map(m => m[1]);
    for (const loc of sitemapLocs) {
      const fileName = loc.split('/').pop();
      const filePath = path.join('dist', fileName);
      if (fs.existsSync(filePath)) {
        const content = fs.readFileSync(filePath, 'utf8');
        for (const m of content.matchAll(/<loc>(.*?)<\/loc>/g)) {
          urlList.push(m[1]);
        }
      } else {
        console.log(`Sitemap file not found locally: ${filePath} (from ${loc})`);
      }
    }
  } else if (fs.existsSync('dist/sitemap.xml')) {
    const sitemapContent = fs.readFileSync('dist/sitemap.xml', 'utf8');
    for (const m of sitemapContent.matchAll(/<loc>(.*?)<\/loc>/g)) {
      urlList.push(m[1]);
    }
  } else {
    urlList = [
      `https://${HOST}/`,
      `https://${HOST}/how-to/`,
    ];
  }

  // De-dupe
  urlList = [...new Set(urlList)];
  console.log(`Prepared ${urlList.length} URLs for IndexNow submission.`);

  // Submit in batches of 10,000 (IndexNow API limit is 10k per request)
  for (let i = 0; i < urlList.length; i += 10000) {
    const batch = urlList.slice(i, i + 10000);
    const payload = {
      host: HOST,
      key: INDEXNOW_KEY,
      keyLocation: KEY_LOCATION,
      urlList: batch,
    };

    try {
      const res = await fetch('https://api.indexnow.org/indexnow', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json; charset=utf-8' },
        body: JSON.stringify(payload),
      });

      console.log(`IndexNow Response Status: ${res.status} ${res.statusText}`);
      if (res.status === 200 || res.status === 202) {
        console.log(`✓ Batch ${i / 10000 + 1} submitted successfully!`);
      } else {
        const text = await res.text();
        console.log('Response body:', text);
      }
    } catch (err) {
      console.error('Error submitting to IndexNow:', err);
    }
  }
}

submitIndexNow();
