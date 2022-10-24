import Vue from 'vue'
// import { RouterLink } from 'vue-router'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    //入力する数字用
    tapNum: 0,

    //問題作成用
    inputBtn: [1,2,3,4,5,6,7,8,9,'★','けす',0], //ボタン
    randSquares: 0, //ランダムの数のマス目作成用
    formSquares: 0, //フォームのマス目作成用

    //マスに入る色々
    randX: [], 
    randY: [], 
    forms: [], 
    symbol: '',

    //計算用
    n: 0, //form
    x: 0, //乱数row
    y: 0, //乱数colum

    addNum: 0, //足し算の答え
    multiNum: 0, //掛け算の答え

    correctDialog: false, //AllCorrectの表示スイッチ
    
    //折り返し用のxの数値
    turnSquare: 0,

    rg1: '',
    rg2: '',


  },

  getters: {
    getInputBtn: state => {
      return state.inputBtn
    },
    getAllCorrect: state => {
      return state.correctDialog      
    }
  },

  mutations: {
    startSolo(state, {rg1, rg2}) {
      state.rg1 = rg1
      state.rg2 = rg2
      //足し算か引き算か
        if(state.rg2 === 'add') {
          state.symbol = '+';
        } else if (state.rg2 === 'multi') {
          state.symbol = 'x'
        } //else 引き算増やす時に拡張

        //マス目作成
        if (state.rg1 === 'four') {
          state.randSquares = 2; //x軸y軸のランダムマス用
          state.formSquares = 4; //フォームのマス用
          state.turnSquare = 1; //折り返し用
        } else if (state.rg1 === 'nine') {
          state.randSquares = 3;
          state.formSquares = 9;
          state.turnSquare = 2;
        } //else １６マス拡張予定
        for(let n = 0; n < state.randSquares; n++) {
          state.randX.push(Math.floor(Math.random() * 10));
        }
        for(let n = 0; n < state.randSquares; n++) {
          state.randY.push(Math.floor(Math.random() * 10));
        }
        for(let m = 0; m < state.formSquares; m++) {
          state.forms.push({form: '', isActive: false});
        }
        state.forms[state.n].isActive = true
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
      }  //else 何もしない

      if(state.forms[state.n].form.length < 2) { //2桁指定
        //タップした数字がフォームのn番に文字列で追加
        state.forms[state.n].form += String(tn)
      } //else ２桁以上の答えは存在しないので、何もしない

      if(state.symbol === '+') { //足し算の答えを用意
        state.addNum = String(state.randX[state.x] + state.randY[state.y])
      } else if (state.symbol === 'x') { //掛け算の答えを用意
        state.multiNum = String(state.randX[state.x] * state.randY[state.y])
      } // else 何もしない

      if(state.forms[state.n].form === state.addNum || 
         state.forms[state.n].form === state.multiNum) { //入力と答えが一致したら

          state.forms[state.n].isActive = false //今のマスの色外し
            if (state.n < state.formSquares - 1) { // 最後の問題までは、１つ先をtrueにして色付け
              state.forms[state.n + 1].isActive = true
            } else if (state.n === state.formSquares - 1) { //最後の問題だったら、全部終わった連絡をする。
              state.correctDialog = true
            }  //else 何もしない

          state.n++ //フォームの数字と計算した数が一致したら、隣のフォームへ
          if(state.x === state.turnSquare) { //となりに移った時に、ｘが端だったら
            state.y++ //↓の行にずれて計算
            state.x = 0
          } else {  //そうでなければ、隣へ
            state.x++
          }
        } //else 何もしない
      }, //formIn
    prepare(state) {
      //初期化する値は、ランダムの数と、フォームのクリア、n,y,correctDialogをfalseに、turnsquare
      console.log('aa')
      state.randX = [];
      state.randY = [];
      state.forms = [];
      state.n = 0;
      state.y = 0;
      state.correctDialog = false
    },
  }, //mutations
  actions: {

  },
  modules: {
  },
})