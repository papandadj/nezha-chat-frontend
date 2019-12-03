import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import mutations from './mutations'

Vue.use(Vuex)

const store = new Vuex.Store({
  state,
  mutations
})

store.watch(
  (state) => state.sessions,
  (val) => {
    console.log('CHANGE: ', val);
    localStorage.setItem('vue-chat-session', JSON.stringify(val));
  },
  {
    deep: true
  }
);

export default store;
export const actions = {
  initData: ({ dispatch }) => dispatch('INIT_DATA'),
  sendMessage: ({ dispatch }, content) => dispatch('SEND_MESSAGE', content),
  selectSession: ({ dispatch }, id) => dispatch('SELECT_SESSION', id),
  search: ({ dispatch }, value) => dispatch('SET_FILTER_KEY', value)
};
