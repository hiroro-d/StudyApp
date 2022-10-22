import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    //入力する数字用
    tapNum: 0,

    //問題作成用
    inputBtn: [1,2,3,4,5,6,7,8,9,'★','けす',0],
    randFourX: [], //ランダム、ランダム、
    randFourY: [], //ランダム、ランダム、
    formFour: [], //入力、入力、入力、入力]
    symbol: '',

    //計算用
    n: 0, //form
    m: 0, //isActive 色替え用
    x: 0, //乱数row
    y: 0, //乱数colum

    corectDialog: false, //AllCorrectの表示スイッチ
  },

  getters: {
    getInputBtn: state => {
      return state.inputBtn
    },
    getAllCorrect: state => {
      return state.corectDialog      
    }
  },

  mutations: {
    startSolo(state, {rg1, rg2}) {
      if(rg2 === 'add') {
        state.symbol = '+';
      } else {
        state.symbol = 'x'
      }
      if(rg1 === 'four') {
        for(let n = 0; n < 2; n++) {
          state.randFourX.push(Math.floor(Math.random() * 10));
        }
        for(let n = 0; n < 2; n++) {
          state.randFourY.push(Math.floor(Math.random() * 10));
        }
        for(let m = 0; m < 4; m++) {
          state.formFour.push({form: '', isActive: false});
        }
      }
      state.formFour[state.n].isActive = true
    },
    formIn(state, tn) {
      //0や消す、戻るを修正
      if(tn === 12) {
        tn = 0
      } else if (tn === 11) {
        state.formFour[state.n].form = ''
        tn = ''
      } else if (tn === 10) {
        console.log('戻る')
        tn = ''
      }

      if(state.formFour[state.n].form.length < 2) { //2桁指定
        //タップした数字がフォームのn番に文字列で追加
        state.formFour[state.n].form += String(tn)
      }
      if (state.formFour[state.n].form === String(state.randFourX[state.x]
         + state.randFourY[state.y])) { //入力と答えが一致したら
        state.formFour[state.n].isActive = false //色変え
          if (state.n < 3) {
            state.formFour[state.n + 1].isActive = true
          }

      if(state.formFour[3].form === String(state.randFourX[1] + state.randFourY[1])) {
        //最後の問題が正解したら
        state.corectDialog = true
          }


        state.n++ //フォームの数字と計算した数が一致したら、隣のフォームへ
        if(state.x === 1) { //となりに移った時に、ｘが端だったら
          state.y++ //↓の行にずれて計算
          state.x--
        } else {  //そうでなければ、隣で計算
          state.x++
        }
      }
    }
  },
  actions: {
  },
  modules: {
  },
})