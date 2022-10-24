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
        width="22%"
        height="70"
        raised
        class="text-center py-2 text-5xl"
      >{{ this.$store.state.symbol }}</v-card>
<!-- rand_x1 -->      
      <v-card
        color="white"
        outlined
        width="22%"
        height="70"
        raised
        class="text-center py-3 text-5xl"
      >{{ this.$store.state.randX[0] }}</v-card>
<!-- rand_x2 -->       
      <v-card
        color="white"
        outlined
        width="22%"
        height="70"
        raised
        class="text-center py-3 text-5xl"
      >{{ this.$store.state.randX[1] }}</v-card>
<!-- rand_x3 -->      
      <v-card
        color="white"
        outlined
        width="22%"
        height="70"
        raised
        class="text-center py-3 text-5xl"
      >{{ this.$store.state.randX[2] }}</v-card>
<!-- rand_y1 -->
      <v-card
        color="white"
        outlined
        width="22%"
        height="70"
        raised
        class="text-center py-3 text-5xl"
      >{{ this.$store.state.randY[0] }}</v-card>
<!-- form_1 -->      
      <v-card
        :color="forms[0].isActive === true ? 'red lighten-4' : 'indigo lighten-5'"
        outlined
        width="22%"
        height="70"
        raised
        class="text-center py-3 text-5xl"
      >{{ forms[0].form }}</v-card>
<!-- form_2 -->      
      <v-card
        :color="forms[1].isActive === true ? 'red lighten-4' : 'indigo lighten-5'"
        outlined
        width="22%"
        height="70"
        raised
        class="text-center py-3 text-5xl"
      >{{ forms[1].form }}</v-card>
<!-- form_3 -->      
      <v-card
        :color="forms[2].isActive === true ? 'red lighten-4' : 'indigo lighten-5'"
        outlined
        width="22%"
        height="70"
        raised
        class="text-center py-3 text-5xl"
      >{{ forms[2].form }}</v-card>
<!-- rand_y2 -->       
      <v-card
        color="white"
        outlined
        width="22%"
        height="70"
        raised
        class="text-center py-3 text-5xl"
      >{{ this.$store.state.randY[1] }}</v-card>
<!-- form_4 -->      
      <v-card
        :color="forms[3].isActive === true ? 'red lighten-4' : 'indigo lighten-5'"
        outlined
        width="22%"
        height="70"
        raised
        class="text-center py-3 text-5xl"
      >{{ forms[3].form }}</v-card>
<!-- form_5 -->      
      <v-card
        :color="forms[4].isActive === true ? 'red lighten-4' : 'indigo lighten-5'"
        outlined
        width="22%"
        height="70"
        raised
        class="text-center py-3 text-5xl"
      >{{ forms[4].form }}</v-card>
<!-- form_6 -->      
      <v-card
        :color="forms[5].isActive === true ? 'red lighten-4' : 'indigo lighten-5'"
        outlined
        width="22%"
        height="70"
        raised
        class="text-center py-3 text-5xl"
      >{{ forms[5].form }}</v-card>
<!-- rand_y3 -->       
      <v-card
        color="white"
        outlined
        width="22%"
        height="70"
        raised
        class="text-center py-3 text-5xl"
      >{{ this.$store.state.randY[2] }}</v-card>
<!-- form_7 -->      
      <v-card
        :color="forms[6].isActive === true ? 'red lighten-4' : 'indigo lighten-5'"
        outlined
        width="22%"
        height="70"
        raised
        class="text-center py-3 text-5xl"
      >{{ forms[6].form }}</v-card>
<!-- form_8 -->   
      <v-card
        :color="forms[7].isActive === true ? 'red lighten-4' : 'indigo lighten-5'"
        outlined
        width="22%"
        height="70"
        raised
        class="text-center py-3 text-5xl"
      >{{ forms[7].form }}</v-card>
<!-- form_9 -->   
      <v-card
        :color="forms[8].isActive === true ? 'red lighten-4' : 'indigo lighten-5'"
        outlined
        width="22%"
        height="70"
        raised
        class="text-center py-3 text-5xl"
      >{{ forms[8].form }}</v-card>
    </div>

    <div class="flex flex-wrap w-full justify-center mt-5 ml-10%">
      <v-card
        color="white"
        outlined

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
      }
    },
    methods: {
      formIn(index) {
        let tapNum = index + 1
        this.$store.commit('formIn', tapNum)
        this.getAllCorrect = this.$store.getters.getAllCorrect
      },
    }
  }
</script>