<template>
  <div class="">
    <v-card elevation="3" :class="`project-${status}`" class="pl-4 py-3" >

      <v-row>
        <v-col cols="12" md="6">
          <div class="caption grey--text">Project Title</div>
          <div class="">{{ title }}</div>
        </v-col>
        <v-col cols="6" sm="4" md="2">

          <div class="caption grey--text">Person</div>
          <div class="">{{ person }}</div>
        </v-col>
        <v-col cols="6" sm="4" md="2">

          <div class="caption grey--text">Due by</div>
          <div class="">{{ due }}</div>
        </v-col>
        <v-col cols="12" sm="4" md="2">

          <div class="caption grey--text">Status</div>
          <div class="">{{ status }}</div>
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
    'due',
    'status',
    'content',
      'divider'

  ]

}
</script>

<style scoped>
.project-complete {
  border-left: 4px solid #3cd1c2;
}

.project-ongoing {
  border-left: 4px solid orange;
}

.project-overdue {
  border-left: 4px solid tomato;
}
</style>