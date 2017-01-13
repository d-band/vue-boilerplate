<template>
  <div id="app">
    <div class="main-navbar">
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
    <el-col :span="4" class="main-sidebar">
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
  .main-navbar {
    position: fixed;
    left: 0;
    right: 0;
    height: 50px;
    padding: 0 8px;
    background: #1582dc;
    z-index: 1000;

    .heading-font {
      margin: 0 4px;
      font-size: 14px;
      color: #fff;
    }
    .navbar-brand {
      text-decoration: none;
      float: left;
      padding: 10px 15px;
      font-size: 18px;
      line-height: 20px;
      height: 30px;

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

      .img-circle {
        border-radius: 50%;
      }
      .header-avatar {
        width: 32px;
        height: 32px;
        vertical-align: middle;
      }
      .el-submenu {
        &:hover{
          background-color: #1270be;
        }
      }
      .el-submenu__title {
        height: 50px;
        padding: 9px;
        line-height: 32px;
        border-bottom: 0;

        &:hover{
          border-bottom: 0;
          background-color: #1270be;
        }
      }
    }
    .el-menu--horizontal .el-submenu > .el-menu {
      top: 55px;
      height: auto;
    }
  }
  .main-sidebar {
    height: 100%;
    position: fixed;
    margin-top: 50px;
    padding-top: 20px;
    overflow-y: scroll;
    background-color: #4f5061;
    .el-menu-navbar {
      border-radius: 0;
      .el-menu-item, .el-submenu__title {
        height: 40px;
        line-height: 40px;
      }
    }

    .el-menu--dark {
      background-color: #4f5061;
      .el-menu-item, .el-submenu__title {
        color: #b2b6be;
        &:hover {
          color: #fff;
          background-color: transparent;
        }
      }
      .el-submenu .el-menu {
        background-color: #525365;
        .el-menu-item:hover {
          color: #fff;
          background-color: transparent;
        }
      }
      .el-submenu .el-menu .el-menu-item.is-active, .el-menu-item.is-active {
        color: #fff;
        background-color: #1582dc;
        &:hover {
          background-color: #1582dc;
        }
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