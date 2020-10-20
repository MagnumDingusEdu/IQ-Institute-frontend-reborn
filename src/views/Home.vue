<template>
  <div class="dashboard">
    <v-container>
      <v-row no-gutters justify="center">
        <v-col
            v-for="n in 6"
            :key="n"
            cols="12"

            sm="3"
            lg="2"
            md="4"
        >
          <v-card
              class="pa-2"
              outlined
              tile
          >
            {{ n }} of three columns
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>

export default {
  name: 'Home',

}
</script>
