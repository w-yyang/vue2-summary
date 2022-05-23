<template>
  <div>
    <div>{{ num }}</div>
		<div v-on:click='catchthis'>
			<button v-on:click.stop='handle'>点击</button>
			<!-- .stop 阻止事件冒泡 事件修饰符 同stopPropagation -->
		</div>
		<div>
			<a href="http://www.baidu.com" v-on:click.prevent='preventthis'>百度</a>
			<!-- 事件修饰符 阻止默认行为  可串连多个事件修饰符  .stop.prevent prevent.self阻止所有点击  .self.prevent 阻止对元素自身的点击-->
		</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      num: 0
    };
  },
  methods:{
    catchthis: function(){
      this.num++;
    },
    //事件冒泡 num++
    handle: function(event){
      //this.num++;
      //阻止冒泡
      event.stopPropagation();//去掉  有冒泡
      console.log(event.target.tagName);
      console.log(event.target.innerHTML);
    },
    preventthis: function(event){
      //阻止默认行为
      event.preventDefault();
    }
  }
};
</script>