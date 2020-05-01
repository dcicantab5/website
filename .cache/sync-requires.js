const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---src-pages-404-js": hot(preferDefault(require("/Users/saifulsafuanmdsani/aaims/src/pages/404.js"))),
  "component---src-pages-aboutus-mdx": hot(preferDefault(require("/Users/saifulsafuanmdsani/aaims/src/pages/aboutus.mdx"))),
  "component---src-pages-channels-mdx": hot(preferDefault(require("/Users/saifulsafuanmdsani/aaims/src/pages/channels.mdx"))),
  "component---src-pages-clinicals-mdx": hot(preferDefault(require("/Users/saifulsafuanmdsani/aaims/src/pages/clinicals.mdx"))),
  "component---src-pages-data-mdx": hot(preferDefault(require("/Users/saifulsafuanmdsani/aaims/src/pages/data.mdx"))),
  "component---src-pages-epid-mdx": hot(preferDefault(require("/Users/saifulsafuanmdsani/aaims/src/pages/epid.mdx"))),
  "component---src-pages-guidelines-mdx": hot(preferDefault(require("/Users/saifulsafuanmdsani/aaims/src/pages/guidelines.mdx"))),
  "component---src-pages-ili-sari-mdx": hot(preferDefault(require("/Users/saifulsafuanmdsani/aaims/src/pages/ILI_SARI.mdx"))),
  "component---src-pages-index-mdx": hot(preferDefault(require("/Users/saifulsafuanmdsani/aaims/src/pages/index.mdx"))),
  "component---src-pages-lockdown-mdx": hot(preferDefault(require("/Users/saifulsafuanmdsani/aaims/src/pages/lockdown.mdx"))),
  "component---src-pages-sari-mdx": hot(preferDefault(require("/Users/saifulsafuanmdsani/aaims/src/pages/SARI.mdx"))),
  "component---src-pages-screening-mdx": hot(preferDefault(require("/Users/saifulsafuanmdsani/aaims/src/pages/screening.mdx"))),
  "component---src-pages-testing-mdx": hot(preferDefault(require("/Users/saifulsafuanmdsani/aaims/src/pages/testing.mdx"))),
  "component---src-pages-transmit-mdx": hot(preferDefault(require("/Users/saifulsafuanmdsani/aaims/src/pages/transmit.mdx"))),
  "component---src-pages-videos-js": hot(preferDefault(require("/Users/saifulsafuanmdsani/aaims/src/pages/videos.js")))
}

