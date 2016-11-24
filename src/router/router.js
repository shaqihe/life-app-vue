/**
 * ----------------------------------------------------------
 * 总体路由到配置
 *
 * @version  1.0
 * @author shaqihe(shaqihecome@163.com)
 *
 * @module src/router/router
 * ----------------------------------------------------------
 */

import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

/**
 * 路由的设置
 *
 * @method  module:src/router/router#routes
 * @returns {obj}
 */
const routes = [
    {
        path: "/index",
        name: "index",
        component: (resolve) => {
            require(["../pages/index.vue"], resolve);
        }
    },
    {
        path: "/happy",
        name: "happy",
        component: (resolve) => {
            require(["../pages/happy.vue"], resolve);
        }
    },
    {
      path: "/weather",
      name: "weather",
      component: (resolve) => {
          require(["../pages/weather.vue"], resolve);
      }
    },
    {
        path: '*',
        redirect: {
            name: "index",
        },
    },
];

/**
 * 实例化路由
 *
 * @method  module:src/router/router#VueRouter
 * @returns {obj}
 */
export default new VueRouter({
    mode: "hash",
    routes: routes
});
