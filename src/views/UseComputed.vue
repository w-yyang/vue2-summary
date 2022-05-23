<template>
  <div>
    <div>{{ msg }}</div>
		<div>{{ reverseString }}</div>
		<div>{{ reverseString }}</div>
		<div>{{ reverseMessage() }}</div>
		<div>{{ reverseMessage() }}</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg:'hello',
      num: 100
    }
  },
  //计算属性  条理清晰 逻辑分明 模板内容简洁
  //
  //计算属性基于他们的依赖库进行缓存
  //方法不存在缓存
  computed:{
    reverseString:function(){
      var total = 0;
      console.log('computed');
      //仅打印一次 拥有缓存直接访问缓存 
      //return this.msg.split('').reverse().join('');
      for(var i = 0;i <= this.num;i++){
        total += i;
      }
      return total;
    }
  },
  methods:{
    reverseMessage:function(){
      console.log('methods');
      //打印两次
      return this.msg.split('').reverse().join('');
    }
  }
}
</script>