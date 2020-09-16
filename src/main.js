import Vue from 'vue'
import App from './App.vue'
import '@/assets/css/tailwind.css'
//import SNotification from "@/components/SNotification.vue";
//import { methods } from "@/components/notifications.js"
import Notifications from "vt-notifications"

// const MyPlugin = {
//   install(VueInstance) {
//     console.log('Installing');
//     VueInstance.component('sansil', SNotification);
//     VueInstance.prototype.$sansil = {
//       notify(data, timeout) {
//         methods.notify(data, timeout)
//       }
//     };
//   }
// };
//Vue.use(MyPlugin)
Vue.use(Notifications)
import Trend from "vuetrend"

Vue.use(Trend)

Vue.config.productionTip = false

//Vue.use(SNotification)
// export default {
//   install(Vue) {
//     if (installed) return
//     Vue.component('sansil', SNotification)
//     installed = true
//   }
// }

new Vue({
  render: h => h(App),
}).$mount('#app')
