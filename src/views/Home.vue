<template>
  <div class="dashboard">
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
              <v-list-item @click="sortBy('title')">
                <v-list-item-action>
                  <v-list-item-title>Title</v-list-item-title>
                </v-list-item-action>
              </v-list-item>
              <v-list-item @click="sortBy('upload_date')" class="rounded-b-xl">
                <v-list-item-action>
                  <v-list-item-title>Date Created</v-list-item-title>
                </v-list-item-action>
              </v-list-item>
            </v-list>
          </v-menu>

        </v-col>
      </v-row>

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
            :upload_date="lecture.id"
            :status="'ongoing'"
            :divider="false"
            class="mb-3">

        </Card>

      </template>
    </v-container>
  </div>
</template>

<script>

import Card from "@/components/Card";


export default {
  name: 'Home',
  components: {Card},
  data() {
    return {
      loading: true,
      activate: true,
      info: null,
      lecture_list: null,
    }
  },
  methods: {
    sortBy(prop) {
      this.lecture_list.sort((a, b) => a[prop] < b[prop] ? -1 : 1);
    }
  },
  mounted() {
    this.axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(response => {
            this.loading = false;
            this.lecture_list = response.data;
            console.log(this.lecture_list);
        });

    setTimeout(function () {
      this.loading = false;
    }, 3000);

  },
  computed: {
    projects() {
      return this.$store.state.projects;
    }
  }

}
</script>
