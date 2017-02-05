<template>
  <div class="list">
    <ul>
      <li v-for="item in items">
        <a href="{{item.url}}" class="pic">
          <img src="{{item.src}}" alt="{{item.title}}"/>
        </a>
        <a href="{{item.url}}" class="title">{{item.title}}</a>
        <rating :score="item.score"></rating>
        <a href="{{item.btnUrl}}" class="btn btn-link">{{item.brnText}}</a>
      </li>
    </ul>
  </div>
</template>


<style lang="sass">

  img {
    width: 100px;
  }

  .movie-list .pic {
    height: 145px;
    overflow: hidden;
    display: block;
  }
</style>

<script>
  import  rating from  './Rating'
  export  default {
    props: {
      items: {
        type: Object,
        default(){
          console.error('items must be Object');
        }
      },
      brnText: {
        type: String,
        default(){
              return '选座购票';
        }
      }
    },
    components: {
      rating
    }
  }

</script>
