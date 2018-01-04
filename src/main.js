// The Vue build version to load with the `import` command (runtime-only or
// standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuex from 'vuex';
import {SOME_MUTATION} from './mutation-types';

Vue.config.productionTip = false

// 使用 Vuex
Vue.use(Vuex);

// 创建一个 store
const store = new Vuex.Store({
  state: {
    count: 0,
    todos: [
      {
        id: 1,
        text: '...',
        done: true
      }, {
        id: 2,
        text: '...',
        done: false
      }
    ]
  },
  getters: {
    doneTodos: state => {
      return state
        .todos
        .filter(todo => todo.done)
    },
    // Getter 也可以接受其他 getter 作为第二个参数
    doneTodosCount(state, getters) {
      return getters.doneTodos.length;
    },
    // 返回一个函数
    getTodoById: (state) => (id) => {
      return state
        .todos
        .find(todo => todo.id === id);
    }
  },
  mutations: {
    increment(state, payload) {
      // 变更状态
      state.count += payload.amount;
    },
    [SOME_MUTATION](state) {}
  }
});

// 触发状态变更 store.commit('increment', {amount: 10}); 对象风格的提交方式
store.commit({type: 'increment', amount: 10});

/* eslint-disable no-new */
const app = new Vue({
  el: '#app',
  // 把 store 对象提供给 “store” 选项，这可以把 store 的实例注入所有的子组件
  store,
  router,
  template: '<App/>',
  components: {
    App
  }
});
