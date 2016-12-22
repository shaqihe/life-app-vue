/**
 * ----------------------------------------------------------
 * 音乐页面
 *
 * @version  1.0
 * @author shaqihe(shaqihecome@163.com)
 *
 * @module src/pages/music
 * ----------------------------------------------------------
 */
<template>
    <!-- 全局header -->
    <div class="page page-music">

    </div>
</template>
<script>
    import {PAGE_TYPE} from '../common/constant/constant'
    export default {
        name: 'music',
        data (){
            return {
                pageType: PAGE_TYPE.MUSIC
            }
        },
        created (){

        },
        components: {
            
        }
    }
</script>
<style lang="scss">
    @import "../assets/scss/min.scss";
    .page-music {
        padding-top: px2rem(88)!important;
    }
</style>

