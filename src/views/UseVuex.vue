<template>
  <div>
    <!-- <h3>当前最新count值：{{this.$store.state.count}}</h3> this可省略-->
		<h3>{{ this.$store.getters.showNum }}</h3>
		<button @click="addBtn">+1</button>
		<button @click="addN">+N</button>
		<button @click="addAsync1">+1 Async</button>
		<button @click="addAsyncN">+N Async</button>
    <!-- <h3>当前最新count值：{{count}}</h3> -->
		<h3>{{ showNum }}</h3>
		<!-- <button @click="subBtn">-1</button>
		<button @click="subNN">-N</button>
		<button @click="subAsync1">-1 Async</button>
		<button @click="subAsyncN">-N Async</button> -->
		<button @click="sub">-1</button>
		<button @click="subN(3)">-N</button>
		<button @click="subAsync">-1 Async</button>
		<button @click="subAsyncMany(4)">-N Async</button>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import { mapActions } from 'vuex'
import { mapGetters } from 'vuex'

export default {
  data() {
    return {

    };
  },
  computed:{
    ...mapState(['count']),
    ...mapGetters(['showNum'])
  },
  methods: {
    ...mapMutations(['sub','subN']),
		...mapActions(['subAsync','subAsyncMany']),
    addBtn(){
      this.$store.commit("add")
    },
    addN(){
      this.$store.commit("addN",3)
    },
    addAsync1(){
      this.$store.dispatch('addAsync')
    },
    addAsyncN(){
      this.$store.dispatch('addAsyncMany',5)
    }
    /*subBtn(){
      this.sub()
    },
    subNN(){
      this.subN(3)
    },
    subAsync1(){
      this.subAsync()
    },
    subAsyncN(){
      this.subAsyncMany(4)
    }*/
    //可以不写函数 直接将subAsync丢入上面的标签内，直接绑定
  },
}
</script>