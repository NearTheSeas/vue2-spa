<template>
  <div id="invite_message">
    <div class="msgs">
      <div class="msg">比盛建筑有限工程管理有限公司发来一条职位邀请1111</div>
      <div class="msg">兄弟工队发来一条职位邀请</div>
      <div class="msg">中建工程有限公司发来一条职位邀请</div>
      <div class="msg">勤快工队发来一条职位邀请</div>
    </div>
    <div class="toolBar">
      <div class="btns">
        <a href="javascript:;" class="tel">
          <i></i>
        </a>
        <a href="javascript:;" class="msgBtn">
          <i></i>
        </a>
        <a href="javascript:;" class="btn"><span>申请职位</span></a>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'inviteMsg',
  data() {
    return {
      workers: []
    }
  },
  components: {
    // 'app-content': Content
  },
  methods: {

  }
}
</script>
<style>
#invite_message {
  height: 100vh;
  background: #efefef;
  padding-top: 0.625rem;
}

#invite_message .msg {
  background: #fff;
  color: #818181;
  line-height: 2.1875rem;
  height: 2.1875rem;
  font-size: 1rem;
  padding: 0 1.25rem;
  margin-bottom: 0.625rem;
  width: 100%;
  white-space: nowrap;
  overflow: hidden;
}

#invite_message .toolBar {
  width: 100%;
  position: fixed;
  bottom: 0;
  height: 3.4375rem;
  background: #fff;
}

#invite_message .toolBar .btns {
  padding: 0.3125rem 0.875rem;
}

#invite_message .toolBar .btns a {
  float: left;
  height: 2.8125rem;
  min-width: 2.8125rem;
  border-radius: 5px;
}

#invite_message .toolBar .btns .tel {
  background: #3ebefb;
  margin-right: 0.625rem;
}

#invite_message .toolBar .btns .tel i {
  display: block;
  width: 100%;
  height: 100%;
  background: url(../assets/images/phone.png) no-repeat center center / 1.875rem 1.875rem;
}

#invite_message .toolBar .btns .msgBtn {
  background: #3ebefb;
}

#invite_message .toolBar .btns .msgBtn i {
  display: block;
  width: 100%;
  height: 100%;
  background: url(../assets/images/message.png) no-repeat center center / 1.875rem 1.875rem;
}

#invite_message .toolBar .btns .btn {
  background: #ff5959;
  font-size: 1.5rem;
  padding: 0.625rem;
  float: right;
  color: #fff;
  width: 13.625rem;
  text-align: center;
}
</style>
