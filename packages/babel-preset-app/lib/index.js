"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const helper_plugin_utils_1 = require("@babel/helper-plugin-utils");
module.exports = helper_plugin_utils_1.declare((api, options) => {
    api.assertVersion(7);
    return {
        presets: [
            [
                require.resolve('@babel/preset-env'),
                {
                    modules: false,
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
    };
});
