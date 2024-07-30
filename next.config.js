const CompressionPlugin = require('compression-webpack-plugin');

module.exports = {
 
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'coin-images.coingecko.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
  productionBrowserSourceMaps: true,
  
  webpack(config, { isServer }) {
    config.plugins.push(new CompressionPlugin({
      filename: '[path][base].gz',
      algorithm: 'gzip',
      test: /\.(js|css|html|svg)$/,
      threshold: 8192,
      minRatio: 0.8,
      deleteOriginalAssets: false, // Ensure it does not delete original assets
    }));

    return config;
  },
};
