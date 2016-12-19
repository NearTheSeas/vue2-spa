<template>
  <div id="company_recommend">
    <header>
      <nav>
        <div class="search">
          <input type="text" placeholder="行业/公司名称/材料名称" name="" v-bind:value="searchText">
          <a href="" class="searchBtn"></a>
        </div>
      </nav>
      <img src="../assets/images/latestJob.png" alt="">
    </header>
    <div class="content">
      <ul class="items">
        <li class="item">
          <router-link :to="{ name: 'latestJob'}">
            <div class="top">
              <div class="logo"></div>
              <div class="header">
                <div class="title">陕西比盛建筑工程管理有限公司</div>
                <div class="scope">
                  <span>经营范围：</span>
                  <span>土木工程建筑类</span>
                </div>
              </div>
              <div class="flag">供或采</div>
            </div>
            <div class="bottom">
              <span>公司简介：</span>
              <span>建筑工程管理服务、工程劳务分包</span>
            </div>
          </router-link>
        </li>
        <li class="item">
          <router-link :to="{ name: 'latestJob'}">
            <div class="top">
              <div class="logo"></div>
              <div class="header">
                <div class="title">陕西比盛建筑工程管理有限公司</div>
                <div class="scope">
                  <span>经营范围：</span>
                  <span>土木工程建筑类</span>
                </div>
              </div>
              <div class="flag">供或采</div>
            </div>
            <div class="bottom">
              <span>公司简介：</span>
              <span>建筑工程管理服务、工程劳务分包</span>
            </div>
          </router-link>
        </li>
        <li class="item">
          <router-link :to="{ name: 'latestJob'}">
            <div class="top">
              <div class="logo"></div>
              <div class="header">
                <div class="title">陕西比盛建筑工程管理有限公司</div>
                <div class="scope">
                  <span>经营范围：</span>
                  <span>土木工程建筑类</span>
                </div>
              </div>
              <div class="flag">供或采</div>
            </div>
            <div class="bottom">
              <span>公司简介：</span>
              <span>建筑工程管理服务、工程劳务分包</span>
            </div>
          </router-link>
        </li>
        <li class="item">
          <router-link :to="{ name: 'latestJob'}">
            <div class="top">
              <div class="logo"></div>
              <div class="header">
                <div class="title">陕西比盛建筑工程管理有限公司</div>
                <div class="scope">
                  <span>经营范围：</span>
                  <span>土木工程建筑类</span>
                </div>
              </div>
              <div class="flag">供或采</div>
            </div>
            <div class="bottom">
              <span>公司简介：</span>
              <span>建筑工程管理服务、工程劳务分包</span>
            </div>
          </router-link>
        </li>
        <li class="item">
          <router-link :to="{ name: 'latestJob'}">
            <div class="top">
              <div class="logo"></div>
              <div class="header">
                <div class="title">陕西比盛建筑工程管理有限公司</div>
                <div class="scope">
                  <span>经营范围：</span>
                  <span>土木工程建筑类</span>
                </div>
              </div>
              <div class="flag">供或采</div>
            </div>
            <div class="bottom">
              <span>公司简介：</span>
              <span>建筑工程管理服务、工程劳务分包</span>
            </div>
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  name: 'companyRecommend',
  data() {
    // this.$http.get('http://localhost:8080/m/workman/list').then(res => {
    //  this.workers = res.body.workmans
    // })
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
#company_recommend header {
  width: 100%;
}

#company_recommend header img {
  width: 100%;
  vertical-align: middle;
}

#company_recommend nav {
  width: 100%;
  height: 2.75rem;
  background: rgba(255, 255, 255, 0.5);
  padding: .5rem 1.8125rem;
  position: absolute;
  top: 0;
  left: 0;
}

#company_recommend nav input[type="text"] {
  width: 100%;
  padding: 0;
  border: 0;
  height: 1.75rem;
  background: #efefef;
  border-radius: 5px;
  padding-left: 1.5rem;
}

#company_recommend nav input[type="text"]:focus {
  outline: 0;
}

#company_recommend .search {
  position: relative;
}

#company_recommend nav .searchBtn {
  display: block;
  height: 1.75rem;
  width: 1.75rem;
  position: absolute;
  text-decoration: none;
  background: url(../assets/images/search.png) no-repeat center center / 1rem 1rem;
  left: 0;
  top: 0;
}

#company_recommend .content {
  width: 100%;
  background: #f0f0f0;
  padding-top: 0.625rem;
}

#company_recommend .content .item {
  padding: 0.625rem 1.25rem;
  margin-bottom: 0.625rem;
  position: relative;
  background: #fff;
  overflow: hidden;
}

#company_recommend .content .item a {
  color: #000;
}

#company_recommend .content .item .top {
  overflow: hidden;
}

#company_recommend .content .item .top .flag {
  position: absolute;
  right: 0.625rem;
  top: 0;
  width: 1.25rem;
  color: #fff;
  padding: 0.5rem 0;
  text-align: center;
  background: url(../assets/images/flag.png) no-repeat center center / cover;
}

#company_recommend .content .item .logo {
  float: left;
  width: 3.75rem;
  height: 3.75rem;
  border-radius: 50%;
  overflow: hidden;
  background: url(../assets/images/logo.png) no-repeat center center / 100% 100%;
  margin-right: 0.625rem;
}

#company_recommend .content .item .header {
  float: left;
  padding: 0.625rem 0;
}

#company_recommend .content .item .header .title {
  font-size: 1.125rem;
}

#company_recommend .content .item .header .scope {
  font-size: 0.875rem;
  margin-top: 0.5rem;
}

#company_recommend .content .item .header .scope span:nth-child(2) {
  color: #818181;
}

#company_recommend .content .item .bottom {
  font-size: 0.875rem;
}

#company_recommend .content .item .bottom span:nth-child(2) {
  color: #818181;
}
</style>
