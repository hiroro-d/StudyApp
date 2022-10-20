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
        v-for="cell in cells" :key="cell.id"
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
        v-for="cell2 in cells2" :key="cell2.id"
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
        cells: [
          this.$store.state.symbol,
          this.$store.state.randFour[0],
          this.$store.state.randFour[1],
          4,5,6,7,8,9],
        cells2: [1,2,3,4,5,6,7,8,9,'戻る','消す',0]
      }
    }
  }
</script>