<template>
  <header>
    <img src="../assets/logo.png" alt="">
    <h3>vue2示例合集</h3>
  </header>
</template>

<script>
import Vue from 'vue';

export default{
  data() {
    return {

    };
  },
  methods: {

  }
};
</script>

<style lang="scss" scoped>
  header {
    height: 60px;
    display: grid;
    grid-template-columns: 60px 200px;
    justify-items: center;
    align-items: center;
    border-bottom: 1px solid #aaa;

    img {
      width: 50px;
      height: 50px;
    }

    h3 {
      font-size: 24px;
      font-weight: 500;
      justify-self: left;
    }
  }
</style>