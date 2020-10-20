<template>
  <v-slide-y-transition >
    <v-btn
        v-scroll="onScroll"
        v-show="fab"
        fab
        dark
        fixed
        bottom
        right

        color="secondary"
        @click="scrollToTop"
    >
      <v-icon>fa-chevron-up</v-icon>
    </v-btn>
  </v-slide-y-transition>
</template>

<script>
export default {
  name: "GoHome",
  data() {
    return {
      fab : false,
    }
  },
  methods : {
    scrollToTop() {
      this.$vuetify.goTo(0);
    },
    onScroll (e) {
      if (typeof window === 'undefined') return
      const top = window.pageYOffset ||   e.target.scrollTop || 0
      this.fab = top > 20
    },
  }
}
</script>

<style scoped>
#button {
  //display: inline-block;
  //position: fixed;
  //bottom: 30px;
  //right: 30px;
  //transition: background-color .3s,
  //opacity .5s, visibility .5s;
  //opacity: 0;
  //z-index: 1000;
}

</style>