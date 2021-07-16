<template>
  <div class="about">
    <h1>This is an about page</h1>
    <button @click="showToast">
      show toast
    </button>
  </div>
</template>
<script>
export default {
  name: "About",
  created() {
    console.log("about created");
  },
  destroyed() {
    console.log("about destroyed");
  },

  activated() {
    console.log("about activated");
  },

  deactivated() {
    console.log("about deactivated");
  },
  methods: {
    showToast() {
      console.log("about 11111");
      this.$toast.show("hello shadow,hello world!!");
    },
  },
};
</script>
