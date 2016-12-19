<template>
  <div id="user_join">
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
            <div><span>企业名称：</span><span>{{company.companyName}}</span>
              <!-- v-bind:class="{ active: isActive, 'text-danger': hasError }"-->
              <!-- v-bind:class="[company.status == 'leave' ? primary : danger]"-->
              <button type="" class="btn" v-bind:class="{ primary: company.status =='leave',danger: company.status != 'leave' }" @click="handleClick(company.companyId,'company')">{{company.status =='leave' ? '加入' : '退出'}}</button>
            </div>
            <div><span>加入时间：</span><span>{{company.joinTime}}</span>
              <button type="" @click="showDialog(company)" class="btn warn">评论</button>
            </div>
          </li>
        </ul>
      </mt-tab-container-item>
      <mt-tab-container-item id="2">
        <ul class="items">
          <li class="item" v-for="team in teamHistory">
            <div><span>工队名称：</span><span>{{team.teamName}}</span>
              <button type="" class="btn" v-bind:class="{ primary: team.status =='leave',danger: team.status != 'leave' }" @click="handleClick(team.teamId,'team')">{{team.status =='leave' ? '加入' : '退出'}}</button>
            </div>
            <div><span>加入时间：</span><span>{{team.joinTime}}</span>
              <button type="" v-on:click="showDialog(team)" class="btn warn">评论</button>
            </div>
          </li>
        </ul>
      </mt-tab-container-item>
    </mt-tab-container>
    <!-- 评论 dialog -->
    <div class="modal-wrapper" v-if="showEvaluate">
      <div class="modal-box">
        <span class="modal-close" v-on:click="showEvaluate = false">X</span>
        <div class="result" v-if="showObj.workmanFeekback">
          <div class="evaluate" v-if="showObj.groupFeedback">
            <div class="title">企业对我的评价</div>
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
          <div class="evaluate">
            <div class="title">我对企业的评价</div>
            <div class="starts">
              <span v-for="n in (showObj.workmanFeekback - 0)" class="bright"></span>
              <span v-for="n in (5 - showObj.workmanFeekback)"></span>
            </div>
            <div class="tags">
              <span v-for="tag in showObj.workmanFeedbackTags">{{tag.type}}+{{tag.count}}</span>
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
import {
  MessageBox,
  Toast
} from 'mint-ui';
export default {
  name: 'userJoin',
  beforeCreate() {
    this.$http.post('http://localhost:8080/m/workman/joinHistory').then((response) => {
      this.user = response.body.workman
      this.companyHistory = response.body.companyHistory
      this.teamHistory = response.body.teamHistory
    }, (response) => {

    })
  },
  data() {
    return {
      selected: "1",
      user: {},
      teamHistory: [],
      companyHistory: [],
      showEvaluate: false,
      // 用户点击的要需要在 dialog 中展示的 company/team
      showObj: null,
      // 评价
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
    handleClick(id, type) {
      MessageBox.confirm('确定加入吗？').then((action) => {
        this.$http.post('/m/workman/apply', {
          groupId: id,
          type: type
        }).then((response) => {

        }, (response) => {

        })
      }, (action) => {
        console.log(action)
      });
    },
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
#user_join .header {
  border-bottom: 1px solid #eee;
  position: relative;
  height: 7.75rem;
  padding: 0.625rem 0;
}

#user_join .header .avator {
  border-radius: 50%;
  overflow: hidden;
  width: 3.125rem;
  height: 3.125rem;
  border: 1px solid #ddd;
  margin: 0 auto;
  text-align: center;
}

#user_join .header .avator img {
  height: 100%;
}

#user_join .header .evaluate .starts {
  margin-top: 0.325rem;
  text-align: center;
}

#user_join .header .evaluate .tags {
  text-align: center;
  margin-top: 0.25rem;
}

#user_join .header .evaluate .tags span {
  display: inline-block;
  border: 1px solid #ff3f3f;
  color: #ff3f3f;
  border-radius: 5px;
  padding: 0.25rem .5rem;
  font-size: 0.5625rem;
}

#user_join .header .evaluate .tags span+span {
  margin-left: 0.5rem;
}

#user_join .evaluate .tags span.gray {
  border: 1px solid #818181;
  color: #818181;
}

#user_join .items {
  background: #ddd;
}

#user_join .item {
  padding: 5px 1.25rem;
  background: #fff;
  margin-bottom: 0.625rem;
}

#user_join .item div {
  height: 2.1375rem;
  line-height: 2.1375rem;
}

#user_join .item div span:nth-child(1) {
  font-size: 1.0625rem;
}

#user_join .item div span:nth-child(2) {
  font-size: 1rem;
  color: #818181;
}

#user_join .item .btn {
  display: block;
  float: right;
  height: 1.5625rem;
  line-height: 1.5625rem;
  border: 0;
  padding: 0 0.75rem;
  border-radius: 8%;
  margin-top: 0.3125rem;
}

#user_join .item .btn.primary {
  background: #3ebefb;
}

#user_join .item .btn.danger {
  background: #ff3f3f;
}

#user_join .item .btn.warn {
  background: #ff9933;
}

#user_join .mint-navbar .mint-tab-item {
  background: #eaeaea;
}

#user_join .mint-navbar .mint-tab-item .mint-tab-item-label {
  font-size: 1.125rem;
  color: #818181;
}

#user_join .mint-navbar .mint-tab-item+.mint-tab-item {
  border-left: 1px solid #ddd;
}

#user_join .mint-navbar .mint-tab-item.is-selected {
  color: #26a2ff;
  background: #fff;
  margin-bottom: 0;
  border-bottom: 0;
}

#user_join .modal-box .evaluate {
  text-align: center;
  margin: 1rem 0.625rem 0;
  border-top: 1px solid #ddd;
  position: relative;
  padding-top: 1rem;
}

#user_join .modal-box .evaluate .title {
  position: absolute;
  top: -.5rem;
  left: 50%;
  transform: translateX(-50%);
  background: #fff;
  padding: 0 .5rem;
}

#user_join .modal-box .edit .btns {
  padding-top: 1.25rem;
}
</style>
