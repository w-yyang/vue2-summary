<template>
  <div>
    	<div>
        <button @click='handle'>销毁</button>
      </div>
      <test-tom></test-tom>
      <test-jerry></test-jerry>
  </div>
</template>

<script>
import Vue from 'vue';

const hub = new Vue();

Vue.component('test-tom',{
  data() {
    return {
      num:0
    }
  },
  template:
    `<div>
      <div>TOM:{{ num }}</div>
      <div>
        <button @click='handle'>点击</button>
      </div>
    </div>
  `,
  methods:{
    handle:function(){
      hub.$emit('jerry-event',2);
    }
  },
  mounted:function(){
    //监听事件
    hub.$on('tom-event',(val) => {
      this.num += val;
    });
  }
});

Vue.component('test-jerry',{
  name: 'test-jerry',
  data() {
    return {
      num:0
    }
  },
  template:
    `<div>
      <div>JERRY:{{ num }}</div>
      <div>
        <button @click='handle'>点击</button>
      </div>
    </div>
  `,
  methods:{
    handle:function(){
      //触发兄弟组建的事件
      hub.$emit('tom-event',1);
    }
  },
  mounted:function(){
    //监听事件
    hub.$on('jerry-event',(val) => {
      this.num += val;
    });
  }
});

export default {
  methods: {
    handle() {
      hub.$off('tom-event');
			hub.$off('jerry-event');
    }
  }
}
</script>