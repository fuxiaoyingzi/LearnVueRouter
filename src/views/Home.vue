<template>
  <div class="home">
    <HelloWorld msg="hello shadow，this is HelloWorld component" />

    <div style="display: flex;">
      <router-link
        style="width: 90px;height: 45px; border: none; font-size: 20px; "
        tag="button"
        :to="{
          name: 'News',
          query: {
            newsId: '123',
          },
          params: {
            newsContent: 'hello shadow,this is params content,from props',
          },
        }"
        >新闻</router-link
      >

      <router-link
        style="width: 90px;height: 45px; border: none; font-size: 20px;margin-left: 12px;"
        tag="button"
        to="/message"
        >消息</router-link
      >
      <!-- <button @click="toNews">新闻</button> -->
      <!-- <button style="margin-left: 12px;" @click="toMessage">消息</button> -->
    </div>

    <div
      style="margin: 20px;width: 100%; height: 1px;background-color: #ccc;"
    ></div>

    <router-view
      style="margin-top: 20px; width: 100%; min-height: 200px;"
    ></router-view>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Home",
  components: {
    HelloWorld,
  },
  data() {
    return {
      defaultUrl: "/news",
    };
  },

  activated() {
    this.$router.push(this.defaultUrl);
  },
  beforeRouteLeave(to, from, next) {
    console.log("beforeRouteLeave---", from);
    this.defaultUrl = from.path;
    next();
  },
  methods: {
    toMessage() {
      this.$router.push("/message");
    },
    toNews() {
      this.$router.push({
        name: "News",
        query: {
          newsId: "123",
        },
        params: {
          newsContent: "hello shadow,this is params content,from props",
        },
      });
    },
  },
};
</script>
<style scoped>
.home {
  text-align: center;
  display: flex;
  background-color: moccasin;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.router-link-active {
  color: red;
  font-size: 22px;
  border: 1px red solid;
  background-color: white;
}
</style>
