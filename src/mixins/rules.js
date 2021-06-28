export default {
  data() {
    return {
      valid: true,
      nameRules: [(v) => !!v || "Name is required"],

      emailRules: [
        (v) => !!v || "Email is required",
        (v) => /.+@.+\..+/.test(v) || "Email must be valid",
      ],
      passwordRules: [
        (v) => !!v || "Password is required",
        (v) =>
          (v && v.length >= 6) || "Password must have more than 6 characters",
      ],
    };
  },
  methods: {
    validate() {
      this.$refs.form.validate();
    },
  },
};
