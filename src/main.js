import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import { gsap } from 'gsap/all';
import { CSSPlugin } from 'gsap';
// import { ModifiersPlugin } from 'gsap'

// import jQuery from "jquery";
//  const jQuery = require("jquery");

gsap.config({
  nullTargetWarn: false,
});
gsap.registerPlugin();
gsap.registerPlugin( CSSPlugin )

Vue.config.productionTip = false;

// const $ = jQuery;
// window.$ = $;
// document.$ = $;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
