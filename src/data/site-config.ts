import { personalData } from './personal';

export type Image = {
    src: string;
    alt?: string;
    caption?: string;
};

export type Link = {
    text: string;
    href: string;
};

export type Hero = {
    title?: string;
    text?: string;
    image?: Image;
    actions?: Link[];
};

export type Subscribe = {
    title?: string;
    text?: string;
    formUrl: string;
};

export type SiteConfig = {
    logo?: Image;
    title: string;
    subtitle?: string;
    description: string;
    image?: Image;
    headerNavLinks?: Link[];
    footerNavLinks?: Link[];
    socialLinks?: Link[];
    hero?: Hero;
    subscribe?: Subscribe;
    postsPerPage?: number;
    projectsPerPage?: number;
};

const siteConfig: SiteConfig = {
    title: "dantas' place",
    subtitle: 'my portfolio and blog',
    description: "Gustavo Dantas' portfolio and some writings",
    image: {
        src: '/web-preview.png',
        alt: ''
    },
    headerNavLinks: [
        {
            text: 'home',
            href: '/'
        },
        {
            text: 'projects',
            href: '/projects'
        },
        {
            text: 'blog',
            href: '/blog'
        },
        {
            text: 'tags',
            href: '/tags'
        },
        {
            text: 'download my cv',
            href: '/cv.pdf'
        }
    ],
    footerNavLinks: [
        {
            text: 'about',
            href: '/about'
        },
        {
            text: 'contact',
            href: '/contact'
        },
        {
            text: 'terms',
            href: '/terms'
        }
    ],
    socialLinks: personalData.socialLinks,
    hero: {
        title: 'hey! nice seeing you here.',
        text: "I'm Gustavo, welcome to my website!<br/><br/>This is where I showcase some personal projects and primarily share curated or raw thoughts and ideas.<br/><br/>I love writing about anything and I often do it in private. But, I found out that sharing knowledge and personal experiences can be powerful because it ultimately allows you to connect your thoughts and ideas with people.",
        // image: {
        //     src: '/hero.jpeg',
        //     alt: 'A person sitting at a desk in front of a computer'
        // },
        actions: [
            {
                text: 'get in touch',
                href: '/contact'
            },
            {
                text: 'star this repo on github',
                href: 'https://github.com/dantas15/me'
            }
        ]
    },
    // subscribe: {
    //     title: 'subscribe to my newsletter newsletter',
    //     text: 'one update per week. all the latest posts directly in your inbox.',
    //     formUrl: '#'
    // },
    postsPerPage: 10,
    projectsPerPage: 4
};

export { siteConfig };
