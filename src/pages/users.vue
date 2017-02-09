<template>
  <div id="users">
    <el-table
      stripe
      :data="list"
      v-loading="loading"
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
        @current-change="gotoPage"
        layout="prev, pager, next">
      </el-pagination>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'users-view',
  data() {
    return {
      loading: false,
      page: 1,
      size: 10
    };
  },
  created() {
    this.reload();
  },
  computed: mapGetters({
    list: 'user/list',
    total: 'user/total'
  }),
  methods: {
    reload() {
      this.loading = true;
      this.$store.dispatch('user/getList', {
        page: this.page,
        size: this.size
      }).then(() => {
        this.loading = false;
      }).catch((e) => {
        this.loading = false;
        this.$notify({
          title: e.status,
          message: e.message
        });
      });
    },
    gotoPage(page) {
      this.page = page;
      this.reload();
    }
  }
};
</script>

<style lang="less">
#users {
  padding: 15px;

  .user-list-wrap {
    margin: 20px 0;
    text-align: center;
  }
}
</style>
