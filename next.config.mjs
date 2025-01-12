// const withNextra = require('nextra')({
//   theme: 'nextra-theme-docs',
//   themeConfig: './theme.config.tsx',
// })

// module.exports = withNextra()

import nextra from 'nextra'
 
const withNextra = nextra({
  // ... Other Nextra config options
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.tsx',
})
 
// You can include other Next.js configuration options here, in addition to Nextra settings:
export default withNextra({
  // ... Other Next.js config options
})