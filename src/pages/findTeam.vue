<template>
  <div id="find_team">
    <div class="basic">
      <div class="wrapper">
        <div class="title">
          <span>应征要求:</span>
        </div>
        <div class="content">
          <textarea placeholder="请输入应征要求" rows="5"></textarea>
        </div>
      </div>
      <div class="wrapper">
        <div class="title">
          <span>工作时间:</span>
        </div>
        <div class="content">
          <input type="text" placeholder="请输入工作时间" name="" value="">
        </div>
      </div>
      <div class="wrapper">
        <div class="title">
          <span>招募时间:</span>
        </div>
        <div class="content">
          <input type="text" placeholder="请输入招募时间" name="" value="">
        </div>
      </div>
    </div>
    <div class="request">
      <div class="wrapper">
        <span>工队规模</span>
        <i class="icon icon-arrow-right"></i>
        <ul>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
      <div class="wrapper">
        <span>职位类别</span>
        <i class="icon icon-arrow-right"></i>
        <ul>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
      <div class="wrapper">
        <span>福利选择</span>
        <i class="icon icon-arrow-right"></i>
        <ul>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
      <div class="wrapper">
        <span>薪资选择</span>
        <i class="icon icon-arrow-right"></i>
        <ul>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
    </div>
    <div class="toolBar">
      <div class="btns">
        <a href="javascript:;" class="btn"><span>招募</span></a>
      </div>
    </div>
  </div>
</template>
<script>
import { Toast } from 'mint-ui'
export default {
  name: 'findTeam',
  data () {
    return {
      teams: []
    }
  },
  methods: {
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
#find_team .basic {
  padding-left: 1.25rem;
  border-bottom: 1px solid #eee;
}

#find_team .basic .wrapper {
  padding: 0.625rem 0;
  overflow: hidden;
  position: relative;
}

#find_team .basic .wrapper+.wrapper {
  border-top: 1px solid #eee;
}

#find_team .basic .wrapper>div {
  float: left;
}

#find_team .basic .wrapper .title {
  font-size: 0.9375rem;
  margin-right: 0.9375rem;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
}

#find_team .basic .wrapper .content {
  padding-left: 6.25rem;
  padding-right: 1.25rem;
  width: 100%;
}

#find_team .basic .wrapper .content input,
#find_team .basic .wrapper .content textarea {
  border: 1px solid #818181;
  width: 100%;
  border-radius: 5px;
  font-size: 0.75rem;
  padding: 0.625rem;
}

#find_team .basic .wrapper .content input:focus,
#find_team .basic .wrapper .content textarea:focus {
  outline: none;
}

#find_team .request .wrapper {
  background: #fff;
  font-size: 0.9375rem;
  padding: 0.825rem 0 0.825rem 1.25rem;
}

#find_team .request .wrapper {
  border-bottom: 1px solid #eee;
}

#find_team .request .wrapper .icon.icon-arrow-right {
  float: right;
  margin-right: 0.625rem;
  margin-top: .25rem;
}

#find_team .toolBar {
  width: 100%;
  position: fixed;
  bottom: 0;
  height: 4.375rem;
}

#find_team .toolBar .btns {
  padding: 0.3125rem 0.875rem;
}

#find_team .toolBar .btns a {
  float: left;
  height: 2.8125rem;
  min-width: 2.8125rem;
  border-radius: 5px;
}

#find_team .toolBar .btns .btn {
  background: #ff5959;
  font-size: 1.5rem;
  padding: 0.625rem;
  float: right;
  color: #fff;
  width: 100%;
  text-align: center;
}
</style>
