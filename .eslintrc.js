const sharedConfig = require("eslint-shared-config-tony");

module.exports = {
  ...sharedConfig,
  extends: [...sharedConfig.extends, "next/core-web-vitals"],
  rules: {
    ...sharedConfig.rules,
    "react/jsx-no-useless-fragment": "off",
    "@typescript-eslint/explicit-function-return-type": "off",
  },
};
