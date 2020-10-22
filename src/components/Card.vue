<template>
  <div class="">
    <v-card elevation="3" :class="{file_border: is_video, folder_border: !is_video}" class="px-4 py-3">

      <v-row justify="start">


        <v-img
            v-if="is_video"
            max-width="150"
            :lazy-src="`https://i.ytimg.com/vi/${video_id}/hqdefault.jpg`"
            :src="`https://i.ytimg.com/vi/${video_id}/hqdefault.jpg`"
            contain
            class="ma-2"
        ></v-img>

        <v-icon
            v-if="!is_video"
            :size="height"

            v-show="!$vuetify.breakpoint.xs"
            contain
            class="mx-5"
            style="min-width: 130px"

        >fa-folder
        </v-icon>

        <v-col cols="8" md="6">
          <div class="caption grey--text " v-if="is_video">Video Title</div>
          <div class="caption grey--text " v-if="!is_video">Folder Title</div>

          <a class="text-h6  card-title" style="max-height: 150px" href="#" @click.prevent="handleClick">{{ title }}</a>
        </v-col>
        <v-spacer></v-spacer>
        <v-col cols="6" sm="4" md="2">

          <div class="caption grey--text" v-if="is_video">Uploaded on</div>
          <div class="caption grey--text" v-if="!is_video">Created on</div>
          <div class="">{{ upload_date | formatDate }}</div>
        </v-col>
        <!--        <v-col cols="12" sm="2" md="2">-->
        <!--          <div class="d-sm-flex justify-center">-->
        <!--            <v-btn color="white" depressed text>-->
        <!--              <span>Play Lecture</span>-->
        <!--              <v-icon right>fa-photo-video</v-icon>-->
        <!--            </v-btn>-->

        <!--          </div>-->
        <!--        </v-col>-->
      </v-row>

    </v-card>
    <v-divider class="blue-grey" v-if="divider"></v-divider>

  </div>
</template>

<script>
export default {
  name: "Card.vue",
  props: [
    'title',
    'person',
    'upload_date',
    'status',
    'content',
    'divider',
    'video_id',
    'is_video',
    'id'
  ],

  computed: {
    height() {
      switch (this.$vuetify.breakpoint.name) {
        case 'xs':
          return 30
        case 'sm':
          return 80
        case 'md':
          return 80
        case 'lg':
          return 100
        case 'xl':
          return 100
        default:
          return 100
      }
    },
  },


  methods: {
    handleClick() {
      if (!this.is_video) {
        this.$store.dispatch('getLecturesForPath', this.id);
      } else {
        this.$store.commit('playVideo', {id: this.video_id, title: this.title});

      }
    }
  }


}
</script>

<style scoped>
.project-complete {
  border-left: 4px solid #3cd1c2;
}

.file_border {
  border-left: 8px solid lightblue;
}

.folder_border {
  border-left: 8px solid orange;
}

.project-overupload_date {
  border-left: 4px solid tomato;
}

.card-title {
  text-decoration: none;
  color: #FFF
}

.card-title:hover {
  text-decoration: underline;
}
</style>