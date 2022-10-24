<template>
  <div>
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
      >{{ this.$store.state.randX[0] }}</v-card>
<!-- rand_x2 -->       
      <v-card
        color="white"
        outlined
        max-width="1/3"
        width="30%"
        height="100"
        raised
        class="text-center py-4 text-7xl"
      >{{ this.$store.state.randX[1] }}</v-card>
<!-- rand_y1 -->
      <v-card
        color="white"
        outlined
        max-width="1/3"
        width="30%"
        height="100"
        raised
        class="text-center py-4 text-7xl"
      >{{ this.$store.state.randY[0] }}</v-card>
<!-- form_1 -->      
      <v-card
        :color="forms[0].isActive === true ? 'red lighten-4' : 'indigo lighten-5'"
        outlined
        max-width="1/3"
        width="30%"
        height="100"
        raised
        class="text-center py-4 text-7xl"
      >{{ forms[0].form }}</v-card>
<!-- form_2 -->      
      <v-card
        :color="forms[1].isActive === true ? 'red lighten-4' : 'indigo lighten-5'"
        outlined
        max-width="1/3"
        width="30%"
        height="100"
        raised
        class="text-center py-4 text-7xl"
      >{{ forms[1].form }}</v-card>
<!-- rand_y2 -->       
      <v-card
        color="white"
        outlined
        max-width="1/3"
        width="30%"
        height="100"
        raised
        class="text-center py-4 text-7xl"
      >{{ this.$store.state.randY[1] }}</v-card>
<!-- form_3 -->      
      <v-card
        :color="forms[2].isActive === true ? 'red lighten-4' : 'indigo lighten-5'"
        outlined
        max-width="1/3"
        width="30%"
        height="100"
        raised
        class="text-center py-4 text-7xl"
      >{{ forms[2].form }}</v-card>
<!-- form_4 -->      
      <v-card
        :color="forms[3].isActive === true ? 'red lighten-4' : 'indigo lighten-5'"
        outlined
        max-width="1/3"
        width="30%"
        height="100"
        raised
        class="text-center py-4 text-7xl"
      >{{ forms[3].form }}</v-card>
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
            @click="prepare"
          >
            つづける
          </v-btn>
          <v-btn
            color="green darken-1"
            text
            @click="modeChange"
          >
            モードをかえる
          </v-btn>
          <v-btn
            color="green darken-1"
            text
            :to="link"
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



    export default {
    components: {


    },
    data() {
      return {
        getAllCorrect: false,
      }
    },

    computed: {
      cells() {
        return this.$store.getters.getInputBtn
      },
      forms() {
        return this.$store.state.forms
      },
      link() {
          return '/'
        } 
    },
    methods: {
      formIn(index) {
        let tapNum = index + 1
        this.$store.commit('formIn', tapNum)
        this.getAllCorrect = this.$store.getters.getAllCorrect
      },
      prepare() {
        this.$store.commit('prepare')
        this.getAllCorrect = false
        this.$store.commit('startSolo')
      },
      modeChange() {

      },
      }
    }
</script>