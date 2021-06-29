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
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field
                  :rules="adminPasswordRules"
                  v-model="adminPassword"
                  label="Password*"
                  type="password"
                  required
                ></v-text-field>
              </v-col>
            </v-row>
          </v-container>
          <v-card-text>
            <small>*indicates required field</small>
          </v-card-text>
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
      } else {
        alert("Wrong credentials");
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
