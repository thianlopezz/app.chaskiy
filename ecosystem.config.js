module.exports = {
  apps: [
    {
      name: 'chaskiy',
      script: 'API_DIST/server.js',
      // Options reference: https://pm2.io/doc/en/runtime/reference/ecosystem-file/
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'development'
      },
      env_production: {
        NODE_ENV: 'production',
        PORT: 3000,
        MYSQL_CONNECTION_LIMIT: 5,
        MYSQL_HOST: '172.17.0.4',
        MYSQL_PORT: 3306,
        MYSQL_USER: 'root',
        MYSQL_PASSWORD: '1Lan!ster100prePagaSusDeud4s',
        MYSQL_CHASKIY: 'chaskiy',
        CORREO_GENERICO: 'http://3.15.194.115:3000',
        UPLOAD_DIR: '/home/apps/files/gallery',
        S3_ACCESS_KEY_ID: 'AKIAIC2AIUCB5QSGXIFQ',
        S3_SECRET_ACCESS_KEY: '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',
        S3_BUCKET: 'chaskiy-prod'
      }
    }
  ]
};
