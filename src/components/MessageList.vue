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
    <div>
        <ul>
            <li v-for="item in messageList">
                {{item.value}}
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
    .go-top-icon {
        position: fixed;
        right: 10px;
        bottom: 80px;
        font-size: 50px;
        z-index: 9999;
        color: #68c59b;
    }
</style>
