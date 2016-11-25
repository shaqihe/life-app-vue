<template lang="html">
    <div>
        <transition :name="transition">
            <router-view class="router-view"></router-view>
        </transition>
    </div>
</template>

<script>
import "./assets/scss/animation.scss";
import "./assets/scss/base.scss";
import "./assets/scss/icon/iconfont.css";

export default {
    name: 'app',
    data (){
        return {
            transition: "slide-left"
        };
    },
    watch: {
        "$route"(to, from){
            this.transition = this.checkDirecition(to.name, from.name) && "slide-left" || "slide-right";
        }
    },
    methods: {
        checkDirecition(to, from) {
            let map = ["index", "happy", "weather", "about", "message"];
            return (map.indexOf(to) - map.indexOf(from)) > 0;
        }
    },
}
</script>

<style lang="scss">
    @import "./assets/scss/min.scss";
    body {
        background: #f7f7f7;
    }

    .router-view{
        width: 100%;
        position: absolute;
        -webkit-transition: all .9s cubic-bezier(.55,0,.1,1);
        -moz-transition: all .9s cubic-bezier(.55,0,.1,1);
        -ms-transition: all .9s cubic-bezier(.55,0,.1,1);
        -o-transition: all .9s cubic-bezier(.55,0,.1,1);
        transition: all .9s cubic-bezier(.55,0,.1,1);
    }
</style>
