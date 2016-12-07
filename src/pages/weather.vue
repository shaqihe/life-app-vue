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
                </div>
            </div>
            {{weather.realtime.city_name}}
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
            padding: px2rem(32)
        }

        .page-weather-cityrow {
            margin-top: px2rem(100);
            text-align: right;
            text-shadow: 1px 1px 0 rgba(0, 0, 0, .23);
            color: #fff;
            font-size: .2rem;
            div {
                height: 22px;
                line-height: 22px;
            }
            .page-weather-time {
                color: rgba(255, 255, 255, .5);
            }
        }

        .page-weather-maininfo {
            margin-top: 55px;
            .page-weather-maininfo-day {
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
            }
            
        }
    }

</style>
