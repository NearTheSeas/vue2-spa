<template>
  <div id="supplier_register">
    <div class="username">
      <input type="" name="" value="" placeholder="手机号" v-model="mobile">
      <button class="sendCode" @click="sendCode">{{isValidate?'已发送 '+time:'发送验证码'}}</button>
    </div>
    <div class="captcha">
      <input type="" name="" value="" placeholder="验证码" v-model="code">
    </div>
    <div class="btns">
      <mt-button size="large" type="primary" @click.native.prevent="handleClick">继续注册</mt-button>
    </div>
    <!--<div class="agreements" :class="{ checked: agree == true }" @click="agree = !agree">
      <i class="agree"></i><span>我已同意条约</span>
    </div>-->
  </div>
</template>
<script>
import {
  Toast
} from 'mint-ui'
export default {
  name: 'supplierRegister',
  data() {
    return {
      agree: false,
      mobile: '',
      code: '',
      showEvaluate: true,
      isValidate: false,
      time: 30,
    }
  },
  methods: {
    // 点击申请按钮触发的事件
    sendCode() {
      if (!this.mobile) {
        Toast('请填手机号码');
        return;
      }
      if (this.isValidate) {
        return;
      }
      this.$http.post('/m/getCode', {
        mobile: this.mobile
      }).then((response) => {
        this.isValidate = true
        var that = this
        let timer = setInterval(function() {
          that.time = that.time - 1
          if (that.time <= 0) {
            clearInterval(timer)
            that.isValidate = false
            that.time = 30
          }
        }, 1000)

      }, (response) => {
        this.time = 30
        this.isValidate = false
      })
    },
    handleClick() {
      // if(!this.agree){
      //     Toast('请同意注册条约');
      //     return;
      // }else
      if (!this.code) {
        Toast('请填写验证码');
        return;
      }
      this.$http.post('/m/validateCode', {
        mobile: this.mobile,
        code: this.code
      }).then((response) => {
        if (response.body.code === '000') {
          this.$router.push({
            path: '/register'
          })
        }
      }, (response) => {
        Toast('验证失败');
      })
    }
  }
}
</script>
<style>
#supplier_register {
  padding: 3.75rem 2.25rem;
}

#supplier_register .username input,
#supplier_register .captcha input {
  border: 2px solid #000;
  width: 100%;
  padding: 0.75rem;
  padding-left: 1.25rem;
  border-radius: 5px;
}

#supplier_register .username input:focus,
#supplier_register .captcha input:focus {
  outline: none;
}

#supplier_register .username {
  position: relative;
}

#supplier_register .username .sendCode {
  position: absolute;
  right: 1rem;
  top: 50%;
  transform: translateY(-50%);
  background: #ff5959;
  color: #fff;
  border: 0;
  font-size: 0.75rem;
  padding: 5px;
}

#supplier_register .captcha {
  margin-top: 1rem;
  margin-bottom: 2rem;
}

#supplier_register .agreements {
  font-size: 0.75rem;
  margin-top: 1rem;
}

#supplier_register .agreements .agree {
  display: inline-block;
  width: 10px;
  height: 10px;
  background: url(../assets/images/agree_no.png) center center / contain;
  margin-right: 0.3125rem;
}

#supplier_register .agreements.checked .agree {
  background: url(../assets/images/agree_yes.png) center center / contain;
}
</style>
