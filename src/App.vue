<template>
  <div id="app">
    <div class="navbar-default">
      <div class="navbar-header">
        <a class="navbar-brand" href="/">
          <img src="./assets/logo.png">
          <span class="heading-font">D-BAND</span>
        </a>
      </div>
      <el-menu default-active="1" mode="horizontal">
        <el-submenu>
          <template slot="title">
            <img src="./assets/avatar.png" class="header-avatar img-circle" :alt="username" :title="username">
            <span class="heading-font">{{username}}</span>
          </template>
          <el-menu-item index="2-1">Logout</el-menu-item>
        </el-submenu>
      </el-menu>
    </div>
    <el-col :span="4" class="el-menu-navbar-wrap">
      <el-menu default-active="2" class="el-menu el-menu-navbar" theme="dark" style="height: 100%">
        <el-menu-item index="/" router="true"><i class="ti-home mr10"></i>Dashboard</el-menu-item>
        <el-menu-item index="/settings" router="true"><i class="ti-clipboard mr10"></i>Settings</el-menu-item>
        <el-menu-item index="/messages" router="true"><i class="ti-info-alt mr10"></i>Message</el-menu-item>
        <el-menu-item index="/list" router="true"><i class="ti-user mr10"></i>Users</el-menu-item>
        <el-submenu index="1">
          <template slot="title"><i class="ti-bar-chart mr10"></i>UI Elements</template>
          <el-menu-item-group>
            <el-menu-item index="/buttons" router="true"><i class="ti-control-record text-success mr10"></i>Buttons</el-menu-item>
            <el-menu-item index="/elements" router="true"><i class="ti-control-record text-success mr10"></i>Elements</el-menu-item>
            <el-menu-item index="/typography" router="true"><i class="ti-control-record text-success mr10"></i>Typography</el-menu-item>
            <el-menu-item index="/widgets" router="true"><i class="ti-control-record text-success mr10"></i>Widgets</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-submenu index="2">
          <template slot="title"><i class="ti-ruler-pencil mr10"></i>Components</template>
          <el-menu-item-group>
            <el-menu-item index="/calendar" router="true"><i class="ti-control-record text-success mr10"></i>Calendar</el-menu-item>
            <el-menu-item index="/gallery" router="true"><i class="ti-control-record text-success mr10"></i>Gallery</el-menu-item>
            <el-menu-item index="/charts" router="true"><i class="ti-control-record text-success mr10"></i>Charts</el-menu-item>
            <el-menu-item index="/notifications" router="true"><i class="ti-control-record text-success mr10"></i>Notifications</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
      </el-menu>
    </el-col>
    <el-col :span="20" :offset="4" style="margin-top: 50px;">
      <transition name="fade" mode="out-in">
        <router-view class="view"></router-view>
      </transition>
    </el-col>
  </div>
</template>

<script>
  export default {
    data: {
      username: 'nick'
    }
  };
</script>

<style lang="less">
  body {
    font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Helvetica,PingFang SC,Hiragino Sans GB,Microsoft YaHei,SimSun,sans-serif;
  }
  html {
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  #app, body, html {
    height: 100%;
  }
  html, body {
    margin:0;
    padding:0;
  }
  .mr10 {
    margin-right: 10px;
  }
  .navbar-default {
    position: fixed;
    left: 0;
    right: 0;
    height: 50px;
    background: #1582dc;
    z-index: 1000;
    .img-circle {
      border-radius: 50%;
    }
    .header-avatar {
      width: 32px;
    }
    .heading-font {
      vertical-align: middle;
    }
    .navbar-brand {
      text-decoration: none;
      float: left;
      padding: 10px 15px;
      font-size: 18px;
      line-height: 20px;
      height: 30px;
      .heading-font {
        font-size: 14px;
        color: rgba(219, 237, 252, 0.9);
      }
      img{
        width: 28px;
        height: 28px;
        display: inline;
        vertical-align: middle;
      }
    }
    .el-menu {
      float: right;
      background-color: transparent;
      height: 50px;
      .el-submenu {
        &:hover{
          border-bottom: 0;
          background-color: transparent;
        }
      }
      .el-menu-item, .el-submenu__title {
        height: 50px;
        padding: 9px;
        line-height: 32px;

        &:hover{
          border-bottom: 0;
          background-color: transparent;
        }
      }
    }
  }
  .el-menu-navbar-wrap {
    height: 100%;
    position: fixed;
    padding-top: 20px;
    margin-top: 50px;
    background-color: #324057;
    .el-menu-navbar{
      border-radius: 0;
      .el-menu-item,.el-submenu__title {
        height: 40px;
        line-height: 40px;
      }
    }
  }
  .fade-enter-active, .fade-leave-active {
    transition: all .2s ease;
  }
  .fade-enter, .fade-leave-active {
    opacity: 0;
  }
</style>