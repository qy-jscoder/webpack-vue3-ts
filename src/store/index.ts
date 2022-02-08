import { createStore,Store } from 'vuex'
import {ComponentCustomProperties} from 'vue'
declare module '@vue/runtime-core'{
  interface State{
    count: number,
    todos:Array<object>
  }
  //provide typings for `this.$store`
  interface ComponentCustomProperties{
    $store:Store<State>
  }
}
export const store = createStore({
  state: {
    count:0,
    todos: [
      { id: 1, text: '...', done: true },
      { id: 2, text: '...', done: false }
    ]
  },
  getters:{
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})