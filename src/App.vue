<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/PM2.5">PM2.5</router-link> |
      <router-link to="/CO2">CO2</router-link> |
      <router-link to="/H">Humidity</router-link> |
      <router-link to="/T">Temperature</router-link>
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
}
#nav a {
  font-weight: bold;
  color: #2c3e50;
}
#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
