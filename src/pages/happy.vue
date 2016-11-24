<template>
    <div class="page-happy">
        <page-header :pageType="pageType" />
        <loading v-show="loading"/>
        <div>
        开心一刻网页
        </div>
    </div>
</template>

<script>
import pageHeader from '../components/Header'
import Loading from '../components/Loading'
import {PAGE_TYPE} from '../common/constant/constant';

export default {
    name: 'happy',
    data () {
        return {
            pageType: PAGE_TYPE.HAPPY_PAGE,
            loading: false
        }
    },
    components: {
        pageHeader,Loading
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
    @import "../assets/scss/min.scss";
    .page-happy {
        padding-top: px2rem(88)!important;
    }
</style>
