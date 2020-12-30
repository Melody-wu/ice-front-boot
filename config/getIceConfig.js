'use strict';

const fs = require('fs');
const path = require('path');
const defaultConfig = {
    port: 9090,
}

function getDefaultConfig(configFile) {
    const customizedConfig = fs.existsSync(configFile) ? require(configFile) : {};
    const config = Object.assign({}, defaultConfig, customizedConfig);
    // config.index = resolve.sync(config.index, { basedir: process.cwd() });
    return config;
};

function getIceConfig(program) {
    //process.cwd() 是当前执行node命令时候的文件夹地址 ——工作目录 保证了文件在不同的目录下执行时，路径始终不变
    //_dirname 是被执行的js 文件的地址 ——文件所在目录
    const configFile = path.join(process.cwd(), program.config || 'ice.config.js');
    // 获取webpack文件，这个文件 = 默认配置 + 用户自定义的配置
    const choerodonConfig = getDefaultConfig(configFile);

    return choerodonConfig;
    // // 挂到context = { choerodonConfig }
    // context.initialize({
    //     choerodonConfig
    // });
};

module.exports = getIceConfig;