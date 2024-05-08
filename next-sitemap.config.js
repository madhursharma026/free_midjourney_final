/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: 'https://freemidjourneyai.com',
    generateRobotsTxt: true,
    robotsTxtOptions: {
        policies: [
            { 
                userAgent: '*',
                allow: '/',
                disallow: ['/gallery', '/privacy-policy', '/settings', '/auth/*'],
            }
        ]
    },
    sitemapBaseFileName: 'new-sitemap',
    generateIndexSitemap: false,
    priority: 0.8,
    transform: async (config, path) => {
        return {
            loc: path, // => this will be exported as http(s)://<config.siteUrl>/<path>
            changefreq: config.changefreq,
            priority: path === '/' ? '1.00' : config.priority,
            lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
        }
    },
    exclude: ['/gallery', '/privacy-policy', '/auth/*', '/settings']
}