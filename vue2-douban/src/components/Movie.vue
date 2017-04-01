<template>
  <div class="list fix">
    <ul>
      <li v-for="item in items">
        <a :href="item.path" class="pic">
          <img :src="item.pathImg" :alt="item.title"/>
        </a>
        <a :href="item.url" class="title">{{item.title}}</a>
        <rating :score="item.rating"></rating>
        <a :href="item.pathTicket" class="btn btn-link">{{item.brnText}}</a>
      </li>
    </ul>
  </div>
</template>


<style  >

  .img {
    width: 100px;
  }
  .list li {
    float: left;
    width: 24.8%;
    margin-top: 40px;
    vertical-align: top;
    text-align: center;
    font-size: 12px;
    letter-spacing: normal;
    word-spacing: normal;
  }
  .movie-list .pic {
    height: 145px;
    overflow: hidden;
    display: block;
  }
</style>

<script>
  import  Rating from  './Rating'
  export  default {
    props: {
      items: {
        type: Array,
        default(){
          return [];
        },
      },
      brnText: {
        type: String,
        default(){
          return '选座购票';
        }
      }
    },
    components: {
      Rating
    }
  }

</script>
