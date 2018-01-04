<template>
  <div class="counter">
      {{name}}
        <br>
        <div>count = {{count}}</div>
        <div>countAlias = {{countAlias}}</div>
        <div>countPlusLocalState = {{countPlusLocalState}}</div>
        <div>countGetter = {{countGetter}}</div>
        <div>getTodoById2 = {{getTodoById2}}</div>
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";

export default {
  name: "Counter",
  data() {
    return {
      name: "Counter",
      localCount: 3
    };
  },
  // 使用 mapState 辅助函数帮助我们生成计算属性
  computed: {
    // 使用对象展开运算符将 mapState 混入 computed 对象中
    ...mapState({
      // 箭头函数可使代码更简练
      count: state => state.count,
      // 传字符串参数 'count' 等同于 `state => state.count`
      countAlias: "count",
      // 为了能够使用 `this` 获取局部状态，必须使用常规函数
      countPlusLocalState(state) {
        return state.count + this.localCount;
      },
      // 使用 getter
      countGetter(state) {
        return this.$store.getters.doneTodosCount;
      },
      getTodoById2() {
        return this.$store.getters.getTodoById(2);
      }
    }),
    // 使用对象展开运算符将 mapGetters 混入 computed 对象中
    ...mapGetters(["doneTodosCount", "anotherGetter"])
  }
  //   // 当映射的计算属性的名称与 state 的子节点名称相同时，我们也可以给 mapState 传一个字符串数组
  //   computed: mapState([
  //       // 映射 this.count 为 store.state.count
  //       'count'
  //   ])
};
</script>

<style scoped>

</style>
