<template>
  <v-app-bar app color="yellow lighten-3">
    <v-tabs
      v-if="!$route.meta.hideTabs"
      centered
      class="ml-n9"
      color="grey darken-3"
    >
      <v-tab to="/login"> Login </v-tab>
      <v-tab to="/register"> Register </v-tab>
    </v-tabs>
    <v-col v-else class="text-right">
      <v-btn color="yellow lighten-4" to="/login">Log Out</v-btn>
    </v-col>
  </v-app-bar>
</template>
