<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" persistent max-width="500px">
      <v-form ref="form" @submit="verifyAdmin">
        <v-card>
          <v-card-title>
            <span class="text-h5">Login as administrator</span>
          </v-card-title>
          <v-container>
            <v-row>
              <v-col cols="12">
                <v-text-field
                  :rules="adminNameRules"
                  v-model="adminLogin"
                  label="Name*"
                  required
                  color="teal lighten-3"
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field
                  :rules="adminPasswordRules"
                  v-model="adminPassword"
                  label="Password*"
                  type="password"
                  required
                  color="teal lighten-3"
                ></v-text-field>
              </v-col>
            </v-row>
          </v-container>

          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="grey darken-3" text @click="$emit('close-dialog')">
              Cancel
            </v-btn>
            <v-btn
              type="submit"
              color="grey darken-3"
              text
              @click="$emit('save-dialog')"
            >
              Login
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-form>
    </v-dialog>
  </v-row>
</template>

<script>
import rulesMixin from "@/mixins/rules.js";
export default {
  mixins: [rulesMixin],
  props: {
    showDialog: {
      type: Boolean,
      default: false,
    },
    tabControll: {
      type: String,
      default: "none",
    },
  },

  data() {
    return {
      adminLogin: "",
      adminPassword: "",
      dialog: this.showDialog,
    };
  },
  methods: {
    verifyAdmin() {
      if (this.adminLogin == "admin" && this.adminPassword == "admin") {
        this.$router.replace({ name: "admin" });
        this.dialog = false;
        this.adminLogin = "";
        this.adminPassword = "";
      } else {
        alert("Wrong credentials");
        this.adminLogin = "";
        this.adminPassword = "";
      }
    },
  },
  watch: {
    showDialog: function() {
      this.dialog = this.showDialog;
    },
  },
};
</script>
