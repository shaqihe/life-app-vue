<template>
    <!-- 全局header -->
    <div>
        <img class="index" src="../assets/images/5.jpg">
        <div class="spinner">
              <div class="rect1"></div>
              <div class="rect2"></div>
              <div class="rect3"></div>
              <div class="rect4"></div>
              <div class="rect5"></div>
        </div>
    </div>
</template>
<script>
    export default {
        created (){
            setTimeout(() => {
                this.$router.push({ name: 'happy'});
            },2000);
        }
    }
</script>
<style lang="scss">
    .index{
        width: 100%;
        background-color: #fff;
        heigth: 100%;
    }
    .spinner {
        margin: 50px auto;
        width: 50px;
        height: 60px;
        text-align: center;
        font-size: 10px;
    }

    .spinner > div {
        background-color: #7e7e85;
        margin-top: -200px;
        height: 100%;
        width: 6px;
        display: inline-block;
        -webkit-animation: stretchdelay 1.2s infinite ease-in-out;
        animation: stretchdelay 1.2s infinite ease-in-out;
    }

    .spinner .rect2 {
        -webkit-animation-delay: -1.1s;
        animation-delay: -1.1s;
    }
    .spinner .rect3 {
        -webkit-animation-delay: -1.0s;
        animation-delay: -1.0s;
    }

    .spinner .rect4 {
        -webkit-animation-delay: -0.9s;
        animation-delay: -0.9s;
    }

    .spinner .rect5 {
        -webkit-animation-delay: -0.8s;
        animation-delay: -0.8s;
    }

    @-webkit-keyframes stretchdelay {
        0%, 40%, 100% {
            -webkit-transform: scaleY(0.4)
        }
        20% {
            -webkit-transform: scaleY(1.0)
        }
    }

    @keyframes stretchdelay {
        0%, 40%, 100% {
            transform: scaleY(0.4);
            -webkit-transform: scaleY(0.4);
       }
        20% {
            transform: scaleY(1.0);
           -webkit-transform: scaleY(1.0);
        }
    }
</style>

