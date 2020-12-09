module.exports = {
  apps: [
    {
      name: 'whereisit',
      exec_mode: 'cluster',
      instances: '1', // Or a number of instances
      script: './node_modules/nuxt/bin/nuxt.js',
      args: 'start'
    }
  ],
  env: {
    // 개발 환경설정
    PORT: 3000,
    NODE_ENV : "development"

  },
}
