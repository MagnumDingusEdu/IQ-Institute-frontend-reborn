<template>
  <v-app :light="false">

    <Navbar/>
    <Snackbar/>

    <v-main class="ma-4">
      <router-view>

      </router-view>
    </v-main>
    <Footer />
  </v-app>
</template>

<script>

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Snackbar from "@/components/Snackbar";
export default {
  name: 'App',

  components: {
    Navbar,
    Footer,
    Snackbar

  },
  data: () => ({
    //
  }),

};
</script>
