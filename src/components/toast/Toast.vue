<template>
  <div class="toast" v-show="isShow">
    {{ message }}
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: "",
      isShow: false,
    };
  },
  methods: {
    show(message, duration = 2000) {
      this.message = message;
      this.isShow = true;
      setTimeout(() => {
        this.isShow = false;
        this.message = "";
      }, duration);
    },
  },
};
</script>

<style scoped>
.toast {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  padding: 8px 10px;
  background-color: rgb(0, 0, 0, 0.6);
  z-index: 999;
  border-radius: 1px;
}
</style>
