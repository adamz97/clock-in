<template>
  <v-card>
    <h3 class="employees">Employee work times</h3>
    <v-list two-line>
      <template v-for="user in users">
        <v-list-item class="list" :key="user.id">
          <v-list-item-content>
            <v-list-item-title class="font-weight-bold">{{
              user.name
            }}</v-list-item-title>
            <v-list-item-subtitle class="font-weight-bold">{{
              user.email
            }}</v-list-item-subtitle>
          </v-list-item-content>
          <v-list-item-action>
            <v-list-item-title class="font-weight-medium"
              >Work started: {{ user.startTime }}</v-list-item-title
            >
            <v-list-item-title class="font-weight-medium"
              >Work ended: {{ user.endTime }}</v-list-item-title
            >
          </v-list-item-action>
        </v-list-item>
      </template>
    </v-list>
  </v-card>
</template>

<script>
import "firebase/database";
export default {
  components: {},
  data() {
    return {
      users: [],
    };
  },
  computed: {},
  created() {
    fetch("https://vue-project-7821e-default-rtdb.firebaseio.com/users.json")
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
      })
      .then((data) => {
        const users = [];
        for (const id in data) {
          users.push({
            id: id,
            name: data[id].name,
            email: data[id].email,
            startTime: data[id].startTime,
            endTime: data[id].endTime,
          });
        }
        this.users = users;
      });
  },
};
</script>

<style scoped>
.employees {
  text-align: center;
  font-size: 25px;
  padding: 10px;
  background-color: #d6f0ee;
}
.centerForm {
  padding: 50px;
}
</style>
