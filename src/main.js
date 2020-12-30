import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import * as VueGoogleMaps from "vue2-google-maps";
import Vuelidate from "vuelidate";

Vue.config.productionTip = false;

Vue.use(Vuelidate);

Vue.use(VueGoogleMaps, {
  load: {
    key: "AIzaSyB_oB83_6We69UXaYYQ2xvOBiOFjlcYdAM",
  },
});

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
