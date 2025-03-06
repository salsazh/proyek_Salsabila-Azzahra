module.exports = {
    babel: {
      plugins: [
        ["@babel/plugin-proposal-private-property-in-object", { "loose": true }],
        ["@babel/plugin-transform-class-properties", { "loose": true }],
        ["@babel/plugin-transform-private-methods", { "loose": true }]
      ],
    },
    // ...existing configuration...
};