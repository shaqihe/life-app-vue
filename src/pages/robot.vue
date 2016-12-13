/**
 * ----------------------------------------------------------
 * 自动对话机器人页面
 *
 * @version  1.0
 * @author shaqihe(shaqihecome@163.com)
 *
 * @module src/pages/robot
 * ----------------------------------------------------------
 */
<template>
    <!-- 全局header -->
    <div class="page-robot">
        <page-header :pageType="pageType"/>
        <messageList/>
    </div>
</template>
<script>
    import {RobotCache} from '../cache/cache';
    import messageList from '../components/MessageList'
    import pageHeader from '../components/Header'
    import {PAGE_TYPE} from '../common/constant/constant'
    export default {
        name: 'robot',
        data (){
            return {
                pageType:  PAGE_TYPE.ROBOT_PAGE
            }
        },
        components: {
            messageList, pageHeader
        }
    }
</script>
<style lang="scss">
    @import "../assets/scss/min.scss";
    .page-robot {
        padding-top: px2rem(88)!important;
    }
</style>

