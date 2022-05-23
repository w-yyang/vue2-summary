<template>
  <div>
    <div :style='{fontSize:fontSize + "px"}'>{{ pmsg }}</div>
    <menu-item :parr='parr' @enlarge-text='handle($event)'></menu-item>
  </div>
</template>

<script>
/*props 传递数据原则 单向数据流*/
/*$emit 子组件向父组件传递*/
export default {
  data() {
    return {
      pmsg:'父组件中内容',
      parr:['appe','asd','dfg'],
      fontSize:10
    };
  },
  methods: {
    handle: function(val){
      this.fontSize += val;
    }
  },
  components: {
    'menu-item': {
      props: ['parr'],
			template:
				`
					<div>
						<ul>
							<li :key='index' v-for='(item,index) in parr'>{{ item }}</li>
						</ul>
						<button @click='parr.push("lemon")'>点击</button>
						<button @click='$emit("enlarge-text", 5)'>点击</button>
					</div>
				`
			//父组件监听子组件
    }
  }
}
</script>