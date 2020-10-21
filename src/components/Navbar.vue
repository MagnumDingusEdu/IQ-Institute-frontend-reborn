<template>
  <nav>
    <v-app-bar dark app fixed>
      <v-app-bar-nav-icon class="grey--text" @click="drawer=!drawer"></v-app-bar-nav-icon>
      <v-toolbar-title class="text-uppercase">
        <span class="font-weight-light">IQ</span>
        <span class="font-weight-medium"> Institute</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <div class="mx-3" v-if="!searching"></div>
      <v-tab-transition>
        <v-autocomplete
            v-if="searching"
            v-model="search_model"
            :items="items"
            :loading="search_loading"
            :search-input.sync="search"
            label="Search..."
            color="grey mr-8"
            height="10"
            single-line
            dense
            hide-details
            hide-no-data
            hide-selected
            solo
        ></v-autocomplete>
      </v-tab-transition>
      <v-expand-transition>
        <v-list
            v-if="search_model && searching"
        >
          <v-list-item
              v-for="(field, i) in fields"
              :key="i"
          >
            <v-list-item-content>
              <v-list-item-title v-text="field.value"></v-list-item-title>
              <v-list-item-subtitle v-text="field.key"></v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-expand-transition>
      <div class="ml-3" v-if="searching"></div>
      <v-btn
          v-if="searching"
          v-on:click="searching = !searching"
          icon
          text
      >
        <v-icon
            size="15">
          fa-times
        </v-icon>

      </v-btn>
      <v-btn
          v-if="!searching"
          v-on:click="searching = !searching"
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
export default {
  name: "Navbar.vue",
  components: {},
  data() {
    return {
      drawer: false,
      group: null,
      searching: false,
      search_loading: false,
      search_model: null,
      search: null,
      search_entries: [],
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
    }
  }
}
</script>

<style scoped>

</style>