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
        <div v-if="weather && weather.realtime && weather.weather">
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
    }
</style>
