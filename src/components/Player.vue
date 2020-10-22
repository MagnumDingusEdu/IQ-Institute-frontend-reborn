<template>
  <v-row justify="center">
    <div class="video-loading">
      <v-dialog
          v-model="video_loading"
          persistent
          width="300"
          overlay-opacity="0.8"
      >
        <v-card
            dark
        >
          <v-card-text>
            Launching player. Please wait...
            <v-progress-linear
                indeterminate
                color="white"
                class="mb-0 mt-3"
            ></v-progress-linear>
          </v-card-text>
        </v-card>
      </v-dialog>
    </div>
    <v-dialog
        v-model="dialog"
        fullscreen
        hide-overlay
        transition="dialog-bottom-transition"
        v-if="!video_loading"
    >

      <v-card>
        <v-toolbar dark>
          <v-toolbar-title>Now Playing : {{ currentVideoInfo.title }}</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-btn
              right
              dark
              text
              @click="stopPlayer"
          >
            Close
            <v-icon right>mdi-close</v-icon>
          </v-btn>
        </v-toolbar>
        <v-card-text>
          <v-container class="pa-xl-16">
            <vue-plyr
                style="overflow: hidden"
                v-if="dialog"
            >
              <div data-plyr-provider="youtube" :data-plyr-embed-id="currentVideoInfo.id"></div>
            </vue-plyr>
          </v-container>
        </v-card-text>
      </v-card>
    </v-dialog>
  </v-row>

</template>

<script>
export default {
  name: "Player",
  methods: {
    stopPlayer() {
      this.$store.commit('stopVideo');
    }
  },

  computed: {
    dialog:  {
      get: function(){
        return this.$store.state.dashboard.video_playing;
      },
      set: function(){

      }
    },

    currentVideoInfo() {
      return {
        title: this.$store.state.dashboard.current_video_title,
        id: this.$store.state.dashboard.current_video_id
      }
    },
    video_loading(){
      return this.$store.state.dashboard.video_loading;
    }
  }
}
</script>

<style scoped>

</style>