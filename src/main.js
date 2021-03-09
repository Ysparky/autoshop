import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import VueNumericInput from 'vue-numeric-input';

Vue.config.productionTip = false
Vue.use(VueNumericInput);

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount('#app')
