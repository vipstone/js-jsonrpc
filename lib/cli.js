/**
 * Created by wanglei on 2015/12/29.
 * 服务代理客户端类
 */

"use strict";

var request = require('request');

var service = {
	url:"http://192.168.20.30:8080/json.rpc",
	params:"应用.服务."
}

module.exports = {
    call: function (method, params, callback) {
        var jsonObj = {};
        jsonObj.jsonrpc = "2.0";
        jsonObj.method = service.params + method;
        jsonObj.params = params;
        jsonObj.id = "";
        request({
            url: service.url,
            method: "post",
            form: JSON.stringify(jsonObj)
        }, function (error, response, body) {
            jsonObj = null;
            callback(body);
        });
    }
}