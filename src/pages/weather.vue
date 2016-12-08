/**
 * ----------------------------------------------------------
 * 开心一刻页面
 *
 * @version  1.0
 * @author shaqihe(shaqihecome@163.com)
 *
 * @module src/pages/weather
 * ----------------------------------------------------------
 */
<template>
    <div class="page-weather">
        <page-header :pageType="pageType" />
        <div class="page-weather-content"v-if="weather && weather.realtime && weather.weather">
            <div class="page-weather-cityrow">
                <p>{{weather.realtime.city_name}}</p>
                <p>{{weather.realtime.date}} 周{{weather.weather[0].week}} {{weather.realtime.moon}}</p>
                <p class="page-weather-time">{{weather.realtime.time}}</p>
            </div>
            <div class="page-weather-maininfo">
                <div class="page-weather-maininfo-day">
                    <span class="temperature">
                        {{weather.realtime.weather.temperature}}
                        <span class="wa-sg-weather-current-unit">°</span>
                    </span>
                    <span class="info">{{weather.realtime.weather.info}}</span>
                    <div class="page-weather-maininfo-day_details">
                        今天： {{weather.weather[0].info.night[2]}}~{{weather.weather[0].info.day[2]}}°C {{weather.weather[0].info.day[1]}} {{weather.weather[0].info.day[3]}} 
                    </div>
                </div>
            </div>
            <div class="page-weather-after">
                <ul>
                    <li v-for="item in weather.weather" class="page-weather-after_item">
                        <span>周{{item.week}}</span>
                        <span class="icon-span"><i class="icon iconfont">&#xe600;</i></span>
                        <span>
                            {{item.info.day[2]}}
                            <span class="span-current-unit">°</span>
                        </span>
                        <span class="span-hr"></span>
                        <span>
                            {{item.info.night[2]}}
                            <span class="span-current-unit">°</span>
                        </span>
                        <span>{{item.info.day[3]}}</span>
                        <span>{{item.info.day[4]}}</span>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
import pageHeader from '../components/Header'
import {PAGE_TYPE} from '../common/constant/constant';
import {WeatherCache} from '../cache/cache'

export default {
    name: 'happy',
    data() {
        return {
            pageType: PAGE_TYPE.WEATHER_PAGE,
            weather: {}
        }
    },
    components: {
        pageHeader
    },
    created() {
        this.getWeather();
    },
    methods: {
        getWeather() {
            WeatherCache.getWeather().then(
                data => {this.weather = data;},
                error => {console.log(error)}
            );
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
    @import "../assets/scss/min.scss";
    .page-weather {
        padding-top: px2rem(88)!important;
        height: 100%;
        background-image: -webkit-linear-gradient(top,#0c264d 0%,#205d91 60%,#2568a1 100%);
        .page-weather-content {
            padding: px2rem(32) 0;
        }

        .page-weather-cityrow {
            margin-top: px2rem(50);
            text-align: right;
            padding: 0 px2rem(32);
            text-shadow: 1px 1px 0 rgba(0, 0, 0, .23);
            color: #fff;
            font-size: 15px;
            div {
                height: 22px;
                line-height: 22px;
            }
            .page-weather-time {
                color: rgba(255, 255, 255, .5);
            }
        }

        .page-weather-maininfo {
            margin-top: 35px;
            .page-weather-maininfo-day {
                padding: 0 px2rem(32);
                text-shadow: 1.5px 1.5px 0 rgba(0, 0, 0, .23);
                color: #fff;
                .temperature {
                    font-size: 100px;
                    position: relative;
                    font-family: 'HelveticaNeue-Thin';
                }
                
                .wa-sg-weather-current-unit {
                    position: absolute;
                    top: 20px;
                    left: 60px;
                    font-size: 30px;
                    font-weight: bold;
                }

                .info {
                    font-size: 50px;
                }

                .page-weather-maininfo-day_details {
                    font-size: 18px;
                    margin: 15px 0 20px 0;
                }
            }            
        }
        .page-weather-after {
            margin-top: 30px;
            padding: px2rem(30) 0;
            background-color: rgba(255, 255, 255, 0.0784314);
            height: px2rem(480);
            .page-weather-after_item {
                border-right: px2rem(2) solid rgba(255, 255, 255, .1);
                float: left;
                height: px2rem(480);
                width: px2rem(148);
                span {
                    position: relative;
                    display: block;
                    margin-bottom: 8px;
                    width: px2rem(148);
                    font-size: 16px;
                    color: #fff;
                    text-align: center;
                }

                .icon {
                    font-size: 32px;
                }

                .icon-span {
                    margin: 15px 0;
                }

                .span-current-unit {
                    position: absolute;
                    top: -5px;
                    left: 12px;

                }

                .span-hr {
                    margin: 5px auto;
                    height: px2rem(118);
                    width: 0;
                    border-right: 1px dashed #fff;
                }
            }
        }
    }

</style>
