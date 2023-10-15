const sharedConfig = require("eslint-shared-config-tony");

module.exports = {
  ...sharedConfig,
  extends: [
    ...sharedConfig.extends,
    "next/core-web-vitals"
  ]
}


