<template>
  <div id="app" class="container">
    <header>
        <headNav ></headNav>
    </header>
    <section class=" fix">
      <div class="wrap"></div>
      <div class="fr banner">
        <login></login>
      </div>

    </section>
    <!--广告位-->
    <section class="ads">
      <img src="https://img3.doubanio.com/view/dale-online/dale_ad/public/98f861704c78c07.jpg" border="0" width="950" height="90" >
    </section>
    <!---->
    <section>
      <more title="热点内容" path="https://www.douban.com/explore/"></more>

      <div class="albums"><hot :items="hot.items"></hot></div>
      <div class="notes"></div>
      <div class="aside"></div>
    </section>

  </div>
</template>

<script>
  import HeadNav from './components/Head'
  import Hello from './components/Hello'
  import Login from './components/Login'
  import  More from './components/More';
  import Hot from './components/Hot';
  import  {hotInit,hotAlbums} from './service/api';
//  require('assets/base.scss')
//  require('assets/init.scss')

  export default {
    name: 'app',
    components: {
      HeadNav,
      Hello,
      Login,
      More,
      Hot
    },
    data(){
        return {
            hot:{items:[]}
        }
    },
    created  (){
//      console.log('data',hotNotes);
      hotInit().then(data => {
        this.hot.items = data[1].data;
        console.log(data);
      })
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
    margin-top: 25px;
  }
  header{
    margin-bottom: 25px;
  }
  section{
    margin-bottom: 25px;
  }
  .banner{
    height: 178px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .wrap {
    background: url(https://img3.doubanio.com/f/sns/463f29e6c00cdc1d15226bdcd3c86908526b9380/pics/sns/anony_home/doubanapp4_bg.png) top right no-repeat;
    background-color: #f1faf1;
    position: absolute;
    z-index: -1;
    right: 0;
    left: 0;
    height: 178px;
  }
  .container{
    width: 950px;
    margin: 0 auto;
  }
  .albums {
    float: left;
    width: 350px;
    margin-right: 30px;
    color: #999;
    font-size: 0;
    letter-spacing: -0.31em;
  }
</style>
<style src="assets/base.scss"></style>
<style src="assets/init.scss"></style>
