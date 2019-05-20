const path = require('path')

module.exports = {
  apps: [{
    name: 'sql-pivot',
    script: 'src/app.js', // Your entry point
    instances: 1,
    autorestart: true, // THIS is the important part, this will tell PM2 to restart your app if it falls over
    watch: process.env.NODE_ENV !== 'production' ? path.resolve(__dirname, 'src') : false,
    max_memory_restart: '1G'
  }]
}