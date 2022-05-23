<template>
  <div>
    <input type="text" v-focus>
		<input type="text" v-color="msg">
  </div>
</template>

<script>
	/*自定义指令*/
  //默认聚焦当前框 只可在一个上
  // Vue.directive('focus',{
  // 	inserted:function(el){
  // 		//el表示指令绑定元素
  // 		el.focus();
  // 	}
  // 	//bind 第一次绑定元素时调用，调用一次
  // 	//inserted插入父节点时调用，仅保证父节点存在，但不一定已被插入文档中。
  // });

  // Vue.directive('color',{
  // 	//根据指令参数设置背景色
  // 	bind:function(el,binding){
  // 		//binding拿到msg
  // 		console.log(binding);
  // 		//console.log(binding.value);
  // 		console.log(binding.value.color);
  // 		el.style.backgroundColor =  binding.value.color;
  // 	}
  // });

export default {
  // el挂载元素
  data() {
    return {
      msg:{
        color:'orange'
      }
    };
  },
  /*自定义指令局部指令 只能在本组件中使用*/
  directives:{
    color:{
      bind:function(el,binding){				
        el.style.backgroundColor =  binding.value.color;
      }
    },
    focus:{
      inserted:function(el){
        el.focus();
      }
    }
  }
}
</script>