<template>
  <div id="message_center">
    <div class="p20"></div>
    <div class="main">
      <ul>
        <li>
          <div class="logo">
            <img src="../assets/images/ring.png" alt="">
            <span class="badge">3</span>
          </div>
          <div class="title">系统消息</div>
        </li>
        <li>
          <div class="logo">
            <img src="../assets/images/msgs.png" alt="">
            <div class="badge">1</div>
          </div>
          <div class="title">聊天记录</div>
        </li>
        <li>
          <div class="logo">
            <img src="../assets/images/invite.png" alt="">
            <div class="badge">4</div>
          </div>
          <div class="title">邀请消息</div>
        </li>
      </ul>
    </div>
    <div class="p20"></div>
    <div class="ad">
      <img src="../assets/images/ad.png" alt="">
    </div>
  </div>
</template>
<script>
export default {
  name: 'messageCenter',
  data() {
    // this.$http.get('http://localhost:8080/m/workman/list').then(res => {
    //  this.workers = res.body.workmans
    // })
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
#message_center .main ul li {
  overflow: hidden;
  margin-left: 1.25rem;
  padding: 1.25rem;
  border-bottom: 1px solid #ddd;
}

#message_center .main ul li:nth-last-child(1) {
  border-bottom: 0;
}

#message_center .main .logo,
#message_center .main .title {
  float: left;
}

#message_center .main .logo {
  width: 2.8125rem;
  height: 2.8125rem;
  position: relative;
}

#message_center .main .title {
  line-height: 2.8125rem;
  height: 2.8125rem;
  margin-left: 1.25rem;
  font-size: 1.125rem;
  color: #818181;
}

#message_center .main .logo img {
  width: 100%;
  height: 100%;
}

#message_center .main .logo .badge {
  position: absolute;
  top: 0;
  right: 0;
  width: 1.25rem;
  height: 1.25rem;
  line-height: 1.25rem;
  background: #3ebefb;
  color: #fff;
  text-align: center;
  border-radius: 50%;
}

#message_center .ad {
  height: calc(100vh - 15rem);
  position: relative;
}

#message_center .ad img {
  width: 100%;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
}
</style>
