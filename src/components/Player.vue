<template>
  <v-row justify="center">
    <v-dialog
        v-model="dialog"
        fullscreen
        hide-overlay
        transition="dialog-bottom-transition"
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
          <v-container height="100%">
            <vue-plyr
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
    dialog() {
      return this.$store.state.dashboard.video_playing;
    },

    currentVideoInfo() {
      return {
        title: this.$store.state.dashboard.current_video_title,
        id: this.$store.state.dashboard.current_video_id
      }
    }
  }
}
</script>

<style scoped>

</style>