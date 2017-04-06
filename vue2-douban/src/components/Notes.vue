<template>
    <ul >
      <li v-for="item in items">
        <a :href="item.path">
          {{item.title}}
        </a>
        <div v-if="item.author" class="author">{{item.author}}</div>
        <p v-if="item.desc">{{item.desc}}</p>
      </li>
    </ul>
</template>
<style scope>
  .notes {
    overflow: hidden;
    zoom: 1;
    color: #666;
    text-align: left;
    margin-left: 0;
  }

  li {
    margin-top: 12px;
    word-wrap: break-word;
  }

  .author {
    color: #999;
  }
</style>
<script>

  export default{
    props: {
      items: {
        type: Array,
        default(){
          return []
        }
      }
    }

  }

</script>
