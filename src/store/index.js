import Vue from "vue";
import Vuex from "vuex";
import tool from '../common/util/tool'
import {USER_TYPE} from '../common/constant/constant'

Vue.use(Vuex);
export default new Vuex.Store({
    state: {
        messages: [
            {
                key: tool.getTimestamp(), //列表key
                type: USER_TYPE.ROBOT, //类型
                value: '你好，您有什么需要，可以直接和我对话😁你好，您有什么需要，可以直接和我对话😁', //内容
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
            state.messages.push(message);
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
        }, message) => {
            return new Promise(function(resolve, reject) {
                commit("pushMassages", message);
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
