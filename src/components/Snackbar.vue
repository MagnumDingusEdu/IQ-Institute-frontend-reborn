<template>
  <v-dialog-bottom-transition>
    <div class="text-center ma-2" v-if="visible" >
      <v-snackbar

          :value="visible"
          color="grey darken-4"
          elevation="24"
      >
        {{ message }}

        <template v-slot:action="{ attrs }">
          <v-btn
              color="white"
              text
              v-bind="attrs"
              @click="closeSnackbar"
          >
            Close
          </v-btn>
        </template>
      </v-snackbar>
    </div>
  </v-dialog-bottom-transition>
</template>


<script>
export default {
  name: "Snackbar",
  computed: {
    message(){

      return this.$store.state.snackbar.message;
    },
    visible(){
      console.log('message check');
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