import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

const News = () => import("../views/News.vue");
const Message = () => import("../views/Message.vue");

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    //元数据，可以定义需要的描述性数据
    meta: {
      title: "首页",
    },
    //路由守卫
    beforeEnter: (to, from, next) => {
      document.title = "路由守卫标题";
      next();
    },
    component: Home,

    children: [
      // {
      //   path: "",
      //   redirect: "/news",
      // },
      //props 函数模式
      //你可以创建一个返回 props 的函数。这允许你将参数转换为其他类型，将静态值与基于路由的值相结合等等。
      {
        path: "news",
        name: "News",
        component: News,
        meta: {
          title: "新闻",
        },
        props: (route) => ({
          newsId: route.query.newsId,
          pnewsContent: route.params.newsContent,
        }),
      },

      //props 对象模式

      //如果 props 是一个对象，它会被按原样设置为组件属性。当 props 是静态的时候有用。
      {
        path: "message",
        name: "Message",
        component: Message,
        meta: {
          title: "消息",
        },
        props: {
          content: "hello shadow,this is message content,from props obj.",
        },
      },
    ],
  },
  {
    path: "/about",
    name: "About",
    meta: {
      title: "关于",
    },
    //es6特有的懒加载 方式，会单独打包成一个js文件，需要的时候才会被加载
    component: () => import("../views/About.vue"),
  },

  //props 布尔型模式
  //当 props 设置为 true 时，route.params 将被设置为组件的 props。

  {
    path: "/user/:id",
    name: "User",
    meta: {
      title: "用户",
    },
    props: true,
    component: () => import("../views/User.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});
//全局导航守卫
//前置守卫
router.beforeEach((to, from, next) => {
  // console.log("beforeEach");
  // console.log(to);
  document.title = to.meta.title;
  next();
});
//后置钩子
router.afterEach((to, from) => {
  // console.log("afterEach");
});

export default router;
