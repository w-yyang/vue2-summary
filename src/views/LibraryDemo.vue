<template>
  <div class="grid">
    <div>
      <h1>图书管理</h1>
      <div class="book">
        <div>
          <label for="id">编号：</label>
          <input type="text" v-model="id" :disabled='flag' v-focus>
          <label for="name">名称：</label>
          <input type="text" v-model="name">
          <button @click="handle" :disabled="submitFlag">提交</button>
        </div>
      </div>
    </div>
    <div class="total">
      <span>图书总数：</span>
      <span>{{ total }}</span>
    </div>
    <table>
      <thead>
        <tr>
          <th>编号</th>
          <th>名称</th>
          <th>时间</th>
          <th>操作</th>
        </tr>
      </thead>
      <tbody>
        <tr :key="item.id" v-for="item in books">
          <td>{{ item.id }}</td>
          <td>{{ item.name }}</td>
          <td>{{ item.date | format('yyyy-MM-dd hh:mm:ss') }}</td>
          <td>
            <a href="" @click.prevent='toEdit(item.id)'>修改</a>
            <span>|</span>
            <a href="" @click.prevent='deleteBook(item.id)'>删除</a>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import Vue from 'vue';

Vue.directive('focus',{
  inserted:function(el){
    el.focus();
  }
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
      flag:false,
      submitFlag:false,
      id:'',
      name:'',
      books:[]
    };
  },
  methods: {
    handle() {
      var book = {};
      book.id = this.id;
      book.name = this.name;
      book.date = " ";
      this.books.push(book);
      //清空表单
      this.id = '';
      this.name = '';
    },
    toEdit(id) {
      var check = this.books.filter(function(item){
        return item.id == id;
      });
      console.log(check[0].id);
      this.id = check[0].id;
      this.name = check[0].name;
    },
    deleteBook(id) {
      // var index = this.books.findIndex(function(item){
      // 	return item.id == id;
      // });
      // this.books.splice(index,1);
      // 第一种删除
      this.books = this.books.filter(function(item){
        return item.id != id;
        //过滤掉
      });
      //第二种删除
    }
  },
  computed:{
    total:function(){
      return this.books.length;
    }
  },
  watch:{
    name:function(val){
      var flag = this.books.some(function(item){
        return item.name == val;
      });
      if(flag){
        this.submitFlag = true;
      }else{
        this.submitFlag = false;
      }
    }
  },
  mounted:function(){
    //被触发时魔板已经可以使用，一般此时用于获取后台数据，然后将数据填充到模板。
    var data = [{
      id:1,
      name:'水浒传',
      date:'2525609975000'
    },{
      id:2,
      name:'西游记',
      date:'2525609975000'
    },{
      id:3,
      name:'红楼梦',
      date:'2525609975000'
    },{
      id:4,
      name:'三国演义',
      date:'2525609975000'
    }];
    this.books = data;
  }
}
</script>

<style lang="scss" scoped>
  .grid {
    margin: auto;
    width: 500px;
    text-align: center;
  }

  .grid table {
    width: 100%;
    border-collapse: collapse;
  }

  .grid th,td {
    padding: 10px;
    border: 1px dashed orange;
    height: 35px;
    line-height: 35px;
  }

  .grid th {
    background-color: orange;
  }

  .grid .book {
    padding-bottom: 10px;
    padding-top: 5px;
    background-color: #F3DCAB;
  }

  .grid .total {
    height: 30px;
    line-height: 30px;
    background-color: #F3DCAB;
    border-top: 1px solid #C2D89A;
  }
</style>