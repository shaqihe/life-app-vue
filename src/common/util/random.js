/**
 * ----------------------------------------------------------
 * 一些生成随机文字／头像的方法(接口中没有笑话发表的作者和作者头像mock一个)
 *
 * @version  1.0
 * @author shaqihe(shaqihecome@163.com)
 *
 * @module src/common/util/random
 * ----------------------------------------------------------
 */

/**
 * @type {Object}
 */
let random = {};

/**
 * 把Unicode码转化成汉字
 */
random.tohanzi = (str) => {
    return unescape(str.replace(/\\u/gi,'%u'));
};

/**
 * 随机生成x-y的随机送
 */
random.randomNum = (x, y) => {
    let num = y-x;
    num = Math.random()*num + x;
    return parseInt(num, 10);
};

/**
 * 随机生成x－y个汉字
 */
random.randomFont = (x, y) => {
    let str = '';
    let num = random.randomNum(x, y);
    for (let i = num; i >= 0; i--) {
        //随机生成一个unicode
        let word = '\\u' + (Math.round(Math.random() * 20901) + 19968).toString(16);
        str += random.tohanzi(word);
    };
    return str;
};

export default random;
