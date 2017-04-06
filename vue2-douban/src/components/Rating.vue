<template>
  <div class="rating">
    <span class="allstar30"></span>
    <i>{{score}}</i>
  </div>
</template>

<style>
  .rating {
    margin-bottom: 4px;
  }
  .rating i {
    margin-left: 4px;
    color: #e09015;
  }
</style>

<script>
  export  default{
      props:{
          score:{
              type:String,
              default(){
                  return 0
              }
          }
      }

  }
</script>
