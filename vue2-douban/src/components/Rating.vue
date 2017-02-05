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
              type:Number,
              default(){
                  return 0
              }
          }
      },
    render(){
          this.className = Math.ceil(this.score/2)
    }
  }
</script>
