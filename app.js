const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: "",
      lastName: "",
      //fullname: "",
    };
  },
  watch: {
    counter(value) {
      if (value > 50) {
        this.counter = 0;
      }
    },
  },
  //     name(value) {
  //       if (value === "") {
  //       this.fullname = "";
  //     } else {
  //       this.fullName(value) = value + " " + this.lastName;
  //     }
  //   },
  //     lastName(value) {
  //       if (value === "") {
  //       this.fullname = "";
  //     } else {
  //       this.fullName(value) = this.name + " " + value;
  //   }
  // }
  //   },
  computed: {
    fullname() {
      if (this.name === "" || this.lastName === "") {
        return "";
      }
      return this.name + " " + this.lastName;
    },
  },

  methods: {
    setName(event, lastName) {
      this.name = event.target.value + " " + lastName;
    },
    add(num) {
      this.counter = this.counter + num;
    },
    reduce(num) {
      this.counter = this.counter - num;
      // this.counter--;
    },
  },
});

app.mount("#events");
