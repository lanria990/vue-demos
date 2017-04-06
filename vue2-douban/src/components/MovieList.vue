<template>
  <div class="list fix">
    <ul>
      <li v-for="item in items">
        <a :href="item.path" class="pic block">
          <img :src="item.pathImg" :alt="item.title" class="img"/>
        </a>
        <a :href="item.url" class="title">{{item.title}}</a>
        <rating :score="item.rating"></rating>
        <a :href="item.pathTicket" class="btn btn-link">{{btnText}}</a>
      </li>
    </ul>
  </div>
</template>


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
      btnText: {
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
