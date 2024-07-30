import rss from '@astrojs/rss';
import { siteConfig } from '../data/site-config.ts';
import { sortItemsByDateDesc } from '../utils/data-utils.ts';
import { getBlogCollection } from 'src/data/collections.ts';

export async function GET(context) {
    const posts = (await getBlogCollection()).sort(sortItemsByDateDesc);
    return rss({
        title: siteConfig.title,
        description: siteConfig.description,
        site: context.site,
        items: posts.map((item) => ({
            title: item.data.title,
            description: item.data.excerpt,
            link: `/blog/${item.slug}/`,
            pubDate: item.data.publishDate.setUTCHours(0)
        }))
    });
}
