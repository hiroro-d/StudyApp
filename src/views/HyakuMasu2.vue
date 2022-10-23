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
        class="text-center py-1 text-8xl"
      >{{ this.$store.state.symbol }}</v-card>
<!-- rand_x1 -->      
      <v-card
        color="white"
        outlined
        max-width="1/3"
        width="30%"
        height="100"
        raised
        class="text-center py-4 text-7xl"
      >{{ this.$store.state.randFourX[0] }}</v-card>
<!-- rand_x2 -->       
      <v-card
        color="white"
        outlined
        max-width="1/3"
        width="30%"
        height="100"
        raised
        class="text-center py-4 text-7xl"
      >{{ this.$store.state.randFourX[1] }}</v-card>
<!-- rand_y1 -->
      <v-card
        color="white"
        outlined
        max-width="1/3"
        width="30%"
        height="100"
        raised
        class="text-center py-4 text-7xl"
      >{{ this.$store.state.randFourY[0] }}</v-card>
<!-- form_1 -->      
      <v-card
        :color="isActive_1 === true ? 'red lighten-4' : 'indigo lighten-5'"
        outlined
        max-width="1/3"
        width="30%"
        height="100"
        raised
        class="text-center py-4 text-7xl"
        v-bind:class="{correct: isActive_1}"

      >{{ form_1 }}</v-card>
<!-- form_2 -->      
      <v-card
        :color="isActive_2 === true ? 'red lighten-4' : 'indigo lighten-5'"
        outlined
        max-width="1/3"
        width="30%"
        height="100"
        raised
        class="text-center py-4 text-7xl"
        v-bind:class="{correct: isActive_2}"
      >{{ form_2 }}</v-card>
<!-- rand_y2 -->       
      <v-card
        color="white"
        outlined
        max-width="1/3"
        width="30%"
        height="100"
        raised
        class="text-center py-4 text-7xl"
      >{{ this.$store.state.randFourY[1] }}</v-card>
<!-- form_3 -->      
      <v-card
        :color="isActive_3 === true ? 'red lighten-4' : 'indigo lighten-5'"
        outlined
        max-width="1/3"
        width="30%"
        height="100"
        raised
        class="text-center py-4 text-7xl"
        v-bind:class="{correct: isActive_3}"
      >{{ form_3 }}</v-card>
<!-- form_4 -->      
      <v-card
        :color="isActive_4 === true ? 'red lighten-4' : 'indigo lighten-5'"
        outlined
        max-width="1/3"
        width="30%"
        height="100"
        raised
        class="text-center py-4 text-7xl"
        v-bind:class="{correct: isActive_4}"
      >{{ form_4 }}</v-card>
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
        @click="formIn(index)"
        class="text-center py-2 text-5xl"
      >{{ cell }}</v-card>
    </div>
<!-- 全問正解モーダル -->
  <v-row justify="center">
    <v-dialog
      v-model="getAllCorrect"
      persistent
      max-width="290"
      hide-overlay
    >
      <v-card>
        <v-card-title class="text-h5">
          やったね！全問正解！
        </v-card-title>
        <div class="flex flex-col">
          <v-btn
            color="green darken-1"
            text
            @click="dialog = false"
          >
            つづける
          </v-btn>
          <v-btn
            color="green darken-1"
            text
            @click="dialog = false"
          >
            モードをかえる
          </v-btn>
          <v-btn
            color="green darken-1"
            text
            @click="dialog = false"
          >
            やめる
          </v-btn>
        </div>
      </v-card>
    </v-dialog>
  </v-row>

  </div>
</template>

<style scoped>
.correct { background-color: rgba(235, 103, 136, 0.842);}
</style>

<script>
  import ModalComp from '@/components/ModalComp'


    export default {
    components: {
      ModalComp,

    },
    data() {
      return {

        getAllCorrect: false,

        form_1: '', //state直だと最初何も入っておらずエラーが出るためformの入れ物用意
        form_2: '',
        form_3: '',
        form_4: '',

        isActive_1: '',//タイルの色変化用
        isActive_2: '',
        isActive_3: '',
        isActive_4: '',


      }
    },

    computed: {
      cells() {
        return this.$store.getters.getInputBtn
      },
    },
    methods: {
      formIn(index) {
        let tapNum = index + 1
        this.$store.commit('formIn', tapNum)
        this.valueIn()
        this.getAllCorrect = this.$store.getters.getAllCorrect
      },

      valueIn() {
          this.form_1 = this.$store.state.formFour[0].form
          this.form_2 = this.$store.state.formFour[1].form
          this.form_3 = this.$store.state.formFour[2].form
          this.form_4 = this.$store.state.formFour[3].form

          this.isActive_1 = this.$store.state.formFour[0].isActive
          this.isActive_2 = this.$store.state.formFour[1].isActive
          this.isActive_3 = this.$store.state.formFour[2].isActive
          this.isActive_4 = this.$store.state.formFour[3].isActive
        },
      }
    }
</script>