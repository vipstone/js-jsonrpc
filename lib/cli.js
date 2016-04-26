/**
 * create: wanglei
 * desc:js-jsonrpc 钢谷dspc框架 服务代理客户端
 * createTime:2015/12/29
 * updateTime:2016.4.26
 */

"use strict";

var request = require('request');

var config = {}
module.exports = {
    setUrl: function (url) {
        config.url = url;
    },
    call: function (method, params, callback) {
        if (!config.url) {
            callback("js-jsonrpc调用失败，请先在app.js中设置jsonrpc.setUrl...", null);
            return;
        }
        var jsonObj = {};
        jsonObj.jsonrpc = "2.0";
        jsonObj.method = method;
        jsonObj.params = params;
        jsonObj.id = "";
        request({
            url: config.url,
            method: "post",
            body: JSON.stringify(jsonObj)
        }, function (error, response, body) {
            jsonObj = null;
            callback(error, body);
        });
    },
    callByCustom: function (url, method, params, callback) {
        if (!url || !method) {
            callback("js-jsonrpc调用失败，url|method为必填参数！", null);
            return;
        }
        var jsonObj = {};
        jsonObj.jsonrpc = "2.0";
        jsonObj.method = method;
        jsonObj.params = params;
        jsonObj.id = "";
        request({
            url: url,
            method: "post",
            body: JSON.stringify(jsonObj)
        }, function (error, response, body) {
            jsonObj = null;
            callback(error, body);
        });
    }
}