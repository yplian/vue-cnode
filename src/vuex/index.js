import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
      userInfo: {success:false}
    },
    getters: {
      getUserInfo(state) {
          return state.userInfo;
      }
    },
    mutations: {
      setUserInfo(state, userInfo) {
        state.userInfo = userInfo;
      }
    },
    actions: {
      setUserInfo({ commit }, user) {
        commit('setUserInfo', user);
      }
    }
});

export default store
