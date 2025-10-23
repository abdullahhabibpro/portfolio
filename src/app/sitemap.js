// app/sitemap.js
export default function sitemap() {
  const baseUrl = "https://ahabib.site";

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1.0,
    },
  ];
}
