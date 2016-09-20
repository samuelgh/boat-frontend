module.exports = {
  settings: {
    runtime: {
      applicationName: 'Boat data visualization',
      port: 3000,
      serve: ['public', 'build/client'],
      favicon: 'favicon.png',
    },
    build: {
      reducers: 'src/redux/reducers.js',
      routes: 'src/routes/index.js',
    },
    dev: {
      watch: '*',
    }
  },
};
