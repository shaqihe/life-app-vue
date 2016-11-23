/**
 * ----------------------------------------------------------
 * 每个页面的头部位置
 *
 * @version  1.0
 * @author shaqihe(shaqihecome@163.com)
 *
 * @module src/components/header
 * ----------------------------------------------------------
 */

<template>
    <div>
        <div class="page-cover"
            v-if="showMenu"
            @click="showMenus">weewe
        </div>
        <div class="nv-toolbar">
            <div class="toolbar-nav" @click="showMenus">更多</div>
            <span v-text="pageType"></span>
        </div>
        <section class="nav-list" :class="{ show: showMenu }">
            <ul>
                <li>全部</li>
                <li>开心一刻</li>
                <li>生活出行</li>
                <li>关于</li>
            </ul>
        </section>
    </div>
</template>

<script>
    export default {
        name: 'pageHeader',
        props: ['pageType'],
        data (){
            return {
                showMenu: false
            }
        },
        methods: {
            showMenus (){
                this.showMenu=!this.showMenu;
            },
        }
    }
</script>

<style lang="scss">
@import "../assets/scss/min.scss";
.toolbar-nav {
    height: px2rem(80);
    line-height: px2rem(80);
    background: #478adb;
}

.nav-list {
    position: fixed;
    top: 0;
    bottom: 0;
    left: -200px;
    width: 200px;
    background-color: #fff;
    color: #313131;
    transition: all .3s ease;
    z-index: 99;
    &.show{
        transform: translateX(200px);
    }
}

.page-cover {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: rgba(0, 0, 0, .4);
    z-index: 7;
}
</style>
