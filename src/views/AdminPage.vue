<template>
  <v-sheet class="center" min-height="70vh" rounded="lg">
    <div class="centerForm">
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
                <p class="font-weight-medium">Work started: 08:00</p>
              </v-list-item-action>
              <v-list-item-action>
                <p class="font-weight-medium">Work ended: 16:00</p>
              </v-list-item-action>
            </v-list-item>
          </template>
        </v-list>
      </v-card>
    </div>
  </v-sheet>
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
          users.push({ id: id, name: data[id].name, email: data[id].email });
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
  background-color: #c3e7e4;
}
.centerForm {
  padding: 50px;
}
</style>
