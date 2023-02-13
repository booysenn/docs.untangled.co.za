const config = {
  gatsby: {
    pathPrefix: '/',
    siteUrl: 'https://docs.untangled.co.za',
    gaTrackingId: null,
    trailingSlash: false,
  },
  header: {
    logo: '',
    logoLink: '/',
    title: "Untangled Docs",
    githubUrl: '',
    helpUrl: '',
    tweetText: '',
    social: '',
    links: [{ text: '', link: '' }],
    search: {
      enabled: false,
      indexName: '',
      algoliaAppId: process.env.GATSBY_ALGOLIA_APP_ID,
      algoliaSearchKey: process.env.GATSBY_ALGOLIA_SEARCH_KEY,
      algoliaAdminKey: process.env.ALGOLIA_ADMIN_KEY,
    },
  },
  sidebar: {
    forcedNavOrder: [
      '/setups', // add trailing slash if enabled above
      '/make',
    ],
    collapsedNav: [
      //'/setups', // add trailing slash if enabled above
    ],
    links: [ /*{ text: 'Docs', link: 'https://docs.untangled.co.za' } */],
    frontLine: false,
    ignoreIndex: true,
    title:"",
  },
  siteMetadata: {
    title: 'Untangled Docs',
    description: 'Random stuff I implemented or created',
    ogImage: null,
    docsLocation: 'https://github.com/booysenn/docs.untangled.co.za/tree/master/content',
    favicon: '',
  },
  pwa: {
    enabled: false, // disabling this will also remove the existing service worker.
    manifest: {
      name: 'Gatsby Gitbook Starter',
      short_name: 'GitbookStarter',
      start_url: '/',
      background_color: '#6b37bf',
      theme_color: '#6b37bf',
      display: 'standalone',
      crossOrigin: 'use-credentials',
      icons: [
        {
          src: 'src/pwa-512.png',
          sizes: `512x512`,
          type: `image/png`,
        },
      ],
    },
  },
};

module.exports = config;
