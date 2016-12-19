<template>
  <div id="manage_worker">
    <mt-navbar v-model="selected">
      <mt-tab-item id="1">忙碌{{busies.length}}人</mt-tab-item>
      <mt-tab-item id="2">空闲{{frees.length}}人</mt-tab-item>
    </mt-navbar>
    <!-- tab-container -->
    <mt-tab-container v-model="selected">
      <mt-tab-container-item id="1">
        <ul class="lists">
          <li v-for="worker in busies">
            <div class="info">
              <div class="avator">
                <img :src="worker.img" alt="">
              </div>
              <span>{{worker.workmanName}}</span><span>{{worker.sex ? '男':'女' }}</span><span>{{worker.jobType}}</span>
            </div>
            <div class="state" @click="">
              <!--<i></i><span>{{ (worker.useStatus == 'busy') ? '忙碌' : '空闲' }}</span>-->
              <i></i><span>忙碌</span>
            </div>
            <div class="evaluate" @click="showDialog(worker)">
              <i class="icon icon-evaluate"></i><span>评论</span>
            </div>
          </li>
        </ul>
      </mt-tab-container-item>
      <mt-tab-container-item id="2">
        <ul class="lists">
          <li v-for="worker in frees">
            <div class="info">
              <div class="avator">
                <img :src="worker.img" alt="">
              </div>
              <span>{{worker.workmanName}}</span><span>{{worker.sex ? '男':'女' }}</span><span>{{worker.jobType}}</span>
            </div>
            <div class="state" @click="worker.useStatus = 'busy'">
              <!--<i></i><span>{{ (worker.useStatus == 'busy') ? '忙碌' : '空闲' }}</span>-->
              <i></i><span>空闲</span>
            </div>
            <div class="evaluate" @click="showDialog(worker)">
              <i class="icon icon-evaluate"></i><span>评论</span>
            </div>
          </li>
        </ul>
      </mt-tab-container-item>
    </mt-tab-container>
    <div class="modal-wrapper" v-show="showEvaluate">
      <div class="modal-box">
        <span class="modal-close" v-on:click="showEvaluate = false">X</span>
        <div class="evaluate">
          <div class="title">企业对我的评价</div>
          <div class="stars">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div class="tags">
            <span>吃苦</span>
            <span>坚持</span>
            <span>敬业</span>
            <span>精神</span>
          </div>
        </div>
        <div class="evaluate">
          <div class="title">我对企业的评价</div>
          <div class="stars">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div class="tags">
            <span>福利好</span>
            <span>待遇好</span>
            <span>薪资高</span>
            <span>老板好</span>
          </div>
        </div>
      </div>
      <div class="modal"></div>
    </div>
    <div class="toolbar">
      <div>
        <mt-button type="primary" size="large">分配任务</mt-button>
      </div>
      <div>
        <mt-button type="danger" size="large">任务完成</mt-button>
      </div>
    </div>
    <!-- 评论 dialog -->
    <div class="modal-wrapper" v-if="showEvaluate">
      <div class="modal-box">
        <span class="modal-close" v-on:click="showEvaluate = false">X</span>
        <div class="result" v-if="showObj.workmanFeekback">
          <div class="evaluate">
            <div class="title">工人对我的评价</div>
            <div class="starts">
              <span v-for="n in (showObj.workmanFeekback - 0)" class="bright"></span>
              <span v-for="n in (5 - showObj.workmanFeekback)"></span>
            </div>
            <div class="tags">
              <span v-for="tag in showObj.workmanFeedbackTags">{{tag.type}}+{{tag.count}}</span>
            </div>
          </div>
          <div class="evaluate" v-if="showObj.groupFeedback">
            <div class="title">我对工人的评价</div>
            <div class="starts">
              <div class="starts">
                <span v-for="n in showObj.groupFeedback" class="bright"></span>
                <span v-for="n in (5 - showObj.groupFeedback)"></span>
              </div>
            </div>
            <div class="tags">
              <span v-for="tag in showObj.groupFeedbackTags">{{tag.type}}+{{tag.count}}</span>
            </div>
          </div>
        </div>
        <div class="edit" v-if="!showObj.workmanFeekback">
          <div class="evaluate">
            <div class="title" style="width:80%">您的评价会使我们做的更好</div>
            <div class="starts">
              <span @click="userEvaluate.stars = 1 " :class="{bright:userEvaluate.stars >=1}"></span>
              <span @click="userEvaluate.stars = 2 " :class="{bright:userEvaluate.stars >=2}"></span>
              <span @click="userEvaluate.stars = 3 " :class="{bright:userEvaluate.stars >=3}"></span>
              <span @click="userEvaluate.stars = 4 " :class="{bright:userEvaluate.stars >=4}"></span>
              <span @click="userEvaluate.stars = 5 " :class="{bright:userEvaluate.stars >=5}"></span>
            </div>
            <div class="tags">
              <span @click="userEvaluate.tags.fuli = !userEvaluate.tags.fuli" :class="{gray:!userEvaluate.tags.fuli}">福利好</span>
              <span @click="userEvaluate.tags.daiyu = !userEvaluate.tags.daiyu" :class="{gray:!userEvaluate.tags.daiyu}">待遇好</span>
              <span @click="userEvaluate.tags.xinzi = !userEvaluate.tags.xinzi" :class="{gray:!userEvaluate.tags.xinzi}">薪资高</span>
              <span @click="userEvaluate.tags.laoban = !userEvaluate.tags.laoban" :class="{gray:!userEvaluate.tags.laoban}">老板好</span>
            </div>
            <div class="btns">
              <mt-button type="primary" size="large" @click.native="submitEvalute">提交</mt-button>
            </div>
          </div>
        </div>
      </div>
      <div class="modal"></div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'manageWorker',
  beforeCreate() {
    this.$http.post('http://localhost:8080/m/team/members').then((response) => {

      this.busies = response.body.members.filter((element) => {
        return element.useStatus == 'busy'
      })

      this.frees = response.body.members.filter((element) => {
        return element.useStatus == 'free'
      })

    }, (response) => {})
  },
  data() {
    return {
      selected: '1',
      showEvaluate: false,
      busies: [],
      frees: [],
      showEvaluate: false,
      showObj: null,
      userEvaluate: {
        stars: 0,
        tags: {
          fuli: false,
          daiyu: false,
          xinzi: false,
          laoban: false
        }
      }
    }
  },
  methods: {
    showDialog(obj) {
      this.showObj = obj
      this.showEvaluate = true
    },
    submitEvalute() {
      console.log(this.userEvaluate)
    }
  }
}
</script>
<style>
#manage_worker .mint-navbar .mint-tab-item {
  background: #eaeaea;
}

