import Vue from 'vue'
import App from './App.vue'
import '@/assets/css/tailwind.css'
import SNotification from "@/components/SNotification.vue";
import { methods } from "@/components/sheared";
const MyPlugin = {
  // The install method is all that needs to exist on the plugin object.
  // It takes the global Vue object as well as user-defined options.
  install(VueInstance) {
    console.log('Installing');

    VueInstance.component('sansil', SNotification);
    VueInstance.prototype.$sansil = {
      increment(inc) {
        methods.notify(inc)
      }
    };
  }
};
Vue.use(MyPlugin)



Vue.config.productionTip = false

let installed = false
Vue.use(SNotification)
export default {
  install(Vue) {
    if (installed) return
    Vue.component('sansil', SNotification)
    installed = true
  }
}

new Vue({
  render: h => h(App),
}).$mount('#app')
