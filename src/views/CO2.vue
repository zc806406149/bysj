<template>
    <div class="wrap">
      <vue-particles
          color="#fff"
          :particle-opacity="0.7"
          :particles-number="CONUMBER"
          shape-type="circle"
          :particle-size="4"
          lines-color="#fff"
          :lines-width="0"
          :line-Linked="false"
          :line-opacity="0.4"
          :lines-distance="0"
          :move-speed="10"
          :hover-effect="false"
          hover-mode="grab"
          :click-effect="false"
          click-mode="bubble"
          class="CO"
      >
      </vue-particles>
        <span class="concentration">
      <p>PPM表示一百万份重量的溶液中所含溶质的质量</p>
      {{CO2}}ppm
      <p id="tips"></p>
    </span>
    </div>
</template>

<script>
    export default {
        name: "CO2",
        data() {
            return {
                CO2:6000,
              CONUMBER:0
            }
        },
        methods:{
            Dateup() {
              this.CONUMBER=Math.ceil(this.CO2/10);
                let i=document.getElementById('tips');
                if(this.CO2>5000){
                    i.innerText='不要待在这超过8小时，可能出现缺氧、造成脑损伤、昏迷甚至死亡'
                }
                else if (this.CO2>2000){
                    i.innerText='感到头疼、嗜睡、呆滞、无法集中精神'
                }
                else if(this.CO2>1000)
                {
                    i.innerText='空气混浊，昏昏欲睡'
                }
                else if(this.CO2>450){
                    i.innerText='空气清新，呼吸顺畅'
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
  .CO{
    background: #3a2edd;
  }
    .wrap{
        height: 100vh;

    }
    .concentration{
        position: absolute;
        top:50%;
        left: 50%;
        transform: translate(-50%, -50%);
        font-size: 100px;
        color: #fff;
    }
    .concentration p{
        font-size: 30px;

    }
</style>