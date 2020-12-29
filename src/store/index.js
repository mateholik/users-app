import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    users: [],
  },
  mutations: {
    setUsers(state, payload) {
      state.users = payload;
    },
    setUsersPhotos(state, payload) {
      state.users.forEach((item, i) => {
        Vue.set(state.users[i], "image", payload[i]);
      });
    },
  },
  actions: {
    fetchUsers({ commit }) {
      axios
        .get("https://jsonplaceholder.typicode.com/users")
        .then((res) => {
          commit("setUsers", res.data);
        })
        .catch((err) => console.error(err));
    },

    fetchUsersPhotos({ commit }) {
      axios
        .get(
          "https://api.pexels.com/v1/search?query=portrait&per_page=10&orientation=landscape",
          {
            headers: {
              Authorization:
                "563492ad6f917000010000016b30432d463347929177775e0195c4cb",
            },
          }
        )
        .then((res) => {
          commit("setUsersPhotos", res.data.photos);
        })
        .catch((err) => console.error(err));
    },
  },
  getters: {
    allUsers(state) {
      return state.users;
    },
  },
});
