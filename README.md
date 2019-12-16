## 安装使用
- 全局安装create-react-app，执行create-react-app projectName创建项目。安装后即可使用react语法
- 运行npm run eject命令把项目的配置文件暴露出来，执行npm install安装依赖
- .babelrc的配置项全都放在了package.json的babel配置中


## 依赖包
#### decorator 无需安装任何包。在package.json中添加配置babel配置
``` json
 "plugins": [
    [
      "@babel/plugin-proposal-decorators",
      {
        "legacy": true
      }
    ]
  ]
```


## VSCode工具报Experimental support for decorators is a feature....
VSCode工具栏 File-preferences-settings，搜索user， 点最下面的TypeScript，点进去Edit in settings.json，在里面加入 ``` "javascript.implicitProjectConfig.experimentalDecorators": true ```