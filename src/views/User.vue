<!--  -->
<template>
  <div>
    <div style="font-size: 32px;">hello 用户中心</div>
    <div style="text-align: left; font-size: 20px; margin-bottom: 10px;">
      路由映射表
    </div>
    <div style="text-align: left; background-color: bisque;padding: 20px;">
      {<br />
      <div style="margin-left: 10px;">
        path: "/user/:id",<br />
        name: "User",<br />
        meta: {<br />
        <div style="margin-left: 10px;">title: "用户",<br /></div>
        },<br />
        props: true,<br />
        component: () => import("../views/User.vue"),<br />
      </div>
      },<br />
    </div>
    <hr />

    <div style="text-align: left; font-size: 20px; margin-bottom: 10px;">
      push跳转
    </div>
    <div style="text-align: left; background-color:pink;padding: 20px;">
      this.$router.push({<br />
      <div style="margin-left: 10px;">
        name: "User",<br />
        params: { id: 12, name: "小影子", address: "上海" },<br />
        query: {name: "shadow", },<br />
      </div>
      });<br />
    </div>
    <hr />

    <div style="text-align: left; font-size: 20px; margin-bottom: 10px;">
      获取参数
    </div>
    <div
      style="text-align: left; background-color: greenyellow; padding: 20px;"
    >
      <div style="color: orangered; margin-bottom: 10px;">
        通过$route 获取参数
      </div>
      <div>获取params参数 绑定url地址 方式1： {{ $route.params.id }}</div>
      <div>获取params参数 绑定url地址 方式2： {{ userId }}</div>
      <div>获取params参数 绑定url地址 方式3： {{ id }}</div>
      <div>获取query参数方式1： {{ userName }}</div>
      <div>获取query参数方式2： {{ $route.query.name }}</div>

      <hr />
      <div style="color: orangered; margin-bottom: 10px;">
        props 布尔型模式 传递参数
      </div>
      <div>props 获取params参数： {{ name }}</div>
      <div>props 获取params参数： {{ address }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "User",
  components: {},
  data() {
    return {
      userId: this.$route.params.id,
      userName: this.$route.query.name,
    };
  },
  props: ["id", "name", "address"],
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {},

  created() {
    console.log("user created");
  },
  destroyed() {
    console.log("user destroyed");
  },

  activated() {
    console.log("user activated");
  },

  deactivated() {
    console.log("user deactivated");
  },
};
</script>
<style scoped></style>
