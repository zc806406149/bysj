<template>
  <div id="pm25">
    <vue-particles
            color="#fff"
            :particle-opacity="0.7"
            :particles-number="PM"
            shape-type="circle"
            :particle-size="4"
            lines-color="#fff"
            :lines-width="1"
            :line-Linked="false"
            :line-opacity="0.4"
            :lines-distance="25"
            :move-speed="3"
            :hover-effect="true"
            hover-mode="grab"
            :click-effect="false"
            click-mode="bubble"
            class="lizi"
    >
    </vue-particles>
    <span class="concentration">
      <p>PM2.5是指大气中空气动力学当量直径小于或等于2.5微米的颗粒物</p>
      {{PM}}μg/m³
      <p id="tips"></p>
    </span>
    <router-view> </router-view>
  </div>
</template>
<script>
  export default {
    name: "pm25",
    data() {
      return {
        PM:111,
      }
    },
    methods:{
       Dateup() {
         let i=document.getElementById('tips');
        if(this.PM>250){
          i.innerText='空气质量严重污染'
        }
        else if (this.PM>150){
          i.innerText='空气质量重度污染'
        }
        else if(this.PM>115)
        {
          i.innerText='空气质量中度污染'
        }
        else if(this.PM>75){
          i.innerText='空气质量轻度污染'
        }
        else if(this.PM>35){
          i.innerText='空气质量良好'
        }
        else i.innerText='空气质量优'
      }
    },
    mounted() {
      this.Dateup();
    }
  }
</script>

<style>
  .lizi{
    background: black;
  }
  .concentration{
    position: absolute;
    top:50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 100px;
  }
  .concentration p{
    font-size: 30px;
  }
</style>
