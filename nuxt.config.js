let apiUrl = "http://localhost:6969";
let websiteUrl = "http://localhost:3000";
if (process.env.NODE_ENV === 'production') {
  apiUrl = "https://api.tourismeestrie.ca";
  websiteUrl = "https://tourismeestrie.ca";
}

export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: "Location Tourisme Estrie",
    meta: [
      {charset: "utf-8"},
      {name: "viewport", content: "width=device-width, initial-scale=1"},
      {
        hid: "description",
        name: "description",
        content: "Location Tourisme Estrie | Location de condos pour vos vacances en Estrie"
      }
    ],
    link: [
      {rel: "icon", type: "image/x-icon", href: "https://cdn.tourismeestrie.ca/favicon/favicon.ico"},
      {rel: "apple-touch-icon", sizes: "57x57", href: "https://cdn.tourismeestrie.ca/favicon/apple-icon-57x57.png"},
      {rel: "apple-touch-icon", sizes: "60x60", href: "https://cdn.tourismeestrie.ca/favicon/apple-icon-60x60.png"},
      {rel: "apple-touch-icon", sizes: "72x72", href: "https://cdn.tourismeestrie.ca/favicon/apple-icon-72x72.png"},
      {rel: "apple-touch-icon", sizes: "76x76", href: "https://cdn.tourismeestrie.ca/favicon/apple-icon-76x76.png"},
      {rel: "apple-touch-icon", sizes: "114x114", href: "https://cdn.tourismeestrie.ca/favicon/apple-icon-114x114.png"},
      {rel: "apple-touch-icon", sizes: "120x120", href: "https://cdn.tourismeestrie.ca/favicon/apple-icon-120x120.png"},
      {rel: "apple-touch-icon", sizes: "144x144", href: "https://cdn.tourismeestrie.ca/favicon/apple-icon-144x144.png"},
      {rel: "apple-touch-icon", sizes: "152x152", href: "https://cdn.tourismeestrie.ca/favicon/apple-icon-152x152.png"},
      {rel: "apple-touch-icon", sizes: "180x180", href: "https://cdn.tourismeestrie.ca/favicon/apple-icon-180x180.png"},
      {rel: "icon", type: "image/png", sizes: "192x192", href: "https://cdn.tourismeestrie.ca/favicon/android-icon-192x192.png"},
      {rel: "icon", type: "image/png", sizes: "32x32", href: "https://cdn.tourismeestrie.ca/favicon/favicon-32x32.png"},
      {rel: "icon", type: "image/png", sizes: "96x96", href: "https://cdn.tourismeestrie.ca/favicon/favicon-96x96.png"},
      {rel: "icon", type: "image/png", sizes: "16x16", href: "https://cdn.tourismeestrie.ca/favicon/favicon-16x16.png"},
      {rel: "manifest", href: "https://cdn.tourismeestrie.ca/favicon/manifest.json"},
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '~plugins/filters.js',
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    'nuxt-i18n',
    '@nuxtjs/axios',
    '@nuxtjs/proxy',
  ],
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  },
  axios: {},
  i18n: {
    locales: ['en', 'fr'],
    defaultLocale: 'fr',
    vueI18n: {
      fallbackLocale: 'en',
      messages: {
        en: {
          title: 'Location Tourisme Estrie',
          subTitle: 'New website. Coming soon!',
          email: 'Email',
          submit: 'Submit',
          days: 'Days',
          hours: 'Hours',
          minutes: 'Minutes',
          seconds: 'Seconds',
          mailingListJoin: 'Join our mailing list to be the first to know!'
        },
        fr: {
          title: 'Location Tourisme Estrie',
          subTitle: 'Nouveau site. En construction!',
          email: 'Courriel',
          submit: 'Soumettre',
          days: 'Jours',
          hours: 'Heures',
          minutes: 'Minutes',
          seconds: 'Secondes',
          mailingListJoin: 'Joignez notre info-lettre pour être les premiers au courant!'
        },
      }
    }
  },
  proxy: {
    '/api': {
      target: apiUrl,
    }
  }
}
