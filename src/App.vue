<template>
  <v-app id="inspire">
    <v-app-bar app color="white" flat>
      <v-tabs centered class="ml-n9" color="grey darken-1">
        <v-tab to="/login"> Login </v-tab>
        <v-tab to="/register"> Register </v-tab>
      </v-tabs>
    </v-app-bar>
    <router-view> </router-view>
    <v-footer padless>
      <v-col class="text-center" cols="12">
        {{ new Date().getFullYear() }} <strong>👌</strong>
      </v-col>
    </v-footer>
  </v-app>
</template>

<style scoped></style>
