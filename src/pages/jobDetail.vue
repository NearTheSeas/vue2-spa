<template>
  <div id="job_detail">
    <div class="job-item ">
      <div class="job-detail">
        <div class="job">{{job.name}}</div>
        <div class="salary"><span>{{job.salary}}/元</span><span>{{job.salaryUnit}}</span></div>
        <div class="info">
          <div class="over">
            浏览：{{job.viewCount}}人
          </div>
          <div class="time">
            发布：2016-10-12
          </div>
        </div>
        <div class="detail">
          <div><i class="icon icon-location2"></i><span>{{job.city}}</span></div>
          <div><i class="icon icon-time"></i><span>星期一 至 星期六</span></div>
          <div><i class="icon icon-person"></i><span>5人</span></div>
        </div>
      </div>
      <div class="address">
        <i class="icon icon-location3"></i> <span>{{job.address}}</span><i class="icon icon-arrow-right"></i>
      </div>
    </div>
    <div class="p30"></div>
    <div class="company">
      <div class="name">{{job.companyName}}</div>
      <!--认证-->
      <div class="approve">
        <div><i class="icon icon-check" aria-hidden="true"></i>营业执照已认证</div>
        <div><i class="icon icon-check" aria-hidden="true"></i>求职保障</div>
      </div>
      <div class="linkman">
        联系人：{{job.contact}}
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
import { Toast } from 'mint-ui'
export default {
  name: 'jobDetail',
  data () {
    this.$http.get('/m/job/detail/' + this.$route.params.id).then(res => {
      this.job = res.body.job
    })
    return {
      job: {}
    }
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
#job_detail .job-item {
  position: relative;
  padding: 0.625rem 0 0 0.625rem;
}

#job_detail .job-detail {
  border-bottom: 1px solid #eee;
}

#job_detail .job-item .job {
  font-size: 1.125rem;
  font-weight: 400;
  padding-left: 0.625rem;
  margin-bottom: 0.625rem;
}

#job_detail .job-item .salary {
  position: absolute;
  right: 0.875rem;
  top: 0.625rem;
}

#job_detail .job-item .salary span {
  color: red;
}

#job_detail .job-item .info {
  font-size: 0.875rem;
  overflow: hidden;
  padding-left: 0.625rem;
}

#job_detail .job-item .info .time,
#job_detail .job-item .info .over {
  margin-bottom: 0.625rem;
}

#job_detail .job-item .detail {
  font-size: 0.75rem;
  padding-left: 0.625rem;
}

#job_detail .job-item .detail>div {
  line-height: 1.25rem;
  height: 1.25rem;
  color: #7d7d7d;
  margin-bottom: 0.625rem;
}

#job_detail .job-item .detail .icon {
  float: left;
  margin-right: 0.9375rem;
}

#job_detail .job-item .address {
  /*padding: 0.625rem;*/
  font-size: 0.875rem;
  height: 2.8125rem;
  line-height: 2.8125rem;
  padding-left: 0.625rem;
}

#job_detail .job-item .address .icon:nth-child(1) {
  float: left;
  margin-top: 0.625rem;
  margin-right: 0.625rem;
}

#job_detail .job-item .address .icon:nth-child(3) {
  float: right;
  margin-right: 0.625rem;
  margin-top: 1rem;
}

#job_detail .company {
  overflow: hidden;
  position: relative;
  padding-top: 0.625rem;
  padding-left: 1.25rem;
}

#job_detail .company .name {
  padding-bottom: 1.25rem;
}

#job_detail .company .approve {
  font-size: 0.875rem;
  overflow: hidden;
  color: #999999;
}

#job_detail .company .approve div {
  margin-bottom: 8px;
  height: 2rem;
  line-height: 2rem;
  border-bottom: 1px solid #eee;
}

#job_detail .company .approve div i {
  float: left;
  margin-top: 0.5rem;
  margin-right: 1.25rem;
}

#job_detail .company .linkman {
  font-size: 0.875rem;
  color: #999999;
}

#job_detail .toolBar {
  width: 100%;
  position: fixed;
  bottom: 0;
  height: 4.375rem;
}

#job_detail .toolBar .btns {
  padding: 0.3125rem 0.875rem;
}

#job_detail .toolBar .btns a {
  float: left;
  height: 2.8125rem;
  min-width: 2.8125rem;
  border-radius: 5px;
}

#job_detail .toolBar .btns .tel {
  background: #3ebefb;
  margin-right: 0.625rem;
}

#job_detail .toolBar .btns .tel i {
  display: block;
  width: 100%;
  height: 100%;
  background: url(../assets/images/phone.png) no-repeat center center / 1.875rem 1.875rem;
}

#job_detail .toolBar .btns .msg {
  background: #3ebefb;
}

#job_detail .toolBar .btns .msg i {
  display: block;
  width: 100%;
  height: 100%;
  background: url(../assets/images/message.png) no-repeat center center / 1.875rem 1.875rem;
}

#job_detail .toolBar .btns .btn {
  background: #ff5959;
  font-size: 1.5rem;
  padding: 0.625rem;
  float: right;
  color: #fff;
  width: 13.625rem;
  text-align: center;
}


/* you have no idea how long it took me to get here */
</style>
