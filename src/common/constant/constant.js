/**
 * ----------------------------------------------------------
 * 网站的一些常量
 *
 * @version  1.0
 * @author shaqihe(shaqihecome@163.com)
 *
 * @module src/common/constant
 * ----------------------------------------------------------
 */

/**
 * 页面类型的一些常量
 *
 */
export const PAGE_TYPE = {
    //开心一刻页面
    HAPPY_PAGE: {
        text: "开心时刻",
        className: "happy-page",
        value: 1
    },

    //天气预报页面
    WEATHER_PAGE: {
        text: "天气预报",
        className: "weather-page",
        value: 2
    }
};

/**
 * 开心一刻列表类型
 *
 */
export const HAPPY_TYPE = {
    //段子
    TEXT: 1,
    //图片
    IMAGE: 2,
    //混合
    OTHER: 3

};
