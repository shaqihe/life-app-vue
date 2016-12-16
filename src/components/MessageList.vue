/**
 * ----------------------------------------------------------
 * 回到顶部按钮
 *
 * @version  1.0
 * @author shaqihe(shaqihecome@163.com)
 *
 * @module src/components/gotop
 * ----------------------------------------------------------
 */
<template>
    <div class="ux-message-list">
        <ul class="ux-message-list-ul" id="msg-end" @click="contract">
            <li class="ux-message-list-item" :class="{'ux-message-list-right': item.type==USER_TYPE.PEOLE }" v-for="item in messageList">
                <img class="ux-message-list-my-img" src="http://7xqd2y.com1.z0.glb.clouddn.com/images11.jpg">
                <div class="ux-message-text">
                    <span class="triangle"></span>
                    {{item.value}}
                </div>
            </li>
        </ul>
        <div class="ux-message-list-post">
            <input type="text" v-model="message" @keyup.enter="sendMessage"/>
            <span class="ux-message-list-send-but" @click="sendMessage">发送</span>
        </div>
    </div>
</template>

<script>
    import tool from '../common/util/tool'
    import {USER_TYPE} from '../common/constant/constant'
    import {RobotCache} from '../cache/cache';
    export default {
        name: 'messageList',
        data (){
            return {
                USER_TYPE: USER_TYPE,
                message: ''
            }
        },
        computed: {
            messageList() {
                return this.$store.getters.getMessages;
            },
            userId() {
                return this.$store.getters.getUserId;
            }
        },
        methods:{
            contract() {},
            //发送消息
            sendMessage () {
                if (this.message == '') {
                    return;
                }
                 this.$store.dispatch('pushMassages',
                {
                    key: tool.getTimestamp(), //列表key
                    type: USER_TYPE.PEOLE, //类型
                    value: this.message, //内容
                    userId: '' //信息发送者
                }).then(data =>{
                    RobotCache.getWeather({info: this.message,userid: this.userId}).then(data =>{
                         this.$store.dispatch('pushMassages',{
                            key: tool.getTimestamp(), //列表key
                            type: USER_TYPE.ROBOT, //类型
                            value: data, //内容
                            userId: '' //信息发送者
                         }).then(data =>{this.clearInput()});
                        
                    })
                });
            },
            //清空输入框
            clearInput() {
                this.message = '';
                document.getElementById('msg-end').scrollTop = 
                document.getElementById('msg-end').scrollHeight;
            }
        }
    }
</script>
<style lang="scss">
@import "../assets/scss/min.scss";
    body {
        background: #ebebeb;
    }
    .ux-message-list {
        padding-top: px2rem(40); 
        .ux-message-list-ul {
            max-width: 700px;
            padding-bottom: px2rem(130); 
            position: fixed;
            bottom: 0;
            top: 0;
            margin-top: px2rem(96); 
            overflow: scroll;
        }
        .ux-message-list-item {
            position: relative;
            float: left;
            width: px2rem(700);
            margin-bottom: px2rem(80);
            overflow: auto;
            zoom: 1;
        }
        .ux-message-list-my-img {
                width: 40px;
                height: 40px;
                float: left;
                border-radius: 40px;
                display: inline-block;
        }

        .ux-message-text {
            position: relative;
            max-width: px2rem(420);
            display: inline-block;
            float: left;
            margin-left: 10px;
            padding: 10px;
            background: #fff;
            .triangle {
                display: inline-block;
                position: absolute;
                top: 12px;
                margin-left: -17px;
                width:0; height:0;
                overflow: hidden;
                line-height: 0;
                font-size: 0;
                vertical-align: middle;
                border-right: 7px solid #fff;
                border-left: 0 none;
                border-top: 7px solid transparent;
                border-bottom: 7px solid transparent;
                _color: #FF3FFF;
                _filter: chroma(color=#FF3FFF);
            }
        }

        .ux-message-list-right {
            float: right;
            .ux-message-list-my-img {
                float: right;
            }

            .ux-message-text {
                float: right;
                margin-right: 10px;
                background: #a2e65b;
                .triangle {
                    display: inline-block;
                    position: absolute;
                    top: 12px;
                    right: -7px;
                    width:0; height:0;
                    overflow: hidden;
                    line-height: 0;
                    font-size: 0;
                    vertical-align: middle;
                    border-left: 7px solid #a2e65b;
                    border-right: 0 none;
                    border-top: 7px solid transparent;
                    border-bottom: 7px solid transparent;
                    _color: #FF3FFF;
                    _filter: chroma(color=#FF3FFF);
                }
            }
        }

        .ux-message-list-post {
            height: px2rem(120); 
            width: 100%;
            position: fixed;
            bottom: 0px;
            background: #f5f5f7;
            border-top: 2px solid #e9e9eb;
            input {
                width: px2rem(600);
                height: px2rem(80);
                margin: 0 0 0 px2rem(18);
                border: 1px solid #e9e9eb;
                border-radius: 12px;
                font-size: 16px;
            }
            .ux-message-list-send-but {
                display: inline-block;
                padding-left: px2rem(15);
                width: px2rem(95);
                height: px2rem(120);
                line-height: px2rem(120);
                font-size: 16px;
                color: #11bc80;
            }
        }
    }
</style>
