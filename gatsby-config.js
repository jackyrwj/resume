module.exports = {
  // Cloudflare Pages 部署时不需要 pathPrefix
  // pathPrefix: '/resume',
  siteMetadata: {
    title: 'Resume Creator - 在线简历制作',
    description: '免费在线简历制作工具，支持多种模板、自定义主题色、国际化(中/英)、实时预览和PDF下载。快速创建专业简历，无需编程基础。',
    githubUrl: 'https://github.com/jackyrwj/resume',
    author: 'jackyrwj',
    contact: 'https://github.com/jackyrwj',
  },
  flags: {
    DEV_SSR: false,
  },
  plugins: [
    {
      // https://developers.google.com/analytics/devguides/collection/gtagjs?hl=zh_CN
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        // The property ID; the tracking code won't be generated without it
        trackingIds: ['G-2K3PH6MKBG'],
      },
    },
    {
      resolve: 'gatsby-plugin-antd',
      options: {
        style: true,
      },
    },
    {
      resolve: 'gatsby-plugin-less',
      options: {
        strictMath: true,
        lessOptions: {
          javascriptEnabled: true,
          modifyVars: {
            'font-family': 'roboto-regular, Arial',
            'primary-color': '#2f5785',
          },
        },
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
    'gatsby-plugin-pnpm',
  ],
};
