<template>
  <div>
    <div>{{ num }}</div>
		<button v-on:click='handlee(123, $event)'>点击</button>
		<button @click='cathandle'>点击2</button>
    <button v-on:click='num++'>点击</button>
    <button @click='num++'>点击1</button>
    <button v-on:click='handle'>点击2</button>
    <button @click='handle()'>点击3</button>
  </div>
</template>

<script>
/*事件绑定
  1.如果事件绑定函数名称，默认传递事件对象作为事件函数的第一个参数
  2.如果事件绑定函数调用，name事件对象必须作为最后一个参数显示传递，事件对象名称必须为$event.
  */

export default {
  data() {
    return {
      num: 0
    };
  },
  methods: {
    //事件是最后一个
    handlee:function(p,event){
      this.num++;
      console.log(p);
      console.log(event.target.tagName);
      console.log(event.target.innerHTML);
    },
    cathandle:function(event){
      console.log(event.target.tagName);
      console.log(event.target.innerHTML);
    },
    handle() {
      this.num++;
      console.log(this == vm);
    }
  }
};
</script>