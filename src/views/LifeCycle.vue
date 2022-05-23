<template>
  <div>
    <div>{{ msg }}</div>
		<button @click='update'>更新</button>
		<button @click='destroy'>销毁</button>
  </div>
</template>

<script>
// 挂载
//    1beforeCreate  2created  3beforeMount  4mounted
// 更新
// 	1beforeUpdate  2updated
// 销毁
// 	1beforeDestroy  2destroted
export default {
  data() {
    return {
      msg:'生命周期'
    };
  },
  methods:{
    update: function(){
      this.msg = 'hello';
    },
    destroy: function(){
      this.$destroy();//销毁实例
    }
  },
  beforeCreate:function(){
    console.log('beforeCreate');
  },
  created:function(){
    console.log('created');
  },
  beforeMount:function(){
    console.log('beforeMount');
  },
  mounted:function(){
    console.log('mounted');
  },
  beforeUpdate:function(){
    console.log('beforeUpdate');
  },
  updated:function(){
    console.log('updated');
  },
  beforeDestroy:function(){
    console.log('beforeDestroy');
  },
  destroyed:function(){
    console.log('destroyed');
  }
}
</script>