#manage_worker .mint-navbar .mint-tab-item .mint-tab-item-label {
  font-size: 1.125rem;
  color: #818181;
}

#manage_worker .mint-navbar .mint-tab-item+.mint-tab-item {
  border-left: 1px solid #ddd;
}

#manage_worker .mint-navbar .mint-tab-item.is-selected {
  color: #26a2ff;
  background: #fff;
  margin-bottom: 0;
  border-bottom: 0;
}

#manage_worker .mint-tab-container-wrap {
  background: #efefef;
}

#manage_worker .lists li {
  background: #fff;
  margin-top: 0.625rem;
  padding: 0.625rem 1.25rem;
  overflow: hidden;
  font-size: 15px;
}

#manage_worker .lists li .info {
  float: left;
}

#manage_worker .lists li .avator {
  float: left;
  width: 2.5rem;
  height: 2.5rem;
  text-align: center;
  border-radius: 50%;
  overflow: hidden;
  background: #dadada;
  margin-right: 1.25rem;
}

#manage_worker .lists li .avator img {
  height: 100%;
}

#manage_worker .lists li .info span {
  display: inline-block;
  height: 2.5rem;
  line-height: 2.5rem;
}

#manage_worker .lists li .info span+span {
  margin-left: 1.25rem;
}

#manage_worker .lists li .state {
  float: left;
  height: 2.5rem;
  line-height: 2.5rem;
  color: #f59508;
  margin-left: 1.25rem;
}

#manage_worker .lists li .state i {
  width: 1.75rem;
  height: 1.75rem;
  float: left;
  margin-top: 6px;
  margin-right: 0.3125rem;
  border-radius: 5px;
  border: 2px solid #f59508;
}

#manage_worker .lists li .evaluate {
  float: right;
  height: 2.5rem;
  line-height: 2.5rem;
  color: #ff5959;
}

#manage_worker .lists li .evaluate i {
  float: left;
  margin-top: 6px;
  margin-right: 0.3125rem;
}

#manage_worker .modal-box .evaluate {
  text-align: center;
  margin: 1rem 0.625rem 0;
  border-top: 1px solid #ddd;
  position: relative;
  padding-top: 1rem;
}

#manage_worker .modal-box .evaluate .title {
  position: absolute;
  top: -.5rem;
  left: 50%;
  transform: translateX(-50%);
  background: #fff;
  padding: 0 .5rem;
}

#manage_worker .toolbar {
  position: absolute;
  bottom: 0;
  width: 100%;
}

#manage_worker .toolbar div {
  width: 50%;
  float: left;
  padding: 0.625rem;
}
</style>
