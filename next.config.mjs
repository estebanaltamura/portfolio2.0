/** @type {import('next').NextConfig} */
const nextConfig = {
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Content-Security-Policy',
            value: `
              default-src 'self';
              script-src 'self' 'unsafe-inline' 'unsafe-eval' https://player.vimeo.com https://www.youtube.com https://www.youtube.com/iframe_api https://f.vimeocdn.com;
              frame-src 'self' https://player.vimeo.com https://www.youtube.com;
              style-src 'self' 'unsafe-inline';
              img-src 'self' data: https://f.vimeocdn.com;
              connect-src 'self' https://player.vimeo.com https://f.vimeocdn.com;
              font-src 'self';
              object-src 'none';
              media-src 'self';
              base-uri 'self';
              form-action 'self';
            `.replace(/\n/g, ''),
          },
        ],
      },
    ];
  },
};

export default nextConfig;
