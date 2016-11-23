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
        <div class="nv-toolbar" :class="{ 'nv-toolbar-happy': pageType=1}">
            <div class="toolbar-nav" @click="showMenus"></div>
            <span class="page-text" v-text="pageType"></span>
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

.nv-toolbar {
    height: px2rem(86);
    width: 100%;
    background-color: rgba(255, 255, 255, 0.95);
    position: fixed;
    top: 0;
    left: 0;
    -webkit-transition: all .3s ease;
    transition: all .3s ease;
    box-shadow: 0 0 4px rgba(0, 0, 0, 0.25);
    z-index: 6;
    .toolbar-nav {
        height: px2rem(84);
        width: px2rem(80);
        display: inline-black;
        line-height: px2rem(80);
        background: url('../assets/images/more.png') no-repeat center center;
        background-size: 19px 16px;
        position: absolute;
        top: 0;
        left: 0;
        z-index:99;
    }

    .page-text {
        display: block;
        text-align: center;
        height: 100%;
        line-height: px2rem(86);
        font-size: 16px;
        width: 100%;
        position: relative;
        z-index: 0;
    }

}

.nv-toolbar-happy {
    background-color: #ffba15;

    .page-text {
        color: #fff;
    }
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
