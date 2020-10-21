<template>
  <v-container class="fill-height" fluid>
    <div class="login-prompt">
      <v-dialog
          v-model="login_prompt"
          persistent
          width="300"
          overlay-opacity="0.8"

      >
        <v-card
            dark
        >
          <v-card-text>
            Logged in successfully. Redirecting...
            <v-progress-linear
                indeterminate
                color="white"
                class="mb-0 mt-3"
            ></v-progress-linear>
          </v-card-text>
        </v-card>
      </v-dialog>
    </div>
    <v-row justify="center" align="center">
      <v-col cols="12" sm="8" md="8" style="max-width: 500px">
        <v-slide-y-transition>
          <v-alert
              border="right"
              colored-border
              :type="top_alert_type"
              elevation="2"
              v-if="top_alert"
          >
            {{ top_alert_message }}
          </v-alert>
        </v-slide-y-transition>
        <v-card class="elevation-12">
          <v-window v-model="step">
            <v-window-item :value="1">
              <v-row>
                <v-col cols="12">


                  <v-card-text class="mt-12">

                    <h1 class="text-center display-2 orange--text text--darken-1 text-uppercase">WELCOME</h1>

                    <div class="text-center mt-3 mb-5 ml-1 text-uppercase" style="letter-spacing: 3px">
                      <span class="font-weight-bold">IQ Institute</span> | web portal
                    </div>

                    <v-form
                        class="mx-5"
                        ref="l_form"
                        v-model="l_valid"
                        lazy-validation
                    >
                      <v-text-field

                          v-model="l_username"
                          :rules="l_username_rules"


                          label="Username"
                          name="username"
                          append-icon="mdi-card-account-details"
                          outlined
                          type="text"
                          color="orange accent-3"
                          class="mb-4 mt-12"
                          hide-details
                          placeholder=" "
                      />

                      <v-text-field
                          v-model="l_password"
                          :rules="l_password_rules"

                          id="password"
                          label="Password"
                          name="Password"
                          append-icon="mdi-lock"
                          type="password"
                          color="orange accent-3"
                          outlined
                          placeholder=" "
                      />

                    </v-form>
                  </v-card-text>
                  <div class="text-center mt-3 mb-6">
                    <v-btn large color="orange darken-2" class="mr-4" dark text outlined @click="switchWindow">
                      Sign up
                    </v-btn>
                    <v-btn
                        large
                        color="orange"
                        dark
                        text
                        outlined
                        @click="login"
                        :loading="l_loading"
                        :disabled="l_loading"

                    >
                      Sign In
                      <template v-slot:loader>
                        <span class="custom-loader">
                          <v-icon light>mdi-cached</v-icon>
                        </span>
                      </template>
                    </v-btn>
                  </div>
                </v-col>
              </v-row>
            </v-window-item>
            <v-window-item :value="2">
              <v-row>
                <v-col cols="12">
                  <v-card-text class="mt-12">
                    <h1 class="text-center display-2 orange--text text--darken-1 text-uppercase">REGISTER</h1>

                    <div class="text-center mt-3 mb-5 ml-1 text-uppercase" style="letter-spacing: 3px">
                      <span class="font-weight-bold">IQ Institute</span> | web portal
                    </div>

                    <v-form
                        class="mx-5"
                        ref="r_form"
                        v-model="r_valid"
                        lazy-validation

                    >
                      <v-text-field
                          v-model="r_name"
                          :rules="r_name_rules"
                          required
                          label="Name"
                          name="Full Name"
                          append-icon="mdi-account"
                          outlined
                          type="text"
                          color="orange accent-3"
                          class=" mt-12"
                      />

                      <v-text-field
                          v-model="r_email"
                          :rules="r_email_rules"

                          label="E-Mail"
                          name="E-mail"
                          append-icon="mdi-email"
                          type="email"
                          color="orange accent-3"
                          outlined
                          required

                      />
                      <v-select
                          :rules="r_course_rules"
                          required
                          color="white"
                          item-color="orange darken-2"
                          v-model="course_selections"
                          :items="course_options"
                          :menu-props="{ maxHeight: '400' }"
                          label="Select"
                          multiple
                          chips
                          hint="Please select the courses that you are interested in"
                          persistent-hint
                          solo
                          filled

                      ></v-select>

                    </v-form>
                  </v-card-text>
                  <div class="text-center mt-3 mb-6">
                    <v-btn
                        large
                        color="orange darken-2"
                        dark
                        text
                        outlined
                        @click="register"
                        :loading="loading_r"
                        :disabled="loading_r"

                    >
                      Register
                      <template v-slot:loader>
                        <span class="custom-loader">
                          <v-icon light>mdi-cached</v-icon>
                        </span>
                      </template>
                    </v-btn>

                  </div>
                  <div class="text-center sign-in-prompt mb-5">
                    Already have an account ? <a class="orange--text darken-2" @click="switchWindow">Sign in</a>
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
      course_selections: [],
      loading_r: false,

      alert: false,
      alert_message: '',


      course_options: [
        'CA-Foundation',
        'CA-Inter',
        'XI',
        'XII'
      ],

      //  Validation stuff
      r_disabled: true,
      r_name: '',
      r_name_rules: [
        v => !!v || 'Name is required',
      ],

      r_email: '',
      r_email_rules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
      ],

      r_course_rules: [
        v => v.length > 0 || 'Please select at least one course',
      ],

      r_valid: false,
      l_valid: false,

      l_username: '',
      l_username_rules: [
        v => !!v || 'Username cannot be blank.',
      ],

      l_password: '',
      l_password_rules: [
        v => !!v || 'Password cannot be blank.',
      ],

      l_loading: false,

      login_prompt: false,
      top_alert: false,
      top_alert_message: '',
      top_alert_type: 'error',
    }
  },
  props: {
    source: String
  },
  watch: {},

  methods: {
    register() {


      if (!this.$refs.r_form.validate()) return
      this.loading_r = true;

      setTimeout(() => {
        this.loading_r = false;
        this.sendAlert('Thank you for registering ! We will contact you soon on your provided e-mail address.', true);
        this.step--;
      }, 3000)
    },

    login() {
      if (!this.$refs.l_form.validate()) return
      this.l_loading = true;
      // this.login_prompt = true;

      setTimeout(() => {
        this.l_loading = false;
        this.login_prompt = false;

        this.sendAlert('Incorrect username or password', false)
        this.authorize();
      }, 3000)
    },
    sendAlert(message, success = true) {
      this.top_alert = true;
      this.top_alert_message = message;
      this.top_alert_type = success ? 'success' : 'error';

    },

    switchWindow() {
      if (this.step === 1) this.step = 2
      else this.step = 1
      this.top_alert = false;
      this.top_alert_message = '';
      this.login_prompt = false;
    },

    authorize() {
      this.login_prompt = true;
      setTimeout(() => {
        this.login_prompt = false;
        this.$router.push('/');
      }, 2000)
      this.$store.commit(
          'login',
          {
            token: 'test-token',
            name: 'vividh-mariya',
            username: 'magnum',
            courses: [
                'course1',
                'course2'
            ]
          });

    }

  }
}
</script>

<style scoped>
.v-input__icon--prepend-inner {
  margin-left: 4px;
  margin-right: 4px;
}

.sign-in-prompt {
  font-family: "Roboto", sans-serif;
  font-weight: normal;
}

.custom-loader {

  animation: loader 1s infinite;
  display: flex;
}

@-moz-keyframes loader {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
}

@-webkit-keyframes loader {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
}

@-o-keyframes loader {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
}

@keyframes loader {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>