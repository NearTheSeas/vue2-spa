<template>
  <div id="manage_team">
    <mt-navbar v-model="selected">
      <mt-tab-item id="1">加入28人</mt-tab-item>
      <mt-tab-item id="2">加入工队8人</mt-tab-item>
    </mt-navbar>
    <!-- tab-container -->
    <mt-tab-container v-model="selected">
      <mt-tab-container-item id="1">
        <ul class="lists">
          <li>
            <div class="info">
              <div class="avator">
                <img src="../assets/images/logo.png" alt="">
              </div>
              <span>达呈工队</span>
            </div>
            <div class="state">
              <div>
                <span class="busy">忙碌38人</span>
                <div><span class="leisure">空闲62人</span></div>
              </div>
            </div>
            <div class="evaluate">
              <i class="icon icon-evaluate"></i><span>评论</span>
            </div>
          </li>
          <li>
            <div class="info">
              <div class="avator">
                <img src="../assets/images/logo.png" alt="">
              </div>
              <span>达呈工队</span>
            </div>
            <div class="state">
              <div>
                <span class="busy">忙碌38人</span>
                <div><span class="leisure">空闲62人</span></div>
              </div>
            </div>
            <div class="evaluate">
              <i class="icon icon-evaluate"></i><span>评论</span>
            </div>
          </li>
          <li>
            <div class="info">
              <div class="avator">
                <img src="../assets/images/logo.png" alt="">
              </div>
              <span>达呈工队</span>
            </div>
            <div class="state">
              <div>
                <span class="busy">忙碌38人</span>
                <div><span class="leisure">空闲62人</span></div>
              </div>
            </div>
            <div class="evaluate">
              <i class="icon icon-evaluate"></i><span>评论</span>
            </div>
          </li>
        </ul>
      </mt-tab-container-item>
      <mt-tab-container-item id="2">
        <ul class="lists">
          <li>
            <div class="info">
              <div class="avator">
                <img src="../assets/images/logo.png" alt="">
              </div>
              <span>达呈工队</span>
            </div>
            <div class="state">
              <div>
                <span class="busy">忙碌38人</span>
                <div><span class="leisure">空闲62人</span></div>
              </div>
            </div>
            <div class="evaluate">
              <i class="icon icon-evaluate"></i><span>评论</span>
            </div>
          </li>
          <li>
            <div class="info">
              <div class="avator">
                <img src="../assets/images/logo.png" alt="">
              </div>
              <span>达呈工队</span>
            </div>
            <div class="state">
              <div>
                <span class="busy">忙碌38人</span>
                <div><span class="leisure">空闲62人</span></div>
              </div>
            </div>
            <div class="evaluate">
              <i class="icon icon-evaluate"></i><span>评论</span>
            </div>
          </li>
        </ul>
      </mt-tab-container-item>
    </mt-tab-container>
  </div>
</template>
<script>
export default {
  name: 'manageTeam',
  data() {

    return {
      selected: '1',
      showEvaluate: false
    }
  },
  methods: {
    // 点击申请按钮触发的事件
    apply(jobId) {

    }
  }
}
</script>
<style>
#manage_team .mint-navbar .mint-tab-item {
  background: #eaeaea;
}

#manage_team .mint-navbar .mint-tab-item .mint-tab-item-label {
  font-size: 1.125rem;
  color: #818181;
}

#manage_team .mint-navbar .mint-tab-item+.mint-tab-item {
  border-left: 1px solid #ddd;
}

#manage_team .mint-navbar .mint-tab-item.is-selected {
  color: #26a2ff;
  background: #fff;
  margin-bottom: 0;
  border-bottom: 0;
}

#manage_team .mint-tab-container-wrap {
  background: #efefef;
}

#manage_team .lists li {
  background: #fff;
  margin-top: 0.625rem;
  padding: 0.625rem 1.25rem;
  overflow: hidden;
  font-size: 15px;
}

#manage_team .lists li .info {
  float: left;
}

#manage_team .lists li .avator {
  float: left;
  width: 2.5rem;
  height: 2.5rem;
  text-align: center;
  border-radius: 50%;
  overflow: hidden;
  background: #dadada;
  margin-right: 0.625rem;
}

#manage_team .lists li .avator img {
  height: 100%;
}

#manage_team .lists li .info span {
  display: inline-block;
  height: 2.5rem;
  line-height: 2.5rem;
}

#manage_team .lists li .state {
  float: left;
  height: 2.5rem;
  line-height: 2.5rem;
  color: #fff;
  margin-left: .625rem;
}

#manage_team .lists li .state div {
  float: right;
}

#manage_team .lists li .state .busy {
  padding: 0.3125rem;
  border-radius: 5px 0 0 5px;
}

#manage_team .lists li .state .leisure {
  padding: 0.3125rem;
  border-radius: 0 5px 5px 0;
}

#manage_team .lists li .state .busy {
  background: #f59508;
}

#manage_team .lists li .state .leisure {
  background: #3ebefb;
}

#manage_team .lists li .state > div {}

#manage_team .lists li .evaluate {
  float: right;
  height: 2.5rem;
  line-height: 2.5rem;
  color: #ff5959;
}

#manage_team .lists li .evaluate i {
  float: left;
  margin-top: 6px;
  margin-right: 0.3125rem;
}
</style>
