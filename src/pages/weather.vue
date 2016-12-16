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
    <div class="page-weather page">
        <page-header :pageType="pageType" />
        <div class="page-weather-content"v-if="weather && weather.realtime && weather.weather">
            <div class="page-weather-cityrow">
                <p @touchend="cityChangeShow">
                    {{weather.realtime.city_name}}
                     <i class="icon iconfont">&#xe6c4;</i>
                 </p>
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
                    <span @touchend="cityChangeShow" class="change-city-icon">切换城市 <i class="icon iconfont">&#xe6c4;</i></span>
                    <div class="page-weather-maininfo-day_details">
                        今天： {{weather.weather[0].info.night[2]}}~{{weather.weather[0].info.day[2]}}°C {{weather.weather[0].info.day[1]}} {{weather.weather[0].info.day[3]}} 
                    </div>
                </div>
            </div>
            <div class="page-weather-after">
                <ul>
                    <li v-for="item in weather.weather" class="page-weather-after_item">
                        <span>周{{item.week}}</span>
                        <span class="icon-span">
                            {{item.info.day[1]}}
                        </span>
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
        <transition name="bounce">
            <citySelect v-show="showSelect" @select="cityChange" @noselect="noselect"/>
        </transition>
    </div>
</template>

<script>
import pageHeader from '../components/Header';
import citySelect from '../components/CitySelect';
import {PAGE_TYPE} from '../common/constant/constant';
import {WeatherCache} from '../cache/cache';

export default {
    name: 'happy',
    data() {
        return {
            pageType: PAGE_TYPE.WEATHER_PAGE,
            showSelect: false,
            cityName: localStorage.getItem("lifeCityName") || '北京',
            weather: {}
        }
    },
    components: {
        pageHeader,citySelect
    },
    created() {
        this.getWeather();
    },
    methods: {
        cityChangeShow(){
            this.showSelect = !this.showSelect;
        },
        noselect(){
            this.showSelect = false;
        },
        cityChange(_data){
            this.showSelect = false;
            localStorage.setItem('lifeCityName',_data.selectCity);
            this.cityName = _data.selectCity;
            this.getWeather();
        },
        getWeather() {
            WeatherCache.getWeather({cityname: this.cityName}).then(
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
                height: px2rem(44);
                line-height: px2rem(44);
            }

            .page-weather-time {
                color: rgba(255, 255, 255, .5);
            }

            .icon {
                font-size: px2rem(44);
            }
        }

        .page-weather-maininfo {
            margin-top: px2rem(70);
            .change-city-icon {
                margin-top: px2rem(126);
                display: inline-block;
                float: right;
            }

            .page-weather-maininfo-day {
                padding: 0 px2rem(32);
                text-shadow: 1.5px 1.5px 0 rgba(0, 0, 0, .23);
                color: #fff;
                .temperature {
                    font-size: px2rem(200);
                    position: relative;
                    font-family: 'HelveticaNeue-Thin';
                }
                
                .wa-sg-weather-current-unit {
                    position: relative;
                    top: - px2rem(100);
                    left: - px2rem(40);
                    font-size: px2rem(60);
                    font-weight: bold;
                }

                .info {
                    font-size: px2rem(100);
                }

                .page-weather-maininfo-day_details {
                    font-size: 18px;
                    margin: px2rem(30) 0 px2rem(40) 0;
                }
            }            
        }
        .page-weather-after {
            margin-top: px2rem(60);
            padding: px2rem(30) 0;
            background-color: rgba(255, 255, 255, 0.0784314);
            height: px2rem(480);
            .page-weather-after_item {
                border-right: px2rem(2) solid rgba(255, 255, 255, .1);
                float: left;
                height: px2rem(480);
                width: px2rem(146);
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
                    font-size: px2rem(64);
                }

                .icon-span {
                    margin: px2rem(30) 0;
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
    .bounce-enter-active {
        animation: bounce-in .5s;
    }
    .bounce-leave-active {
        animation: bounce-out .5s;
    }
    @keyframes bounce-in {
        0% {
            transform: scale(0);
        }
        50% {
            transform: scale(1.5);
        }
        100% {
            transform: scale(1);
        }
    }
    @keyframes bounce-out {
        0% {
            transform: scale(1);
        }
        50% {
            transform: scale(1.5);
        }
        100% {
            transform: scale(0);
        }
    }

</style>
