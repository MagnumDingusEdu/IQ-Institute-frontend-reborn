<template>
  <div class="dashboard pa-0 ma-0">
    <v-overlay :value="overlay" absolute opacity="0.5" color="black"></v-overlay>
    <GoHome/>
    <Player/>
    <!--    Main Content -->
    <v-container class="mt-15">
      <v-alert
          border="right"
          colored-border
          :type="top_alert_type"
          elevation="2"
          v-if="top_alert"
      >
        {{ top_alert_message }}
      </v-alert>
      <v-row class="mb-3 d-flex justify-space-between">
        <v-col cols="9">
          <v-btn
              text
              class="grey--text text--lighten-2"
              :disabled="alreadyAtRoot"
              @click="goBackOneStep"
          >
            <v-icon left>
              fa-chevron-left
            </v-icon>
            Go back
          </v-btn>
          |
          <v-btn
              text
              class="grey--text text--lighten-2"
              @click="goToRoot"
          >
            Home
          </v-btn>
        </v-col>
        <v-col cols="3 d-flex justify-end">

          <v-menu offset-y transition="slide-y-transition" bottom right>
            <template v-slot:activator="{ on, attrs }">
              <v-btn small depressed text color="grey" v-bind="attrs" v-on="on">
                <v-icon left small>
                  mdi-sort
                </v-icon>
                <span class="subtitle-1 grey--text text--lighten-2">Sort</span>
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
            :id="lecture.id"
            :title="lecture.title"
            :upload_date="lecture.date_created"
            :status="'ongoing'"
            :divider="false"
            :video_id="hexToBase64(lecture.video_link)"
            :is_video="lecture.type === 'vid'"
            class="mb-3">

        </Card>

        <v-card-text
            class="text-center font-weight-medium mt-16"
            style="letter-spacing: 3px; font-size: 1em"
            v-if="lecture_list.length === 0"

        >
          -- Folder empty --
        </v-card-text>

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
      info: null,
      top_alert: false,
      top_alert_type: 'success',
      top_alert_message: ""
    }
  },

  methods: {
    hexToBase64(str) {
      if(str == null) return null
      return atob(String.fromCharCode.apply(null,
          str.replace(/\r|\n/g, "").replace(/([\da-fA-F]{2}) ?/g, "0x$1 ").replace(/ +$/, "").split(" "))
      );
    },

    sort_listing(prop) {
      this.$store.commit('sortDirectoryListing', prop);
    },

    sendAlert(message, success = true) {
      this.top_alert = true;
      this.top_alert_message = message;
      this.top_alert_type = success ? 'success' : 'error';

    },

    clearAlert() {
      this.top_alert = false;
      this.top_alert_message = '';

    },

    goToRoot() {
      this.$store.dispatch('getLecturesForPath', null);
    },

    goBackOneStep() {
      this.$store.dispatch('goToPreviousFolder');
    }
  },
  mounted() {

    this.$store.dispatch('getLecturesForPath', null);
  },
  computed: {
    lecture_list() {
      return this.$store.state.dashboard.directory_listing;
    },

    overlay() {
      return this.$store.state.dashboard.overlay;
    },

    alreadyAtRoot() {
      return this.$store.state.dashboard.parent_folder_id === null;
    },

    loading() {
      return this.$store.state.dashboard.loading;
    }

  },


}


</script>

