<!--  -->
<template>
  <div>
    <div style="font-size:20px;color: orangered; margin-bottom: 20px;">
      hello Message---props 对象模式 ,传递参数
    </div>
    <div>props 获取query 参数---{{ content }}</div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {};
  },
  props: ["content"],
};
</script>
<style scoped></style>
