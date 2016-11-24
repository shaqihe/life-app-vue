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
/**
 *  开心一刻页面的相关接口
 */
class HappyList {

    /**
     * @param  {Object} Data
     * @return {Promise}
     */
    getHappyList(data) {
        return fetch('http://baidu.com', {
            method: 'GET',
            body: data
        });
    }
}

// 实例化后再导出
export default new HappyList()
