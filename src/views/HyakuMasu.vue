<template>
  <div>
    <ModalComp />

    <div class="mb-5">
      'アイコン名前とレベルとランキング'
    </div>

    <div class="flex flex-wrap w-full justify-center mt-5">
      <v-card
        color="white"
        outlined
        max-width="1/3"
        width="30%"
        height="100"
        raised
        v-for="cell in cellsP" :key="cell.id"
      >{{ cell }}</v-card>
    </div>

    <div class="flex flex-wrap w-full justify-center mt-5 ml-10%">
      <v-card
        color="white"
        outlined
        max-width="1/3"
        width="30%"
        height="70"
        raised
        v-for="(cell2, index) in cellsP2" :key="index"
        @click="test(index)"
      >{{ cell2 }}</v-card>
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
      }
    },
    computed: {
      cellsP() {
        return this.$store.getters.getRandFour
      },
      cellsP2() {
        return this.$store.getters.getInputBtn
      },
    },
    methods: {
      test(index) {
        let tapNum = index + 1
        this.$store.commit('test', tapNum)
        this.$store.getters.getRandFour
      }
    }
  }
</script>