<template>
  <el-select
    filterable
    clearable
    remote
    v-model="item"
    :remote-method="load"
    :loading="loading"
    placeholder="选择城市">
    <el-option
      v-for="c in cities"
      :key="c.id"
      :label="c.name"
      :value="c.id">
      {{c.name}}
    </el-option>
  </el-select>
</template>

<script>
import API from '../api/city';

export default {
  name: 'city-select',
  props: ['value'],
  data() {
    return {
      loading: false,
      cities: []
    };
  },
  mounted() {
    this.load();
  },
  computed: {
    item: {
      get() {
        return this.value;
      },
      set(v) {
        this.$emit('input', v);
      }
    }
  },
  methods: {
    load(name) {
      this.loading = true;
      API.list(name).then(({ data }) => {
        this.cities = data;
        this.loading = false;
      }).catch((e) => {
        this.loading = false;
        this.$notify({
          title: e.status,
          message: e.message
        });
      });
    }
  }
};
</script>
