"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const helper_plugin_utils_1 = require("@babel/helper-plugin-utils");
const preset_env_1 = __importDefault(require("@babel/preset-env"));
const preset_typescript_1 = __importDefault(require("@babel/preset-typescript"));
const preset_react_1 = __importDefault(require("@babel/preset-react"));
const plugin_transform_runtime_1 = __importDefault(require("@babel/plugin-transform-runtime"));
exports.default = helper_plugin_utils_1.declare((api, options) => {
    api.assertVersion(7);
    return {
        presets: [
            [
                preset_env_1.default,
                {
                    useBuiltIns: 'usage',
                    modules: false,
                    corejs: 3,
                    targets: {
                        chrome: 58,
                    },
                    ...options,
                },
            ],
            preset_typescript_1.default,
            [
                preset_react_1.default,
                {
                    runtime: 'automatic', // 当设置为 automatic 时，将自动导入（import）JSX 转换而来的函数。当设置为 classic 时，不会自动导入（import）任何东西。
                },
            ],
        ],
        plugins: [
            plugin_transform_runtime_1.default,
            [
                'import',
                {
                    libraryName: 'antd',
                    libraryDirectory: 'es',
                    style: true,
                },
                'antd', // 对antd 使用
            ],
        ],
    };
});
