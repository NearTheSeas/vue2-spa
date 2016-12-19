<template>
  <div id="purchase_detail">
    <div class="header">
      <div>采购标题:</div>
      <div class="">南昌市晨辉招投标投资服务有限公司关于江西旅游商贸职业学院中外美食饮品制作实训室装饰装修采购项目（项目编号：NCCH2016-J0127）竞争性谈判公告</div>
    </div>
    <div class="p20"></div>
    <div class="content">
      <ul>
        <li>
          <div>采购省市：</div>
          <div>陕西省西安市</div>
        </li>
        <li>
          <div>项目简介：</div>
          <div>因工队工作需要，为了工人们的人身安全，以及积极实施安全施工的规范，为此采购。</div>
        </li>
        <li>
          <div>商品个数：</div>
          <div>3000个</div>
        </li>
        <li>
          <div>数量信息：</div>
          <div>300/箱 10箱</div>
        </li>
        <li>
          <div>联系电话：</div>
          <div>15569886789</div>
        </li>
        <li>
          <div>截止时间：</div>
          <div>2016-12-22</div>
        </li>
      </ul>
    </div>
    <div class="btns">
      <mt-button type="primary" size="large">发布</mt-button>
    </div>
  </div>
</template>
<script>
export default {
  name: 'purchaseDetail',
  data() {

    return {
      jobs: {},
      showRefresh: false
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
#purchase_detail .header {
  padding: 1.25rem 1.25rem 0.625rem;
  overflow: hidden;
  position: relative;
}

#purchase_detail .header div:nth-child(1),
#purchase_detail .content ul li div:nth-child(1) {
  color: #818181;
  position: absolute;
  top: 1.25rem;
}

#purchase_detail .header div,
#purchase_detail .content ul li div {
  float: left;
}

#purchase_detail .header div:nth-child(2),
#purchase_detail .content ul li div:nth-child(2) {
  padding-left: 5rem;
}

#purchase_detail .content ul li {
  padding: 1.25rem;
  border-bottom: 1px solid #ddd;
  overflow: hidden;
  position: relative;
}

#purchase_detail .btns {
  margin-top: 2rem;
  padding: 0 1.25rem;
}
</style>
