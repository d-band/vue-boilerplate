<template>
  <div id="users">
    <div class="user-btns">
      <el-button type="primary" @click="handleAdd()">添加</el-button>
    </div>
    <el-table
      stripe
      :data="list"
      v-loading="loading"
      style="width: 100%">
      <el-table-column
        prop="name"
        label="姓名">
      </el-table-column>
      <el-table-column
        prop="email"
        label="邮箱">
      </el-table-column>
      <el-table-column
        prop="address"
        label="地址">
        <template slot-scope="scope">
          <span v-if="cityMap">{{cityMap[scope.row.address].name}}</span>
        </template>
      </el-table-column>
      <el-table-column
        label="操作"
        width="120">
        <template slot-scope="scope">
          <el-button
            @click="editUser(scope.row)"
            type="text"
            size="small">
            编辑
          </el-button>
          <el-button
            @click="deleteUser(scope.row.id)"
            type="text"
            size="small">
            删除
          </el-button>
        </template>
      </el-table-column>
    </el-table>
    <div class="user-list-wrap">
      <el-pagination
        :total="total"
        :current-page="page"
        :page-size="size"
        :page-sizes="[10, 30, 50, 100]"
        @current-change="gotoPage"
        layout="prev, pager, next">
      </el-pagination>
    </div>
    <el-dialog :title="title" :visible.sync="show">
      <el-form ref="form" :model="form" :rules="rules" style="width:100%;" label-width="80px">
        <el-form-item label="姓名" prop="name">
          <el-input v-model="form.name" />
        </el-form-item>
        <el-form-item label="邮箱" prop="email">
          <el-input v-model="form.email" />
        </el-form-item>
        <el-form-item label="地址" prop="address">
          <city-select v-model="form.address" style="width:100%;" />
        </el-form-item>
      </el-form>
      <div slot="footer" style="text-align:center;">
        <el-button @click="show = false">取 消</el-button>
        <el-button type="primary" @click="handleSubmit()">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import CitySelect from '../components/CitySelect.vue';

export default {
  name: 'users-view',
  components: {
    CitySelect
  },
  data() {
    return {
      show: false,
      title: '',
      form: {
        id: null,
        name: null,
        email: null,
        address: null
      },
      rules: {
        name: [{ required: true, message: '请输入姓名' }],
        email: [{ type: 'email', required: true, message: '请输入邮箱' }],
        address: [{ required: true, message: '请选择地址' }]
      },
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
    total: 'user/total',
    cityMap: 'city/map'
  }),
  methods: {
    ...mapActions({
      fetchCities: 'city/getList',
      fetchUsers: 'user/getList',
      remove: 'user/remove',
      upsert: 'user/upsert'
    }),
    reload() {
      this.loading = true;
      this.fetchCities();
      this.fetchUsers({
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
    },
    editUser(data) {
      this.form = { ...data };
      this.show = true;
      this.title = '修改用户信息';
    },
    deleteUser(id) {
      this.remove(id).catch(e => this.$notify({
        title: e.status,
        message: e.message
      }));
    },
    handleAdd() {
      if (this.$refs.form) {
        this.$refs.form.resetFields();
      }
      this.form.id = null;
      this.show = true;
      this.title = '添加用户';
    },
    handleSubmit() {
      this.$refs.form.validate((valid) => {
        if (valid) {
          this.upsert(this.form).then(() => {
            this.show = false;
          }).catch(e => this.$notify({
            title: e.status,
            message: e.message
          }));
          return true;
        }
        return false;
      });
    }
  }
};
</script>

<style lang="less">
#users {
  padding: 15px;

  .user-btns {
    margin-bottom: 20px;
    text-align: right;
  }
  .user-list-wrap {
    margin: 20px 0;
    text-align: center;
  }
}
</style>
