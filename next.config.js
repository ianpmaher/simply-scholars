/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'simply-scholars-821b524821cf.herokuapp.com',
                port: '',
            }
        ]
    }
}

module.exports = nextConfig
