## react-in-fis

### install

install babel plugin

```bash
npm install -g xiangshouding/fis-parser-babel
npm install -g fis-postprocessor-require-async # 动态（异步）支持
```

### use

**in fis**

*fis-conf.js*

```js
/* global fis */

fis.config.set('modules.parser.jsx', 'babel');
fis.config.set('roadmap.ext.jsx', 'js'); // .jsx => .js

//jswrapper 用来自动封装 `define`
//require-async 用来支持动态加载组件
fis.config.set('modules.postprocessor.js', 'jswrapper,require-async');
fis.config.set('roadmap.path', [
  {
    reg: '/module/**.jsx',
    isMod: true
  }
]);

fis.config.set('settings.postprocessor.jswrapper', {
  type: 'amd' //历史遗留问题，此处应该是 mod.js
});
```

```
fis release
```

```
fis server start --type node
```

**in fis3**

*fis-conf.js*

```js
fis.match('**.jsx', {
  postprocessor: fis.plugin('require-async')
})

fis.match('/modules/**.jsx', {
  isMod: true,
  parser: fis.plugin('babel'),
  postprocessor: [
    fis.plugin('jswrapper', {
      // 历史遗留问题，应该为 commonJs
      type: 'amd'
    }),
    fis.plugin('require-async')
  ]
});
```

```
fis3 release
```

```
fis3 server start --type node
```
