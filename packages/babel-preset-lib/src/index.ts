import { declare } from '@babel/helper-plugin-utils'
import presetEnv from '@babel/preset-env'
import presetTypescript from '@babel/preset-typescript'
import presetReact from '@babel/preset-react'
import pluginTransformRuntime from '@babel/plugin-transform-runtime'

export default declare((api, options) => {
  api.assertVersion(7)
  return {
    presets: [
      [
        presetEnv,
        {
          useBuiltIns: 'usage', // 只引入使用的 polyfill
          modules: false, // 保留es模块
          corejs: 3, //
          targets: {
            chrome: 58,
          },
          ...options,
        },
      ],
      presetTypescript,
      [
        presetReact,
        {
          runtime: 'automatic', // 当设置为 automatic 时，将自动导入（import）JSX 转换而来的函数。当设置为 classic 时，不会自动导入（import）任何东西。
        },
      ],
    ],
    plugins: [
      pluginTransformRuntime,
      [
        'import', // babel-plugin-import  antd 按需加载  js 默认支持按需引入/但是css没有
        {
          libraryName: 'antd',
          libraryDirectory: 'es', //
          style: true,
        },
        'antd', // 对antd 使用
      ],
    ],
  } as any
})
