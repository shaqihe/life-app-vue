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
        <ul class="ux-message-list-ul">
            <li class="ux-message-list-item" :class="{'ux-message-list-right': item.type==USER_TYPE.PEOLE }" v-for="item in messageList">
                <img class="ux-message-list-my-img" src="http://7xqd2y.com1.z0.glb.clouddn.com/images11.jpg">
                <div class="ux-message-text">
                    <span class="triangle"></span>
                    {{item.value}}
                </div>
            </li>
        </ul>
         <input type="text"/>
    </div>
</template>

<script>
    import tool from '../common/util/tool'
    import {USER_TYPE} from '../common/constant/constant'
    export default {
        name: 'messageList',
        data (){
            return {
                USER_TYPE: USER_TYPE
            }
        },
        computed: {
            messageList () {
                return this.$store.getters.getMessages
            }
        },
        methods:{
            goTop (){
                document.body.scrollTop = 0;
                this.show = false;
            }
        }
    }
</script>
<style lang="scss">
@import "../assets/scss/min.scss";
    .ux-message-list {
        padding-top: px2rem(40); 
        .ux-message-list-ul {
            height: px2rem(940);
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
                    border-left: 7px solid #fff;
                    border-right: 0 none;
                    border-top: 7px solid transparent;
                    border-bottom: 7px solid transparent;
                    _color: #FF3FFF;
                    _filter: chroma(color=#FF3FFF);
                }
            }
        }
    }
</style>
