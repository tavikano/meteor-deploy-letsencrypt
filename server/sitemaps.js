sitemaps.add('/sitemap.xml', function() {
  let urls = [];

  urls.push({
    page: '/', changefreq: 'daily', priority: 1
  });
  return urls;
});
