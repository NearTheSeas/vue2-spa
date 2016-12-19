<template>
  <div id="register">
    <div class="type">
      <div>
        <label class="radiolist-label">
          <span class="radio">
                <input class="radio-input" type="radio" value="company"  v-model="regType">
                <span class="radio-core" :class="{ checked: regType =='company' }"></span>
          </span>
          <span class="radio-label">企业</span>
        </label>
      </div>
      <div>
        <label class="radiolist-label">
          <span class="radio">
                <input class="radio-input" type="radio" value="workman"  v-model="regType">
                <span class="radio-core" :class="{ checked: regType =='workman' }"></span>
          </span>
          <span class="radio-label">个人</span>
        </label>
      </div>
      <div>
        <label class="radiolist-label">
          <span class="radio">
                <input class="radio-input" type="radio" value="team"  v-model="regType">
                <span class="radio-core" :class="{ checked: regType =='team' }"></span>
          </span>
          <span class="radio-label">工队</span>
        </label>
      </div>
    </div>
    <form action="" class="info">
      <div class="contacts">
        <input type="text" placeholder="联系人姓名" v-model="name">
      </div>
      <!--<div class="companyName" v-if="regType =='company'">
        <input type="text" :placeholder="企业名称" v-model="groupName">
      </div>-->
      <div class="teamName" v-if="regType !='workman'">
        <input type="text" :placeholder="regType =='company'? '企业名称':'工队名称'" v-model="groupName">
      </div>
      <div class="money" v-if="regType =='company'">
        <input type="text" placeholder="企业注册资金" v-model="money">
      </div>
      <div class="province clearfix">
        <div>
          <multiselect :selected="province" :hide-selected="true" label="name" :show-labels="false" :options="provinces" placeholder="省" :searchable="false" @select="updateProvince">
          </multiselect>
        </div>
        <div>
          <multiselect :selected="city" :hide-selected="true" label="name" :show-labels="false" :options="cities" placeholder="市" :searchable="false" @select="updateCity">
          </multiselect>
        </div>
        <div>
          <multiselect :selected="area" :hide-selected="true" label="DisName" :show-labels="false" :options="areas" placeholder="区/县" :searchable="false" @select="updateArea">
          </multiselect>
        </div>
      </div>
      <div class="address">
        <input type="text" placeholder="联系地址" v-model="address">
      </div>
    </form>
    <div class="btns">
      <mt-button size="large" type="primary" @click.native="handleClick">注册</mt-button>
    </div>
    <div class="agreements" :class="{ checked: agree == true }" @click="agree = !agree">
      <i class="agree"></i><span>我已同意条约</span>
    </div>
  </div>
</template>
<script>
import REGION_DATA from 'china-area-data'
import {
  Multiselect
} from 'vue-multiselect'
import {
  Toast
} from 'mint-ui'
import cityData from '../components/cityData'

export default {
  name: 'register',
  data() {
    return {
      regType: 'workman',
      name: '',
      province: '',
      city: '',
      money: '',
      area: '',
      address: '',
      agree: false,
      provinces: cityData.provinces,
      cities: [],
      areas: []
    }
  },
  methods: {
    // 点击申请按钮触发的事件
    updateProvince(newSelected) {
      this.province = newSelected
      let tmp = cityData.cities.filter((element) => {
        return element.ProID == newSelected.ProID
      })
      this.cities = tmp
    },
    updateCity(newSelected) {
      this.city = newSelected
      let tmp = cityData.areas.filter((element) => {
        return element.CityID == newSelected.CityID
      })
      console.log(tmp);
      this.areas = tmp
    },
    updateArea(newSelected) {
      this.area = newSelected
    },
    handleClick() {
      if (!this.agree) {
        Toast('请同意注册条约');
        return;
      }
      this.$http.post('/m/register', {
        regType: this.regType,
        name: this.name,
        groupName: this.groupName,
        money: this.money,
        province: this.province.name,
        city: this.city.name,
        area: this.area.DisName,
        address: this.address
      }).then((response) => {
        if (response.body.code === '000') {
          Toast('注册成功');
          switch (this.regType) {
            case 'workman':
              this.$router.push({
                path: '/userCenter'
              });
              break;
            case 'team':
              this.$router.push({
                path: '/teamCenter'
              });
              break;
            case 'company':
              this.$router.push({
                path: '/companyCenter'
              });
              break;
              return;
          }
        }
        Toast('注册失败');
      }, (response) => {
        Toast('注册失败');
      })
    }
  },
  components: {
    Multiselect
  }
}
</script>
<style>
#register {
  padding: 3.75rem 2.1875rem;
}

#register .type {
  overflow: hidden;
}

#register .type div:nth-child(2) {
  text-align: center;
}

#register .type div:nth-child(3) {
  text-align: right;
}

#register .type>div,
#register .province>div {
  float: left;
  /*display: inline-block;*/
  /*width: calc(100% / 3);*/
  width: 32%;
}

#register .province>div+div {
  margin-left: 5px;
}

#register .province {
  /*clear:both;*/
}

#register .contacts {
  margin-top: 1.875rem;
}

#register .info>div+div {
  margin-top: 0.9375rem;
}

#register .info input {
  border: 1px solid #e8e8e8;
  width: 100%;
  height: 2.5rem;
  font-size: 0.9375rem;
  padding: 0 1.25rem;
  border-radius: 5px;
}

#register .info input:focus {
  outline: none;
}

#register .btns {
  margin-top: 1.875rem;
}

#register .agreements {
  font-size: 0.75rem;
  margin-top: 1rem;
}

#register .agreements .agree {
  display: inline-block;
  width: 10px;
  height: 10px;
  background: url(../assets/images/agree_no.png) center center / contain;
  margin-right: 0.3125rem;
}

#register .agreements.checked .agree {
  background: url(../assets/images/agree_yes.png) center center / contain;
}
</style>
