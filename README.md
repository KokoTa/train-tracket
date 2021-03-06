# React 查缺补漏

该项目主要是学习 Hook

[React-plugin-and-component](https://github.com/KokoTa/React-plugin-and-component) 和 [react-book-program](https://github.com/KokoTa/react-book-program) 项目主要用来学习生态

## 关于 PureComponent

1. 只会对比第一级的数据
2. 如果传入的是匿名函数则对比将无效化，永远会渲染，因为一个新函数不会等于另外一个新函数

## 使用 HOOKS 得注意事项

1. hooks 得初始化是按声明顺序顺序执行的
2. 为了防止使用 hooks 出错，使用 `eslint-plugin-react-hooks` 进行规范化处理，需要配置 `package.json` 的 `eslintConfig` 项

## PWA 组成技术

Service Worker

Promise

fetch

cache API

Notification API

## React SPA 改成 MPA

添加对应的 entry 和 html

1. 见 config/paths.js 的 // * ... 注释
2. 见 config/webpack.config.js // * ... 注释

[具体文章](https://blog.csdn.net/q1519187064/article/details/105842481)

[番外：Vue MPA 配置](http://blog.poetries.top/2019/06/01/vue-muti-page-config/)

## 关于 iconfont 显示

HTML 使用：`&#xf065;`

JS 使用：`\uf065`

## Redux 流程

dispatch(action) -> reducer -> new state

dispatch 后会触发所有 reducer，reducer 根据 action 更改并返回新的 state

## 代码规范化

使用 eslint + prettier + husky + lint-staged 保证代码格式的一致性

后两个的配置见 `package.json`

配置好后直接执行 `git commit -am [description]` 即可

eslint 大部分还是用来格式化 js/jsx

prettier 可以格式化更多种类型的文件，但是会和 eslint 冲突，需要统一规则

这就仁者见仁智者见智了

## 性能分析

1. 使用 `webpack-bundle-analyzer`，配置见 `config/webpack.config.js` 中的 `BundleAnalyzerPlugin` 字段
2. 可以修改 `publicPath` 来让静态资源指向 CDN 地址
3. 可以导入 `serviceWorker` 缓存资源
