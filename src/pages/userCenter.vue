<template>
  <div id="user_center">
    <div class="header">
      <div class="avator">
        <div>
          <img :src="user.img" alt="">
        </div>
        <span>6</span>
      </div>
      <p>完善资料送积分</p>
    </div>
    <div class="content">
      <div class="wrapper">
        <ul>
          <li>
            <router-link to="/findJob">
              <img src="../assets/images/findJob.png" alt="">
              <p>快速找活</p>
            </router-link>
          </li>
          <li>
            <router-link to="/userInfo">
              <img src="../assets/images/myInfo.png" alt="">
              <p>我的资料</p>
            </router-link>
          </li>
          <li>
            <a href="javascript:;" v-on:click="showRefresh = true">
              <img src="../assets/images/refresh.png" alt="">
              <p>刷新信息</p>
            </a>
          </li>
          <li>
            <router-link to="/userWorkInfo">
              <img src="../assets/images/workerInfo.png" alt="">
              <p>求职资料</p>
            </router-link>
          </li>
          <li>
            <router-link to="/applyHistory">
              <img src="../assets/images/applyHistory.png" alt="">
              <p>申请历史</p>
            </router-link>
          </li>
          <li>
            <router-link to="/userJoin">
              <img src="../assets/images/myJoin.png" alt="">
              <p>我的加入</p>
            </router-link>
          </li>
        </ul>
      </div>
    </div>
    <div class="modal-wrapper" v-show="showRefresh">
      <div class="modal-box">
        <span class="modal-close" v-on:click="showRefresh = false">X</span>
        <ul class="refresh">
          <li><span>找活标题：</span><span>显示找活标题</span></li>
          <li><span>发布时间：</span><span>显示发布时间</span></li>
          <li><span>刷新时间：</span><span>显示刷新时间</span></li>
        </ul>
        <div class="toolbar">
          <mt-button size="large" type="primary">刷新</mt-button>
        </div>
      </div>
      <div class="modal"></div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'userCenter',
  beforeCreate () {
    this.$http.post('/m/workman/detail').then((response) => {
      this.user = response.body.workman
        // this.$set(this.user, response.body.workman);
    }, (response) => {
      // error callback
    })
  },
  data () {
    return {
      user: {},
      showRefresh: false
    }
  },
  methods: {

  }
}
</script>
<style>
#user_center .header {
  border-bottom: 1px solid #eee;
  position: absolute;
  height: 10.25rem;
  width: 100%;
}

#user_center .header .avator {
  border-radius: 50%;
  width: 5.625rem;
  height: 5.625rem;
  border: 1px solid #ddd;
  text-align: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

#user_center .header .avator div {
  overflow: hidden;
  width: 100%;
  height: 100%;
  border-radius: 50%;
}

#user_center .header .avator span {
  border-radius: 50%;
  width: 2.5rem;
  height: 2.5rem;
  line-height: 2.5rem;
  position: absolute;
  background: #ff3f3f;
  color: #fff;
  font-size: 1.875rem;
  top: -0.75rem;
  right: -1rem;
}

#user_center .header .avator img {
  height: 100%;
}

#user_center .header p {
  margin: 0;
  padding: 0;
  position: absolute;
  width: 100%;
  text-align: center;
  font-size: 0.9375rem;
  color: #818181;
  bottom: 0.625rem;
}

#user_center .content {
  height: 100vh;
  padding-top: 10.25rem;
  position: relative;
}

#user_center .content .wrapper {
  height: 100%;
  position: relative;
}

#user_center .content ul {
  width: 100%;
  padding: 0 1.25rem;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

#user_center .content ul li {
  float: left;
  width: 50%;
  text-align: center;
  border-bottom: 1px solid #ddd;
}

#user_center .content ul li:nth-child(2n-1) {
  border-right: 1px solid #ddd;
}

#user_center .content ul li:nth-last-child(1),
#user_center .content ul li:nth-last-child(2) {
  border-bottom: 0;
}

#user_center .content ul li a {
  display: block;
  position: relative;
  height: 7.1875rem;
  color: #818181;
  font-size: 1.125rem;
}

#user_center .content ul li a img {
  width: 2.5rem;
  height: 2.5rem;
  margin: 1.25rem 0 1rem;
}

#user_center .content ul li a p {
  margin: 0;
}

#user_center .refresh li {
  margin-top: 1rem;
  font-size: 1.125rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid #ddd;
}

#user_center .refresh li span:nth-child(1) {
  /*color:#fff;*/
  padding: 0 2rem;
}

#user_center .refresh li span:nth-child(2) {
  color: #818181;
}

#user_center .toolbar {
  padding: 2rem .5rem 1rem;
}
</style>
