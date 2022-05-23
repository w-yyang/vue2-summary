<template>
  <div>
    <ul>
      <li
        v-for="item in list"
        :key="item.id"
        @click="changeInd(item.id)"
        :class="currentInd === item.id ? 'active' : null"
      >
        {{ item.title }}
      </li>
    </ul>
    <h5>{{ list[currentInd].title }}</h5>
  </div>
</template>

<script>
export default {
  data() {
    const list = [
      {
        id: 0,
        title: 'apple'
      },
      {
        id: 1,
        title: 'banana'
      },
      {
        id: 2,
        title: 'orange'
      }
    ];
    return {
      list,
      currentInd: 0
    };
  },
  methods: {
    changeInd(index) {
      this.currentInd = index;
    }
  }
}
</script>

<style lang="scss" scoped>
  .active {
    color: red;
  }
</style>
