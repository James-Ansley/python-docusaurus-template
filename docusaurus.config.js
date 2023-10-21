// @ts-check

// CTRL+F for "set this" to find all the fields with placeholder values.
// For other configuration options,
// see: https://docusaurus.io/docs/api/themes/configuration

import {themes as prismThemes} from 'prism-react-renderer';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

/** @type {import('@docusaurus/types').Config} */
const config = {
    title: 'Python Docusaurus Template',  // set this
    favicon: 'img/favicon.ico',

    // The url for your site: <url>/<baseUrl>/
    url: 'https://james-ansley.github.io',  // set this
    baseUrl: '/python-docusaurus-template/',  // set this

    // (optional) GitHub pages deployment config.
    organizationName: 'James-Ansley',  // set this – GitHub Org or Username
    projectName: 'python-docusaurus-template',  // set this – repo name
    trailingSlash: false,

    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',

    i18n: {
        defaultLocale: 'en',
        locales: ['en'],
    },

    presets: [
        [
            'classic',
            /** @type {import('@docusaurus/preset-classic').Options} */
            ({
                docs: {
                    sidebarPath: './sidebars.js',
                    remarkPlugins: [remarkMath],
                    rehypePlugins: [rehypeKatex],
                },
                theme: {
                    customCss: './src/css/custom.scss',
                },
            }),
        ],
    ],

    themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
        ({
            // set this - Replace with your project's social card
            image: 'img/logo.svg',
            docs: {
                sidebar: {
                    hideable: true,
                }
            },
            // set this – navbar items
            // See: https://docusaurus.io/docs/api/themes/configuration#navbar
            navbar: {
                title: 'Python Docusaurus Template',  // set this
                logo: {
                    alt: 'My Site Logo',
                    src: 'img/logo.svg',
                },
                items: [
                    {
                        type: 'doc',
                        docId: 'intro',  // set this to your main docs page name
                        position: 'left',
                        label: 'Get Started',
                    },
                    {
                        href: 'https://github.com/James-Ansley/python-docusaurus-template',  // set this
                        label: 'GitHub',
                        position: 'right',
                    },
                ],
            },
            // set this – to the links you want
            // See: https://docusaurus.io/docs/api/themes/configuration#footer-1
            footer: {
                style: 'light',
                links: [
                    {
                        label: 'Get Started',
                        to: '/docs/intro',
                    },
                    {
                        label: 'GitHub',
                        href: 'https://github.com/James-Ansley/python-docusaurus-template',
                    },
                ],
                // set this
                copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
            },
            prism: {
                theme: prismThemes.github,
                darkTheme: prismThemes.dracula,
            },
        }),

    stylesheets: [
        {
            href: 'https://cdn.jsdelivr.net/npm/katex@0.13.24/dist/katex.min.css',
            type: 'text/css',
            integrity:
                'sha384-odtC+0UGzzFL/6PNoE8rX/SPcQDXBJ+uRepguP4QkPCm2LBxH3FA3y+fKSiJ+AmM',
            crossorigin: 'anonymous',
        },
    ],

    plugins: [
        'docusaurus-plugin-sass',
        async function disableUsedExports() {
            return {
                name: 'disable-used-exports',
                configureWebpack() {
                    return {
                        optimization: {
                            usedExports: false
                        }
                    }
                }
            }
        },
    ],

    themes: [
        [
            require.resolve("@easyops-cn/docusaurus-search-local"),
            /** @type {import("@easyops-cn/docusaurus-search-local").PluginOptions} */
            ({
                hashed: true,
                indexBlog: false,
            }),
        ],
    ],
};

export default config;
