<template>
  <div id="worker_detail">
    <div class="header">
      <!--<div class="user"></div>-->
      <div class="avator">
        <img :src="user.img" alt="">
      </div>
      <div class="evaluate">
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
        </div>
        <div class="wrapper">
          <span>期望薪资：</span><span>{{user.vitae.expectedSalary}}</span>
        </div>
        <div class="wrapper">
          <span>最近职位：</span><span>{{user.currentJob}}</span>
        </div>
        <div class="wrapper">
          <span>联系电话：</span><span>{{user.mobile}}</span>
        </div>
        <div class="wrapper">
          <span>地址：</span><span>{{user.address}}</span>
        </div>
      </div>
      <div class="p20"></div>
      <div class="request">
        <div class="wrapper">
          <span>我能做什么？</span>
          <i class="icon icon-arrow-right"></i>
        </div>
        <div class="wrapper">
          <span>我会做什么</span>
          <i class="icon icon-arrow-right"></i>
          <div class="editFile">
          </div>
        </div>
        <div class="wrapper">
          <span>个人简介</span>
          <i class="icon icon-arrow-right"></i>
        </div>
      </div>
      <div class="toolBar">
        <div class="p30"></div>
        <div class="btns">
          <a href="javascript:;" class="tel">
            <i></i>
          </a>
          <a href="javascript:;" class="msg">
            <i></i>
          </a>
          <a href="javascript:;" class="btn"><span>申请职位</span></a>
        </div>
      </div>
    </div>
</template>
<script>
export default {
  name: 'workerDetail',
  beforeCreate () {
    this.$http.post('/m/workman/detail', {
      id: this.$route.params.id
    }).then((response) => {
      this.user = response.body.workman
    }, (response) => {
    })
  },
  computed: {

  },
  data () {
    return {
      user: {}
    }
  },
  methods: {

  }
}
</script>
<style>
#worker_detail .header {
  border-bottom: 1px solid #eee;
  position: relative;
  height: 7.75rem;
  padding: 0.625rem 0;
}

#worker_detail .header .avator {
  border-radius: 50%;
  overflow: hidden;
  width: 3.125rem;
  height: 3.125rem;
  border: 1px solid #ddd;
  margin: 0 auto;
  text-align: center;
  /*position: absolute;
    top:50%;
    left:50%;
    transform: translate(-50%,-50%);*/
}

#worker_detail .header .avator img {
  height: 100%;
}

#worker_detail .header .evaluate {}

#worker_detail .header .evaluate .starts {
  margin-top: 0.325rem;
  text-align: center;
}

#worker_detail .header .evaluate .starts span {
  display: inline-block;
  width: 1rem;
  height: 1rem;
  background: url(../assets/images/star_gray.png) no-repeat center center / cover;
}

#worker_detail .header .evaluate .tags {
  text-align: center;
  margin-top: 0.25rem;
}

#worker_detail .header .evaluate .tags span {
  display: inline-block;
  border: 1px solid #ff3f3f;
  color: #ff3f3f;
  border-radius: 5px;
  padding: 0.25rem .5rem;
  font-size: 0.5625rem;
}

#worker_detail .header .evaluate .tags span+span {
  margin-left: 0.5rem;
}

#worker_detail .request {
  padding-left: 0.625rem;
}

#worker_detail .request .wrapper {
  background: #fff;
  font-size: 0.9375rem;
  padding: 0.825rem 0 0.825rem 0.625rem;
}

#worker_detail .request .wrapper {
  border-bottom: 1px solid #eee;
}

#worker_detail .worker_info .wrapper:nth-last-child(1) {
  border-bottom: none;
}

#worker_detail .request .wrapper .icon.icon-arrow-right {
  float: right;
  margin-right: 0.625rem;
  margin-top: .25rem;
}

#worker_detail .request .wrapper span:nth-child(2) {
  float: right;
  margin-right: 0.625rem;
}

#worker_detail .toolBar {
  width: 100%;
  position: fixed;
  bottom: 0;
  height: 4.375rem;
}

#worker_detail .toolBar .btns {
  padding: 0.3125rem 0.875rem;
}

#worker_detail .toolBar .btns a {
  float: left;
  height: 2.8125rem;
  min-width: 2.8125rem;
  border-radius: 5px;
}

#worker_detail .toolBar .btns .tel {
  background: #3ebefb;
  margin-right: 0.625rem;
}

#worker_detail .toolBar .btns .tel i {
  display: block;
  width: 100%;
  height: 100%;
  background: url(../assets/images/phone.png) no-repeat center center / 1.875rem 1.875rem;
}

#worker_detail .toolBar .btns .msg {
  background: #3ebefb;
}

#worker_detail .toolBar .btns .msg i {
  display: block;
  width: 100%;
  height: 100%;
  background: url(../assets/images/message.png) no-repeat center center / 1.875rem 1.875rem;
}

#worker_detail .toolBar .btns .btn {
  background: #ff5959;
  font-size: 1.5rem;
  padding: 0.625rem;
  float: right;
  color: #fff;
  width: 13.625rem;
  text-align: center;
}
</style>
