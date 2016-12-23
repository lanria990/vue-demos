<template>
  <form  @submit.prevent="onSubmit">
    <div><input type="text" id="username" placeholder="邮箱/手机号" tabindex="1" v-model.trim="username"/></div>
    <div><input type="password" id="password" placeholder="密码" tabindex="2" v-model.trim="password"/></div>
    <div>
      <input type="text" id="captcha" placeholder="验证码" tabindex="3" v-model.trim="captcha"/>
      <img src="https://www.douban.com/misc/captcha?id=OprPkzQI0bhxolO4X4fC62Ua:en&size=s" alt="captcha" id="captcha_img" title="看不清楚?点图片可以换一个"/>
    </div>
    <div>
      <input type="submit" value="登录豆瓣" tabindex="4" @submit.prevent="onSubmit" />
      <a href="/accounts/register">注册账号</a>
    </div>
  </form>

</template>
<style>

</style>
<script>
   // import HeaderComponent from './components/header.vue'
    export default{
        data(){
            return{
              username:'',
              password:'',
              captcha:''
            }
        },
      methods:{
        onSubmit(){

        }
      },
        components:{

        }
    }
</script>
