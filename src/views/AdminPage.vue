<template>
  <v-sheet class="center" min-height="70vh" rounded="lg">
    <div class="centerForm">
      <v-card tile>
        <h3 class="employees">Employees</h3>
        <v-list two-line>
          <template v-for="(user, index) in users">
            <v-list-item class="list" :key="index">
              <v-list-item-content>
                <v-list-item-title class="font-weight-bold">{{
                  user.username
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
export default {
  components: {},
  data() {
    return {
      users: [],
    };
  },
};
</script>

<style scoped>
.employees {
  text-align: center;
  font-size: 25px;
  padding: 10px;
  background-color: #b2dfdb;
}
.centerForm {
  padding: 50px;
}
</style>
