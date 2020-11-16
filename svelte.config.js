const { name, version, homepage } = require("./package.json");

module.exports = {
  preprocess: [
    {
      script: ({ content }) => {
        return {
          code: content.replace(
            /process.env.META/g,
            JSON.stringify({ name, version, homepage })
          ),
        };
      },
    },
  ],
};
