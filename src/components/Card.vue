<template>
  <div class="">
    <v-card elevation="3" :class="`project-ongoing`" class="pl-4 py-3">

      <v-row>

        <v-img
            max-width="150"
            :lazy-src="`https://i.ytimg.com/vi/${video_id}/hqdefault.jpg`"
            :src="`https://i.ytimg.com/vi/${video_id}/hqdefault.jpg`"
            contain
            class="ma-2"
        ></v-img>

        <v-col cols="8" md="6">
          <div class="caption grey--text">Video Title</div>
          <span class="text-h6  " style="max-height: 150px">{{ title }}</span>
        </v-col>

        <v-col cols="6" sm="4" md="2">

          <div class="caption grey--text">Uploaded on</div>
          <div class="">{{ upload_date | formatDate }}</div>
        </v-col>
        <v-col cols="12" sm="2" md="2">
          <div class="d-sm-flex justify-center">
            <v-btn color="white" depressed text>
              <span>Play Lecture</span>
              <v-icon right>fa-photo-video</v-icon>
            </v-btn>

          </div>
        </v-col>
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

  ],


}
</script>

<style scoped>
.project-complete {
  border-left: 4px solid #3cd1c2;
}

.project-ongoing {
  border-left: 4px solid orange;
}

.project-overupload_date {
  border-left: 4px solid tomato;
}
</style>