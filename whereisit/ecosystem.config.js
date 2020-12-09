module.exports = {
  apps: [
    {
      name: 'whereisit',
      port: 3000,
      exec_mode: 'cluster',
      instances: '1', // Or a number of instances
      script: './node_modules/nuxt/bin/nuxt.js',
      args: 'start'
    }
  ],
}
