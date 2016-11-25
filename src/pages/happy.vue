<template>
    <div class="page-happy">
        <page-header :pageType="pageType" @click="www"/>
        <!-- 首页列表 -->
        <nav class="page-happy－nav">
            <div class="top-bar">
                <router-link :to="{ name: 'happy', params: { happyType: 1 }}">
                    <span>混合</span>
                </router-link>
                <router-link :to="{ name: 'happy', params: { happyType: 2 }}" >
                    <span>段子</span>
                </router-link>
                <router-link :to="{ name: 'happy', params: { happyType: 3 }}" >
                    <span>趣图</span>
                </router-link>
            </div>
        </nav>
        <ul class="posts-list">
            <li v-for="item in list" class="happy-item">
                <div class="happy-item-title">
                    <img src="http://pic.qiushibaike.com/system/avtnew/2479/24796558/thumb/20150623181015.jpg?imageView2/1/w/90/h/90">
                    <p class="happy-item-name">
                        {{randomFont()}}
                    </p>
                </div>
                <div class="happy-item-content">
                    {{item.content}}
                </div>
            </li>
        </ul>
        <load-more :loading="loading" @load="loadMore"/>
        <go-top/>
    </div>
</template>

<script>
import pageHeader from '../components/Header'
import loadMore from '../components/LoadMore'
import goTop from '../components/GoTop'
import {PAGE_TYPE} from '../common/constant/constant'
import random from '../common/util/random'
import HappyListCache from '../cache/cache'

export default {
    name: 'happy',
    data () {
        return {
            PAGE_SIZE: 10,
            pageType: PAGE_TYPE.HAPPY_PAGE,
            loading: false,
            page: 1,
            list:[]
        }
    },
    created() {
        this.getHappyList();
    },
    watch: {
        "$route"(to, from) {alert()
            console.log(from.params);
        }
    },
    methods: {
        //随机生成作者姓名(而且生僻字可不少...)
        randomFont() {
            return random.randomFont(3, 10);
        },
        www(){
            this.$route.params.happyType = 3;
        },
        //获取列表
        getHappyList() {
            this.loading = true;
            HappyListCache.getHappyList({pagesize: this.PAGE_SIZE,page: this.page})
            .then(
                data=> {
                    this.list = this.list.concat(data);
                    this.loading = false;
                },
                error => {
                    console.error(error);
                }
            );
        },
        //加载下一页
        loadMore() {
            this.getHappyList();
        }
    },
    components: {
        pageHeader,
        loadMore,
        goTop
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
    @import "../assets/scss/min.scss";
    .page-happy {
        padding-top: px2rem(88)!important;
    }

    .page-happy－nav{
        padding: 0 px2rem(40);
        height: px2rem(88);
        line-height: px2rem(88);
        background: #fff;
        width: 100%;
        border-top: 1px solid transparent;
        border-bottom: 1px solid #eaeaea;
        a {
            display: block;
            height: 44px;
            line-height: 44px;
            float: left;
            text-align: center;
            font-weight: 400;
            font-size: 14px;
            width: 16.66%;
            color: #333;
        }
    }

    .happy-item {
        margin-top: 15px;
        background: #fff;
        padding: 18px 16px;
        .happy-item-title {
            padding-bottom: 18px;
            height: 40px;
            overflow: hidden;
            zoom: 1;
            img {
                width: 40px;
                height: 40px;
                border-radius: 40px;
                display: inline-block;
                float: left;
            }

            .happy-item-name {
                display: inline-block;
                width: 100px;
                height: 40px;
                float: left;
                color: #8F8F95;
                font-size: 16px;
                margin-left: 20px;
                line-height: 40px;
                overflow: hidden;
                text-overflow: ellipsis;
                -o-text-overflow: ellipsis;
                white-space: nowrap;
            }
        }

        .happy-item-content {
            font-size: 16px;
            color: #464646;
            line-height: 150%;
            padding-bottom: 20px;
        }

    }
</style>
