<!--  -->
<template>
  <div>
    <div style="font-size:20px;color: orangered; margin-bottom: 20px;">
      hello News---props 函数模式 ,传递参数
    </div>

    <div>props 获取query 参数---{{ newsId }}</div>
    <div>props 获取params 参数---{{ pnewsContent }}</div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {};
  },
  created() {
    //console.log("params--" + this.$route.params.newsContent);
  },
  props: ["newsId", "pnewsContent"],
};
</script>
<style scoped></style>
