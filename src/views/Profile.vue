<template>
  <v-row class="d-flex justify-space-between ma-md-12">
    <!--    Message box        -->
    <v-col cols="12">
      <v-slide-y-transition>
        <v-alert
            border="right"
            colored-border
            :type="top_alert_type"
            elevation="2"
            v-if="top_alert"
            dismissible
            class="pr-8"

        >
          {{ top_alert_message }}
        </v-alert>
      </v-slide-y-transition>
    </v-col>
    <!--    Profile Card       -->
    <v-col cols="12" lg="5">
      <v-card
          class="mx-auto elevation-20"
          dark
      >
        <v-row justify="space-between">
          <v-col cols="8">
            <v-card-title class="ml-2">
              <div>
                <div class="text-h2">
                  Profile
                </div>
                <div class="heading text-uppercase mt-1 font-weight-regular ml-1" style="letter-spacing: 3px">Section
                </div>
              </div>
            </v-card-title>
          </v-col>
          <v-img
              class="shrink ma-2"

              height="125px"
              src="../assets/avatar.jpg"
              style="flex-basis: 125px; border-radius:10px"
          ></v-img>
        </v-row>
        <v-divider dark></v-divider>
        <v-card-actions class="pa-4">
          <v-card-text>
            <v-row class="text-h5" v-for="item in profile_items" :key="item.key">
              <v-col cols="12" lg="4">
                <span style="letter-spacing: 2px" class="grey--text text--lighten-1 ">{{ item.key }}</span>
              </v-col>
              <v-col cols="12" md="8" :class="{
                  'd-block': item.truncate,
                  'text-truncate' : item.truncate
                }">
                <span style="letter-spacing: 2px">{{ item.value }}</span>
              </v-col>
            </v-row>


          </v-card-text>
        </v-card-actions>
      </v-card>
    </v-col>
    <!--    Change Email Form   -->
    <v-col cols="12" lg="7">
      <v-card

          dark
      >
        <v-card-title class="text-h4 text-break ">
          Change E-mail Address
        </v-card-title>

        <v-divider class="mb-5">

        </v-divider>

        <v-form
            class="mx-5 mt-10"
            ref="email_form"
            v-model="email_form"
            lazy-validation

        >


          <v-text-field
              v-model="email_field"
              :rules="email_rules"

              label="E-Mail"
              name="E-mail"
              append-icon="mdi-email"
              type="email"
              color="orange accent-3"
              placeholder="Your e-mail address"


              required

          />
        </v-form>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
              outlined
              text
              x-large
              :loading="email_loading"
              :disabled="email_loading"
              @click="changeEmail"
          >
            Submit
            <template v-slot:loader>
              <span class="custom-loader">
                <v-icon light>mdi-cached</v-icon>
              </span>
            </template>
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-col>

  </v-row>


</template>

<script>
export default {
  name: "Profile.vue",
  data() {
    return {

      email_form: null,
      email_field: '',
      email_loading: false,
      email_rules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+\..+/.test(v) || 'Please enter a valid e-mail address',
      ],

      top_alert: false,
      top_alert_message: '',
      top_alert_type: 'success',

      profile_items: [
        {
          "key": "Name: ",
          "value": this.$store.state.user.name,
          "truncate": false,
        },
        {
          "key": "Username: ",
          "value": this.$store.state.user.username,
          "truncate": false,
        },
        {
          "key": "E-Mail: ",
          "value": this.$store.state.user.email,
          "truncate": true,
        },
        {
          "key": "Courses: ",
          "value": this.$store.state.user.courses.join(', '),
          "truncate": false,
        },
      ]
    }
  },
  computed: {
    email(){
      return this.$store.state.user.email;
    }
  },
  methods: {
    changeEmail() {
      if (!this.$refs.email_form.validate()) return
      this.email_loading = true;

      this.axios.put('users/change_email/', {email: this.email_field}, {headers: {'Authorization': `Token ${this.$store.state.user.auth_token}`}}).then(() => {

        this.sendAlert('E-mail changed successfully.');
        this.email_loading = false;
        this.$store.commit('setEmail', this.email_field);
      }).catch((error) => {
        this.email_loading = false;
        if (!error.response) {
          this.sendAlert('Please check your internet connection.', false);
        } else if (error.response.status === 406) {
          this.sendAlert('This account has been deactivated. Please contact the administrator for further details.', false);
        } else {
          this.sendAlert(`An error occurred. Error code : ${error.response.status}`, false);
        }
      })
    },
    sendAlert(message, type = true) {
      this.top_alert = true;
      this.top_alert_message = message;
      this.top_alert_type = type ? 'success' : 'error';
    }
  },
  watch: {
    email(){
      this.profile_items[2].value = this.$store.state.user.email;
    }
  }

}
</script>

<style scoped>
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