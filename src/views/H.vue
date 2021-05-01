<template>
  <div class="back">
    <p class="p_style">相对湿度</p>
    <div id="liquidFill" class="wrap">
    </div>
  </div>
</template>
<script>
  import 'echarts-liquidfill'

  export default {
    name: "shidu",
    data() {
      return {
        xxxxx: 1,
      }
    },
    computed: {},
    mounted() {
      this.liquidFill();
    },
    methods: {
      liquidFill() {//方法
        let liquid = this.$echarts.init(document.getElementById('liquidFill'));
        liquid.setOption({
          series: [{
            type: 'liquidFill',//类型
            data: [0.7, 0.5, 0.3, 0.1],
            color: ['#294D99', '#156ACF', '#1598ED', '#45BDFF'],
            center: ['50%', '50%'],
            radius: '50%',
            amplitude: '8%',
            waveLength: '100%',
            phase: 'auto',
            period: 'auto',
            direction: 'right',
            shape: 'circle',
            waveAnimation: true,
            animationEasing: 'linear',
            animationEasingUpdate: 'linear',
            animationDuration: 2000,
            animationDurationUpdate: 1000,
            outline: {
              show: true,
              borderDistance: 8,
              itemStyle: {
                color: 'none',
                borderColor: '#294D99',
                borderWidth: 8,
                shadowBlur: 20,
                shadowColor: 'rgba(0, 0, 0, 0.25)'
              }
            },

            backgroundStyle: {
              color: '#E3F7FF'
            },
            itemStyle: {
              opacity: 0.95,
              shadowBlur: 50,
              shadowColor: 'rgba(0, 0, 0, 0.4)'
            },
            label: {
              show: true,
              color: '#294D99',
              insideColor: '#fff',
              fontSize: 50,
              fontWeight: 'bold',
              align: 'center',
              baseline: 'middle',
              position: 'inside'
            },
            emphasis: {
              itemStyle: {
                opacity: 0.8
              }
            }

          }],
        })
      }
    }

  }
</script>
<style scoped>

  .p_style{
    font-size: 70px;
    position: absolute;
    top: 15%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 100;
  }
  .wrap {
    height: 800px;
    width: 800px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: #fff;
  }
</style>