import { defineStore } from "pinia";

export const useUserStore = defineStore("user", {

  state: () => ({
    token: null,
  }),
  getters: {
    getToken: state => state.token
  },
  actions: {
    setToken(token) {
      this.token = token;
    },
    async login(credentials) {
      axios.post('http://textilelaravel.test/api/login', credentials).then(response => {
        this.setToken(response.data.token);
        localStorage.setItem('token', response.data.token)
        // return true;
        // this.$router.push({name: "dashboard"});
      }).catch(error => {
        throw new Error(response.data.message || 'Login failed');
      })
    },
  },
});