<template>
    <!-- 全局header -->
    <div>
        <img class="index" src="../assets/images/5.jpeg">
        <loading></loading>
    </div>
</template>
<script>
    import Loading from '../components/Loading'
    export default {
        created (){
            setTimeout(() => {
                this.$router.push({ name: 'happy'});
            },2000);
        },
        components: {
            Loading
        }
    }
</script>
<style lang="scss">
    .index{
        width: 100%;
        background-color: #fff;
        heigth: 100%;
    }
</style>

