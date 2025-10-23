// app/robots.js
export default function robots() {
  const baseUrl = "https://ahabib.site";

  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
