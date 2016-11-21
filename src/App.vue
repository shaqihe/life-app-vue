<template lang="html">
    <div>
      <router-link to="/index" ><span class="icon-shouye iconfont "></span><p>首页</p></router-link>
       <router-link to="/happy" ><span class="icon-xitongcaidan iconfont "></span><p>分类</p></router-link>
        <transition :name="transition">
            <router-view class="router-view"></router-view>
        </transition>
        <cvLoading :show="loading"></cvLoading>
        <cvBacktotop></cvBacktotop>
    </div>
</template>

<script>
import Hello from './components/Hello'

export default {
  name: 'app',
  components: {
    Hello
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
