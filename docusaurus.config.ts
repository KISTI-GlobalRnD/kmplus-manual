import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
    clientModules: ['./src/css/admonition-override.css'],
    title: 'KnowledgeMatrix Plus (KM+) Manual',
    tagline: '매뉴얼 문서',
    favicon: 'img/favicon.png',

    future: {
        v4: true,
    },

    url: 'https://kisti-globalrnd.github.io',
    baseUrl: '/kmplus-manual/',
    organizationName: 'KISTI-GlobalRnD',
    projectName: 'kmplus-manual',
    deploymentBranch: 'gh-pages',
    trailingSlash: false,
    onBrokenLinks: 'throw',

    i18n: {
        defaultLocale: 'ko',
        locales: ['ko'],
    },

    presets: [
        [
            'classic',
            {
                docs: {
                    sidebarPath: './sidebars.ts',
                    routeBasePath: '/',
                },
                blog: false,
                theme: {
                    customCss: './src/css/custom.css',
                },
            } satisfies Preset.Options,
        ],
    ],

    themes: [
        [
            require.resolve('@easyops-cn/docusaurus-search-local'),
            {
                hashed: true,
                language: ['en', 'ko'],
                indexDocs: true,
                indexBlog: false,
                docsRouteBasePath: '/',
                highlightSearchTermsOnTargetPage: true,
            },
        ],
    ],

    themeConfig: {
        image: 'img/docusaurus-social-card.jpg',
        docs: {
            sidebar: {
                autoCollapseCategories: false,
            },
        },
        colorMode: {
            respectPrefersColorScheme: true,
        },
        navbar: {
            title: 'KnowledgeMatrix Plus (KM+)',
            logo: {
                alt: 'KnowledgeMatrix Plus Logo',
                src: 'img/logo.png',
            },
        },
        footer: {
            style: 'dark',
            copyright: `Copyright © ${new Date().getFullYear()} Center for Global R&D Data Analysis, Korea Institute of Science Technology Information.`,
        },
        prism: {
            theme: prismThemes.github,
            darkTheme: prismThemes.dracula,
        },
    } satisfies Preset.ThemeConfig,
};

export default config;
