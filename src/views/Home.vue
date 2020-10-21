<template>
  <div class="dashboard pa-0 ma-0" >
    <v-overlay :value="overlay" absolute opacity="0.5" color="black"></v-overlay>
    <GoHome/>
    <Player/>
    <!--    Main Content -->
    <v-container class="mt-15">
      <v-row class="mb-3">
        <v-col class="text-right">

          <v-menu offset-y transition="slide-y-transition" bottom right>
            <template v-slot:activator="{ on, attrs }">
              <v-btn small depressed text color="grey" v-bind="attrs" v-on="on">
                <v-icon left small>
                  mdi-sort
                </v-icon>
                <span class="subtitle-1">Sort</span>
              </v-btn>
            </template>

            <v-list dense>
              <v-list-item @click="sort_listing('title')">
                <v-list-item-action>
                  <v-list-item-title>Title</v-list-item-title>
                </v-list-item-action>
              </v-list-item>
              <v-list-item @click="sort_listing('date')" class="rounded-b-xl">
                <v-list-item-action>
                  <v-list-item-title>Date</v-list-item-title>
                </v-list-item-action>
              </v-list-item>
              <v-list-item @click="sort_listing('type')" class="rounded-b-xl">
                <v-list-item-action>
                  <v-list-item-title>Type</v-list-item-title>
                </v-list-item-action>
              </v-list-item>
            </v-list>
          </v-menu>

        </v-col>

      </v-row>
      <template v-slot:activator="{ on, attrs }">
        <v-btn
            color="primary"
            dark
            v-bind="attrs"
            v-on="on"
        >
          Open Dialog
        </v-btn>
      </template>
      <template v-if="loading">

        <v-skeleton-loader
            v-for="i in 6" :key="i"
            type="list-item-three-line"
            max-height="100"
            class="mb-3"
        ></v-skeleton-loader>


      </template>
      <template v-else>
        <Card

            v-for="lecture in lecture_list"

            :key="lecture.id"

            :title="lecture.title"
            :upload_date="lecture.date"
            :status="'ongoing'"
            :divider="false"
            :video_id="lecture.id"
            :is_video="lecture.type"
            class="mb-3">

        </Card>

      </template>
    </v-container>
  </div>
</template>

<script>

import Card from "@/components/Card";
import GoHome from "@/components/GoHome";
import Player from "@/components/Player";

export default {
  name: 'Home',
  components: {Card, GoHome, Player},
  data() {
    return {
      loading: true,
      info: null,
    }
  },

  methods: {
    sort_listing(prop) {
      this.$store.commit('sortDirectoryListing', prop);
    },


  },
  mounted() {
    this.axios.get('http://localhost:8000/api')
        .then(response => {
          this.loading = false;
          this.$store.commit('setDirectoryListing', response.data);
          this.$store.commit('sortDirectoryListing', 'type');
        })
        .catch(_ => {

          _
          this.snack_message = "Network error while loading resource";
          this.snackbar = true;
        });


  },
  computed: {
    lecture_list() {
      return this.$store.state.dashboard.directory_listing;
    },

    overlay(){
      return this.$store.state.dashboard.overlay;
    }

  },


}
</script>
