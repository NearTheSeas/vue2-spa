<template>
  <div id="user_info">
    <div class="header">
      <!--<div class="user"></div>-->
      <div class="avator">
        <img :src="user.img">
      </div>
      <div class="evaluate" v-if="user.star">
        <div class="starts">
          <span v-for="n in user.star" class="bright"></span>
          <span v-for="n in (5 - user.star)"></span>
        </div>
        <div class="tags">
          <span v-for="tag in user.feedbackTags">{{tag.type}}+{{tag.count}}</span>
        </div>
      </div>
    </div>
    <div class="p20"></div>
    <div class="worker_info request">
      <div class="wrapper">
        <span>姓名：</span><span v-if="!editing">{{user.name}}</span>
        <input type="text" v-if="editing" v-model="user.name">
      </div>
      <div class="wrapper">
        <span>电话：</span><span v-if="!editing">{{user.mobile}}</span>
        <input type="text" v-if="editing" v-model="user.mobile">
      </div>
      <div class="wrapper">
        <span>性别：</span><span v-if="!editing">{{showSex}}</span>
        <div class="gender" v-if="editing">
          <div>
            <label class="radiolist-label">
              <span class="radio">
                  <input class="radio-input" type="radio" name="sex" value="0"  v-model="user.sex">
                  <span class="radio-core" :class="{ checked: user.sex =='0' }"></span>
              </span>
              <span class="radio-label">女</span>
            </label>
          </div>
          <div>
            <label class="radiolist-label">
              <span class="radio">
                  <input class="radio-input" type="radio" name="sex" value="1"  v-model="user.sex">
                  <span class="radio-core" :class="{ checked: user.sex =='1' }"></span>
              </span>
              <span class="radio-label">男</span>
            </label>
          </div>
        </div>
      </div>
      <div class="wrapper">
        <span>金币：</span><span>{{user.coin}}</span>
      </div>
      <div class="wrapper">
        <span>出生日期：</span><span v-if="!editing">{{user.birthday}}</span>
        <input type="text" v-if="editing" v-on:click.capture="openPicker" v-model="user.birthday">
      </div>
      <mt-datetime-picker ref="picker" year-format="{value} 年" month-format="{value} 月" @confirm="handleConfirmDate" :startDate="new Date('1900/01/01')" date-format="{value} 日" type="date" v-model="dateTmp">
      </mt-datetime-picker>
      <div class="wrapper validate">
        <span>身份证认证：</span><span class="icon" :class="{'icon-identify':user.auth}"></span>
        <input type="text" v-if="editing && !user.auth " v-model="user.auth">
      </div>
      <div class="wrapper">
        <span>当前就职职业：</span><span>{{user.currentJob}}</span>
        <!--<input type="text" v-if="editing" v-model="user.currentJob">-->
      </div>
      <div class="wrapper">
        <span>已加入工队：</span><span>{{user.currentTeam}}</span>
        <!--<input type="text" v-if="editing" v-model="user.currentTeam">-->
      </div>
    </div>
    <div class="toolBar">
      <div class="btns">
        <a href="javascript:;" @click="handleClick" class="btn"><span>{{editing?'保存':'修改资料'}}</span></a>
      </div>
    </div>
  </div>
</template>
<script>
import { Toast } from 'mint-ui'
export default {
  name: 'userInfo',
  beforeCreate () {
    this.$http.post('/m/workman/detail').then((response) => {
      this.user = response.body.workman
    }, (response) => {

    })
  },
  computed: {
    showSex: function () {
      return this.user.sex ? '男' : '女'
    }
  },
  data () {
    return {
      dateTmp: new Date('1900/01/01'),
      user: {},
      editing: false
    }
  },
  methods: {
    handleClick () {
      if (this.editing) {
        this.$http.post('/m/workman/save', {
          name: this.user.name,
          mobile: this.user.mobile,
          sex: this.user.sex,
          birthday: this.user.birthday
        }).then((response) => {
          if (response.body.code === '000') {
            this.editing = !this.editing
            Toast('保存成功')
            return
          }
          Toast(response.body.msg)
        }, (response) => {
          Toast(response.body.msg)
        })
      } else {
        this.editing = !this.editing
      }
    },
    openPicker () {
      this.$refs.picker.open()
    },
    handleConfirmDate () {
      this.user.birthday = this.dateTmp.getFullYear() + '-' + (this.dateTmp.getMonth() + 1) + '-' + this.dateTmp.getDay()
    }
  }
}
</script>
<style>
#user_info .header {
  border-bottom: 1px solid #eee;
  position: relative;
  height: 7.75rem;
  padding: 0.625rem 0;
}

#user_info .header .avator {
  border-radius: 50%;
  overflow: hidden;
  width: 3.125rem;
  height: 3.125rem;
  border: 1px solid #ddd;
  margin: 0 auto;
  text-align: center;
}

#user_info .header .avator img {
  height: 100%;
}

#user_info .header .evaluate .starts {
  margin-top: 0.325rem;
  text-align: center;
}

#user_info .header .evaluate .tags {
  text-align: center;
  margin-top: 0.25rem;
}

#user_info .header .evaluate .tags span {
  display: inline-block;
  border: 1px solid #ff3f3f;
  color: #ff3f3f;
  border-radius: 5px;
  padding: 0.25rem .5rem;
  font-size: 0.5625rem;
}

#user_info .header .evaluate .tags span+span {
  margin-left: 0.5rem;
}

#user_info .request {
  padding-left: 0.625rem;
}

#user_info .request .wrapper {
  background: #fff;
  font-size: 0.9375rem;
  padding: 0.825rem 0 0.825rem 0.625rem;
  position: relative;
}

#user_info .request .wrapper {
  border-bottom: 1px solid #eee;
}

#user_info .request .wrapper input {
  border: 1px solid #ddd;
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  text-align: right;
  margin-right: 1.25rem;
  padding: 5px;
  border-radius: 5px;
}

#user_info .request .wrapper input:focus {
  outline: none;
}

#user_info .request .wrapper .gender {
  width: 60%;
  float: right;
}

#user_info .request .wrapper .icon.icon-arrow-right {
  float: right;
  margin-right: 0.625rem;
  margin-top: .25rem;
}

#user_info .request .wrapper span:nth-child(1) {
  color: #818181;
}

#user_info .request .wrapper span:nth-child(2) {
  float: right;
  margin-right: 1.25rem;
}

#user_info .request .wrapper.validate .icon {
  position: absolute;
  top: 0;
  right: 0;
  width: 2.75rem;
  height: 2.75rem;
  background: url(../assets/images/identify_no.png) no-repeat center center / 2.75rem 2.75rem;
}

#user_info .toolBar {
  width: 100%;
  height: 4.375rem;
  margin-top: 1.5625rem;
}

#user_info .toolBar .btns {
  padding: 0.3125rem 0.875rem;
}

#user_info .toolBar .btns a {
  float: left;
  height: 2.8125rem;
  min-width: 2.8125rem;
  border-radius: 5px;
}

#user_info .toolBar .btns .btn {
  background: #ff5959;
  font-size: 1rem;
  padding: 0.75rem;
  float: right;
  color: #fff;
  width: 100%;
  text-align: center;
}
</style>
