<template>
  <my-cart></my-cart>
</template>

<script>
import Vue from 'vue';

const CartTitle = {
  props:['uname'],
  template:`
    <div class="title">{{ uname }}的商品</div>
  `
};

const CartList = {
  props:['list'],
  template:`
    <div>
      <div :key="item.id" v-for="item in list" class="item">
        <img :src="item.img" alt="">
        <div class="name">{{ item.name }}</div>
        <div class="change">
          <a href="" @click.prevent="sub(item.id)">-</a>
          <input type="text" class="num" :value='item.num' @blur='changeNum(item.id,$event)'/>
          <a href="" @click.prevent="add(item.id)">+</a>
        </div>
        <div class="del" @click="del(item.id)">x</div>
      </div>
    </div>
  `,
  methods:{
    //提交父组件 在父组件中处理
    del:function(id){
      this.$emit('cart-del',id);
      //传递给父组件要删除的id
    },
    changeNum:function(id,event){
      this.$emit('change-num',{
        id:id,
        num:event.target.value
      });
    },
    sub:function(id){
      this.$emit('change-num',{
        id:id,
        type:'sub'
      });
    },
    add:function(id){
      this.$emit('change-num',{
        id:id,
        type:'add'
      });
    }
  }
};

const CartTotal = {
  props:['list'],
  template:`
    <div class="total">
      <span>总价：{{ total }}</span>
      <button>结算</button>
    </div>
  `,
  computed:{
    total:function(){
      var t = 0;
      this.list.forEach(item => {
        t += item.price * item.num;
      });
      return t;
    }
  }
};

Vue.component('my-cart',{
  data:function(){
    return {
      uname:'张三',
      list:[{
        id:1,
        name:'aaa',
        price:1000,
        num:1,
        img:'111'
      },{
        id:2,
        name:'aaa',
        price:1000,
        num:1,
        img:'111'
      },{
        id:3,
        name:'aaa',
        price:1000,
        num:1,
        img:'111'
      },{
        id:4,
        name:'aaa',
        price:1000,
        num:1,
        img:'111'
      },{
        id:5,
        name:'aaa',
        price:1000,
        num:1,
        img:'111'
      }]
    }
  },
  template:`
    <div class='cart'>
      <cart-title :uname="uname"></cart-title>
      <cart-list :list='list' @change-num='changeNum($event)' @cart-del="delCart($event)"></cart-list>
      <cart-total :list='list'></cart-total>
    </div>
  `,
  components:{
    'cart-title':CartTitle,
    'cart-list':CartList,
    'cart-total':CartTotal
  },
  methods:{
    changeNum:function(val){
      //三种情况：输入域变更   加号变更 减号变更
      if(val.type == 'change'){
        this.list.some(item => {
          if(item.id == val.id){
            item.num = val.num;
            //终止便利
            return true;
          }
        });//遍历
      }else if(val.type == 'sub'){
        this.list.some(item => {
          if(item.id == val.id){
            item.num -= 1;
            //终止便利
            return true;
          }
        });//遍历
      }else if(val.type == 'add'){
        this.list.some(item => {
          if(item.id == val.id){
            item.num += 1;
            //终止便利
            return true;
          }
        });//遍历
      }

    },
    delCart:function(id){
      //接受传来的id 删除
      var index = this.list.findIndex(item => {
        return item.id == id;
      });
      this.list.splice(index,1);
    }
  }
});

export default {

}
</script>