import Vue from 'vue'
import App from './App'
import router from './router/router';
import Mint from 'mint-ui';
import store from "./store";
Vue.use(Mint);

/* eslint-disable no-new */
new Vue({
    router,
    store,
    render: h => h(App)
}).$mount("#app");
