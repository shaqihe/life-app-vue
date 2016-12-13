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
        <ul>
            <li class="ux-message-list-item" v-for="item in messageList">
                <img class="ux-message-list-my-img" src="http://7xqd2y.com1.z0.glb.clouddn.com/images11.jpg">
                <div class="ux-message-text">
                    {{item.value}}
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
    import tool from '../common/util/tool'
    export default {
        name: 'messageList',
        data (){
            return {
                show: false,
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
        .ux-message-list-item {
            position: relative;
            margin-bottom: px2rem(80);
        }

        padding-top: px2rem(40); 
        .ux-message-list-my-img {
                width: 40px;
                height: 40px;
                border-radius: 40px;
                display: inline-block;
        }

        .ux-message-text {
            max-width: px2rem(420);
            display: inline-block;
            position: absolute;
            top: 0px;
            margin-left: 10px;
            padding: 10px;
            background: #fff;
        }
    }
</style>
