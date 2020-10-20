<template>
  <v-container>
    <h1>HomePage</h1>
    <v-btn class="pink white--text">
      click me
    </v-btn>
    <br>
    <br>
    <br>
    <v-btn rounded outlined color="pink">
      Click Me
    </v-btn>
    <br>
    <br>
    <v-btn class="ma-2" color="primary" dark>

      <v-icon dark left>
        mdi-movie
      </v-icon>
      Watch
    </v-btn>

    <v-btn class="ma-2 white--text yellow darken-4">
      Open Folder
      <v-icon dark right>
        mdi-folder
      </v-icon>
    </v-btn>

    <v-btn class="white--text yellow darken-4 hidden-md-and-down">
      Open Folder

      <v-icon right>
        mdi-folder
      </v-icon>
    </v-btn>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam animi delectus dolorem, ex facilis hic iusto
      labore magnam molestiae numquam officia perspiciatis, quaerat quasi qui quisquam quod, ratione recusandae rem
      repellendus ut vitae voluptatem voluptates? Accusamus architecto, commodi dolores id ipsum quia quidem rerum sequi
      veritatis. Architecto, dicta ducimus ex hic molestiae nemo nihil nobis nulla perferendis quam quos recusandae
      repellat repudiandae, sunt temporibus ut, voluptatibus voluptatum. Aperiam commodi culpa dignissimos distinctio,
      excepturi natus porro praesentium quidem repellendus, saepe totam voluptatum. Accusantium at corporis culpa
      doloremque id ipsum maiores nihil non, rem saepe sequi similique, voluptas. Asperiores consequatur quas rem.</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aperiam at, autem corporis cumque dignissimos
      doloremque doloribus earum facilis iure iusto laborum laudantium magnam maiores molestias, nemo nisi quibusdam
      repudiandae sit suscipit tempore totam veniam voluptatum. Atque doloremque enim eveniet ex exercitationem facilis
      fugiat fugit itaque molestias nihil officiis, perspiciatis ratione reiciendis, sed sit totam velit. Animi
      asperiores aut beatae blanditiis consectetur dolorem ea excepturi labore magni maxime minus, molestiae
      necessitatibus nemo, officia, optio quaerat quibusdam quis repudiandae rerum sequi totam ullam voluptates. Ad
      commodi, eaque earum fuga fugit impedit itaque molestiae natus obcaecati odio officia, recusandae tempore
      temporibus ut?</p>
    <vue-plyr>
      <div data-plyr-provider="youtube" data-plyr-embed-id="bTqVqk7FSmY"></div>
    </vue-plyr>
  </v-container>



</template>

<script>
export default {
  name: "Profile.vue"
}
</script>

<style scoped>

</style>