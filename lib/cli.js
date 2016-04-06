/**
 * Created by wanglei on 2015/12/29.
 * js-jsonrpc 钢谷dspc框架 服务代理客户端
 */

"use strict";

var request = require('request');

var config = {}
module.exports = {
    setUrl: function (url) {
        config.url = url;
    },
    setApp: function (app) {
        config.app = app;
    },
    call: function (method, params, callback) {
        if (!config.url) {
            callback("js-jsonrpc调用失败，请先在app.js中设置jsonrpc.setUrl...", null);
            return;
        }
        if (!config.app) {
            callback("js-jsonrpc调用失败，请先在app.js中设置jsonrpc.setApp...", null);
            return;
        }
        var jsonObj = {};
        jsonObj.jsonrpc = "2.0";
        jsonObj.method = config.app + "." + method;
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
    callByCustom: function (url, app, method, params, callback) {
        if (!url || !app || !method) {
            callback("js-jsonrpc调用失败，url|app|method为必填参数！", null);
            return;
        }
        var jsonObj = {};
        jsonObj.jsonrpc = "2.0";
        jsonObj.method = app + "." + method;
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