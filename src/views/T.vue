<template>
    <div>
        <div id="app" class="main-container">
            <div class="upper-container" :style="bgStyle">
                <h2 class="temperature-text">{{currentTemperature |round}}°C</h2>
                <div class="temperature-graduation">
                    <div class="temperature-element" v-for="el in temperatureGrades" :key="el" :style="tempElementStyle(el)">
                    <span class="temperature-element-number">{{el}}</span><br>
                    <span class="temperature-element-line">|</span>
                </div>
                </div>
            </div>
            <div class="lower-container">
                <div class="slider-container"  :style="sliderStyle">
                    <svg width="200" height="50" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M74.3132 0 C47.0043 2.44032e-05 50.175 30 7.9179 30H144.27C99.4571 30 101.622 -2.44032e-05 74.3132 0Z" transform="translate(-7.38794 0.5)" fill="#12132C"/>
                    </svg>
                    <div class="slider-button">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import { TweenLite } from 'gsap'
    const coldGradient = {
        start: '#666699',
        end: '#000099'
    }
    const hotGradient = {
        start: '#f0ae4b',
        end: '#9b4d1b'
    }
    export default {
        name: "wendu",
        data(){
            return{
                temperatureGrades: [0, 5, 10, 15, 20, 25, 30, 35],
                currentTemperature:30,
                sliderX0: -310,
                sliderX:0,
                gradientStart: coldGradient.start,
                gradientEnd: coldGradient.end}
        },
        filters: {
            round (num) {
                return Math.round(num)
            }
        },
        computed: {
            sliderStyle () {
                this.sliderMoving();
                return `transform: translate3d(${ this.sliderX}px, 0, 0);`
            },
            bgStyle () {
                this.bian();
                return `background: linear-gradient(to bottom right, ${this.gradientStart}, ${this.gradientEnd});`
            },
        },
        methods: {
            sliderMoving () {
                this.sliderX = this.sliderX0+(this.currentTemperature*14)
            },
            bian(){
                let targetGradient = hotGradient
                if (this.currentTemperature < 25)         {
                    targetGradient = coldGradient
                }

                    TweenLite.to(this, 2, {
                        'gradientStart': targetGradient.start,
                        'gradientEnd': targetGradient.end,

                    })

            },
            tempElementStyle (tempNumber) {
                const nearDistance = 3
                const liftDistance = 12
                const diff = Math.abs(this.currentTemperature - tempNumber)
                const distY = (diff / nearDistance) - 1
                const elementY = Math.min(distY * liftDistance, 0)
                return  `transform: translate3d(0, ${elementY}px, 0)`
            }
        }

    }
</script>
<style scoped>
    .main-container {
        width: 100%;
    }
    .upper-container {
        height: 75vh;
        background: linear-gradient(to bottom right, #5564c2, #3a2e8d);
    }
    .lower-container {
        height: 25vh;
        background-color: #12132C;
    }
    .temperature-text {
        color: #fff;
        position: absolute;
        top:25%;
        left: 50%;
        transform: translate(-50%, -50%);
        font-size: 200px;
        user-select: none;
    }
    .temperature-element {
        text-align: center;
        display: inline-block;
        width: 50px;
        margin: 0 10px 0 10px;
        opacity: 0.7;
    }

    .temperature-element-line {
        font-size: 10px;
    }

    .temperature-graduation {
        position: absolute;
        top: 75%;
        left: 50%;
        transform: translate(-50%, -50%);
        bottom: 100px;
        user-select: none;
        color: #fff;
    }

    .slider-container {
        width: 150px;
        height: 80px;
        top: -30px;
        left: 50%;
        position: relative;
    }

    .slider-button {
        position: absolute;
        left: 37px;
        top: 10px;
        width: 60px;
        height: 60px;
        border-radius: 50%;
        background-color: #2724a2;
    }

</style>