<template>
  <div id="home">
    <p class="dates">
      温度：{{Temperature}}°C<br>
      湿度：{{Humidity}}hpa<br>
      PM2.5：{{PM25}}μg/m³<br>
      CO₂：{{CO2}}ppm
    </p>
  </div>
</template>

<script>
  export default {
    name: "home",
    data() {
      return {
        Temperature:25,
        Humidity:25,
        PM25:320,
        CO2:123
      }
    },
  }
</script>

<style>
  #home{
    background: url("../assets/background_home.jpg");
    background-size: cover;
    width: 100%;
    height: 100vh;
  }
  .dates{
    position: absolute;
    top:50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 100px;
  }
</style>