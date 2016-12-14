/**
 * ----------------------------------------------------------
 * 项目的接口统一管理(直接在业务代码中写请求地址，问题定位／接口修改太不优雅了)
 *
 * @version  1.0
 * @author shaqihe(shaqihecome@163.com)
 *
 * @module src/cache/cache
 * ----------------------------------------------------------
 */

import 'whatwg-fetch';
import {HAPPY_TYPE} from '../common/constant/constant';

/**
 *  开心一刻页面的相关接口
 */
export  const HappyListCache = {

    /**
     * 这个接口比较蛋疼，用的开源的接口，不同的接口规律也不一样
     * @param  {Object} Data
     * @return {Promise}
     */
    getHappyList(data) {
        let key = '&key=ec451dc7ad29d93c72de5f281123a496&';

        switch(data.happyType)
        {
        case HAPPY_TYPE.TEXT:
            return fetch('happy/joke/randJoke.php?' + key + parseParam(data))
            .then(response => response.json()).then(response => response.result);
            break;
        case HAPPY_TYPE.IMAGE:
            return fetch('happy/joke/randJoke.php?type="pic"' + key + parseParam(data))
            .then(response => response.json()).then(response => response.result);
            break;
        case HAPPY_TYPE.OTHER:
            return fetch('api/joke/img/text.from?"' + key + parseParam(data))
            .then(response => response.json()).then(response => response.result.data);
            break;
        }

    }
}

/**
 *  天气相关的接口
 */
export  const WeatherCache = {

    /**
     * 天气相关的接口
     * @param  {Object} Data
     * @return {Promise}
     */
    getWeather(data) {
        let key = '?key=7cc263ec409e69b4aeb54b55639bcc87&';
        return fetch('op/onebox/weather/query' + key + parseParam(data))
            .then(response => response.json()).then(response => response.result.data);
    }
}

/**
 *  机器人相关的接口
 */
export  const RobotCache = {

    /**
     * 机器人相关的接口
     * @param  {Object} Data
     * @return {Promise}
     */
    getWeather(data) {
        let key = '?key=50cd35eb206526335a1c1e0f149f98a5&';
        return fetch('op/robot/index' + key + parseParam(data))
            .then(response => response.json()).then(response => response.result.text);
    }
}

/**
 *  简单封装把对象转换场url参数的字符串
 *  @return {String}
 */
function parseParam(obj) {
    let paramStr = '';
    for (let p in obj) {
        if (obj.hasOwnProperty(p)) {
            if (typeof(obj[p]) == " function ") {
                obj[p]();
            }
            else {
                paramStr += p + '=' + encodeURIComponent(obj[p]) + "&";
            }
        }
    }
    return paramStr;
}

