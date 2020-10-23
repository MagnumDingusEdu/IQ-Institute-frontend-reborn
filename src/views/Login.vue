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
                    <div class="text-center mt-3 ml-2 " style="letter-spacing: 3px; cursor: pointer" @click="step=3">
                      <span class="font-weight-bold">Forgot password ?</span>
                    </div>
                  </v-card-text>
                  <div class="text-center mt-3 mb-6">
                    <v-btn large color="orange darken-2" class="mr-4" dark text outlined @click="step=2">
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
                      <v-text-field
                          v-model="r_phone"
                          :rules="r_phone_rules"

                          label="Mobile No."
                          name="mobile"
                          append-icon="mdi-phone"
                          type="text"
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
                    Already have an account ? <a class="orange--text darken-2" @click="step=1">Sign in</a>
                  </div>
                </v-col>
              </v-row>
            </v-window-item>
            <v-window-item :value="3">
              <v-row>
                <v-col cols="12">
                  <v-card-text class="mt-12">
                    <h1 class="text-center display-1 orange--text text--darken-1 text-uppercase">Reset Password</h1>

                    <div class="text-center mt-3 mb-12 ml-1 text-uppercase" style="letter-spacing: 3px">
                      <span class="font-weight-bold">IQ Institute</span> | web portal
                    </div>

                    <v-form
                        class="mx-5"
                        ref="p_form_model1"
                        v-model="p_form_model1"
                        lazy-validation

                    >

                      <v-text-field
                          v-model="password_reset_email"
                          :rules="r_email_rules"

                          label="E-Mail"
                          name="E-mail"
                          append-icon="mdi-email"
                          type="email"
                          color="orange accent-3"
                          placeholder="Your e-mail address"
                          outlined
                          required

                      />
                    </v-form>
                  </v-card-text>
                  <div class="text-center  mb-6">
                    <v-btn
                        large
                        color="orange darken-2"
                        dark
                        text
                        outlined
                        @click="sendResetToken"
                        :loading="p_button1_loading"
                        :disabled="p_button1_loading"

                    >
                      Send Recovery E-mail
                      <template v-slot:loader>
                        <span class="custom-loader">
                          <v-icon light>mdi-cached</v-icon>
                        </span>
                      </template>
                    </v-btn>

                  </div>
                  <div class="text-center sign-in-prompt mb-5">
                    Already have an account ? <a class="orange--text darken-2" @click="step=1">Sign in</a>
                  </div>
                </v-col>
              </v-row>
            </v-window-item>
            <v-window-item :value="4">
              <v-row>
                <v-col cols="12">
                  <v-card-text class="mt-12">
                    <h1 class="text-center display-1 orange--text text--darken-1 text-uppercase">Reset Password</h1>

                    <div class="text-center mt-3 mb-12 ml-1 text-uppercase" style="letter-spacing: 3px">
                      <span class="font-weight-bold">IQ Institute</span> | web portal
                    </div>

                    <v-form
                        class="mx-5"
                        ref="p_otp_form"
                        v-model="p_otp_form"
                        lazy-validation

                    >

                      <v-text-field
                          v-model="p_otp"
                          label="OTP"
                          name="OTP"
                          append-icon="mdi-lock-clock"
                          type="text"
                          color="orange accent-3"
                          placeholder="One-time Password"
                          outlined
                          required
                      />
                    </v-form>
                  </v-card-text>
                  <div class="text-center  mb-6">
                    <v-btn
                        large
                        color="orange darken-2"
                        dark
                        text
                        outlined
                        @click="confirmOTP"
                        :loading="p_otp_form_loading"
                        :disabled="p_otp_form_loading"

                    >
                      Confirm OTP
                      <template v-slot:loader>
                        <span class="custom-loader">
                          <v-icon light>mdi-cached</v-icon>
                        </span>
                      </template>
                    </v-btn>

                  </div>
                  <div class="text-center sign-in-prompt mb-5">
                    Already have an account ? <a class="orange--text darken-2" @click="step=1">Sign in</a>
                  </div>
                </v-col>
              </v-row>
            </v-window-item>
            <v-window-item :value="5">
              <v-row>
                <v-col cols="12">
                  <v-card-text class="mt-12">
                    <h1 class="text-center display-1 orange--text text--darken-1 text-uppercase">Reset Password</h1>

                    <div class="text-center mt-3 mb-12 ml-1 text-uppercase" style="letter-spacing: 3px">
                      <span class="font-weight-bold">IQ Institute</span> | web portal
                    </div>

                    <v-form
                        class="mx-5"
                        ref="p_reset_password_model"
                        v-model="p_reset_password_model"
                        lazy-validation

                    >

                      <v-text-field
                          v-model="p_new_password"
                          :rules="p_new_password_rules"

                          label="New Password"
                          name="new-password"
                          :append-icon="p_new_password_visible ? 'mdi-eye' : 'mdi-eye-off'"
                          :type="p_new_password_visible ? 'text' : 'password'"
                          color="orange accent-3"
                          outlined
                          required
                          @click:append="p_new_password_visible = !p_new_password_visible"
                      />
                      <v-text-field
                          v-model="p_confirm_new_password"
                          :rules="[passwordConfirmationRule]"

                          label="Confirm Password"
                          name="confirm-password"
                          :append-icon="p_new_password_visible ? 'mdi-eye' : 'mdi-eye-off'"
                          :type="p_new_password_visible ? 'text' : 'password'"
                          color="orange accent-3"
                          outlined
                          required
                          @click:append="p_new_password_visible = !p_new_password_visible"
                      />
                    </v-form>
                  </v-card-text>
                  <div class="text-center  mb-6">
                    <v-btn
                        large
                        color="orange darken-2"
                        dark
                        text
                        outlined
                        :loading="p_reset_password_loading"
                        :disabled="p_reset_password_loading"
                        @click="changePassword"

                    >
                      Change Password
                      <template v-slot:loader>
                        <span class="custom-loader">
                          <v-icon light>mdi-cached</v-icon>
                        </span>
                      </template>
                    </v-btn>

                  </div>
                  <div class="text-center sign-in-prompt mb-5">
                    Already have an account ? <a class="orange--text darken-2" @click="step=1">Sign in</a>
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

      r_phone: '',
      r_phone_rules: [
        v => !!v || 'Mobile number cannot be empty',
        v => /^(\+\d{1,3}[- ]?)?\d{10}$/.test(v) || 'Please enter a valid mobile number'
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


      password_reset_email: null,
      p_form_model1: null,
      p_button1_loading: false,


      p_otp: '',
      p_otp_form: null,
      p_otp_form_loading: false,

      p_reset_password_model: null,
      p_new_password: '',
      p_new_password_visible: false,
      p_confirm_new_password: '',

      p_new_password_rules: [
        v => !!v || 'New password cannot be empty.',
        v => /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/.test(v) || 'Min. 8 characters with at least one capital letter, a number and a special character.'
      ],

      p_reset_password_loading: false,


    }
  },
  props: {
    source: String
  },
  watch: {},
  computed: {
    top_alert() {
      return this.$store.state.user.top_alert;
    },

    top_alert_message() {
      return this.$store.state.user.top_alert_message;
    },

    top_alert_type() {
      return this.$store.state.user.top_alert_type;
    },
    passwordConfirmationRule() {
      return (this.p_new_password === this.p_confirm_new_password) || 'The passwords do not match.'
    },
  },
  methods: {

    sendAlert(message, success = true) {
      this.$store.commit('showLoginAlert', {message: message, type: success ? 'success' : 'error'})
    },

    clearAlert() {
      this.$store.commit('dismissLoginAlert');
    },

    register() {


      if (!this.$refs.r_form.validate()) return
      this.loading_r = true;

      this.axios.post('users/register/', {
        name: this.r_name,
        email: this.r_email,
        mobile: this.r_phone,
        courses: this.course_selections.join(', ')
      }).then((response) => {
        response;
        this.loading_r = false;
        this.sendAlert('Thank you for registering ! We will contact you soon on your provided e-mail address.', true);
        this.step = 1;
      }).catch((error) => {
        if (!error.response) {
          this.sendAlert('Please check your internet connection.', false);
          this.loading_r = false;
        } else {
          this.sendAlert(`Unable to register. Error code : ${error.response.status}`, false);
          this.loading_r = false;
        }
      })

    },

    login() {
      this.clearAlert();
      if (!this.$refs.l_form.validate()) return
      this.l_loading = true;

      this.axios.post('users/login/', {username: this.l_username, password: this.l_password}).then((response) => {

        this.authorize(response.data);
      }).catch((error) => {
        if (!error.response) {
          this.sendAlert('Please check your internet connection.', false);
          this.l_loading = false;
        } else if (error.response.status === 400) {
          this.sendAlert('Incorrect username or password', false);
          this.l_loading = false;
        } else if (error.response.status === 406) {
          this.sendAlert('This account has been deactivated. Please contact the administrator for further details.', false);
          this.l_loading = false;
        } else {
          this.sendAlert(`Unable to sign in. Error code : ${error.response.status}`, false);
          this.l_loading = false;
        }
      })
    },

    switchWindow() {
      if (this.step === 1) this.step = 2
      else this.step = 1
      this.$store.commit('dismissLoginAlert');
      this.login_prompt = false;
    },

    authorize(payload) {
      this.$store.commit(
          'login',
          {
            token: payload.token,
            name: payload.name,
            username: this.l_username,
            courses: payload.courses
          });
      this.login_prompt = true;
      setTimeout(() => {
        this.login_prompt = false;
        this.$router.push('/');
      }, 3000)


    },

    sendResetToken() {
      this.clearAlert();
      if (!this.$refs.p_form_model1.validate()) return
      this.p_button1_loading = true;

      this.axios.post('users/password_reset/', {email: this.password_reset_email}).then(() => {

        this.sendAlert('A one-time password has been sent to your e-mail address.');
        this.p_button1_loading = false;
        this.step = 4;
      }).catch((error) => {
        this.p_button1_loading = false;
        console.log(error);
        if (!error.response) {
          this.sendAlert('Please check your internet connection.', false);
          this.p_button1_loading = false;
        } else if (error.response.status === 400) {
          this.sendAlert('There is no active user associated with this e-mail address or the password can not be changed.', false);
          this.p_button1_loading = false;
        } else if (error.response.status === 406) {
          this.sendAlert('This account has been deactivated. Please contact the administrator for further details.', false);
          this.p_button1_loading = false;
        } else {
          this.sendAlert(`Unable to sign in. Error code : ${error.response.status}`, false);
          this.p_button1_loading = false;
        }
      })
    },

    confirmOTP() {
      if (!this.$refs.p_otp_form.validate()) return
      this.p_otp_form_loading = true;

      this.axios.post('users/password_reset/validate_token/', {token: this.p_otp}).then(() => {

        this.sendAlert('OTP verified successfully. Please enter a new password.');
        this.p_otp_form_loading = false;
        this.step=5;
      }).catch((error) => {
        this.p_button1_loading = false;
        console.log(error);
        if (!error.response) {
          this.sendAlert('Please check your internet connection.', false);
          this.p_otp_form_loading = false;
        } else if (error.response.status === 404) {
          this.sendAlert("The OTP you've entered is incorrect. Please try again.", false);
          this.p_otp_form_loading = false;
        } else if (error.response.status === 406) {
          this.sendAlert('This account has been deactivated. Please contact the administrator for further details.', false);
          this.p_otp_form_loading = false;
        } else {
          this.sendAlert(`An error occurred. Error code : ${error.response.status}`, false);
          this.p_otp_form_loading = false;
        }
      })
    },

    changePassword() {
      if (!this.$refs.p_reset_password_model.validate()) return
      this.p_reset_password_loading = true;

      this.axios.post('users/password_reset/confirm/', {token: this.p_otp, password: this.p_new_password}).then(() => {

        this.sendAlert('Password has been changed successfully. Please login with your new credentials.');
        this.p_reset_password_loading = false;
        this.step=1;
      }).catch((error) => {
        this.p_button1_loading = false;
        console.log(error);
        if (!error.response) {
          this.sendAlert('Please check your internet connection.', false);
          this.p_reset_password_loading = false;

        } else if (error.response.status === 404) {
          this.sendAlert("An error occurred. Please try again.", false);
          this.step = 1;
          this.p_reset_password_loading = false;
        } else if (error.response.status === 406) {
          this.sendAlert('This account has been deactivated. Please contact the administrator for further details.', false);
          this.p_reset_password_loading = false;
          this.step = 1;
        } else {
          this.sendAlert(`An error occurred. Password has not been changed. Error code : ${error.response.status}`, false);
          this.p_reset_password_loading = false;
          this.step = 1;
        }
      })
    }


  },

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