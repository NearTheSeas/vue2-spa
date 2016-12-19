<template>
  <div class="tmpList">
    <ul>
      <li>
        <router-link :to="{name: 'login'}"><i class="fa fa-star"></i>登录</router-link>
      </li>
      <li>
        <router-link :to="{name: 'register'}"><i class="fa fa-star"></i>注册</router-link>
      </li>
      <!-- 用户 -->
      <li>
        <router-link :to="{ name: 'userCenter'}"><i class="fa fa-star">用户中心</i></router-link>
      </li>
      <li>
        <router-link :to="{ name: 'userInfo'}"><i class="fa fa-star">用户信息</i></router-link>
      </li>
      <li>
        <router-link :to="{ name: 'userWorkInfo'}"><i class="fa fa-star">求职信息</i></router-link>
      </li>
      <li>
        <router-link :to="{ name: 'userJoin'}"><i class="fa fa-star">用户的加入</i></router-link>
      </li>
      <li>
        <router-link :to="{ name: 'applyHistory'}"><i class="fa fa-star">用户申请历史</i></router-link>
      </li>
      <!-- 职位 -->
      <li>
        <router-link :to="{name: 'latestJob'}"><i class="fa fa-star">最近的工作</i> </router-link>
      </li>
      <li>
        <router-link :to="{ name: 'jobDetail'}"><i class="fa fa-star">工作详情</i></router-link>
      </li>
      <li>
        <router-link :to="{name: 'findJob'}"><i class="fa fa-star"></i>快速找活</router-link>
      </li>
      <li>
        <router-link :to="{name: 'latestWorker'}"><i class="fa fa-star"></i>最新工人</router-link>
      </li>
      <li>
        <router-link :to="{name: 'workerDetail'}"><i class="fa fa-star"></i>工人详情</router-link>
      </li>
      <!-- 工队 -->
      <li>
        <router-link :to="{ name: 'teamCenter'}"><i class="fa fa-star">工队中心</i></router-link>
      </li>
      <li>
        <router-link :to="{ name: 'teamInfo'}"><i class="fa fa-star">工队资料</i></router-link>
      </li>
      <li>
        <router-link :to="{ name: 'findWorker'}"><i class="fa fa-star">工队资料</i></router-link>
      </li>
      <li>
        <router-link :to="{ name: 'manageWorker'}"><i class="fa fa-star">管理工人</i></router-link>
      </li>
      <li>
        <router-link :to="{ name: 'teamRefresh'}"><i class="fa fa-star">工队刷新</i></router-link>
      </li>
      <li>
        <router-link :to="{name: 'latestTeam'}"><i class="fa fa-star"></i>最新工队</router-link>
      </li>
      <li>
        <router-link :to="{name: 'teamDetail'}"><i class="fa fa-star"></i>工队详情 </router-link>
      </li>
      <li>
        <router-link :to="{name: 'findTeam'}"><i class="fa fa-star"></i>招募工队</router-link>
      </li>
      <!-- 公司 -->
      <li>
        <router-link :to="{ name: 'companyCenter'}"><i class="fa fa-star"></i>企业中心</router-link>
      </li>
      <li>
        <router-link :to="{ name: 'companyInfo'}"><i class="fa fa-star"></i>企业资料</router-link>
      </li>
      <li>
        <router-link :to="{ name: 'purchaseList'}"><i class="fa fa-star"></i>采购信息</router-link>
      </li>
      <li>
        <router-link :to="{ name: 'purchaseDetail'}"><i class="fa fa-star">发布采购</i></router-link>
      </li>
      <li>
        <router-link :to="{ name: 'manageTeam'}"><i class="fa fa-star">管理工队</i></router-link>
      </li>
      <li>
        <router-link :to="{ name: 'companyInterview'}"><i class="fa fa-star">招聘信息</i></router-link>
      </li>
      <li>
        <router-link :to="{ name: 'companyRecommend'}"><i class="fa fa-star"></i>企业推荐</router-link>
      </li>
      <li>
        <router-link :to="{ name:'companyRecommendInfo'}"><i class="fa fa-star"></i>企业推荐详情</router-link>
      </li>
      <!-- 供应商 -->
      <li>
        <router-link :to="{ name: 'supplierRegister'}"><i class="fa fa-star">供应商入住</i></router-link>
      </li>
      <!-- 消息 -->
      <li>
        <router-link :to="{ name: 'messageCenter'}"><i class="fa fa-star">消息中心</i></router-link>
      </li>
      <li>
        <router-link :to="{ name: 'systemMsg'}"><i class="fa fa-star">系统消息</i></router-link>
      </li>
      <li>
        <router-link :to="{ name: 'inviteMsg'}"><i class="fa fa-star">邀请消息</i></router-link>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'list',
  data() {
    return {}
  },
  methods: {
    // 点击申请按钮触发的事件
    apply(jobId) {

    }
  }
}
</script>
<style>
.tmpList ul li {
  padding: 20px;
}
</style>
