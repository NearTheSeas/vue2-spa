<template>
  <div id="latest_team">
    <header>
      <img src="../assets/images/latestJob.png" alt="">
      <div class="search">
        <ul>
          <li>区域<i class="icon icon_arrow"></i></li>
          <li>时间</li>
          <li>职位</li>
          <li>薪资</li>
        </ul>
      </div>
    </header>
    <div class="content">
      <ul>
        <li class="team-item" v-for="team in teams">
          <router-link :to="{ name: 'latestJob'}">
            <div class="title">
              <div class="logo">
                <img src="../assets/images/avator.png" alt="">
              </div>
              <div class="team">
                <div>{{team.teamName}}</div>
                <div>{{team.company}}</div>
              </div>
            </div>
            <div class="team-desc">
              <ul>
                <li>
                  <i class="icon icon-salary"></i>
                  <span>薪资待遇：{{team.salary + team.salaryUnit}}</span>
                </li>
                <li>
                  <i class="icon icon-date"></i>
                  <span>面试日期：{{team.interviewDate}}</span>
                </li>
                <li>
                  <i class="icon icon-time"></i>
                  <span>面试时间：{{team.interviewTime}}</span>
                </li>
                <li>
                  <i class="icon icon-location2"></i>
                  <span>工作地点：{{team.location}}</span>
                </li>
              </ul>
            </div>
            <div class="tags">
              <span>包吃</span><span>包住</span><span>有夜班</span><span>五险</span><span>年终奖</span>
            </div>
          </router-link>
        </li>
      </ul>
    </div>
    <footer>
      <ul>
        <li>
          <router-link :to="{ name: 'latestJob'}">
            <span></span>
            <p>发布</p>
          </router-link>
        </li>
        <li>
          <router-link :to="{ name: 'latestJob'}">
            <span></span>
            <p>个人中心</p>
          </router-link>
        </li>
        <li>
          <router-link :to="{ name: 'latestJob'}">
            <span></span>
            <p>消息</p>
          </router-link>
        </li>
      </ul>
    </footer>
  </div>
</template>
<script>
export default {
  name: 'latestTeam',
  data () {
    // this.$http.get('../assets/fakedatas/teams.json').then(res => {
    //  this.teams = res.body.teams
    // })
    return {
      teams: [{
        'id': '1',
        'teamName': '兵器工业|普工',
        'location': '西安市南郊XX路',
        'salary': '3000',
        'salaryUnit': '元/月',
        'company': '西安中华工业研究所',
        'publishDate': '2016-11-24',
        'interviewDate': '2016-11-24',
        'interviewTime': '8:00至12:00'
      }, {
        'id': '2',
        'teamName': '兵器工业|普工',
        'location': '西安市南郊XX路',
        'salary': '3000',
        'salaryUnit': '元/月',
        'company': '西安中华工业研究所',
        'publishDate': '2016-11-24',
        'interviewDate': '2016-11-24',
        'interviewTime': '8:00至12:00'
      }, {
        'id': '3',
        'teamName': '兵器工业|普工',
        'location': '西安市南郊XX路',
        'salary': '3000',
        'salaryUnit': '元/月',
        'company': '西安中华工业研究所',
        'publishDate': '2016-11-24',
        'interviewDate': '2016-11-24',
        'interviewTime': '8:00至12:00'
      }]
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
#latest_team header {
  width: 100%;
  position: relative;
}

#latest_team header img {
  width: 100%;
  vertical-align: middle;
}

#latest_team .search {
  position: absolute;
  width: 100%;
  height: 2.75rem;
  background: #fff;
  bottom: 0;
}

#latest_team .search ul {
  width: 100%;
  overflow: hidden;
}

#latest_team .search ul li {
  float: left;
  width: 25%;
  line-height: 2.75rem;
  padding-left: 2.125rem;
}

#latest_team .search ul li+li {
  border-left: 1px solid #eee;
}

#latest_team .content {
  width: 100%;
  background: #f0f0f0;
  padding-top: 0.625rem;
  padding-bottom: 3.0625rem;
}

#latest_team .content>ul>li {
  margin-bottom: 0.625rem;
  position: relative;
  background: #fff;
  overflow: hidden;
}

#latest_team .team-item .title {
  overflow: hidden;
  padding: 0.625rem;
  border-bottom: 1px solid #ddd;
  position: relative;
}

#latest_team .team-item .title .logo {
  float: left;
  width: 3.75rem;
  height: 3.75rem;
  margin-right: 0.625rem;
}

#latest_team .team-item .title .team {
  padding: 5px;
}

#latest_team .team-item .title .team div:nth-child(1) {
  font-size: 1.125rem;
  font-weight: 400px;
  line-height: 1.5
}

#latest_team .team-item .title .team div:nth-child(2) {
  font-size: .875rem;
  color: #999999;
}

#latest_team .team-item .title .logo img {
  width: 100%;
}

#latest_team .team-item .team-desc {
  padding: 0.625rem;
  padding-bottom: 0;
}

#latest_team .team-item .team-desc ul li {
  font-size: 0.875rem;
  height: 1.25rem;
  line-height: 1.25rem;
  color: #7d7d7d;
}

#latest_team .team-item .team-desc ul li+li {
  margin-top: 0.625rem;
}

#latest_team .team-item .team-desc ul li i {
  float: left;
  margin-right: 0.625rem;
}

#latest_team .tags {
  padding: 0.625rem;
  font-size: 14px;
}

#latest_team .tags span {
  display: inline-block;
  margin-right: 0.75rem;
  border-radius: 5px;
  padding: 0.5rem 0;
  width: 3.625rem;
  text-align: center;
  border: 1px solid #ff5963;
  color: #ffb1b3;
}

#latest_team footer {
  height: 3.0625rem;
  width: 100%;
  position: fixed;
  bottom: 0;
}

#latest_team footer ul {
  width: 100%;
  height: 100%;
  background: #fafafa;
  border-top: 1px solid #ccc;
}

#latest_team footer ul li {
  float: left;
  width: 33.33%;
  height: 100%;
}

#latest_team footer ul li+li {
  border-left: 1px solid #ccc;
}

#latest_team footer ul li span {
  display: block;
  width: 100%;
  height: 2.1875rem;
}

#latest_team footer ul li:nth-child(1) span {
  background: url(../assets/images/publish.png) no-repeat center center / contain;
}

#latest_team footer ul li:nth-child(2) span {
  background: url(../assets/images/personal.png) no-repeat center center / contain;
}

#latest_team footer ul li:nth-child(3) span {
  background: url(../assets/images/msg.png) no-repeat center center / contain;
}

#latest_team footer ul li p {
  font-size: 0.75rem;
  text-align: center;
  margin: 0;
  color: #7e7e7e;
}
</style>
