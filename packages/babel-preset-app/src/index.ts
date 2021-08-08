import { declare } from '@babel/helper-plugin-utils';

module.exports = declare((api, options) => {
  api.assertVersion(7);

  return {
    presets: [
      [
        require.resolve('@babel/preset-env'),
        {
          modules: false, // close this to make tree-shaking work
          useBuiltIns: 'usage',
          corejs: 3,
          ...options,
        },
      ],
      require.resolve('@babel/preset-typescript'),
      [
        require.resolve('@babel/preset-react'),
        {
          runtime: 'automatic',
        },
      ],
    ],
    env: {},
  } as any;
});
