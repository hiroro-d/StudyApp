<template>
    <v-dialog
      v-model="dialog"
      width="500"
    >
      <v-card>
        <v-card-title class="text-h5 grey lighten-2">
          モードをえらんでね！
        </v-card-title>

          <v-container
              class="pl-10 pr-11 flex justify-around items-center"
              fluid
            >
            <v-radio-group v-model="radioGroup_1">
                <v-radio value="four">
                  <template v-slot:label>
                    <div><strong class="success--text">４マス</strong></div>
                  </template>
                </v-radio>
                <v-radio value="nine">
                  <template v-slot:label>
                    <div><strong class="primary--text">９マス</strong></div>
                  </template>
                </v-radio>
                <v-radio value="sixteen">
                  <template v-slot:label>
                    <div><strong class="error--text">１６マス</strong></div>
                  </template>
                </v-radio>
            </v-radio-group>

            <v-spacer></v-spacer>

            <v-radio-group v-model="radioGroup_2">
                <v-radio value="add">
                  <template v-slot:label>
                    <div><strong class="success--text">たしざん</strong></div>
                  </template>
                </v-radio>
                <v-radio value="multi">
                  <template v-slot:label>
                    <div><strong class="primary--text">かけざん</strong></div>
                  </template>
                </v-radio>
              </v-radio-group>
            </v-container>
        
        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="primary"
            @click="startSolo"
          >
            <strong>スタート！</strong>
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
</template>



<script>
  export default {
    data () {
      return {
        dialog: false,
        radioGroup_1: '',
        radioGroup_2: '',
      }
    },
    mounted() {
      this.dialog = true;
    },
    methods: {
      startSolo() {
        this.dialog = false;
        this.$store.commit("startSolo", {rg1: this.radioGroup_1, rg2: this.radioGroup_2})
      }
    }
  }
</script>