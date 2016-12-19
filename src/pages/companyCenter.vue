<template>
  <div id="company_center">
    <div class="header">
      <div class="avator">
        <div>
          <img src="../assets/images/worker.png" alt="">
        </div>
        <span>6</span>
      </div>
      <p>完善资料送积分</p>
    </div>
    <div class="content">
      <div class="wrapper">
        <ul>
          <li>
            <router-link to="/findWorker">
              <img src="../assets/images/findPerson.png" alt="">
              <p>快速招人</p>
            </router-link>
          </li>
          <li>
            <router-link to="/manageTeam">
              <img src="../assets/images/manageWorker.png" alt="">
              <p>管理工队</p>
            </router-link>
          </li>
          <li>
            <router-link to="/purchaseDetail">
              <img src="../assets/images/purchase.png" alt="">
              <p>发布采购</p>
            </router-link>
          </li>
          <li>
            <router-link to="/companyInfo">
              <img src="../assets/images/companyInfo.png" alt="">
              <p>企业资料</p>
            </router-link>
          </li>
          <li>
            <router-link to="/purchaseList">
              <img src="../assets/images/purchaseInfo.png" alt="">
              <p>采购信息</p>
            </router-link>
          </li>
          <li>
            <router-link to="/companyInterview">
              <img src="../assets/images/zhaopin.png" alt="">
              <p>招聘信息</p>
            </router-link>
          </li>
        </ul>
      </div>
    </div>
    <div class="modal-wrapper" v-show="showRefresh">
      <div class="modal-box">
        <span class="modal-close" v-on:click="showRefresh = false">X</span>
        <ul class="refresh">
          <li><span>找活标题：</span><span>显示找活标题</span></li>
          <li><span>发布时间：</span><span>显示发布时间</span></li>
          <li><span>刷新时间：</span><span>显示刷新时间</span></li>
        </ul>
        <div class="toolbar">
          <mt-button size="large" type="primary">刷新</mt-button>
        </div>
      </div>
      <div class="modal"></div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'userCenter',
  data () {
    return {
      jobs: {},
      showRefresh: false
    }
  },
  methods: {

  }
}
</script>
<style>
#company_center .header {
  border-bottom: 1px solid #eee;
  position: absolute;
  height: 10.25rem;
  width: 100%;
}

#company_center .header .avator {
  border-radius: 50%;
  width: 5.625rem;
  height: 5.625rem;
  border: 1px solid #ddd;
  text-align: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

#company_center .header .avator div {
  overflow: hidden;
  width: 100%;
  height: 100%;
  border-radius: 50%;
}

#company_center .header .avator span {
  border-radius: 50%;
  width: 2.5rem;
  height: 2.5rem;
  line-height: 2.5rem;
  position: absolute;
  background: #ff3f3f;
  color: #fff;
  font-size: 1.875rem;
  top: -0.75rem;
  right: -1rem;
}

#company_center .header .avator img {
  height: 100%;
}

#company_center .header p {
  margin: 0;
  padding: 0;
  position: absolute;
  width: 100%;
  text-align: center;
  font-size: 0.9375rem;
  color: #818181;
  bottom: 0.625rem;
}

#company_center .content {
  height: 100vh;
  padding-top: 10.25rem;
  position: relative;
}

#company_center .content .wrapper {
  height: 100%;
  position: relative;
}

#company_center .content ul {
  width: 100%;
  padding: 0 1.25rem;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

#company_center .content ul li {
  float: left;
  width: 50%;
  text-align: center;
  border-bottom: 1px solid #ddd;
}

#company_center .content ul li:nth-child(2n-1) {
  border-right: 1px solid #ddd;
}

#company_center .content ul li:nth-last-child(1),
#company_center .content ul li:nth-last-child(2) {
  border-bottom: 0;
}

#company_center .content ul li a {
  display: block;
  position: relative;
  height: 7.1875rem;
  color: #818181;
  font-size: 1.125rem;
}

#company_center .content ul li a img {
  width: 2.5rem;
  height: 2.5rem;
  margin: 1.25rem 0 1rem;
}

#company_center .content ul li a p {
  margin: 0;
}

#company_center .refresh li {
  margin-top: 1rem;
  font-size: 1.125rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid #ddd;
}

#company_center .refresh li span:nth-child(1) {
  /*color:#fff;*/
  padding: 0 2rem;
}

#company_center .refresh li span:nth-child(2) {
  color: #818181;
}

#company_center .toolbar {
  padding: 2rem .5rem 1rem;
}
</style>
