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
