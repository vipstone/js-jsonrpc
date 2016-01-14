# js-jsonrpc


## 安装

```sh
npm install js-jsonrpc
```


## 快速使用
1、设置服务配置；
2、代码服务调用；

## 1、设置服务配置
在app.js中设置：
```sh
var jsonrpc = require('js-jsonrpc');
jsonrpc.setUrl("http://192.168.20.30:8080/json.rpc");
jsonrpc.setApp("appName.serviceName");
```

## 2、代码服务调用
```sh
var jsonrpc = require('js-jsonrpc');
jsonrpc.call("method", params, function (result) {
    //console.log(result);
});
```


## 高级调用
```sh
var jsonrpc = require('js-jsonrpc');
jsonrpc.callByCustom("服务代理url","应用.服务","方法名", "参数", function (result) {
    //console.log(result);
});
``
