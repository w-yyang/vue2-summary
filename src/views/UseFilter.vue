<template>
  <div>
    <input type="text" v-model='msg'>
		<div>{{ msg | upper}}</div>
		<div>{{ msg | upper | lower}}</div>
		<div :abc="msg | upper">测试数据</div>
    <!-- <div>{{ date | format('abc','def') }}</div> -->
    <div>{{ date | format('yyyy-MM-dd') }}</div>
  </div>
</template>

<script>
import Vue from 'vue';

// Vue.filter('format',function(value,arg,arg1){
// 	console.log(arg,arg1);
// 	return value;
// });
// 
// Vue.filter('format',function(value,arg){
// 	if(arg == 'yyyy-MM-dd'){
// 		var ret = '';
// 		ret += value.getFullYear() + '-' + (value.getMonth() + 1) + '-' + value.getDate();
// 		return ret;
// 	}
// 		return value;
// });
// 
Vue.filter('upper',function(val){
  return val.charAt(0).toUpperCase() + val.slice(1);
});

Vue.filter('format',function(value,arg){
  function dateFormat(date,format){
    if(typeof date === "string"){
      var mts = date.match(/(\/Date\((\d+)\)\/)/);
      if(mts && mts.length >= 3){
        date = parseInt(mts[2]);
      }
    }
    date = new Date(date);
    if(!date || date.toUTCString() == "Invalid Date"){
      return "";
    }
    var map = {
      "M":date.getMonth() + 1,
      "d":date.getDate(),
      "h":date.getHours(),
      "m":date.getMinutes(),
      "s":date.getSeconds(),
      "q":Math.floor((date.getMonth + 3) / 3),//季度
      "S":date.getMilliseconds()
    };

    format = format.replace(/([yMdhmsqS])+/g,function(all,t){
      var v = map[t];
      if(v !== undefined){
        if(all.length > 1){
          v = '0' + v;
          v = v.substr(v.length - 2);
        }
        return v;
      }else if(t === 'y'){
        return (date.getFullYear() + '').substr(4 - all.length);
      }
      return all;
    });
    return format;
  }
  return dateFormat(value,arg);
});

export default {
  data() {
    return {
      date: new Date(),
      msg: ''
    };
  },
  filters:{
    lower:function(val){
      return val.charAt(0).toLowerCase() + val.slice(1);
    }
  }
  //仅在本组件使用
}
</script>