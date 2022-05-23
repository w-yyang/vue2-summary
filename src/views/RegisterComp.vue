<template>
  <div>
    <button-counter></button-counter>
		<button-counter></button-counter>
		<hello-world></hello-world>
		<hello-wy></hello-wy>
  </div>
</template>

<script>
import Vue from 'vue';

//全局组建    不可在上部直接调用驼峰式(可在模板中使用)的自定义组建  横线式可以使用
Vue.component('HelloWorld',{
  data:function(){
    return {
      msg:'HelloWorld'
    }
  },
  template:'<div>{{ msg }}</div>'
});

Vue.component('button-counter',{
  /*data必须是函数   每个组建拥有独立函数*/
  data() {
    return {
      count:0
    }
  },
  template:
  // '<button @click="count++">点击了{{ count }}次</button>',
  // 组建模板是一个根元素 两个button并列报错   外加div可以
  // 内容可以是模板字符串   `  `
  // 组建命名方式 短横线式  驼峰式
  `<div>
  <button @click="handle">点击了{{ count }}次</button>
    <HelloWorld></HelloWorld>
    </div>
  `,
  methods:{
    handle:function(){
      this.count += 2;
    }
  }
});

const Hello = {
  data() {
    return {
      msg:'hello wyy'
    }
  },
  template:'<div>{{ msg }}</div>'
};

const Hi = {
  data() {
    return {
      msg:'hello w'
    };
  },
  template:'<div>{{ msg }}</div>'
};

export default {
  //局部组件   仅可在注册它的父组件中使用
  components:{
    'hello-world':Hello,
    'hello-wy':Hi
  }
};
</script>