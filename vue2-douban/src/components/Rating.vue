<templat>
  <span class="allstar30"></span>
  <i>{{score}}</i>
</templat>

<style>

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
