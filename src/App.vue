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
@import "./assets/scss/icon/iconfont.css";
    body {
        padding-top: 44px;
    }
</style>
