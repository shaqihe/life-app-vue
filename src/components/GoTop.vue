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
    <i class="icon iconfont go-top-icon"  v-show="show" @click="goTop">&#xe807;</i>
</template>

<script>
    import tool from '../common/util/tool'
    export default {
        replace:true,
        data (){
            return {
                show: false,
            }
        },
        created (){
            window.onscroll = (e) => {
                if(tool.getScrollTop() > 100){
                    this.show = true;
                }
            }
        },
        beforeDestory (){
            window.onscroll = null;
        },
        methods:{
            goTop (){
                document.body.scrollTop = 0;
                this.show = false;
            }
        }
    }
</script>
<style>
    .go-top-icon {
        position: fixed;
        right: 10px;
        bottom: 80px;
        font-size: 50px;
        z-index: 9999;
        color: #68c59b;
    }
</style>
