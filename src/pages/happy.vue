<template>
    <div>
        <page-header :pageType="pageType" />
        <div>
        开心一刻网页
        </div>
    </div>
</template>

<script>
import pageHeader from '../components/Header'
import {PAGE_TYPE} from '../common/constant/constant';

export default {
    name: 'happy',
    data () {
        return {
            pageType: PAGE_TYPE.WEATHER_PAGE
        }
    },
    components: {
        pageHeader
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.hello {
    .divtest {
        font-size: 30px;
    }
}
</style>
