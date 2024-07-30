import { getCollection } from 'astro:content';

export async function getBlogCollection() {
    const blogPosts = (await getCollection('blog')).filter((blog) => !blog.data.draft);
    return blogPosts;
}

export async function getProjectsCollection() {
    const projects = await getCollection('projects');
    return projects;
}
