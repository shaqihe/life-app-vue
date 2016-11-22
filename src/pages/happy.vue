<template>
    <div>
        <page-header/>
        <div>
        开心一刻网页
        </div>
    </div>
</template>

<script>
import pageHeader from '../components/Header'
export default {
    name: 'happy',
    data () {
        return {}
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
