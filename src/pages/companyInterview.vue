<template>
  <div id="company_interview">
    <mt-navbar v-model="selected">
      <mt-tab-item id="1">邀请个人加入</mt-tab-item>
      <mt-tab-item id="2">邀请工队</mt-tab-item>
    </mt-navbar>
    <!-- tab-container -->
    <mt-tab-container v-model="selected">
      <mt-tab-container-item id="1">
        <ul class="lists">
          <li>
            <span>所需职位：</span><span>泥瓦工</span>
          </li>
          <li>
            <span>工作地点：</span><span>北二环</span>
          </li>
          <li>
            <span>工作时间：</span><span>2016-8-16</span>
          </li>
          <li>
            <span>所需工种：</span><span>100人以上</span>
          </li>
          <li>
            <span>年龄不限</span>
          </li>
          <li>
            <span>性别不限</span>
          </li>
          <li>
            <span>300元/天</span><span>包吃住</span><span>五险一金</span>
          </li>
        </ul>
      </mt-tab-container-item>
      <mt-tab-container-item id="2">
        <ul class="lists">
          <li class="desc">
            <span>工队简介：</span>
            <div>达成字成立以来，一直秉承为人民服务的宗旨，良心做事。扁平化管理。达成字成立以来，一直秉承为人民服务的宗旨，良心做事。扁平化管理。</span>
          </li>
          <li>
            <span>工作地点：</span><span>北二环</span>
          </li>
          <li>
            <span>工作时间：</span><span>2016-8-16</span>
          </li>
          <li>
            <span>你土工10人</span>
          </li>
          <li>
            <span>普工10人</span>
          </li>
          <li>
            <span>小工10人</span>
          </li>
          <li>
            <span>包吃住</span><span>五险一金</span>
          </li>
        </ul>
      </mt-tab-container-item>
    </mt-tab-container>
    <div class="refresh">
      <span>上次刷新时间：昨天10:00</span>
    </div>
    </div>
</template>
<script>
export default {
  name: 'companyInterview',
  data () {
    return {
      selected: '1',
      showEvaluate: true
    }
  },
  methods: {

  }
}
</script>
<style>
#company_interview .mint-navbar .mint-tab-item {
  background: #eaeaea;
}

#company_interview .mint-navbar .mint-tab-item .mint-tab-item-label {
  font-size: 1.125rem;
  color: #818181;
}

#company_interview .mint-navbar .mint-tab-item+.mint-tab-item {
  border-left: 1px solid #ddd;
}

#company_interview .mint-navbar .mint-tab-item.is-selected {
  color: #26a2ff;
  background: #fff;
  margin-bottom: 0;
  border-bottom: 0;
}

#company_interview .mint-tab-container-wrap {
  background: #efefef;
}

#company_interview .lists {
  margin-top: 0.625rem;
  padding-left: 1.25rem;
  background: #fff;
}

#company_interview .lists li {
  padding: 0.625rem 0;
  overflow: hidden;
  font-size: 15px;
  border-bottom: 1px solid #ddd;
  position: relative;
}

#company_interview .lists li span {
  height: 2.75rem;
  line-height: 2.75rem;
}

#company_interview .lists li span:nth-child(1) {
  color: #818181;
}

#company_interview .lists li:nth-last-child(1) {
  color: #818181;
}

#company_interview .lists li:nth-last-child(1) span {
  margin-right: 0.3125rem;
}

#company_interview .lists li.desc {
  min-height: 2.75rem;
}

#company_interview .lists li.desc span {
  position: absolute;
}

#company_interview .lists li.desc div {
  line-height: 1.2;
  padding-left: 4.625rem;
  padding-top: 0.75rem;
}

#company_interview .refresh {
  text-align: center;
  color: #ff9933;
  margin-top: 2rem;
}
</style>
