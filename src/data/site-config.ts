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

type WorkExperience = {
    role: string;
    description: string;
    location: string;
    startedAt: string;
    finishedAt: string;
};
type Education = {
    title: string;
    description: string;
    startedAt: string;
    finishedAt: string;
};
type Language = { language: string; level: string };
type Skill = { section: string; tags: string[] };
type PersonalData = {
    name: string;
    role: string;
    contacts: Link[];
    socialLinks: Link[];
    workExperience: WorkExperience[];
    education: Education[];
    languages: Language[];
    skills: Skill[];
};

const personalData: PersonalData = {
    name: 'Gustavo Dantas',
    role: 'Software developer',
    contacts: [
        {
            text: 'All My Links',
            href: 'https://bento.me/dantas'
        },
        {
            text: 'e-mail',
            href: 'gusdantas15@gmail.com'
        }
    ],
    socialLinks: [
        {
            text: 'github',
            href: 'https://github.com/dantas15'
        },
        {
            text: 'linkedin',
            href: 'https://www.linkedin.com/in/dantas15/'
        },
        {
            text: 'twitter/X',
            href: 'https://twitter.com/gusdantas'
        }
    ],
    workExperience: [
        {
            role: 'Quality Manager',
            description:
                "I continued what captivated me from the previous position, working on more automated and optimized ways to improve the quality of the company's software, as well as reinforcing the internal culture of code review and internal documentation. Among the ways to improve quality, I worked on bringing CI/CD tools into the context of our applications, mainly involving GitHub Actions and Docker. Additionally, I also focus on content for future members, the biggest example being the refactoring of Comp Júnior's public digital library, Athena, where I played a fundamental role both operationally and in content for the Infrastructure track.",
            location: 'Lavras, Minas Gerais, Brazil',
            startedAt: '2024-01',
            finishedAt: '2024-06'
        },
        {
            role: 'Project Director',
            description:
                'I was mainly responsible for the strategic planning of the projects sector, identifying the feasibility of new projects and bringing new technologies into Comp Júnior through training and documentation. I structured a technical documentation and internal management platform for the projects sector. Additionally, I organized the squads for project development while reinforcing the quality of deliveries, mainly through Code Review. I was also responsible for ensuring the end-to-end functionality of broadcasts and the website for CompWeek 2023-2, a 100% online and free IT event organized entirely by Comp Júnior.',
            location: 'Lavras, Minas Gerais, Brazil',
            startedAt: '2023-08',
            finishedAt: '2023-12'
        },
        {
            role: 'Full Stack Developer',
            description: 'I worked as a full-stack developer, contributing to various aspects of project development.',
            location: 'Lavras, Minas Gerais, Brazil',
            startedAt: '2023-07',
            finishedAt: '2023-08'
        },
        {
            role: 'IT Technician',
            description:
                'I was responsible for structuring the migration of a legacy system in Delphi to the web. I played a crucial role in selecting technologies for the web system, especially on the front-end. I worked with TypeScript, React.js, MantineUI as a component library, React Context, Zod for validation, and TanStack Query for API requests, mainly the internal PHP API. It was my first practical experience after completing my technical course, and I felt that I was able to apply many theoretical concepts from there, such as design patterns, database modeling, state management with React Context, and web development in general.',
            location: 'Amparo, São Paulo, Brazil',
            startedAt: '2022-01',
            finishedAt: '2022-12'
        }
    ],
    education: [
        {
            title: "Bachelor's Degree in Computer Science",
            description: 'Studied various topics including software development and design patterns.',
            startedAt: '2022-10',
            finishedAt: '2026-12'
        },
        {
            title: 'Technical Course in System Development',
            description: 'Studied software development, MySQL, and various other competencies.',
            startedAt: '2019-01',
            finishedAt: '2021-12'
        }
    ],
    languages: [
        {
            language: 'Portuguese',
            level: 'Native'
        },
        {
            language: 'English',
            level: 'Advanced'
        }
    ],
    skills: [
        {
            section: 'Software Development',
            tags: [
                'JavaScript',
                'Typescript',
                'React.js',
                'Node.js',
                'Docker',
                'Docker-compose',
                'Next.js',
                'API REST',
                'GraphQL',
                'Relay',
                'Koa.js',
                'Nest.js',
                'MongoDB',
                'Mongoose',
                'SQL',
                'PostgreSQL',
                'SQLite',
                'PHP',
                'Laravel',
                'HTML/CSS'
            ]
        },
        {
            section: 'Tools and platforms',
            tags: ['VSCode', 'Vim', 'Git', 'GitHub', 'Google Cloud Platform']
        },
        {
            section: 'interests',
            tags: ['Software architecture', 'Philosophy', 'Developer experience', 'DevOps']
        }
    ]
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

export { personalData, siteConfig };
