<template>
  <div>
    <h2>我是list页面</h2>
    <button @click="get">获取ListSon</button>
    <router-link to="/detail">详情</router-link>
    <hr />
    <router-view></router-view>
  </div>
</template>

<script>
import axios from "axios";
export default {
  methods: {
    get() {
      axios
        .get("http://rap2api.taobao.org/app/mock/281196/getsonrouter")
        .then((res) => {
          let url = res.data.data.component;
          res.data.data.component = () => import(url + "");
          console.log(res.data.data);
          this.$router.addRoute("List", ...[res.data.data]);
        });
      // console.log(get);
    },
  },
};
</script>

<style>
</style>
