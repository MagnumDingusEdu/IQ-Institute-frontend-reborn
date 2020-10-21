<template>
  <nav>
    <v-app-bar dark app fixed>
      <v-app-bar-nav-icon class="grey--text" @click="drawer=!drawer"></v-app-bar-nav-icon>
      <v-toolbar-title class="text-uppercase">
        <span class="font-weight-light">IQ</span>
        <span class="font-weight-medium"> Institute</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <div class="mx-3" v-if="!s_visible"></div>

      <v-menu
          rounded="b-xl"
          offset-y
          v-if="s_visible"
          transition="slide-y-transition"
      >
        <template v-slot:activator="{ on, attrs }">
          <v-text-field
              v-bind="attrs"
              v-on="on"
              :loading="s_loading"
              @input="s_search"
              label="Search"
              color="white"
              placeholder="Search..."
              append-icon="mdi-magnify"
              class="my-auto grey--text"
              background-color="grey darken-3"
              dense
              clearable
              filled
              solo
              hide-details
          ></v-text-field>
        </template>
        <v-list>
          <v-list-item
              v-for="item in items"
              :key="item.id"
              link
              class="grey darken-4"


          >

            <v-list-item-title v-text="item.title" ></v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
      <div class="ml-3" v-if="s_visible"></div>
      <v-btn
          v-if="s_visible"
          v-on:click="s_visible = !s_visible"
          icon
          text
      >
        <v-icon
            size="15">
          mdi-cancel
        </v-icon>

      </v-btn>
      <v-btn
          v-if="!s_visible"
          v-on:click="s_visible = !s_visible"
          icon
          text
      >
        <v-icon
            size="15">
          fa-search
        </v-icon>

      </v-btn>
      <v-btn color="white ml-5" depressed text>
        <span>Sign out</span>
        <v-icon right>mdi-exit-to-app</v-icon>
      </v-btn>
    </v-app-bar>
    <v-navigation-drawer app temporary v-model="drawer">
      <v-row>
        <v-col class="text-center">
          <v-list>
            <v-list-item class="d-flex justify-center ml-1">
              <v-list-item-avatar class="align-center" size="100" tile>
                <v-img src="../assets/iq-logo.png"></v-img>
              </v-list-item-avatar>
            </v-list-item>

            <v-list-item>
              <v-list-item-content>
                <v-list-item-title class="title mb-1">
                  <div class="heading">
                    <span class="font-weight-light text-uppercase">IQ</span>
                    <span class="font-weight-medium text-uppercase"> Institute</span>
                  </div>
                </v-list-item-title>
                <v-list-item-subtitle>Lecture Portal</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-col>
      </v-row>

      <v-divider></v-divider>

      <v-list nav dense>
        <v-list-item link v-for="nav_it in nav_items" v-bind:key="nav_it.id" :to="nav_it.route">
          <v-list-item-icon>
            <v-icon>{{ nav_it.icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-title>{{ nav_it.title }}</v-list-item-title>
        </v-list-item>

      </v-list>

    </v-navigation-drawer>
  </nav>
</template>

<script>
import _ from 'lodash';

export default {
  name: "Navbar.vue",
  components: {},
  data() {
    return {
      drawer: false,
      group: null,
      s_visible: false,
      s_loading: false,
      items: [],

      nav_items: [
        {id: 1, title: "Home", icon: "mdi-home", route: "/"},
        {id: 2, title: "Profile", icon: "mdi-face", route: "/profile"},
        {id: 3, title: "Restricted", icon: "mdi-lock", route: "/login"}
      ],

    }
  },

  watch: {
    group() {
      this.drawer = false
    },


  },
  methods: {

    s_search(value) {
      this.s_debounced_search(value);
      this.s_loading = true;
    },

    s_debounced_search: _.debounce(function (string) {
      console.log(string);
      if (string === "") {
        this.items = []
      } else {
        this.axios.get('http://localhost:8000/api')
            .then(response => {
              this.s_loading = false;
              this.items = response.data.slice(0,10);
            })
            .catch(error => {
              console.log(error);
              this.$store.commit('showSnackbar', 'Network error. Please check your internet connection.')
            });
      }

    }, 300)

  },

  computed: {}
}
</script>

<style scoped>
.tile {
  background: yellow;
}
</style>