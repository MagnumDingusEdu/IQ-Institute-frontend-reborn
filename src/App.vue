<template>
  <v-app :light="false">
    <Navbar/>
    <GoHome />
    <v-main class="ma-4">
      <router-view>

      </router-view>
    </v-main>
  </v-app>
</template>

<script>

import Navbar from "@/components/Navbar";
import GoHome from "@/components/GoHome";
export default {
  name: 'App',

  components: {
    GoHome,
    Navbar,
  },
  data: () => ({
    //
  }),
  created() {
    window.addEventListener("scroll", this.handleScroll);
  },
  destroyed() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll() {
      this.$store.commit('setCurrentScrollY', window.scrollY);
    }

  }
};
</script>
