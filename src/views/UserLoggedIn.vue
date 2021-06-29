<template>
  <v-sheet min-height="70vh" rounded="lg">
    <v-container>
      <v-card tile>
        <v-card-title class="title">Hi, {{ user.displayName }}</v-card-title>
        <v-col md="12">
          <v-card tile
            ><v-card-title
              >Current time:
              <strong class="ml-2"> {{ time }}</strong>
            </v-card-title>
            <v-card-subtitle> Date: {{ currentDate }} </v-card-subtitle></v-card
          >
        </v-col>
      </v-card>
      <v-row dense>
        <v-col md="6">
          <v-card-title class="justify-center">
            Start Work
          </v-card-title>
          <v-card-actions class="justify-center">
            <v-btn
              @click="startWork"
              color="green lighten-2"
              height="200px"
              block
              tile
            >
              <v-icon color="white" size="150px">mdi-play</v-icon></v-btn
            >
          </v-card-actions>
        </v-col>
        <v-col md="6">
          <v-card-title class="justify-center">
            End Work
          </v-card-title>
          <v-card-actions class="justify-center"
            ><v-btn
              @click="endWork"
              color="red lighten-2"
              height="200px"
              block
              tile
            >
              <v-icon color="white" size="150px">mdi-stop</v-icon></v-btn
            >
          </v-card-actions>
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
      user: [],
      interval: null,
      time: null,
    };
  },
  beforeDestroy() {
    clearInterval(this.interval);
  },
  mounted() {
    this.interval = setInterval(() => {
      this.time = Intl.DateTimeFormat(navigator.language, {
        hour: "numeric",
        minute: "numeric",
        second: "numeric",
      }).format();
    }, 1000);
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
    currentDate() {
      const date = new Date().toLocaleDateString();
      return date;
    },
  },
  methods: {
    startWork() {
      let time = new Date().toLocaleTimeString("en-GB", {
        hour: "numeric",
        minute: "numeric",
        second: "numeric",
      });
      return alert(`Work started at: ${time}`);
    },
    endWork() {
      let time = new Date().toLocaleTimeString("en-GB", {
        hour: "numeric",
        minute: "numeric",
        second: "numeric",
      });
      return alert(`Work ended at: ${time}`);
    },
  },
};
</script>
<style scoped>
.time {
  padding: 20px;
  font-size: 20px;
  margin-top: 30px;
}
.title {
  padding: 20px;
}
</style>
