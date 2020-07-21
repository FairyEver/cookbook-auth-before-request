# cookbook-auth-before-request

简单演示如何实现暂停网络请求并插入用户登录逻辑，登录成功之后携带用户信息继续之前的请求，用户也可在登录界面放弃登录操作从而中断请求。

## Feature

* 利用动态挂载实现在 vue 实例之外方便地弹出登录窗口，并返回对应用户操作的 Promise
* 快速登录组件和登录页面的组件共用一份登录代码，根据模式切换演示效果
* 允许用户在快速登录界面试错，直到主动放弃
* 可通过配置请求的 header 实现对多个 api 的校验放行

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Lints and fixes files
```
yarn lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
