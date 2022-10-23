<template>
  <v-row justify="center">
    <v-dialog
      v-model="getAllCorrect"
      persistent
      max-width="290"
      hide-overlay
    >
      <v-card>
        <v-card-title class="text-h5">
          Use Google's location service?
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
</template>
