<template>
  <div id="team_center">
    <div class="header">
      <div class="avator">
        <div>
          <img :src="team.img" alt="">
        </div>
        <span>0</span>
      </div>
      <p>完善资料送积分</p>
    </div>
    <div class="content">
      <div class="wrapper">
        <ul>
          <li>
            <router-link to="/findWorker">
              <img src="../assets/images/findPerson.png" alt="">
              <p>快速招人</p>
            </router-link>
          </li>
          <li>
            <router-link to="/manageWorker">
              <img src="../assets/images/manageWorker.png" alt="">
              <p>管理工人</p>
            </router-link>
          </li>
          <li>
            <router-link to="/teamRefresh">
              <img src="../assets/images/refresh.png" alt="">
              <p>刷新信息</p>
            </router-link>
          </li>
          <li>
            <router-link to="/manageWorker">
              <img src="../assets/images/workerInfo.png" alt="">
              <p>发布信息</p>
              </a>
          </li>
          <li>
            <router-link to="/teamInfo">
              <img src="../assets/images/team.png" alt="">
              <p>工队信息</p>
              </a>
          </li>
          <li>
            <a href="javascript:;">
              <img src="../assets/images/more.png" alt="">
              <p>期待更多</p>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'userCenter',
  beforeCreate () {
    this.$http.post('http://localhost:8080/m/team/detail').then((response) => {
      this.team = response.body.team
        // this.$set(this.user, response.body.workman);
    }, (response) => {
      // error callback
    })
  },
  data () {
    return {
      team: {}
    }
  },
  methods: {

  }
}
</script>
<style>
#team_center .header {
  border-bottom: 1px solid #eee;
  position: absolute;
  height: 10.25rem;
  width: 100%;
}

#team_center .header .avator {
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

#team_center .header .avator div {
  overflow: hidden;
  width: 100%;
  height: 100%;
  border-radius: 50%;
}

#team_center .header .avator span {
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

#team_center .header .avator img {
  height: 100%;
}

#team_center .header p {
  margin: 0;
  padding: 0;
  position: absolute;
  width: 100%;
  text-align: center;
  font-size: 0.9375rem;
  color: #818181;
  bottom: 0.625rem;
}

#team_center .content {
  height: 100vh;
  padding-top: 10.25rem;
  position: relative;
}

#team_center .content .wrapper {
  height: 100%;
  position: relative;
}

#team_center .content ul {
  width: 100%;
  padding: 0 1.25rem;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

#team_center .content ul li {
  float: left;
  width: 50%;
  text-align: center;
  border-bottom: 1px solid #ddd;
}

#team_center .content ul li:nth-child(2n-1) {
  border-right: 1px solid #ddd;
}

#team_center .content ul li:nth-last-child(1),
#team_center .content ul li:nth-last-child(2) {
  border-bottom: 0;
}

#team_center .content ul li a {
  display: block;
  position: relative;
  height: 7.1875rem;
  color: #818181;
  font-size: 1.125rem;
}

#team_center .content ul li a img {
  width: 2.5rem;
  height: 2.5rem;
  margin: 1.25rem 0 1rem;
}

#team_center .content ul li a p {
  margin: 0;
}

#team_center .toolbar {
  padding: 2rem .5rem 1rem;
}
</style>
