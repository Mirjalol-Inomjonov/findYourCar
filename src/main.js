import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "../src/assets/FontAwesome/css/all.css";
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
Vue.config.productionTip = false;
import Carousel3d from "vue-carousel-3d";

AOS.init();
Vue.use(Carousel3d);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
