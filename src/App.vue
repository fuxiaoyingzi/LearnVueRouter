<template>
  <div id="app">
    <div id="nav" style="background-color: indianred; font-size: 24px;">
      <router-link tag="button" to="/">Home</router-link>
      <router-link
        tag="button"
        style="margin-left: 20px; margin-right: 20px;"
        to="/about"
        >About</router-link
      >
      <button @click="toUser">User</button>
    </div>
    <keep-alive include="" :exclude="noCashList">
      <router-view />
    </keep-alive>
  </div>
</template>

<script>
export default {
  data() {
    return {
      noCashList: "User,About", //组件名称，定义在vue组件的name字段，中间用,分割
    };
  },
  methods: {
    toUser() {
      //方式1
      //this.$router.push("/user/12");

      //方式2
      this.$router.push({
        name: "User",
        params: { id: 12, name: "小影子", address: "上海" },
        query: {
          name: "shadow",
        },
      });

      //方式3
      // this.$router.push({
      //   path: "/user/12",
      //   query: {
      //     name: "shadow",
      //   },
      // });
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
