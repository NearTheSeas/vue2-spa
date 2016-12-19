<template>
  <div id="latest_job">
    <header>
      <nav>
        <div class="search">
          <input type="text" placeholder="搜索职位/企业" name="" v-bind:value="searchText">
          <a href="" class="searchBtn"></a>
        </div>
      </nav>
      <img src="../assets/images/latestJob.png" alt="">
    </header>
    <div class="content">
      <ul>
        <li class="job-item" v-for="job in jobs">
          <!--岗位-->
          <router-link :to="{ name: 'jobDetail', params: { id: job.id }}">
            <div class="job">
              {{ job.name }}
            </div>
            <div class="job-company">
              <span>{{ job.companyName }}</span>
            </div>
            <!--岗位描述-->
            <ol class="job-desc">
              <li>
                <i class="icon icon-location"></i> <span>{{ job.address }}</span>
              </li>
              <li>
                <i class="icon icon-artisan"> </i><span>{{ job.jobType }}</span>
              </li>
              <li>
                <i class="icon icon-eye"></i><span>{{ job.viewCount }}人看过</span>
              </li>
            </ol>
          </router-link>
          <!--薪资和申请-->
          <div class="operate">
            <div class="day"><span>{{job.publishDate}}</span></div>
            <div class="salary"><span>{{ job.salary }}元/</span><span>{{ job.salaryUnit }}</span></div>
            <a href="javascript:;" class="btnApply" @click="apply(job.id)">申请</a>
          </div>
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
import {
  Toast
} from 'mint-ui'
export default {
  name: 'latestJob',
  data () {
    this.$http.get('/m/job/list').then(res => {
      this.jobs = res.body.jobs
    })
    return {
      jobs: []
        //  [{
        //     "id": "1",
        //     "jobName": "铆焊师傅",
        //     "location": "西安",
        //     "jobType": "技工",
        //     "paveView": "10",
        //     "salary": "200",
        //     "salaryUnit": "元/小时",
        //     "company":"陕西省比盛建筑工程有限公司",
        //     "publishDate":"2016-11-24"
        // }, {
        //     "id": "2",
        //     "jobName": "汽修钣金油漆工",
        //     "location": "西安",
        //     "jobType": "技工",
        //     "paveView": "10",
        //     "salary": "200",
        //     "salaryUnit": "元/天",
        //     "company":"陕西省比盛建筑工程有限公司",
        //     "publishDate":"2016-10-12",
        //     "amount":"5人",
        //     "workTime":"星期一、星期二、星期三、星期四、星期五、星期六",
        //     "address":"西安市未央区三桥镇高堡子村"
        // }, {
        //     "id": "3",
        //     "jobName": "电梯维修工",
        //     "location": "西安",
        //     "jobType": "技工",
        //     "paveView": "10",
        //     "salary": "200",
        //     "salaryUnit": "元/小时",
        //     "company":"陕西省比盛建筑工程有限公司",
        //     "publishDate":"2016-11-24"
        // }]
    }
  },
  components: {
    // 'app-content': Content
  },
  methods: {
    // 点击申请按钮触发的事件
    apply (jobId) {
      this.$http.post('后台路径', {
        userid: 'id',
        jobId: jobId
      }).then(res => {
        showMeg(true)
      }, res => {
        showMeg(false)
      })

      function showMeg (flag) {
        var msg = {}
        if (flag) {
          msg.message = '操作成功'
          msg.class = 'success'
        } else {
          msg.message = '操作失败'
          msg.class = 'fail'
        }
        let instance = Toast({
          message: msg.message,
          iconClass: 'icon icon-' + msg.class
        })
        setTimeout(() => {
          instance.close()
        }, 2000)
      }
    }
  }
}
</script>
<style>
#latest_job header {
  width: 100%;
}

#latest_job header img {
  width: 100%;
  vertical-align: middle;
}

#latest_job nav {
  width: 100%;
  height: 2.75rem;
  background: rgba(255, 255, 255, 0.5);
  padding: .5rem 1.8125rem;
  position: absolute;
  top: 0;
  left: 0;
}

#latest_job nav input[type="text"] {
  width: 100%;
  padding: 0;
  border: 0;
  height: 1.75rem;
  background: #efefef;
  border-radius: 5px;
  padding-left: 1.5rem;
}

#latest_job nav input[type="text"]:focus {
  outline: 0;
}

#latest_job .search {
  position: relative;
}

#latest_job nav .searchBtn {
  display: block;
  height: 1.75rem;
  width: 1.75rem;
  position: absolute;
  text-decoration: none;
  background: url(../assets/images/search.png) no-repeat center center / 1rem 1rem;
  left: 0;
  top: 0;
}

#latest_job .content {
  width: 100%;
  padding-left: 0.8125rem;
}

#latest_job .content>ul>li {
  border-bottom: 1px solid #b9b9b9;
  padding: 0.625rem;
  position: relative;
}

#latest_job .content .job-item .job {
  font-size: 1.125rem;
  font-weight: 400;
  margin-bottom: 0.625rem;
  color: #343434;
}

#latest_job .content .job-item .job-company {
  font-size: .875rem;
  margin-bottom: 0.625rem;
  color: #7d7d7d;
}

#latest_job .content .job-item .job-desc {
  overflow: hidden;
  font-size: 0.75rem;
  color: #b9b9b9;
}

#latest_job .content .job-desc li {
  float: left;
  margin-right: 0.625rem;
}

#latest_job .content .job-desc li i {
  margin-right: 0.3125rem;
}

#latest_job .content .operate {
  position: absolute;
  top: 0;
  right: 0.625rem;
  overflow: hidden;
  margin-top: 0.625rem;
  font-size: 0.625rem;
}

#latest_job .content .operate .day {
  text-align: right;
  color: #b9b9b9;
  margin-bottom: 0.625rem;
}

#latest_job .content .job-item .operate .salary {
  margin-bottom: 0.625rem;
  font-size: .9375rem;
  text-align: right;
}

#latest_job .content .job-item .operate .salary span {
  color: #ff3f3f;
}

#latest_job .content .job-item .operate .btnApply {
  float: right;
  text-decoration: none;
  border-radius: 5px;
  background: #3ebefb;
  color: #fff;
  width: 5.3125rem;
  height: 1.25rem;
  line-height: 1.25rem;
  text-align: center;
}

#latest_job footer {
  height: 3.0625rem;
  width: 100%;
  position: fixed;
  bottom: 0;
}

#latest_job footer ul {
  width: 100%;
  height: 100%;
  background: #fafafa;
  border-top: 1px solid #ccc;
}

#latest_job footer ul li {
  float: left;
  width: 33.33%;
  height: 100%;
}

#latest_job footer ul li+li {
  border-left: 1px solid #ccc;
}

#latest_job footer ul li span {
  display: block;
  width: 100%;
  height: 2.1875rem;
}

#latest_job footer ul li:nth-child(1) span {
  background: url(../assets/images/publish.png) no-repeat center center / contain;
}

#latest_job footer ul li:nth-child(2) span {
  background: url(../assets/images/personal.png) no-repeat center center / contain;
}

#latest_job footer ul li:nth-child(3) span {
  background: url(../assets/images/msg.png) no-repeat center center / contain;
}

#latest_job footer ul li p {
  font-size: 0.75rem;
  text-align: center;
  margin: 0;
}
</style>
