<template>
    <div class="wrap" :style="mohu" >
    </div>
</template>
<script>
    export default {
        name: "shidu",
    data(){
        return{
        xxxxx:1,
        }
    },
        computed: {
            mohu () {
                return `filter: blur(${ this.xxxxx}px);opacity: 0.7;`
            },
            },
        methods:{
    }}
</script>
<style scoped>
.wrap{
    background: url("../assets/background_H.jpeg");
    background-size: cover;
    width: 100%;
    height: 100vh;
    z-index: 10;
}
</style>