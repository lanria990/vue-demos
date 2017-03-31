<template>
  <div class="">
    <ul class="mod">
      <li v-for="item in items" :class="{'section-title':item.navTitle,'hot':item.hot}">
        <a :href="item.path">
          {{item.title}}
        </a>
      </li>
    </ul>
    <ul class="app-list"></ul>
  </div>
</template>
<style scope>
  .pics {
    float: left;
    margin: 10px 0 0 10px;
  }

  ul {
    margin-left: -10px;
  }
</style>
<script>

  export default{
    props: {
      items: {
        type: Array,
        default(){
          return [
            {
              "path": "https://movie.douban.com",
              "title": "电影",
              "navTitle": true
            }, {
              "path": "https://movie.douban.com/nowplaying/",
              "title": "影讯&购票",
              "hot": false
            }, {
              "path": "https://movie.douban.com/explore",
              "hot": true,
              "title": "选电影"
            }, {
              "path": "https://movie.douban.com/tv/",
              "hot": false,
              "title": "电视剧"
            }, {"path": "https://movie.douban.com/chart", "hot": false, "title": "排行榜"}, {
              "path": "https://movie.douban.com/tag/", "hot": false,
              "title": "分类"
            }, {
              "path": "https://movie.douban.com/review/best/", "hot": false,
              "title": "影评"
            }, {
              "path": "https://movie.douban.com/trailers", "hot": false,
              "title": "预告片"
            }, {"path": "https://movie.douban.com/askmatrix/hot_questions/all", "hot": false, "title": "问答"}]
        }
      }
    }

  }

</script>
