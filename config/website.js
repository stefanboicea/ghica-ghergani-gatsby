module.exports = {
  pathPrefix: '/', // Prefix for all links. If you deploy your site to example.com/portfolio your pathPrefix should be "portfolio"
  title: 'Ghica Ghergani', // Navigation and Site Title
  titleAlt: 'Ghica Ghergani', // Title for JSONLD
  description: 'Domeniul Ghergani',
  headline: 'Domeniul Ghica Ghergani', // Headline for schema.org JSONLD
  url: 'https://ghica-ghergani.netlify.com', // Domain of your site. No trailing slash!
  siteLanguage: 'en', // Language Tag on <html> element
  logo: '/logos/logo-1024.png', // Used for SEO
  ogLanguage: 'ro_RO', // Facebook Language

  // JSONLD / Manifest
  favicon: 'src/favicon.png', // Used for manifest favicon generation
  shortName: 'Ghergani', // shortname for manifest. MUST be shorter than 12 characters
  author: 'resync', // Author for schemaORGJSONLD
  themeColor: '#3D63AE',
  backgroundColor: '#EBEDF2',

  twitter: '@stefanboicea', // Twitter Username
  facebook: 'stefan-boicea', // Facebook Site Name
  googleAnalyticsID: 'UA-47519312-7',

  skipNavId: 'reach-skip-nav', // ID for the "Skip to content" a11y feature
}
