import axios from 'axios'
import commonJS from './common'


let Promise = require('es6-promise').Promise;

axios.defaults.withCredentials = true;

/**
 * 配置
 * @type {{host: string}}
 */
const config = {
    host: 'http://119.23.32.207:3030'
    // host: 'http://127.0.0.1:3030'
};
/**
 * 设置请求域名
 * @param {string} apiUrl - API地址
 * @returns {string} - New API地址
 */
const setApiHost = (apiUrl) => {
    return (commonJS.isStrExis(apiUrl, 'http')) ? apiUrl : config.host + apiUrl
};

/**
 * 数据请求
 * @param {string} apiUrl - API地址
 * @param {json} data - API参数
 * @param method - 请求类型
 * @returns {object}
 */
export default async (apiUrl, data = {}, method = 'GET') => {
    return new Promise((resolve, reject) => {
        // let result = `请求参数类型有误:"${method}"`;
        apiUrl = setApiHost(apiUrl);
        if (method == 'GET') {
            axios.get(apiUrl, {params: data}).then((res) => {
                resolve(res.data);
            }, err => {
                reject(err);
            }).catch((error) => {
                console.log(error);
            });
        } else if (method == 'POST') {
            axios.post(apiUrl, {data: data}).then((res) => {
                resolve(res.data);
            }, err => {
                reject(err);
            }).catch((error) => {
                console.log(error);
            });
        }
        // console.log(data);
        // console.log(result);
        // return result;
    });
};

