<template>
  <div id="latest_team">
    <header>
      <img src="../assets/images/latestJob.png" alt="">
      <div class="search">
        <ul>
          <li>区域<i class="icon icon_arrow"></i></li>
          <li>职位</li>
          <li>经验</li>
          <li>更多</li>
        </ul>
      </div>
    </header>
    <div class="content">
      <ul>
        <li class="worker-item" v-for="worker in workers">
          <router-link :to="{ name: 'latestJob'}">
            <div class="worker">
              <span>{{worker.name}}</span> (
              <span>{{worker.address}}</span><span>{{worker.sex}}</span><span>{{worker.age}}岁</span><span>{{worker.degree}}</span>)
            </div>
            <div class="recent">最近职位：{{worker.recent}}</div>
            <div class="update">更新时间：{{worker.updateAt}}</div>
            <div class="invite">
              <a href="#" class="button">邀请</a>
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
  name: 'latestWorker',
  data() {
    // this.$http.get('http://localhost:8080/m/workman/list').then(res => {
    //  this.workers = res.body.workmans
    // })
    return {
      workers: [{
        'id': '1',
        'name': '苏先生',
        'location': '高新区',
        'sex': '男',
        'age': '30',
        'degree': '大专',
        'recent': '无',
        'updateAt': '10分钟前'
      }, {
        'id': '2',
        'name': '高先生',
        'location': '高陵县',
        'sex': '男',
        'age': '30',
        'degree': '大专',
        'recent': '无',
        'updateAt': '10分钟前'
      }, {
        'id': '3',
        'name': '程女士',
        'location': '未央区',
        'sex': '女',
        'age': '25',
        'degree': '中专',
        'recent': '无',
        'updateAt': '10分钟前'
      }, {
        'id': '4',
        'name': '程女士',
        'location': '未央区',
        'sex': '女',
        'age': '25',
        'degree': '中专',
        'recent': '无',
        'updateAt': '10分钟前'
      }, {
        'id': '5',
        'name': '程女士',
        'location': '未央区',
        'sex': '女',
        'age': '25',
        'degree': '中专',
        'recent': '无',
        'updateAt': '10分钟前'
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

.search ul {
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

#latest_team .worker-item {
  border-bottom: 1px solid #eee;
  padding: 0.625rem 1.25rem;
  position: relative;
}

#latest_team .worker-item .worker {
  font-size: 1.125rem;
  font-weight: 400px;
  color: #000;
  margin-bottom: 0.625rem;
}

#latest_team .worker-item .recent {
  font-size: 0.875rem;
  color: #7d7d7d;
  margin-bottom: 0.625rem;
}

#latest_team .worker-item .update {
  font-size: 0.75rem;
  color: #7d7d7d;
}

#latest_team .worker-item .worker span {
  margin-right: 0.3125rem;
}

#latest_team .worker-item .invite {
  position: absolute;
  right: 1.25rem;
  bottom: 0.625rem;
}

#latest_team .worker-item .invite .button {
  display: block;
  width: 5.3125rem;
  height: 1.875rem;
  line-height: 1.875rem;
  text-decoration: none;
  text-align: center;
  border-radius: 5px;
  background: #3ebefb;
  color: #fff;
  font-size: 0.9375rem;
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
