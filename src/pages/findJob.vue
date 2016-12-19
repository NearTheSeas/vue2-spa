<template>
  <div id="find_job">
    <div class="basic">
      <div class="wrapper">
        <div class="title">
          <span>期望薪资:</span>
        </div>
        <div class="content">
          <input type="text" placeholder="请输入期望薪资" v-model="vitae.expectedSalary">
        </div>
      </div>
      <div class="wrapper">
        <div class="title">
          <span>出生年月:</span>
        </div>
        <div class="content">
          <input type="text" placeholder="请输入出生年月" v-on:click.capture="openPicker" v-model="vitae.birthday">
          <mt-datetime-picker ref="picker" year-format="{value} 年" month-format="{value} 月" :startDate="new Date('1900/01/01')" date-format="{value} 日" type="date" @confirm="handleConfirmDate" v-model="dateTmp">
          </mt-datetime-picker>
        </div>
      </div>
      <div class="wrapper">
        <div class="title">
          <span>求职者:</span>
        </div>
        <div class="content gender">
          <div>
            <label class="radiolist-label">
              <span class="radio">
                  <input class="radio-input" type="radio" name="sex" value="1"  v-model="vitae.sex">
                  <span class="radio-core" :class="{ checked: vitae.sex =='1' }"></span>
              </span>
              <span class="radio-label">男</span>
            </label>
          </div>
          <div>
            <label class="radiolist-label">
              <span class="radio">
                  <input class="radio-input" type="radio" name="sex" value="0"  v-model="vitae.sex">
                  <span class="radio-core" :class="{ checked: vitae.sex =='0' }"></span>
              </span>
              <span class="radio-label">女</span>
            </label>
          </div>
        </div>
      </div>
      <div class="wrapper">
        <div class="title">
          <span>专业技能:</span>
        </div>
        <div class="content">
          <input type="text" placeholder="请输入专业技能" v-model="vitae.ability">
        </div>
      </div>
      <div class="wrapper">
        <div class="title">
          <span>联系电话:</span>
        </div>
        <div class="content">
          <input type="text" placeholder="请输入联系方式" v-model="vitae.mobile">
        </div>
      </div>
    </div>
    <div class="toolBar">
      <div class="btns">
        <a href="javascript:;" @click="handleClick" class="btn"><span>提交</span></a>
      </div>
    </div>
  </div>
</template>
<script>
import {
  Toast
} from 'mint-ui'
export default {
  name: 'findJob',
  data () {
    return {
      dateTmp: new Date('1900/01/01'),
      vitae: {
        expectedSalary: '',
        birthday: '',
        sex: '1',
        mobile: '',
        ability: ''
      }
    }
  },
  methods: {
    handleClick () {
      this.$http.post('/m/workman/save', this.vitae).then((response) => {
        if (response.body.code === '000') {
          this.$router.push({
            path: '/latestJob'
          })
        }
        Toast(response.body.msg)
      }, (response) => {
        Toast(response.body.msg)
      })
    },
    openPicker () {
      this.$refs.picker.open()
    },
    handleConfirmDate () {
      this.vitae.birthday = this.dateTmp.getFullYear() + '-' + (this.dateTmp.getMonth() + 1) + '-' + this.dateTmp.getDay()
    }
  }
}
</script>
<style>
#find_job .basic {
  padding-left: 1.25rem;
  border-bottom: 1px solid #eee;
}

#find_job .basic .wrapper {
  padding: 0.625rem 0;
  overflow: hidden;
  position: relative;
}

#find_job .basic .wrapper+.wrapper {
  border-top: 1px solid #eee;
}

#find_job .basic .wrapper>div {
  float: left;
}

#find_job .basic .wrapper .title {
  font-size: 0.9375rem;
  margin-right: 0.9375rem;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
}

#find_job .basic .wrapper .content {
  padding-left: 6.25rem;
  padding-right: 1.25rem;
  width: 100%;
}

#find_job .basic .wrapper .content input {
  border: 1px solid #818181;
  width: 100%;
  border-radius: 5px;
  font-size: 0.75rem;
  padding: 0.625rem;
}

#find_job .basic .wrapper .content input:focus {
  outline: none;
}

#find_job .basic .wrapper .content.gender div {
  float: left;
  width: 50%;
}

#find_job .toolBar {
  width: 100%;
  position: fixed;
  bottom: 0;
  height: 4.375rem;
}

#find_job .toolBar .btns {
  padding: 0.3125rem 0.875rem;
}

#find_job .toolBar .btns a {
  float: left;
  height: 2.8125rem;
  min-width: 2.8125rem;
  border-radius: 5px;
}

#find_job .toolBar .btns .btn {
  background: #ff5959;
  font-size: 1.5rem;
  padding: 0.625rem;
  float: right;
  color: #fff;
  width: 100%;
  text-align: center;
}
</style>
