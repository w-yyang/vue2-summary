<template>
  <aside>
    <ul>
      <li 
        v-for="(item, index) in routerList" 
        :key="item.name"
        :class="activeInd === index ? 'active' : null"
        @click="changeInd(index)"
      >
        <router-link :to="item.path">{{ item.title }}</router-link>
      </li>
    </ul>
  </aside>
</template>

<script>
import { routerList } from '../router/router-list';

export default {
  data() {
    return {
      routerList,
      activeInd: -1
    };
  },
  methods: {
    changeInd(index) {
      this.activeInd = index;
    }
  }
};
</script>

<style lang="scss" scoped>
  aside {
    width: 240px;
    height: calc(100vh - 60px);
    border-right: 1px solid #aaa;;

    ul {
      width: 100%;
      padding: 0 10px;
      padding: 10px 0;

      li {
        margin: 0 10px;
        height: 30px;
        border-radius: 4px;

        a {
          width: 100%;
          height: 30px;
          line-height: 30px;
          text-decoration: none;
        }
      }

      .active {
        background-color: #ddd;

        a {
          color: #fff;
        }
      }
    }
  }
</style>