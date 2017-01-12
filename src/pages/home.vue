<template>
  <div id="home">
    <img src="../assets/logo.png">
    <el-button @click.native="startHacking">Let's do it</el-button>
    <div v-if="!loading">
      <el-table
        :data="users"
        style="width: 100%">
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
      <div class="user-list-wrap">
        <el-pagination
          :total="total"
          :current-page="page"
          :page-size="size"
          layout="prev, pager, next">
        </el-pagination>
      </div>
    </div>
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
    this.loadUsers();
  },
  computed: {
    users() {
      return this.$store.state.users;
    }
  },
  methods: {
    loadUsers() {
      this.$store.dispatch('loadUsers').then(() => {
        this.total = 100;
        this.size = 10;
        this.page = 1;
        this.loading = false;
      }).catch((e) => {
        this.$notify({
          title: e.status,
          message: e.message,
          duration: 3000
        });
      });
    },
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
.user-list-wrap {
  margin: 20px 0;
  text-align: center;
}
</style>
