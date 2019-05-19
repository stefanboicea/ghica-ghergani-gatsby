module.exports = {
  pathPrefix: '/', // Prefix for all links. If you deploy your site to example.com/portfolio your pathPrefix should be "portfolio"
  title: 'Domeniul Ghergani', // Navigation and Site Title
  titleAlt: 'Domeniul Ghergani', // Title for JSONLD
  description: 'Domeniul Ghergani',
  headline: 'Domeniul Ghica Ghergani', // Headline for schema.org JSONLD
  url: 'https://ghica-ghergani.netlify.com', // Domain of your site. No trailing slash!
  siteLanguage: 'ro', // Language Tag on <html> element
  logo: '/images/logo.png', // Used for SEO
  ogLanguage: 'ro_RO', // Facebook Language

  // JSONLD / Manifest
  favicon: 'src/images/logo.png', // Used for manifest favicon generation
  shortName: 'Domeniul Ghergani', // shortname for manifest. MUST be shorter than 12 characters
  author: 'Domeniul Ghergani', // Author for schemaORGJSONLD
  themeColor: '#3D63AE',
  backgroundColor: '#EBEDF2',

  twitter: '@stefanboicea', // Twitter Username
  facebook: 'DomeniulIonGhica', // Facebook Site Name
  googleAnalyticsID: 'UA-47519312-7',

  skipNavId: 'reach-skip-nav', // ID for the "Skip to content" a11y feature
}
