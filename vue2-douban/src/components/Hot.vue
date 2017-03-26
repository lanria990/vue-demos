<template>
  <div class="">
    <ul class="">
      <li v-for="item in items" class="pics">
        <a :href="item.path">
          <img :src="item.pathImg"/>
        </a>
        <a :href="item.path">{{item.text}}</a>
        <span>{{item.number}}</span>
      </li>
    </ul>
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
  import  {hotNotes} from '../service/api';
  export default{
    props: {
      items: {
        type: Array,
//        default(){
//          return []
//        }
      }
    },
    created  (){
      console.log('data');
      hotNotes.then(data => {
        console.log(data);
      })
    }
  }

</script>
