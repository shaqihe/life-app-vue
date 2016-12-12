import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);
export default new Vuex.Store({
    state: {
        messages: [
            {
                key: '', //列表key
                type: '', //类型
                value: '', //内容
                userId: '' //信息发送者
            }
        ],
        loading: false //全局的loading效果
    },
    getters: {
        getMessages: state => {
            return state.messages || [];
        },
        getLoading: state => {
            return state.loading;
        }
    },
    mutations: {
        pushMassages: (state, message) => {
            state.messages = state.messages.push(message);
        },
        clearMassages: state => {
            state.massages = [];
        },
        setLoading: (state, loading) => {
            state.loading = loading;
        }
    },
    actions: {
        pushMassages: ({
            commit
        }, user) => {
            return new Promise(function(resolve, reject) {
                commit("pushMassages", user);
                resolve();
            });
        },
        clearMassages: ({
            commit
        }) => {
            return new Promise(function(resolve, reject) {
                commit("clearMassages");
                resolve();
            });
        },
    }
});
