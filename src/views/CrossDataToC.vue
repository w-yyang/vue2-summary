<template>
  <div>
    <div>{{ pmsg }}</div>
    <menu-item title="来自父组件的值"></menu-item>
    <!-- 动态绑定 属性使用短横线 模板中可使用驼峰外部不行-->
    <menu-item :title="wyy" content='hello' :menu-title='yyy'></menu-item>
    <demo :pstr='pstr' :pnum='12' :pboo=true :parr='parr' :pobj='pobj'></demo>
    <!-- 加冒号数值 不加字符串     不加字符串 加上相应类型-->
  </div>
</template>

<script>
import Vue from 'vue';

Vue.component('menu-item',{
  props:['title','content','menuTitle'],
  data:function(){
    return {
      msg:'子组件数据'
    }
  },
  template:'<div>{{ msg +"---" + title + "----" + content + "******" + menuTitle}}</div>'
});

Vue.component('menuItem',{
  props:['title','content','menuTitle'],
  data:function(){
    return {
      msg:'子组件数据'
    }
  },
  template:'<div>{{ msg +"---" + title + "----" + content + "******" + menuTitle }}</div>'
});

Vue.component('demo',{
  props:['pstr','pnum','pboo','parr','pobj'],
  template:`
    <div>
      <div>{{ pstr }}</div>
      <div>{{ pnum }}</div>
      <div>{{ typeof pnum }}</div>
      <div>{{ pnum + 12 }}</div>
      <div>{{ pboo }}</div>
      <ul>
        <li :key='index' v-for='(item,index) in parr'>{{ item }}</li>
      </ul>
      <div>
        <span>{{ pobj.name }}</span>
      </div>
    </div>
  `
});

export default {
  data() {
    return {
      pmsg:'父组件内容aaa',
      pstr:'wwww',
      parr:['apple','banana','orange'],
      pobj:{
        name:'lisss',
        age:12
      },
      wyy:'动态绑定',
			yyy:'123456'
    };
  }
}
</script>