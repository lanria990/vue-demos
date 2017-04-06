<template>
  <div class="movie fix">
    <div class="side-nav fl">
      <appNav></appNav>
    </div>
    <div class="fr side">
      <div class="tags mb30">
        <more :title="categories.tags.title" :path="categories.tags.path"></more>
        <notes :items="movies.tags"></notes>
      </div>
      <div class="movie-charts mb30">
        <more :title="categories.charts.title" :path="categories.charts.path"></more>
        <notes :items="movies.charts"></notes>
      </div>
    </div>
    <div class="main">
      <more :title="categories.movie.title" :path="categories.movie.path"></more>
      <list :items="movies.movies" :btnText="btnText"></list>
    </div>
  </div>
</template>
<style lang="sass" >
  @import '../assets/movie.scss';
</style>

<script>
  import List from './MovieList.vue';
  import appNav from './AppNav.vue';
  import  More from './More';
  import  Notes from './Notes';

  export  default {
    props: ["movies"],
    data (){
      return {
        categories: {
          tags: {
            title: '影片分类',
            path: 'https://www.douban.com/explore/'
          },
          charts: {
            title: '近期热门',
            path: 'https://www.douban.com/explore/'
          },
          movie: {
            title: '正在热映',
            path: 'https://www.douban.com/explore/'
          }
        },
        btnText: '选座购票'
      }
    },
    watch: {
      'movies.movies'(v){
        console.log(v)
      }
    },
    components: {
      List, appNav, More, Notes
    }
  }

</script>

