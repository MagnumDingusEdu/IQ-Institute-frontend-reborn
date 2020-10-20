<template>
  <div class="dashboard">
    <v-container class="mt-15">
      <v-row class="mb-3">
        <v-col class="text-right">

          <v-menu offset-y transition="slide-y-transition" bottom right >
            <template v-slot:activator="{ on, attrs }">
              <v-btn small depressed text color="grey" v-bind="attrs" v-on="on">
                <v-icon left small>
                  mdi-sort
                </v-icon>
                <span class="subtitle-1">Sort</span>
              </v-btn>
            </template>
            <v-list dense>
              <v-list-item @click="sortBy('title')" >
                <v-list-item-action>
                  <v-list-item-title>Title</v-list-item-title>
                </v-list-item-action>
              </v-list-item>
              <v-list-item @click="sortBy('due')" class="rounded-b-xl">
                <v-list-item-action>
                  <v-list-item-title>Date Created</v-list-item-title>
                </v-list-item-action>
              </v-list-item>
            </v-list>
          </v-menu>

        </v-col>
      </v-row>
      <Card
          v-for="project in projects"

          :key="project.title"

          :title="project.title"
          :person="project.person"
          :due="project.due"
          :status="project.status"
          :content="project.content"
          :divider="false"
          class="mb-3">

      </Card>


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
      projects: [
        {
          title: 'Design a new website',
          person: 'The Net Ninja',
          due: '1st Jan 2019',
          status: 'ongoing',
          content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!'
        },
        {
          title: 'Code up the homepage',
          person: 'Chun Li',
          due: '10th Jan 2019',
          status: 'complete',
          content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!'
        },
        {
          title: 'Design video thumbnails',
          person: 'Ryu',
          due: '20th Dec 2018',
          status: 'complete',
          content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!'
        },
        {
          title: 'Create a community forum',
          person: 'Gouken',
          due: '20th Oct 2018',
          status: 'overdue',
          content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!'
        },
      ],
      activate: true,

    }
  },
  methods: {
    sortBy(prop) {
      this.projects.sort((a, b) => a[prop] < b[prop] ? -1 : 1);
    }
  }
}
</script>
