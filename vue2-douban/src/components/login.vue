<template>

  <form @submit.prevent="onSubmit" class="login">
    <div class="tip">
      <i v-if="!validation.username">邮箱/手机号格式不正确 </i>
      <i v-if="!validation.password">密码格式不正确 </i>
    </div>
    <div class="mb4">
      <input type="text" id="username" placeholder="邮箱/手机号" tabindex="1" v-model.trim="username"
             class="input-txt" required/>
    </div>
    <div class="mb4"><input type="password" id="password" placeholder="密码" tabindex="2" v-model.trim="password"
                            class="input-txt"/>
    </div>
    <div class="mb4 pore">
      <input type="text" id="captcha" placeholder="验证码" tabindex="3" v-model.trim="captcha" class="input-txt"/>
      <img src="https://www.douban.com/misc/captcha?id=fwKFdiTEE9IyiFQwB7GFtTfY:en&size=s" alt="captcha"
           id="captcha_img" title="看不清楚?点图片可以换一个" class="captcha-image"/>
    </div>
    <div class="mb4">
      <input type="submit" value="登录豆瓣" tabindex="4" @submit.prevent="onSubmit" class="btn"/>
      <a href="/accounts/register" class="btn">注册账号</a>
    </div>
  </form>
</template>
<style>
  .login {
    width: 270px;
  }

  .captcha-image {
    position: absolute;
    top: 3px;
    width: 158px;
    height: 26px;
    right: 10px;
  }

  .input-txt {
    width: 252PX;
    padding: 8px;
    border: 1px solid #ccc;
  }
</style>


<script>

  export default {
    name: 'login',
    data() {
      return {
        username: '',
        password: '',
        captcha: ''
      }
    },
    methods: {
      onSubmit(evt) {
          console.log(this.validation)
          if (this.isValid){

          }
        console.log(evt)
      }
    },
    computed: {
      isValid() {
        return Object.keys(this.validation).every((key) => this.validation[key]);
      },
      validation() {
        return {
          username: this.username.length>0,
          password: this.password.length > 6 && this.password.length < 20,
          captcha: this.captcha.length == 5
        }
      }

    }
  }
</script>
