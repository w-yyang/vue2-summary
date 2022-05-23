<template>
  <div class="practice">
    <span><router-link to="/use/useRouter/one">第一页</router-link></span>|
    <span><router-link to="/use/useRouter/two">第二页</router-link></span>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  
}
</script>