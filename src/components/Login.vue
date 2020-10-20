<template>
  <v-container class="fill-height" fluid>
    <v-row align="center" justify="center">
      <v-col cols="12" sm="8" md="8">
        <v-card class="elevation-12">
          <v-window v-model="step">
            <v-window-item :value="1">
              <v-row>
                <v-col cols="12" md="8">
                  <v-card-text class="mt-12">
                    <h1 class="text-center display-2 orange--text text--accent-3">Sign in</h1>
                    <div class="text-center mt-4">
                      <v-btn class="mx-2" fab color="black" outlined>
                        <v-icon color="white">fab fa-facebook-f</v-icon>
                      </v-btn>
                      <v-btn class="mx-2" fab color="black" outlined>
                        <v-icon color="white">fab fa-google-plus-g</v-icon>
                      </v-btn>
                      <v-btn class="mx-2" fab color="black" outlined>
                        <v-icon color="white">fab fa-linkedin-in</v-icon>
                      </v-btn>
                    </div>
                    <h4 class="text-center ml-4 mt-4">Ensure your email for registration</h4>

                    <v-form>
                      <v-text-field
                          label="E-Mail"
                          name="email"
                          prepend-icon="mdi-email"
                          type="text"
                          color="orange accent-3"
                      />

                      <v-text-field
                          id="password"
                          label="Password"
                          name="Password"
                          prepend-icon="mdi-lock"
                          type="password"
                          color="orange accent-3"
                      />

                    </v-form>

                    <h3 class="text-center mt-3">Forgot your password ?</h3>
                  </v-card-text>
                  <div class="text-center mt-3">
                    <v-btn rounded color="orange accent-3" dark>
                      Sign In
                    </v-btn>
                  </div>
                </v-col>
                <v-col cols="12" md="4" class="orange accent-3">
                  <v-card-text class="white--text mt-12">
                    <h1 class="text-center display-1">
                      Hello friends !
                    </h1>

                    <h5 class="text-center">
                      Enter your personal details and start your journey with us
                    </h5>

                  </v-card-text>
                  <div class="text-center">
                    <v-btn rounded outlined="" dark @click="step++">SIGN UP</v-btn>
                  </div>
                </v-col>
              </v-row>
            </v-window-item>
            <v-window-item :value="2">
              <v-row class="fill-height">
                <v-col cols="12" md="4" class="orange accent-3">
                  <v-card-text class="white-text mt-12">
                    <h1 class="text-center display-1">
                      Welcome back !
                    </h1>
                    <h5 class="text-center">
                      To keep connected with us please login with your personal info
                    </h5>
                  </v-card-text>
                    <div class="text-center">
                      <v-btn rounded outlined dark @click="step--">SIGN IN</v-btn>
                    </div>
                </v-col>
                <v-col cols="12" md="8">
                  <v-card-text class="mt-12">
                    <h1 class="text-center display-2 orange--text accent-3 ">Create Account</h1>
                    <div class="text-center mt-4">
                      <v-btn class="mx-2" fab color="black" outlined>
                        <v-icon color="white">fab fa-facebook-f</v-icon>
                      </v-btn>
                      <v-btn class="mx-2" fab color="black" outlined>
                        <v-icon color="white">fab fa-google-plus-g</v-icon>
                      </v-btn>
                      <v-btn class="mx-2" fab color="black" outlined>
                        <v-icon color="white">fab fa-linkedin-in</v-icon>
                      </v-btn>
                      <h4 class="text-center ml-4 mt-4">Ensure your email for registration</h4>

                      <v-form>
                        <v-text-field
                            label="Name"
                            name="name"
                            prepend-icon="mdi-face"
                            type="text"
                            color="orange accent-3"
                        />

                        <v-text-field
                            label="E-Mail"
                            name="email"
                            prepend-icon="mdi-email"
                            type="text"
                            color="orange accent-3"
                        />

                        <v-text-field
                            id="password"
                            label="Password"
                            name="Password"
                            prepend-icon="mdi-lock"
                            type="password"
                            color="orange accent-3"
                        />

                      </v-form>

                      <h3 class="text-center mt-3">Forgot your password ?</h3>

                    </div>
                  </v-card-text>
                  <div class="text-center mt-3">
                    <v-btn rounded color="orange accent-3" dark>
                      Sign In
                    </v-btn>
                  </div>
                </v-col>
              </v-row>
            </v-window-item>
          </v-window>
        </v-card>
      </v-col>
    </v-row>

  </v-container>
</template>

<script>
export default {
  name: "Login.vue",
  data() {
    return {
      step: 1,
    }
  },
  props: {
    source: String
  }
}
</script>

<style scoped>

</style>