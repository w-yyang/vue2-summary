<template>
  <div>
    <div>
			<span>
				<input type="text" v-model='fname'>
				<button @click='add'>添加</button>
				<button @click='del'>删除</button>
				<button @click='change'>替换</button>
			</span>
		</div>
		<ul>
			<li :key='index' v-for='(item,index) in list'>{{ item }}</li>
		</ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list:['apple','banana','orange'],
			fname:''
    };
  },
  methods: {
    add() {
      this.list.push(this.fname);
    },
    del() {
      this.list.pop();
    },
    change:function(){
      this.list = this.list.slice(0,2);
      //形成新数组 不影响原数组
    }
  }
}
</script>