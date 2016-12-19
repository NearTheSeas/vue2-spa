<template>
  <div id="company_recommendinfo">
    <header>
      <img src="../assets/images/latestJob.png" alt="">
    </header>
    <div class="p20"></div>
    <div class="supply">
      <ul>
        <li><span>陕西比盛建筑工程管理有限公司</span></li>
        <li><span>公司简介：</span><span>建筑工程管理服务、工程劳务分包</span></li>
        <li><span>公司规模：</span><span>少于500人</span></li>
        <li><span>创建时间：</span><span>2016-08-04</span></li>
        <li><span>经验范围：</span><span>土木工程建筑类</span></li>
        <li><span>公司地址：</span><span>雁塔区科技8路凯里大厦1栋1单元10704室</span></li>
        <li class="evaluate"><span>评论星级：</span>
          <div class="starts">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </li>
      </ul>
      <div class="flag">供</div>
      <div class="tags">
        <span>福利好</span>
        <span>年终奖</span>
        <span>待遇好</span>
        <span>扁平化</span>
      </div>
    </div>
    <div class="p20"></div>
    <div class="purchase">
      <ul>
        <li><span>采购标题</span></li>
        <li><span>采购省市：</span><span>建筑工程管理服务、工程劳务分包</span></li>
        <li><span>项目简介：</span><span>建筑类</span></li>
        <li><span>商品个数：</span><span>2000</span></li>
        <li><span>数量信息：</span><span>200/箱</span></li>
        <li><span>联系人：</span><span>何辉</span></li>
        <li><span>截止时间：</span><span>2016-08-04</span></li>
      </ul>
      <div class="flag">采</div>
    </div>
    <div class="p60"></div>
    <div class="btns">
      <div>
        <mt-button size="large" type="primary">
          电话
          <!--<img src="../assets/images/evaluate.png" height="20" width="20" slot="icon">-->
        </mt-button>
      </div>
      <div>
        <mt-button size="large" type="danger">
          消息
          <!--<img src="../assets/images/evaluate.png" height="20" width="20" slot="icon">-->
        </mt-button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'companyRecommendInfo',
  data () {
    return {
      workers: []
    }
  },
  components: {
    // 'app-content': Content
  },
  methods: {

  }
}
</script>
<style>
.p60 {
  height: 60px;
  background: #dadada;
}

#company_recommendinfo header {
  width: 100%;
}

#company_recommendinfo header img {
  width: 100%;
  vertical-align: middle;
}

#company_recommendinfo .supply,
#company_recommendinfo .purchase {
  position: relative;
}


/*#company_recommendinfo .purchase {
    margin-bottom: 51px;
  }*/

#company_recommendinfo ul {
  padding-left: 1.25rem;
}

#company_recommendinfo ul li {
  padding-left: 0.625rem;
  border-bottom: 1px solid #ddd;
  height: 2rem;
  line-height: 2rem;
  font-size: 0.875rem;
  position: relative;
}

#company_recommendinfo ul li:nth-last-child(1) {
  border-bottom: 0;
}

#company_recommendinfo ul li:nth-child(1) {
  font-size: 1rem;
}

#company_recommendinfo ul li span:nth-child(2) {
  color: #818181;
}

#company_recommendinfo .flag {
  position: absolute;
  right: 0.625rem;
  top: 0;
  padding: 0.5rem 0;
  width: 1.25rem;
  color: #fff;
  text-align: center;
  font-size: 0.875rem;
  background: url(../assets/images/flag.png) no-repeat center center / cover;
}

#company_recommendinfo .evaluate>span {
  position: absolute;
  top: 0;
}

#company_recommendinfo .starts {
  float: left;
  margin-left: 4.5rem;
}

#company_recommendinfo .starts span {
  display: inline-block;
  width: 1rem;
  height: 1rem;
  background: url(../assets/images/star_gray.png) no-repeat center center / cover;
}

#company_recommendinfo .tags {
  padding-left: 1.875rem;
  margin-bottom: 0.625rem;
}

#company_recommendinfo .tags span {
  display: inline-block;
  border: 1px solid #ff3f3f;
  color: #ff3f3f;
  border-radius: 5px;
  padding: 0.25rem .5rem;
  font-size: 0.5625rem;
}

#company_recommendinfo .tags span+span {
  margin-left: 0.5rem;
}

#company_recommendinfo .btns {
  background: #fff;
  position: fixed;
  width: 100%;
  bottom: 0;
  padding: 0.3125rem;
}

#company_recommendinfo .btns div {
  float: left;
  width: 50%;
  padding: 0 0.625rem;
}
</style>
