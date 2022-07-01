module.exports = {
  root: true,
  // This tells ESLint to load the config from the package `eslint-config-somedaycode`
  extends: ["somedaycode"],
  settings: {
    next: {
      rootDir: ["apps/*/"],
    },
  },
};
