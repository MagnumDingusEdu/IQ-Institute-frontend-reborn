<template>
  <div class="text-center ma-2" v-if="visible">
    <v-snackbar
        v-model="visible"
        transition="slide-y-transition"
    >
      {{ message }}

      <template v-slot:action="{ attrs }">
        <v-btn
            color="pink"
            text
            v-bind="attrs"
            @click="closeSnackbar"
        >
          Close
        </v-btn>
      </template>
    </v-snackbar>
  </div>
</template>


<script>
export default {
  name: "Snackbar",
  computed: {
    message(){
      return this.$store.state.snackbar.message;
    },
    visible(){
      return this.$store.state.snackbar.visible;
    },

  },

  methods: {
    closeSnackbar(){
      this.$store.commit('dismissSnackbar');
    }
  }

}
</script>

<style scoped>

</style>