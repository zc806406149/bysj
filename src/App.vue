<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">主页</router-link> |
      <router-link to="/T">温度</router-link> |
      <router-link to="/H">湿度</router-link> |
      <router-link to="/PM2.5">PM2.5</router-link> |
      <router-link to="/CO2">CO2</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style>
  *{
    margin: 0;
    padding: 0;
  }
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 10px 0 0 30px;
  float: left;
  z-index: 100;
}
#nav a {
  text-decoration:none;
  font-weight: bold;
  color: #2c3e50;
}
#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
