import Vue from 'vue';

import Layout from './Layouts.vue';
import router from './route';
import 'bootstrap';

import { AlertPlugin } from 'bootstrap-vue';
Vue.use(AlertPlugin)

export const EventBus = new Vue()


//= ========= ALl Plugin and Component  ============//
import {
  LayoutPlugin,
  ImagePlugin,
  ToastPlugin,
  ModalPlugin,
  BootstrapVueIcons,
  NavbarPlugin,
  LinkPlugin,
  CardPlugin,
  ButtonPlugin,
  ButtonGroupPlugin,
  TabsPlugin,
  TablePlugin,
  BreadcrumbPlugin,
  FormDatepickerPlugin
} 

from 'bootstrap-vue'
  //= ========= ALl Declare Usage Plugin and Component ============//
  Vue.use(LayoutPlugin)
  Vue.use(NavbarPlugin)
  Vue.use(ImagePlugin)
  Vue.use(LinkPlugin)
  Vue.use(ToastPlugin)
  Vue.use(ModalPlugin)
  Vue.use(CardPlugin)
  Vue.use(ButtonPlugin)
  Vue.use(ButtonGroupPlugin)
  Vue.use(TabsPlugin)
  Vue.use(BootstrapVueIcons)
  Vue.use(TablePlugin)
  Vue.use(BreadcrumbPlugin)
  Vue.use(FormDatepickerPlugin)

  //= ========= ALl Style Main and Customize ============//
import './assets/scss/app.scss'

//= ========= Vue Render to Html ============//
new Vue({
  router,
  render: h => h(Layout)

}).$mount('#app')





