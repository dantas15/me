import { webUrl } from 'app/config';

export default function robots() {
  return {
    rules: [
      {
        userAgent: '*',
      },
    ],
    sitemap: `${webUrl}/sitemap.xml`,
    host: webUrl,
  };
}
