<template>
  <v-sheet min-height="70vh" rounded="lg">
    <v-container>
      <p class="title">Hi, {{ user.displayName }}</p>

      <v-container>
        <v-row dense>
          <v-col md="12">
            <v-card tile
              ><v-card-title
                >Current time:
                <strong> {{ currentTime }}</strong>
              </v-card-title>
              <v-card-subtitle>
                Date: {{ currentDate }}
              </v-card-subtitle></v-card
            >
          </v-col>
          <v-col md="6">
            <v-card-title class="justify-center">
              Start Work
            </v-card-title>
            <v-card-actions class="justify-center">
              <v-btn
                @click="startWork"
                color="teal lighten-5"
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
                color="teal lighten-5"
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
    </v-container>
  </v-sheet>
</template>

<script>
import firebase from "firebase";
export default {
  data() {
    return {
      user: {
        startTime: "",
        endTime: "",
      },
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
    currentTime() {
      const time = new Date().toLocaleTimeString("en-GB", {
        hour: "numeric",
        minute: "numeric",
        second: "numeric",
      });
      return time;
    },
    currentDate() {
      const date = new Date().toLocaleDateString();
      return date;
    },
  },
  methods: {
    startWork() {
      alert("Work started");
    },
    endWork() {
      alert("Work ended");
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
