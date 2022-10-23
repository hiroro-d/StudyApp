import Vue from 'vue'
// import { RouterLink } from 'vue-router'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    //入力する数字用
    tapNum: 0,

    //問題作成用
    inputBtn: [1,2,3,4,5,6,7,8,9,'★','けす',0],
    //マスに入る色々
    randX: [], 
    randY: [], 
    forms: [], 
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
      //足し算か引き算か
        if(rg2 === 'add') {
          state.symbol = '+';
        } else {
          state.symbol = 'x'
        }
        //４マス
        if(rg1 === 'four') {
          for(let n = 0; n < 2; n++) {
            state.randX.push(Math.floor(Math.random() * 10));
          }
          for(let n = 0; n < 2; n++) {
            state.randY.push(Math.floor(Math.random() * 10));
          }
          for(let m = 0; m < 4; m++) {
            state.forms.push({form: '', isActive: false});
          }
          state.forms[state.n].isActive = true
        } else if (rg1 === 'nine') {
          //９マス
          for(let n = 0; n < 3; n++) {
            state.randX.push(Math.floor(Math.random() * 10));
          }
          for(let n = 0; n < 3; n++) {
            state.randY.push(Math.floor(Math.random() * 10));
          }
          for(let m = 0; m < 9; m++) {
            state.forms.push({form: '', isActive: false});
          }
          state.forms[state.n].isActive = true
        }    
    },

    formIn(state, tn) {
      //0や消す、戻るを修正
      if(tn === 12) {
        tn = 0
      } else if (tn === 11) {
        state.forms[state.n].form = ''
        tn = ''
      } else if (tn === 10) {
        console.log('戻る')
        tn = ''
      }

      if(state.forms[state.n].form.length < 2) { //2桁指定
        //タップした数字がフォームのn番に文字列で追加
        state.forms[state.n].form += String(tn)
      }

      if(state.symbol === '+') { //もし足し算なら

        if (state.forms[state.n].form === String(state.randX[state.x]
          + state.randY[state.y])) { //入力と答えが一致したら
          state.forms[state.n].isActive = false //色変え
            if (state.n < 3) {
              state.forms[state.n + 1].isActive = true
            }

          if(state.forms[3].form === String(state.randX[1] + state.randY[1])) {
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
      } else if (state.symbol === 'x') { //かけ算なら
        if (state.forms[state.n].form === String(state.randX[state.x]
          * state.randY[state.y])) { //入力と答えが一致したら
          state.forms[state.n].isActive = false //色変え
            if (state.n < 3) {
              state.forms[state.n + 1].isActive = true
            }

          if(state.forms[3].form === String(state.randX[1] * state.randY[1])) {
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
    }
  },
  actions: {
  },
  modules: {
  },
})