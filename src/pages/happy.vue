/**
 * ----------------------------------------------------------
 * 开心一刻页面
 *
 * @version  1.0
 * @author shaqihe(shaqihecome@163.com)
 *
 * @module src/pages/happy
 * ----------------------------------------------------------
 */
<template>
    <div class="page-happy page">
        <page-header :pageType="pageType" />
        <!-- 首页列表 -->
        <nav class="page-happy－nav">
            <div class="top-bar">
                <a @click="changeType(HAPPY_TYPE.IMAGE)" :class="{activeType: happyType == HAPPY_TYPE.IMAGE }">
                    <span>趣图</span>
                </a>
                <a @click="changeType(HAPPY_TYPE.TEXT)" :class="{activeType: happyType == HAPPY_TYPE.TEXT }">
                    <span>段子</span>
                </a>
            </div>
        </nav>
        <ul class="posts-list">
            <li v-for="item in list" class="happy-item">
                <div class="happy-item-title">
                    <img :src="randomImg()">
                    <p class="happy-item-name">
                        {{randomFont()}}
                    </p>
                </div>
                <div class="happy-item-content">
                    {{item.content}}
                    <img :src="item.url" v-show='item.url'>
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
import {HAPPY_TYPE} from '../common/constant/constant'
import random from '../common/util/random'
import {HappyListCache} from '../cache/cache'

export default {
    name: 'happy',
    data () {
        return {
            PAGE_SIZE: 10,
            HAPPY_TYPE: HAPPY_TYPE,
            pageType: PAGE_TYPE.HAPPY_PAGE,
            happyType: HAPPY_TYPE.IMAGE, //
            loading: false,
            page: 1,
            list:[]
        }
    },
    created() {
        this.getHappyList();
    },
    watch: {
        "happyType"(value){
            this.getHappyList(true);
        }
    },
    methods: {
        //随机生成作者姓名(而且生僻字可不少...)
        randomFont() {
            return random.randomFont(3, 10);
        },

        //随机生成作者头像
        randomImg() {
            return 'http://7xqd2y.com1.z0.glb.clouddn.com/images' + random.randomNum(1, 28) + '.jpg';
        },
        //切换类型
        changeType(val) {
            this.happyType = val;
            this.page = 1;
        },

        //获取列表
        getHappyList(isClear) {
            this.loading = true;
            if (isClear) {
                this.list = [];
            }
            HappyListCache.getHappyList({pagesize: this.PAGE_SIZE,page: this.page,happyType: this.happyType})
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
            this.page++;
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
        border-top: 1px solid transparent;
        border-bottom: 1px solid #eaeaea;
        a {
            display: block;
            height: px2rem(88);
            line-height: px2rem(88);
            float: left;
            text-align: center;
            font-weight: 400;
            font-size: 14px;
            width: 49%;
            color: #333;
            &:hover {
                cursor: pointer;
            }
        }

        .activeType {    cursor: pointer;
            border-bottom: 2px solid #ffba15;
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
            img {
                margin-top: 10px;
                width: 100%;
            }
        }

    }
</style>
