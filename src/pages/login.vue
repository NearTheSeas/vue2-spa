<template>
  <div id="login">
    <div class="inner">
      <div class="logo">
        <img src="" alt="">
      </div>
      <div class="forms">
        <div><i class="icon icon-account"></i>
          <input type="text" placeholder="手机号/邮箱/会员账户" v-model="username">
        </div>
        <div><i class="icon icon-password"></i>
          <input type="password" placeholder="密码" v-model="password">
        </div>
        <div>
          <input type="button" value="登录" @click="handleClick">
        </div>
        <div>
          <!--<a href="">忘记密码？</a>-->
          <!--<a href="">立即注册</a>-->
          <router-link to="register">忘记密码？</router-link>
          <router-link to="register">立即注册</router-link>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import {
  Toast
} from 'mint-ui'
export default {
  name: 'login',
  data () {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    handleClick () {
      this.$http.post('/m/login', {
        username: this.username,
        password: this.password
      }).then((response) => {
        if (response.body.code === '000') {
          switch (response.body.userType) {
            case 'workman':
              this.$router.push({
                path: '/userCenter'
              })
              break
            case 'team':
              this.$router.push({
                path: '/teamCenter'
              })
              break
            case 'company':
              this.$router.push({
                path: '/companyCenter'
              })
              break
          }
        } else {
          Toast(response.body.msg)
        }
      }, (response) => {
        Toast(response.body.msg)
      })
    }
  }
}
</script>
<style>
#login {
  background: #19181d;
  width: 100%;
  height: 100vh;
  padding: 1.25rem;
}

#login .inner {
  background: #1c1b20;
  height: 100%;
  position: relative;
}

#login .inner .forms {
  padding: 0 1.25rem;
  width: 100%;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  font-size: 0.9125rem;
}

#login .inner .forms div {
  position: relative;
}

#login .inner .forms>div .icon {
  position: absolute;
  top: 0.9375rem;
  left: 0.825rem;
}

#login .inner .forms div+div {
  margin-top: 0.9375rem;
}

#login .inner .forms input {
  width: 100%;
  border-radius: 10px;
  border: 3px solid #fff;
  padding: 0.625rem 1.875rem;
  background: #1c1b20;
  color: #fff;
  outline: none;
}

#login .inner .forms input:focus {
  outline: none;
}

#login .inner .forms input[type="button"] {
  background: #fff;
  color: #000;
}

#login .inner .forms a {
  color: #fff;
  font-size: 0.75rem;
}

#login .inner .forms a:nth-child(2) {
  float: right;
}
</style>
