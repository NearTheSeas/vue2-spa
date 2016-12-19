<template>
  <div id="find_worker">
    <div class="basic">
      <div class="wrapper">
        <div class="title">
          <span>职位简介:</span>
        </div>
        <div class="content">
          <textarea placeholder="请输入职位简介，快速了解工作" rows="5" v-model="job.description"></textarea>
        </div>
      </div>
      <div class="wrapper">
        <div class="title">
          <span>职位名称:</span>
        </div>
        <div class="content">
          <input type="text" placeholder="请出入职位名称" name="" value="" v-model="job.name">
        </div>
      </div>
      <div class="wrapper">
        <div class="title">
          <span>联系电话:</span>
        </div>
        <div class="content">
          <input type="text" placeholder="请输入联系电话" name="" value="" v-model="job.phone">
        </div>
      </div>
    </div>
    <div class="request">
      <div class="wrapper">
        <multiselect :selected="job.jobType" :hide-selected="true" :show-labels="false" :options="jobTypes" @select="updateJobType" placeholder="职位类别" :searchable="false">
        </multiselect>
      </div>
      <div class="wrapper">
        <multiselect :selected="job.welfare" :show-labels="false" :options="welfares" :searchable="false" :multiple="true" @update="updateWelfare" placeholder="福利选择">
        </multiselect>
      </div>
      <div class="wrapper salarys clearfix">
        <div>
          <input class="radio-input" type="text" v-model="job.salary" placeholder="薪资">
        </div>
        <div>
          <multiselect :selected="job.salaryUnit" :hide-selected="true" :show-labels="false" @select="updateUnit" :options="units" placeholder="薪资单位" :searchable="false">
          </multiselect>
        </div>
      </div>
    </div>
    <div class="toolBar">
      <div class="btns">
        <a href="javascript:;" class="btn" @click="handleClick"><span>招募</span></a>
      </div>
    </div>
  </div>
</template>
<script>
import {
  Multiselect
} from 'vue-multiselect'
import {
  Toast
} from 'mint-ui'
import jobInfo from '../components/jobInfo'

export default {
  name: 'findWorker',
  beforeCreate () {
    //   this.$http.post('/m/workman/detail').then((response) => {
    //             this.user =  response.body.workman
    //         }, (response) => {
    //             // error callback
    //         })
  },
  data () {
    return {
      editing: false,
      editDetail: '',
      job: {
        description: '',
        name: '',
        phone: '',
        jobType: '',
        welfare: [],
        salaryUnit: ''
      },
      jobTypes: jobInfo.jobTypes,
      welfares: jobInfo.welfares,
      units: jobInfo.units
    }
  },
  methods: {
    setEditDetail (num) {
      if (num === this.editDetail) {
        this.editDetail = ''
      } else {
        this.editDetail = num
      }
    },
    handleClick () {
      console.log(this.job)
      this.$http.post('/m/job/save', this.job).then((response) => {
        if (response.body.code === '000') {
          Toast('添加成功')
          return
        }
        Toast('添加失败')
      }, (response) => {
        Toast('添加失败')
      })
    },
    updateJobType (newVal) {
      if (this.job.jobType) {
        this.job.jobType = newVal
      } else {
        this.$set(this.job, 'jobType', newVal)
      }
    },
    updateWelfare (newVal) {
      if (this.job.welfare) {
        this.job.welfare = newVal
      } else {
        this.$set(this.job, 'welfare', newVal)
      }
    },
    updateUnit (newVal) {
      if (this.job.salaryUnit) {
        this.job.salaryUnit = newVal
      } else {
        this.$set(this.job, 'salaryUnit', newVal)
      }
    }
  },
  components: {
    Multiselect
  }
}
</script>
<style>
#find_worker .basic {
  padding-left: 1.25rem;
  border-bottom: 1px solid #eee;
}

#find_worker .basic .wrapper {
  padding: 0.625rem 0;
  overflow: hidden;
  position: relative;
}

#find_worker .basic .wrapper+.wrapper {
  border-top: 1px solid #eee;
}

#find_worker .basic .wrapper>div {
  float: left;
}

#find_worker .basic .wrapper .title {
  font-size: 0.9375rem;
  margin-right: 0.9375rem;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
}

#find_worker .basic .wrapper .content {
  padding-left: 6.25rem;
  padding-right: 1.25rem;
  width: 100%;
}

#find_worker .basic .wrapper .content input,
#find_worker .basic .wrapper .content textarea {
  border: 1px solid #818181;
  width: 99%;
  border-radius: 5px;
  font-size: 0.75rem;
  padding: 0.625rem;
}

#find_worker .basic .wrapper .content input:focus,
#find_worker .basic .wrapper .content textarea:focus {
  outline: none;
}

#find_worker .request .wrapper {
  background: #fff;
  font-size: 0.9375rem;
  padding: 0.825rem 0 0.825rem 1.25rem;
}

#find_worker .request .wrapper {
  border-bottom: 1px solid #eee;
}

#find_worker .request .wrapper .icon.icon-arrow-right {
  float: right;
  margin-right: 0.625rem;
  margin-top: .25rem;
}

#find_worker .request .wrapper .editFile {
  padding: 0.625rem;
  padding-left: 0;
}

#find_worker .request .wrapper.salarys>div:nth-child(1) {
  width: 60%;
  float: left;
}

#find_worker .request .wrapper.salarys>div:nth-child(1) input {
  border: 1px solid #e8e8e8;
  width: 100%;
  height: 2.5rem;
  font-size: 0.9375rem;
  padding: 0 1.25rem;
  border-radius: 5px;
}

#find_worker .request .wrapper.salarys>div:nth-child(1) input:focus {
  outline: none;
}

#find_worker .request .wrapper.salarys>div:nth-child(2) {
  width: 35%;
  float: left;
}

#find_worker .toolBar {
  width: 100%;
  position: fixed;
  bottom: 0;
  height: 4.375rem;
}

#find_worker .toolBar .btns {
  padding: 0.3125rem 0.875rem;
}

#find_worker .toolBar .btns a {
  float: left;
  height: 2.8125rem;
  min-width: 2.8125rem;
  border-radius: 5px;
}

#find_worker .toolBar .btns .btn {
  background: #ff5959;
  font-size: 1.5rem;
  padding: 0.625rem;
  float: right;
  color: #fff;
  width: 100%;
  text-align: center;
}
</style>
