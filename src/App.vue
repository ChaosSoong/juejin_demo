<template>
  <div id="app">
  <div>
    <el-row >
      <el-col :span="24">
        <div class="grid-content bg-purple">
          <img src="https://gold-cdn.xitu.io/v3/static/img/logo.551f1de.svg" alt="掘金">
          <ul class="title">
            <li><router-link to="/">首页</router-link></li>
            <li><router-link to="/front">前端</router-link></li>
            <li><router-link to="/collection">收藏集</router-link></li>
            <li><router-link to="/find">发现</router-link></li>
            <el-input
              placeholder="搜索"
              size="small"
              icon="search"
              v-model="input"
              :on-icon-click="handleIconClick(input)"
              style="width:200px; margin-left:280px">
            </el-input>
            <router-link to="/submit"><div class="el-icon-plus right" title="发布文章"></div></router-link>
            <div class="el-icon-message right"> <span class="count"></span></div>
          </ul>
          
        </div></el-col>
    </el-row>
    <hr>
  </div>
    <div class="router-link"><router-view></router-view></div>
    <div class="el-icon-caret-top" @click="scrollTop" title="返回顶部"></div>
  </div>
</template>

<script>
export default {
  name: 'app',
  data(){
    return {
      input:''
    }
  },
  created(){
    vm.$on('front',function (argument) {
      alert(argument);
    });
  },
  methods:{
    handleIconClick:function(input){
      console.log(input);
      for (var i = 0; i < this.$children.length; i++) {
          console.log(this.$children);
        }
    },
    scrollTop:function(){
      // alert(1);
      document.body.scrollTop = 0;
    },
    front:function(argument){
      alert(argument);
    }
  }
}
</script>

<style scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.el-row {
    margin-bottom: 20px;
    margin-top: 20px;
    background-color: #FFFFFF;
    height: 50px;
    &:last-child {
      margin-bottom: 0;
    }
  }
.el-col {
    border-radius: 4px;
  }
img{
  margin-left: 50px;float: left;
}
ul{
  float: left;
}
ul li{
  float: left;
  margin-left: 60px;
  list-style-type:none;
  vertical-align:middle;
}
.right{
  margin-left: 40px;
  cursor: pointer;
}
.count {
    position: relative;
    margin-left: -10px;
    padding: .4rem .67rem;
    font-size: 1rem;
    line-height: 1;
    text-align: center;
    color: #f1f1f1;
    background-color: #007fff;
    border-radius: 3rem;
    border: 2px solid #fff;
    word-break: normal;
}
.el-icon-caret-top{
  position: fixed;
  bottom: 60px;
  right: 60px;
  cursor: pointer;
}
.router-link{
  text-decoration: none;
  background-color: rgb(255,255,255);
}
</style>
