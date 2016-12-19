/**
 * ----------------------------------------------------------
 * 关于
 *
 * @version  1.0
 * @author shaqihe(shaqihecome@163.com)
 *
 * @module src/pages/about
 * ----------------------------------------------------------
 */
<template>
    <div class="page-about page">
        <!-- 全局header -->
        <page-header :pageType="pageType" />
        <p class="page-about-title">项目采用vue前端框架，代码开源。</p>
        <p class="page-about-title"><a href="https://github.com/shaqihe/life-app-vue"> 代码github链接(来个star)</a></p>
    </div>
</template>
<script>
    import pageHeader from '../components/Header'
    import {PAGE_TYPE} from '../common/constant/constant'
    export default {
        name: 'about',
        data (){
            return {
                pageType:  PAGE_TYPE.ABOUT_PAGE
            }
        },
        components: {
            pageHeader
        }
    }
</script>
<style lang="scss">
    @import "../assets/scss/min.scss";
    .page-about {
        padding-top: px2rem(88)!important;
    }
    .page-about-title {
        margin-top: 50px;
        font-size: 20px;
    }
</style>

