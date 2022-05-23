import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count: 0
  },
  //跟随state变换，不可在此处修改数据
  getters: {
    showNum(state) {
      return '当前最新数值：' + state.count + '!'
    }
  },
  //只有mutations中定义的函数才有权利修改state数据
  mutations: {
    //不要再mutations中执行异步操作
    add(state) {
      state.count++
    },
    addN(state, step) {
      state.count += step
    },
    sub(state) {
      state.count--
    },
    subN(state, step) {
      state.count -= step
    }
  },
  actions: {
    //在action中不可直接修改state中的数据，必须通过context.commit()触发某个mutations才行
    addAsync(context) {
      setTimeout(() => {
          context.commit('add')
      }, 1000)
    },
    addAsyncMany(context, step) {
      setTimeout(() => {
          context.commit('addN', step)
      }, 1000)
    },
    subAsync(context) {
      setTimeout(() => {
          context.commit('sub')
      }, 1000)
    },
    subAsyncMany(context, step) {
      setTimeout(() => {
          context.commit('subN', step)
      }, 1000)
    }
  },
  modules: {}
})