<template>
  <nav>
    <h1><a href="https://www.douban.com">豆瓣</a></h1>
    <div class="search">
      <form action="https://www.douban.com/search" method="get">
        <input type="text" placeholder="书籍、电影、音乐、小组、小站、成员" autofocus="" name="q" size="22" maxlength="60" value=""
               class="inp">
        <input type="submit" value="搜索" class="bn">
      </form>
    </div>

    <ul class="fix nav-links">
      <li v-for="item in items">
        <a :href="item.path" target="_blank" :class="item.class" :title="item.title">{{item.title}}</a>
      </li>
    </ul>
  </nav>

</template>

<style>
  h1 {
    display: inline-block;
  }

  .search {
    display: inline-block;
    vertical-align: middle;
    width: 270px;
    height: 30px;
    border: 1px solid #c3c3c3;
  }

  .inp {
    width: 240px;
    border: none;
    font-size: 13px;
    height: 20px;
    padding: 5px;
  }

  .bn {
    border: none;
    background: transparent;
    overflow: hidden;
    width: 30px;
    height: 30px;
    font-size: 0;
    color: transparent;
    cursor: pointer;
  }

  ul {
    display: inline-block;
  }

  .nav-links li {
    float: left;
  }

  .nav-links li a {
    display: block;
    height: 20px;
    margin: 0;
    outline: none;
    vertical-align: middle;
    padding-left:15px;;
    font-size: 16px;
  }

  .lnk-book {
    color: #584029;
  }

  .lnk-movie {
    color: #278dce
  }
  .lnk-music {
    color: #f37f00;
  }

  .lnk-group {
    color: #0f959d
  }
  .lnk-events{
    color: #e85205;
  }
  .lnk-fm {
    color: #bee4d9
  }
  .lnk-dongxi{
    color: #db5140;
  }
  .lnk-market{
    color: #539200
  ;
  }
</style>

<script>
  export default{
    props: {
      'items': {
        type: Array,
        default(){
          return [{
            "path": "https://book.douban.com/",
            "class": "lnk-book",
            "title": "豆瓣读书"
          }, {
            "path": "https://movie.douban.com/",
            "class": "lnk-movie",
            "title": "豆瓣电影"
          }, {
            "path": "https://music.douban.com/",
            "class": "lnk-music",
            "title": "豆瓣音乐"
          }, {
            "path": "https://www.douban.com/group/",
            "class": "lnk-group",
            "title": "豆瓣小组"
          }, {
            "path": "https://www.douban.com/location/",
            "class": "lnk-events",
            "title": "豆瓣同城"
          }, {
            "path": "https://douban.fm/",
            "class": "lnk-fm",
            "title": "豆瓣FM"
          }, {
            "path": "https://dongxi.douban.com/?dcs=anonymous-home&dcm=douban",
            "class": "lnk-dongxi",
            "title": "豆瓣东西"
          }, {
            "path": "https://market.douban.com/?utm_campaign=anonymous_top_nav&utm_source=douban&utm_medium=pc_web",
            "class": "lnk-market",
            "title": "豆瓣市集"
          }]
        },
        validator(val){
          return Array.isArray(val)
        }
      }

    }
  }
</script>
