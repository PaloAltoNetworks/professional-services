// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Professional Services',
  tagline: 'Palo Alto Networks Professional Services',
  url: 'https://github.com',
  baseUrl: '/professional-services/',
  onDuplicateRoutes: "warn",
  onBrokenLinks: "warn",
  onBrokenMarkdownLinks: "warn",
  favicon: 'img/PANW_Parent_Glyph_Red.svg',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'PaloAltoNetworks', // Usually your GitHub org/user name.
  projectName: 'professional-services', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      // 'classic',
      "@docusaurus/preset-classic",
      ({
        docs: false,
        theme: {
          customCss: require.resolve('./src/css/custom.scss'),
        },
        gtag: {
          trackingID: "G-TWEZC94JV1",
          anonymizeIP: true,
        },
      }),
    ],
  ],

  plugins: [
    "docusaurus-plugin-sass",
  ],

  stylesheets: [
    {
      href: "https://use.fontawesome.com/releases/v5.15.0/css/all.css",
      type: "text/css",
      rel: "stylesheet",
    },
  ],

  webpack: {
    jsLoader: (isServer) => ({
      loader: require.resolve("esbuild-loader"),
      options: {
        loader: "tsx",
        format: isServer ? "cjs" : undefined,
        target: isServer ? "node12" : "es2017",
      },
    }),
  },


  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: "",
        logo: {
          alt: "Professional Services",
          src: "img/pan_dev_black.svg",
          srcDark: "img/pan_dev_white.svg",
        },
        items: [
          // {
          //   to: "https://gallery.pan.dev",
          //   className: "header-github-link",
          //   position: "right",
          // },
          {
            href: "https://medium.com/palo-alto-networks-developer-blog",
            className: "header-blog-link",
            position: "right",
            "aria-label": "Palo Alto Networks Developer Blog",
          },
        ],
      },
      footer: {
        style: "light",
        logo: {
          alt: "Palo Alto Networks for developers",
          src: "img/PANW_Parent_Logo_White.svg",
        },
        copyright: `Copyright © ${new Date().getFullYear()} Palo Alto Networks, Inc.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },

    }),
};

module.exports = config;
