<template>
  <div id="apply_history">
    <div class="header">
      <!--<div class="user"></div>-->
      <div class="avator">
        <img :src="user.img" alt="">
      </div>
      <div class="evaluate" v-if="user.star">
        <div class="starts">
          <span v-for="n in user.star" class="bright"></span>
          <span v-for="n in (5 - user.star)"></span>
        </div>
        <div class="tags">
          <span v-for="tag in user.feedbackTags">{{tag.type}}+{{tag.count}}</span>
        </div>
      </div>
    </div>
    <mt-navbar v-model="selected">
      <mt-tab-item id="1">企业职位</mt-tab-item>
      <mt-tab-item id="2">工队职位</mt-tab-item>
    </mt-navbar>
    <div class="p20"></div>
    <mt-tab-container v-model="selected">
      <mt-tab-container-item id="1">
        <ul class="items">
          <li class="item" v-for="company in companyHistory">
            <div><span>企业名称：</span><span>{{company.companyName}}</span></div>
            <div><span>申请时间：</span><span>{{company.applyTime}}</span></div>
            <div><span>职位名称：</span><span>{{company.jobName}}</span></div>
            <div><span>是否加入成功：</span><span class="icon" :class="[company.status == 'success'? 'icon-success':'icon-fail']"></span></div>
          </li>
        </ul>
      </mt-tab-container-item>
      <mt-tab-container-item id="2">
        <ul class="items">
          <li class="item" v-for="team in teamHistory">
            <div><span>工队名称：</span><span>{{team.teamName}}</span></div>
            <div><span>申请时间：</span><span>{{team.applyTime}}</span></div>
            <div><span>职位名称：</span><span>{{team.jobName}}</span></div>
            <div><span>是否加入成功：</span><span class="icon" :class="[team.status == 'success'? 'icon-success':'icon-fail']"></span></div>
          </li>
        </ul>
      </mt-tab-container-item>
    </mt-tab-container>
  </div>
</template>
<script>
export default {
  name: 'applyHistory',
  beforeCreate() {
    this.$http.post('m/workman/applyHistory').then((response) => {
      this.user = response.body.workman
      this.companyHistory = response.body.companyHistory
      this.teamHistory = response.body.teamHistory
    }, (response) => {

    })
  },
  data() {
    return {
      selected: '1',
      user: {},
      teamHistory: [],
      companyHistory: []
    }
  },
  methods: {}
}
</script>
<style>
#apply_history .header {
  border-bottom: 1px solid #eee;
  position: relative;
  height: 7.75rem;
  padding: 0.625rem 0;
}

#apply_history .header .avator {
  border-radius: 50%;
  overflow: hidden;
  width: 3.125rem;
  height: 3.125rem;
  border: 1px solid #ddd;
  margin: 0 auto;
  text-align: center;
}

#apply_history .header .avator img {
  height: 100%;
}

#apply_history .header .evaluate .starts {
  margin-top: 0.325rem;
  text-align: center;
}

#apply_history .header .evaluate .starts span {
  display: inline-block;
  width: 1rem;
  height: 1rem;
  background: url(../assets/images/star_gray.png) no-repeat center center / cover;
}

#apply_history .header .evaluate .tags {
  text-align: center;
  margin-top: 0.25rem;
}

#apply_history .header .evaluate .tags span {
  display: inline-block;
  border: 1px solid #ff3f3f;
  color: #ff3f3f;
  border-radius: 5px;
  padding: 0.25rem .5rem;
  font-size: 0.5625rem;
}

#apply_history .header .evaluate .tags span+span {
  margin-left: 0.5rem;
}

#apply_history .items {
  background: #ddd;
}

#apply_history .item {
  padding: 5px 1.25rem;
  background: #fff;
  margin-bottom: 0.625rem;
}

#apply_history .item div {
  height: 2.1375rem;
  line-height: 2.1375rem;
}

#apply_history .item div span:nth-child(1) {
  font-size: 1.0625rem;
}

#apply_history .item div span:nth-child(2) {
  font-size: 1rem;
  color: #818181;
  float: right;
}

#apply_history .item .icon {
  margin-top: 0.5rem;
}

#apply_history .mint-navbar .mint-tab-item {
  background: #eaeaea;
}

#apply_history .mint-navbar .mint-tab-item .mint-tab-item-label {
  font-size: 1.125rem;
  color: #818181;
}

#apply_history .mint-navbar .mint-tab-item+.mint-tab-item {
  border-left: 1px solid #ddd;
}

#apply_history .mint-navbar .mint-tab-item.is-selected {
  color: #26a2ff;
  background: #fff;
  margin-bottom: 0;
  border-bottom: 0;
}
</style>
