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
const HappyListCache = {

    /**
     * @param  {Object} Data
     * @return {Promise}
     */
    getHappyList(data) {
        let key = '?&key=ec451dc7ad29d93c72de5f281123a496&';

        switch(data.happyType)
        {
        case HAPPY_TYPE.TEXT:
            return fetch('api/joke/content/text.from' + key + parseParam(data))
            .then(response => response.json()).then(response => response.result.data);
            break;
        case HAPPY_TYPE.IMAGE:
            return fetch('api/joke/img/text.from' + key + parseParam(data))
            .then(response => response.json()).then(response => response.result.data);
            break;
        case HAPPY_TYPE.OTHER:
            return fetch('api/joke/content/text.from' + key + parseParam(data))
            .then(response => response.json()).then(response => response.result.data);
            break;
        }

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

// 实例化后再导出
export default HappyListCache
