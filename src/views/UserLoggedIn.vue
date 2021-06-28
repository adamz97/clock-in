<template>
  <v-sheet min-height="70vh" rounded="lg">
    <v-container>
      <p class="title">Hi, {{ user.displayName }}</p>
      <p class="timer">{{ formattedElapsedTime }}</p>
      <v-row>
        <v-col sm="12">
          <v-card tile class="pa-4">
            <v-btn color="teal lighten-4" block tile @click="start"
              >Start</v-btn
            >
          </v-card>
          <v-row no-gutters>
            <v-col sm="12">
              <v-card tile class="pa-4">
                <v-btn color="blue lighten-4" block @click="reset">Reset</v-btn>
              </v-card>
              <v-card tile class="pa-4">
                <v-btn color="red lighten-4" block tile @click="stop"
                  >Stop</v-btn
                >
              </v-card>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </v-sheet>
</template>

<script>
import firebase from "firebase";
export default {
  data() {
    return {
      user: "",
      elapsedTime: 0,
      timer: undefined,
    };
  },
  created() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.user = user;
      } else {
        this.user = null;
      }
    });
  },
  computed: {
    formattedElapsedTime() {
      const date = new Date(null);
      date.setSeconds(this.elapsedTime / 1000);
      const utc = date.toUTCString();
      return utc.substr(utc.indexOf(":") - 2, 8);
    },
  },
  methods: {
    start() {
      this.timer = setInterval(() => {
        this.elapsedTime += 1000;
      }, 1000);
    },
    stop() {
      clearInterval(this.timer);
    },
    reset() {
      this.elapsedTime = 0;
    },
  },
};
</script>
<style scoped>
.timer {
  padding: 20px;
  text-align: center;
  font-size: 75px;
  margin-top: 30px;
}
.title {
  padding: 15px;
}
</style>
