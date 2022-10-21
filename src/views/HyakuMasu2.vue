<template>
  <div>
    <ModalComp />

    <div class="mb-5">
      'アイコン名前とレベルとランキング' 
    </div>

    <div class="flex flex-wrap w-full justify-center mt-5">
<!-- +,x -->
      <v-card
        color="white"
        outlined
        max-width="1/3"
        width="30%"
        height="100"
        raised
      >{{ this.$store.state.symbol }}</v-card>
<!-- rand_x1 -->      
      <v-card
        color="white"
        outlined
        max-width="1/3"
        width="30%"
        height="100"
        raised
      >{{ this.$store.state.randFourX[0] }}</v-card>
<!-- rand_x2 -->       
      <v-card
        color="white"
        outlined
        max-width="1/3"
        width="30%"
        height="100"
        raised
      >{{ this.$store.state.randFourX[1] }}</v-card>
<!-- rand_y1 -->
      <v-card
        color="white"
        outlined
        max-width="1/3"
        width="30%"
        height="100"
        raised
      >{{ this.$store.state.randFourY[0] }}</v-card>
<!-- form_1 -->      
      <v-card
        color="white"
        outlined
        max-width="1/3"
        width="30%"
        height="100"
        raised
      >{{ e }}</v-card>
<!-- form_2 -->      
      <v-card
        color="white"
        outlined
        max-width="1/3"
        width="30%"
        height="100"
        raised
      >{{ f }}</v-card>
<!-- rand_y2 -->       
      <v-card
        color="white"
        outlined
        max-width="1/3"
        width="30%"
        height="100"
        raised
      >{{ this.$store.state.randFourY[1] }}</v-card>
<!-- form_3 -->      
      <v-card
        color="white"
        outlined
        max-width="1/3"
        width="30%"
        height="100"
        raised
      >{{ h }}</v-card>
<!-- form_4 -->      
      <v-card
        color="white"
        outlined
        max-width="1/3"
        width="30%"
        height="100"
        raised
      >{{ i }}</v-card>
    </div>

    <div class="flex flex-wrap w-full justify-center mt-5 ml-10%">
      <v-card
        color="white"
        outlined
        max-width="1/3"
        width="30%"
        height="70"
        raised
        v-for="(cell, index) in cells" :key="index"
        @click="test(index)"
      >{{ cell }}</v-card>
    </div> 
  </div>
</template>


<script>
  import ModalComp from '@/components/ModalComp'

    export default {
    components: {
      ModalComp,
    },
    data() {
      return {
        calcSymbol: '',

        n: 0,
        m: 0,

        e: '', //state直だと最初何も入っておらずエラーが出るため入れ物用意
        f: '',
        h: '',
        i: '',


      }
    },
    computed: {
      cells() {
        return this.$store.getters.getInputBtn
      },
    },
    methods: {
      test(index) {
        let tapNum = index + 1
        this.$store.commit('test', tapNum)
        this.valueIn()
      },


      valueIn() { //storeから取得した名前が長いので入れ直し 一回だけ動く
          this.e = this.$store.state.formFour[0].form
          this.f = this.$store.state.formFour[1].form
          this.h = this.$store.state.formFour[2].form
          this.i = this.$store.state.formFour[3].form
        }
      }
    }
</script>