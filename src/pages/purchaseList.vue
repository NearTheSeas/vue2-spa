<template>
  <div id="purchase_list">
    <ul>
      <li>
        <div class="title">采购信息标题</div>
        <div class="content">南昌市晨辉招投标投资服务有限公司关于江西旅游商贸职业学院中外美食饮品制作实训室装饰装修采购项目（项目编号：NCCH2016-J0127）竞争性谈判公告</div>
        <div class="time">
          2016-12-22
        </div>
      </li>
      <li>
        <div class="title">采购信息标题</div>
        <div class="content">南昌市晨辉招投标投资服务有限公司关于江西旅游商贸职业学院中外美食饮品制作实训室装饰装修采购项目（项目编号：NCCH2016-J0127）竞争性谈判公告</div>
        <div class="time">
          2016-12-22
        </div>
      </li>
      <li>
        <div class="title">采购信息标题</div>
        <div class="content">南昌市晨辉招投标投资服务有限公司关于江西旅游商贸职业学院中外美食饮品制作实训室装饰装修采购项目（项目编号：NCCH2016-J0127）竞争性谈判公告</div>
        <div class="time">
          2016-12-22
        </div>
      </li>
      <li>
        <div class="title">采购信息标题</div>
        <div class="content">南昌市晨辉招投标投资服务有限公司关于江西旅游商贸职业学院中外美食饮品制作实训室装饰装修采购项目（项目编号：NCCH2016-J0127）竞争性谈判公告</div>
        <div class="time">
          2016-12-22
        </div>
      </li>
    </ul>
    <div class="editBtn">
      <span></span>
      <span>发布</span>
    </div>
  </div>
</template>
<script>
export default {
  name: 'purchaseList',
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
#purchase_list ul {
  background: #e3e3e3;
  padding-top: 0.625rem;
}

#purchase_list ul li {
  background: #fff;
  margin-bottom: 0.625rem;
  padding: 0.625rem 1.25rem;
  font-size: 0.95rem;
  line-height: 1.2;
}

#purchase_list ul li .title {
  text-align: center;
  font-size: 1rem;
  color: #818181;
  padding-bottom: 0.625rem;
}

#purchase_list ul li .time {
  text-align: right;
  padding-top: 0.625rem;
}

#purchase_list .editBtn {
  display: block;
  width: 3.5rem;
  height: 3.5rem;
  position: fixed;
  right: 1rem;
  bottom: 5rem;
  background: #ff3f3f;
  border-radius: 50%;
  text-align: center;
}

#purchase_list .editBtn span:nth-child(1) {
  display: block;
  width: 100%;
  height: 65%;
  background: url(../assets/images/publish2.png) no-repeat center center / contain;
}

#purchase_list .editBtn span:nth-child(2) {
  color: #fff;
  font-size: 0.85rem;
}
</style>
