<template>
  <div id="user_worker_detail">
    <div class="header">
      <!--<div class="user"></div>-->
      <div class="avator">
        <img :src="user.img" alt="">
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
      <div class="worker_info request">
        <div class="wrapper">
          <span>姓名：</span><span>{{user.name}}</span>
          <!--<input type="text" v-if="editing" v-model="user.name">-->
        </div>
        <div class="wrapper">
          <span>期望薪资：</span><span v-if="!editing">{{user.vitae.expectedSalary}}</span>
          <input type="text" v-if="editing" v-model="user.vitae.expectedSalary">
        </div>
        <div class="wrapper">
          <span>最近职位：</span><span>{{user.currentJob}}</span>
          <!--<input type="text" v-if="editing" v-model="user.currentJob">-->
        </div>
        <div class="wrapper">
          <span>联系电话：</span><span v-if="!editing">{{user.mobile}}</span>
          <input type="text" v-if="editing" v-model="user.nmobileame">
        </div>
        <div class="wrapper">
          <span>地址：</span><span v-if="!editing">{{user.address}}</span>
          <input type="text" v-if="editing" v-model="user.address">
        </div>
      </div>
      <div class="p20"></div>
      <div class="request">
        <div class="wrapper">
          <div :class="{ editing: (editDetail == '1')  }" @click="setEditDetail(1)">
            <span class="title">我能做什么？</span>
            <i class="icon icon-arrow-right"></i>
          </div>
          <div class="editFile" v-if="editDetail == '1'">
            <div v-if="!editing && editDetail == '1'">{{user.vitae.ability}}</div>
            <textarea v-if="editing && editDetail == '1'" v-model="user.vitae.ability" rows="4" cols=""></textarea>
          </div>
        </div>
        <div class="wrapper">
          <div :class="{ editing: (editDetail == '2')  }" @click="setEditDetail(2)">
            <span class="title">个人简介</span>
            <i class="icon icon-arrow-right"></i>
          </div>
          <div class="editFile" v-if="editDetail == '2'">
            <div v-if="!editing && editDetail == '2'">{{user.vitae.description}}</div>
            <textarea v-if="editing && editDetail == '2'" v-model="user.vitae.description" rows="4" cols=""></textarea>
          </div>
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
export default {
  name: 'userWorkInfo',
  beforeCreate() {
    this.$http.post('http://localhost:8080/m/workman/detail').then((response) => {
      this.user = response.body.workman
    }, (response) => {
      // error callback
    })
  },
  computed: {

  },
  data() {
    return {
      user: {},
      editing: false,
      editDetail: '',
    }
  },
  methods: {
    handleClick: function() {
      if (this.editing) {
        this.$http.post('/m/workman/save', {
          mobile: this.user.mobile,
          address: this.user.address,
          ability: this.user.vitae.ability,
          expectedSalary: this.user.vitae.expectedSalary,
          description: this.user.vitae.description
        }).then((response) => {
          if (response.body.code === '000') {
            this.editing = !this.editing
            Toast('保存成功');
            return;
          }
          Toast(response.body.msg);
        }, (response) => {
          Toast(response.body.msg);
        })
      } else {
        this.editing = !this.editing
      }
    },
    setEditDetail(num) {
      if (num == this.editDetail) {
        this.editDetail = ''
      } else {
        this.editDetail = num
      }
    }
  }
}
</script>
<style>
#user_worker_detail .header {
  border-bottom: 1px solid #eee;
  position: relative;
  height: 7.75rem;
  padding: 0.625rem 0;
}

#user_worker_detail .header .avator {
  border-radius: 50%;
  overflow: hidden;
  width: 3.125rem;
  height: 3.125rem;
  border: 1px solid #ddd;
  margin: 0 auto;
  text-align: center;
}

#user_worker_detail .header .avator img {
  height: 100%;
}

#user_worker_detail .header .evaluate .starts {
  margin-top: 0.325rem;
  text-align: center;
}

#user_worker_detail .header .evaluate .starts span {
  display: inline-block;
  width: 1rem;
  height: 1rem;
  background: url(../assets/images/star_gray.png) no-repeat center center / cover;
}

#user_worker_detail .header .evaluate .tags {
  text-align: center;
  margin-top: 0.25rem;
}

#user_worker_detail .header .evaluate .tags span {
  display: inline-block;
  border: 1px solid #ff3f3f;
  color: #ff3f3f;
  border-radius: 5px;
  padding: 0.25rem .5rem;
  font-size: 0.5625rem;
}

#user_worker_detail .header .evaluate .tags span+span {
  margin-left: 0.5rem;
}

#user_worker_detail .request {
  padding-left: 0.625rem;
}

#user_worker_detail .request .wrapper {
  background: #fff;
  font-size: 0.9375rem;
  padding: 0.825rem 0 0.825rem 0.625rem;
  position: relative;
}

#user_worker_detail .request .wrapper {
  border-bottom: 1px solid #eee;
}

#user_worker_detail .request .wrapper input {
  border: 1px solid #ddd;
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  text-align: right;
  margin-right: 0.625rem;
  padding: 5px;
  border-radius: 5px;
}

#user_worker_detail .request .wrapper input:focus {
  outline: none;
}

#user_worker_detail .request .wrapper .editFile {
  padding: 0.625rem;
  padding-left: 0;
}

#user_worker_detail .request .wrapper textarea {
  border: 1px solid #000;
  border-radius: 5px;
  width: 100%;
  padding: 10px;
}

#user_worker_detail .request .wrapper textarea:focus {
  outline: none;
}

#user_worker_detail .request .wrapper .editing>span {
  color: green;
}

#user_worker_detail .worker_info .wrapper:nth-last-child(1) {
  border-bottom: none;
}

#user_worker_detail .request .wrapper .icon.icon-arrow-right {
  float: right;
  margin-right: 0.625rem;
  margin-top: .25rem;
}

#user_worker_detail .request .wrapper span:nth-child(2) {
  float: right;
  margin-right: 0.625rem;
}

#user_worker_detail .toolBar {
  width: 100%;
  height: 4.375rem;
  margin-top: 1.5625rem;
}

#user_worker_detail .toolBar .btns {
  padding: 0.3125rem 0.875rem;
}

#user_worker_detail .toolBar .btns a {
  float: left;
  height: 2.8125rem;
  min-width: 2.8125rem;
  border-radius: 5px;
}

#user_worker_detail .toolBar .btns .btn {
  background: #ff5959;
  font-size: 1rem;
  padding: 0.75rem;
  float: right;
  color: #fff;
  width: 100%;
  text-align: center;
}
</style>
