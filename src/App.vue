<template>
  <div id="app">
    <div class="main-navbar">
      <div class="navbar-header">
        <a class="navbar-brand" href="/">
          <img src="./assets/logo.png">
          <span class="heading-font">D-BAND</span>
        </a>
      </div>
      <el-menu mode="horizontal">
        <el-submenu index="2-0">
          <template slot="title">
            <img
              src="./assets/avatar.png"
              class="header-avatar img-circle"
              :alt="username"
              :title="username"
            >
            <span class="heading-font">{{username}}</span>
          </template>
          <el-menu-item index="2-1">Logout</el-menu-item>
        </el-submenu>
      </el-menu>
    </div>
    <el-col :span="4" class="main-sidebar">
      <el-menu
        router
        background-color="#4f5061"
        text-color="#b2b6be"
        active-text-color="#fff"
        style="height: 100%"
        :default-active="path"
        class="el-menu menu-navbar"
      >
        <el-menu-item index="/"><i class="ti-home mr10"></i>Dashboard</el-menu-item>
        <el-menu-item index="/users"><i class="ti-user mr10"></i>Users</el-menu-item>
        <el-menu-item index="/settings"><i class="ti-clipboard mr10"></i>Settings</el-menu-item>
        <el-menu-item index="/messages"><i class="ti-info-alt mr10"></i>Message</el-menu-item>
        <el-submenu index="1">
          <template slot="title"><i class="ti-bar-chart mr10"></i>UI Elements</template>
          <el-menu-item index="/buttons">
            <i class="ti-control-record text-success mr10"></i>Buttons
          </el-menu-item>
          <el-menu-item index="/elements">
            <i class="ti-control-record text-success mr10"></i>Elements
          </el-menu-item>
          <el-menu-item index="/typography">
            <i class="ti-control-record text-success mr10"></i>Typography
          </el-menu-item>
          <el-menu-item index="/widgets">
            <i class="ti-control-record text-success mr10"></i>Widgets
          </el-menu-item>
        </el-submenu>
        <el-submenu index="2">
          <template slot="title"><i class="ti-ruler-pencil mr10"></i>Components</template>
          <el-menu-item index="/calendar">
            <i class="ti-control-record text-success mr10"></i>Calendar
          </el-menu-item>
          <el-menu-item index="/gallery">
            <i class="ti-control-record text-success mr10"></i>Gallery
          </el-menu-item>
          <el-menu-item index="/charts">
            <i class="ti-control-record text-success mr10"></i>Charts
          </el-menu-item>
          <el-menu-item index="/notifications">
            <i class="ti-control-record text-success mr10"></i>Notifications
          </el-menu-item>
        </el-submenu>
      </el-menu>
    </el-col>
    <el-col :span="20" :offset="4" style="margin-top: 56px;">
      <transition name="fade" mode="out-in">
        <router-view class="view"></router-view>
      </transition>
    </el-col>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: 'nick'
    };
  },
  computed: {
    path() {
      return this.$route.path;
    }
  }
};
</script>

<style lang="less">
  body {
    font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Helvetica,
    PingFang SC,Hiragino Sans GB,Microsoft YaHei,SimSun,sans-serif;
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
    height: 56px;
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
      padding: 14px 15px;
      font-size: 18px;

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
      height: 56px;

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
        height: 56px;
        line-height: 56px;
        border-bottom: 0!important;

        &:hover{
          border-bottom: 0!important;
          background-color: #1270be;
        }
      }
    }
    .el-menu--horizontal {
      border-bottom: 0;
    }
    .el-menu--horizontal .el-submenu > .el-menu {
      top: 56px;
      height: auto;
    }
  }
  .main-sidebar {
    position: fixed;
    left: 0;
    top: 56px;
    bottom: 0;
    padding: 20px 0;
    overflow-x: hidden;
    overflow-y: auto;
    background-color: #4f5061;
    -ms-overflow-style: none;  // IE 10+
    overflow: -moz-scrollbars-none;  // Firefox
    &&::-webkit-scrollbar {
      display: none;  // Safari and Chrome
    }

    .text-success {
      color: #5cb85c;
    }

    .menu-navbar {
      border-right: none;
      .el-menu-item, .el-submenu__title {
        height: 40px;
        line-height: 40px;
      }
      .el-menu-item.is-active {
        background-color: #1582dc !important;
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
