<template>
  <div>
    <h2>我是首页</h2>
    <button @click="get">获取</button>
    <button @click="getSon">获取子导航</button>
    <!-- <button>跳转</button> -->
    <router-link to="/list">List</router-link>
    <div style="margin-right: 20px"></div>
    <router-link to="/index/detail">detail</router-link>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      url: "",
    };
  },
  methods: {
    get() {
      axios
        .get("http://rap2api.taobao.org/app/mock/281196/getlistrouter")
        .then((res) => {
          let url = res.data.data.component;
          res.data.data.component = () => import(url + "");
          console.log(res.data.data);
          this.$router.addRoute(...[res.data.data]);
        });
    },
    getSon() {
      setTimeout(() => {
        this.$router.addRoute("index", {
          path: "/index/detail",
          name: "detail",
          component: () => import("./detail"),
        });
        console.log("ok");
      }, 1000);
    },
  },
};
</script>

<style>
</style>