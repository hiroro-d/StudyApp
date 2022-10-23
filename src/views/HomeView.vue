<template>
  <v-app id="inspire">
    <NavBar />
    <v-main class="grey lighten-3 pt-3">
      <v-container>
        <v-row>
          <v-col>
            <v-card
              class="mx-auto"
              max-width="500"
            >
              <v-container fluid>
                <v-row dense>
                  <v-col
                    v-for="card in cards"
                    :key="card.title"
                    :cols="card.flex"
                  >
                    <v-hover v-slot="{ hover }">
                      <v-card
                        :to="card.link"
                        class="relative"
                      >
                      <v-expand-transition>
                            <div
                              v-if="hover"
                              class="d-flex transition-fast-in-fast-out primary darken-2 v-card--reveal text-h2 white--text absolute z-10 w-full flex justify-center items-center"
                              style="height: 100%;"
                            >
                              <v-btn
                                class="w-1/2 accent"
                              >やってみよう！</v-btn>
                            </div>
                          </v-expand-transition>
                        <v-img
                          :src="card.src"
                          class="white--text align-end"
                          gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                          height="200px"
                        >
                          <v-card-title v-text="card.title"></v-card-title>
                        </v-img>
                          

                        <v-card-actions>
                          <v-spacer></v-spacer>

                          <v-btn icon>
                            <v-icon>mdi-heart</v-icon>
                          </v-btn>

                          <v-btn icon>
                            <v-icon>mdi-bookmark</v-icon>
                          </v-btn>

                          <v-btn icon>
                            <v-icon>mdi-share-variant</v-icon>
                          </v-btn>
                        </v-card-actions>
                      </v-card>
                    </v-hover>
                  </v-col>
                </v-row>
              </v-container>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import NavBar from '@/components/NavBar'
  export default {
    components: {
      NavBar,
    },
    data: () => ({
      cards: [
        { title: '', src: require('@/assets/Hyakumasu.jpg'), flex: 12, link: '/ModeSerrect' },
        { title: 'Favorite road trips', src: 'https://cdn.vuetifyjs.com/images/cards/road.jpg', flex: 6, link: '/ModeSerrect' },
        { title: 'Best airlines', src: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg', flex: 6, link: '/ModeSerrect' },
      ],
    }),
  }
</script>