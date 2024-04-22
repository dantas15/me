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
    subtitle: 'my projects and ideias',
    description: "Gustavo Dantas' portfolio and some writings",
    image: {
        src: '/web-preview.jpg',
        alt: 'Preview of my website displaying dark and light mode'
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
    socialLinks: [
        {
            text: 'github',
            href: 'https://github.com/dantas15'
        },
        {
            text: 'twitter/X',
            href: 'https://twitter.com/gusdantas'
        }
    ],
    hero: {
        title: 'hey! nice seeing you here.',
        text: 'I\'m Gustavo Dantas, a software developer based in Brazil 🇧🇷. B.Sc Computer Science student at <a target="blank" href="https://ufla.br">UFLA</a>. I\'m primarily driven into philosophy and professionally I focus on Software Development with a huge interest in diving into Software Architecture. <br />Anyways, I really like to think and write about what I\'m thinking so this digital place is where I share my thoughts online.',
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
                href: 'https://github.com/dantas15/me.git'
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

export default siteConfig;
