import { getBlogPosts } from 'app/db/blog';
import { webUrl } from 'app/config';

export default async function sitemap() {
  let blogs = getBlogPosts().map((post) => ({
    url: `${webUrl}/blog/${post.slug}`,
    lastModified: post.metadata.lastPublishedAt ?? post.metadata.createdAt,
  }));

  let routes = ['', '/blog', '/guestbook', '/work'].map((route) => ({
    url: `${webUrl}${route}`,
    lastModified: new Date().toISOString().split('T')[0],
  }));

  return [...routes, ...blogs];
}
