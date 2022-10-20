import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    randFour: [1,2,3,4], //この変更を読み取って、ゲッターズで送る感じだと思う
    symbol: '1',
  },
  getters: {
  },
  mutations: {
    startSolo(state, rg1, rg2) {
      if(rg1 === 'four') {
        for(let n = 0; n < 4; n++) {
          state.randFour.push(Math.floor(Math.random() * 4));
          state.randFour.shift()
        }
      }
      if(rg2 === 'add') {
        state.symbol = '+';
      }
    }
  },
  actions: {
  },
  modules: {
  }
})
