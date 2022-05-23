<template>
  <div class="content-wrapper">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data() {
    return {

    };
  },
  methods: {

  }
};
</script>

<style lang="scss" scoped>
  .content-wrapper {
    width: 100%;
    padding: 16px 200px;
    height: calc(100vh - 60px);
  }
</style>