# Python Docusaurus Template

A no-nonsense markdown-only template with runnable and editable Python code
blocks. Now with [Docusaurus 3.0](https://docusaurus.io/blog/releases/3.0)!

[Try it here](https://james-ansley.github.io/python-docusaurus-template/)


This site includes:

- Runnable editable python code blocks
- KaTeX math
- A search Bar
- A GitHub action to deploy to GitHub Pages


# Getting Started

Read the [Docusaurus](https://docusaurus.io/) documentation for information
on how Docusaurus works. The following sections only outline the _minimum
setup_ needed to set this template up for your own site.

Run `npm install` and `npm run start` to get started with development.

## Config

After cloning this template repo, you will need to replace all the
placeholder values in the `docusaurus.config.js` folder. The main fields
that you will definitely need to replace are commented with "`set this`".

Have a look at the
[Docusaurus configuration docs](https://docusaurus.io/docs/api/docusaurus-config)
to see if there are any other additional configuration options you would
need for your purpose.

## Pages

The main index page will need to be modified. This can be found at
`src/pages/index.js`.

You can then delete all the files in the `docs/` directory and start writing
your own pages.

## Styles

Change the `--ifm-color` css variables for light and dark mode in
`src/css/custom.scss` using
the [Docusaurus theme colour picker](https://docusaurus.io/docs/styling-layout#styling-your-site-with-infima)

## Other Changes

- Change the `name` field in `package.json` to the name of your project.
- Change the logo and favicon in the `static/img` directory to your own logo
  and favicon. If you change the names of these files, update them
  in `docusaurus.config.js`.
- Update the name in LICENSE (or the licence if you want to use a different
  license)
