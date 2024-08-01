import { getCollection } from 'astro:content';

export async function getBlogCollection(withDrafts = false) {
    const blogPosts = (await getCollection('blog')).filter((blog) => withDrafts || !blog.data.draft);
    return blogPosts;
}

export async function getProjectsCollection() {
    const projects = await getCollection('projects');
    return projects;
}
