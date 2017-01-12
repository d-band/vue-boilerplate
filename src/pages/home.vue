<template>
  <div id="home">
    <img src="../assets/logo.png">
    <el-button @click.native="startHacking">Let's do it</el-button>
    <el-table
      v-if="!loading"
      :data="users"
      style="width: 800px;">
      <el-table-column
        prop="id"
        label="ID"
        width="180">
      </el-table-column>
      <el-table-column
        prop="name"
        label="姓名"
        width="180">
      </el-table-column>
      <el-table-column
        prop="email"
        label="Email">
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: 'home-view',
  data() {
    return {
      loading: true
    };
  },
  beforeMount() {
    this.$store.dispatch('loadUsers').then(() => {
      this.loading = false;
    });
  },
  computed: {
    users() {
      return this.$store.state.users;
    }
  },
  methods: {
    startHacking() {
      this.$notify({
        title: 'It Works',
        message: 'We have laid the groundwork for you. Now it\'s your time to build something epic!',
        duration: 6000
      });
    }
  }
};
</script>

<style>
body {
  font-family: Helvetica, sans-serif;
}
</style>
