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
    <div :class="pageType.className" class="ux-header">
        <div class="page-cover"
            v-if="showMenu"
            @click="showMenus">weewe
        </div>
        <div class="nv-toolbar">
            <div class="toolbar-nav" @click="showMenus">
                <i class="icon iconfont">&#xe726;</i>
            </div>
            <span class="page-text" v-text="pageType.text"></span>
        </div>
        <section class="nav-list" :class="{ show: showMenu }">
            <div class="nav-list-title">
                <i class="icon iconfont">&#xe612;</i> 陪伴你的左右
            </div>
            <ul>
                <li>
                    <router-link to="/happy" >
                        <i class="icon iconfont">&#xe65f;</i>开心一刻
                    </router-link>
                </li>
                <li>
                    <router-link to="/weather" >
                        <i class="icon iconfont">&#xe766;</i>天气预报
                    </router-link>
                </li>
                <li>
                    <router-link to="/robot" >
                        <i class="icon iconfont">&#xe600;</i>万能机器人
                    </router-link>
                </li>
                 <li>
                    <router-link to="/about" >
                        <i class="icon iconfont">&#xe65f;</i>关于我
                    </router-link>
                </li>
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
.page-about {
    height: 100%;
}

.ux-header {
    max-width: 700px;
}
.nv-toolbar {
    height: px2rem(86);
    max-width: 700px;
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
        background-size: 19px 16px;
        position: absolute;
        top: 0;
        left: 0;
        text-align: center;
        z-index:99;
        i {
            font-size: 32px;
            color: #1c8062;
        }
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

.nav-list {
    background: url('../assets/images/5fe.jpg');
    background-size: 100% 100%;  
    position: fixed;
    top: 0;
    bottom: 0;
    left: -200px;
    width: 200px;
    height: 100%;
    background-color: #fff;
    color: #0cf1d6;
    transition: all .3s ease;
    z-index: 99;
    &.show{
        transform: translateX(200px);
    }

    .nav-list-title {
        margin-left: 25px;
        font-size: 16px;
        color: #cae3e2;
        padding: px2rem(30) 0;
        height: px2rem(80);
        line-height: px2rem(80);
        border-bottom: 1px solid #d4d4d4;
        margin-right: 25px;
        margin-bottom: 20px;
        .icon {
            margin-right: 5px;
            font-size: 20px;
            color: #0cf1d6;
        }
    }

    ul {
        width: 170px;
        margin-left: 25px;
        li {
            a {
                color: #f5f5f7;
            }
            .router-link-active {
                display: inline-black;
                width: 100%;
                height: 100%;
                i {
                    color: #0cf1d6;
                }
                color: #0cf1d6;
            }
            i {
                margin-right: 30px;
            }
            margin-right: 25px;
            font-size: 14px;
            color: #f5f5f7;
            padding: px2rem(28) 0;
        }
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
