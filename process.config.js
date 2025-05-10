const { watch } = require("fs-extra");

module.exports = {
  apps: [
    {
      name: "AsianFoods",
      cwd: "./",
      script: "./dist/server.js",
      watch: false,
      env_production: {
        NODE_ENV: "production",
      },
      env_development: {
        NODE_ENV: "development",
      },
      instances: 1,
      exec_mode: "cluster",
    },
  ],
};
