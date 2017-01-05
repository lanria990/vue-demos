<template>
  <div id="app">

    <div class="wrap">
      <login></login>
    </div>
    <!--广告位-->
    <div class="ads">

    </div>
    <div></div>

  </div>
</template>

<script>
import Hello from './components/Hello'
import Login from './components/login'

require('assets/base.scss')

export default {
  name: 'app',
  components: {
    Hello,
    Login
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.wrap{
  background:url(https://img3.doubanio.com/f/sns/463f29e6c00cdc1d15226bdcd3c86908526b9380/pics/sns/anony_home/doubanapp4_bg.png) top right no-repeat;
  background-color: #f1faf1;
}
</style>
