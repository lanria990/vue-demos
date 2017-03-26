<template>
  <h2>
    {{title}}
    &nbsp;·&nbsp;·&nbsp;·&nbsp;·&nbsp;·&nbsp;·
    <span class="pl">&nbsp;(<a :href="path" target="_self">更多</a>)</span>
  </h2>
</template>

<style>
  h2{
    font: 15px Arial, Helvetica, sans-serif;
    color: #072;
    margin: 0 0 12px 0;
    line-height: 150%;
    text-align: left;
  }
  .pl {
    font: 12px Arial, Helvetica, sans-serif;
    line-height: 150%;
    color: #666666;
  }
  a:hover {
    color: #fff;
    text-decoration: none;
    background: #37a;
  }
</style>
<script>
  export  default{
      props:['title','path']
  }
</script>
