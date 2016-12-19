<template>
  <div id="message_center">
    <div class="msg">恭喜你已经连续登陆15天，将会获得推荐资格</div>
    <div class="msg">恭喜你已经连续登陆15天，将会获得推荐资格</div>
    <div class="msg">恭喜你已经连续登陆15天，将会获得推荐资格</div>
    <div class="msg">恭喜你已经连续登陆15天，将会获得推荐资格</div>
    <div class="msg">恭喜你已经连续登陆15天，将会获得推荐资格</div>
  </div>
</template>
<script>
export default {
  name: 'systemMsg',
  data () {
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
#message_center {
  height: 100vh;
  background: #efefef;
  padding-top: 0.625rem;
}

#message_center .msg {
  background: #fff;
  color: #818181;
  line-height: 2.1875rem;
  height: 2.1875rem;
  font-size: 1rem;
  padding: 0 1.25rem;
  margin-bottom: 0.625rem;
  width: 100%;
  white-space: nowrap;
  overflow: hidden;
}
</style>
