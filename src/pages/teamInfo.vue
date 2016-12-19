<template>
  <div id="worker_detail">
    <div class="header">
      <!--<div class="user"></div>-->
      <div class="avator">
        <img src="../assets/images/worker.png" alt="">
      </div>
      <div class="evaluate">
        <div class="starts">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div class="tags">
          <span>吃苦+7</span>
          <span>坚持+8</span>
          <span>敬职+6</span>
          <span>技术+9</span>
        </div>
      </div>
    </div>
    <div class="p30"></div>
    <div class="worker_info request">
      <div class="wrapper">
        <span>工队名称：</span><span>达成建筑工队</span>
      </div>
      <div class="wrapper">
        <span>联系电话：</span><span>15512123123123</span>
      </div>
      <div class="wrapper">
        <span>组件时间：</span><span>2016-8-16</span>
      </div>
      <div class="wrapper">
        <span>工队人数：</span><span>100人以上</span>
      </div>
      <div class="wrapper">
        <span>工队认证：</span><span class="icon icon-identify"></span>
      </div>
      <div class="wrapper">
        <span>当前合作企业：</span><span></span>陕西比盛建筑工程管理有限公司
      </div>
      <div class="wrapper">
        <span>主营工地：</span><span>北二环</span>
      </div>
      <div class="wrapper">
        <span>工队地区：</span><span>陕西省西安市雁塔区</span>
      </div>
      <div class="wrapper">
        <span>金币：</span><span>38枚</span>
      </div>
      <div class="wrapper indent">
        <span>工队简介：</span>
        <div>达成工队字成立以来，一直秉承诚信经营为客户的目标努力奋斗，坚持良心做事</div>
      </div>
    </div>
    <div class="editBtn">
      <span></span>
    </div>
  </div>
</template>
<script>
export default {
  name: 'teamInfo',
  data () {
    return {
      jobs: {}
    }
  },
  methods: {

  }
}
</script>
<style>
#worker_detail {
  position: relative;
  height: 100vh;
}

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
  border-bottom: 1px solid #eee;
  position: relative;
}

#worker_detail .worker_info .wrapper:nth-last-child(1) {
  border-bottom: none;
}

#worker_detail .worker_info .indent span:nth-child(1) {
  position: absolute;
  top: 0.825rem;
}

#worker_detail .worker_info .indent div {
  padding-left: 4.5rem;
}

#worker_detail .request .wrapper .icon.icon-arrow-right {
  float: right;
  margin-right: 0.625rem;
  margin-top: .25rem;
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

#worker_detail .icon.icon-identify {
  position: absolute;
  top: 0;
}

#worker_detail .editBtn {
  display: block;
  width: 3.5rem;
  height: 3.5rem;
  position: fixed;
  right: 1rem;
  bottom: 5rem;
  background: #ff3f3f;
  border-radius: 50%;
}

#worker_detail .editBtn span {
  display: block;
  width: 100%;
  height: 100%;
  background: url(../assets/images/edit.png) no-repeat center center / contain;
}
</style>
