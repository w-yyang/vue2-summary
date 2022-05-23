<template>
  <div>
    <div v-bind:style='{ border: borderStyle, width: widthStyle, height: heightStyle }'></div>
		<button v-on:click='handle'>切换</button>
		<div :style='objStyles'></div>
		<div v-bind:style='[objStyles, overrideStyles]'></div>
    <div v-bind:class="{ active: isActive , error: isError}">测试样例</div>
		<button v-on:click='handle'>切换</button>
		<div v-bind:class='[activeClass,errorClass, {test: isTest}]'>测试样式</div>
		<button v-on:click='handlesec'>切换</button>
		<div v-bind:class='arrClass'></div>
		<div v-bind:class='objClass'></div>
		<div class='base' v-bind:class='objClass'>1223</div>
  </div>
</template>

<script>
/*
		样式绑定语法细节
		1.对象绑定和数组绑定可结合使用
		2.class绑定的值可以简化操作
		3.默认的class如何处理
	 */
export default {
  data() {
    return {
      borderStyle: '1px solid yellow',
      widthStyle: '100px',
      heightStyle: '200px',
      objStyles: {
        border: '1px solid orange',
        width: '200px',
        height: '100px'
      },
      overrideStyles: {
        border: '5px solid pink',
        backgroundColor: 'green'
      },
      isActive: true,
      isError: true,
      activeClass: 'active',
      errorClass: 'error',
      isTest: true,
      arrClass: ['active','error'],
      objClass: {
        active: true,
        error: true
      }
    };
  },
  methods: {
    handle: function(){
      this.heightStyle = '100px';
      this.objStyles.width = '400px';
    }
  }
};
</script>