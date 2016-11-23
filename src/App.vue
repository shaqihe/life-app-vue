<template lang="html">
    <div>
        <transition :name="transition">
            <router-view class="router-view"></router-view>
        </transition>
    </div>
</template>

<script>

export default {
  name: 'app',
}
</script>

<style lang="scss">
@import "./assets/scss/base.scss";

    body {

    }
    #app {
          font-family: 'Avenir', Helvetica, Arial, sans-serif;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
          text-align: center;
          color: #2c3e50;
          margin-top: 60px;
    }
</style>
