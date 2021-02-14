import Vue from 'vue';
import vuetify from '@/plugins/vuetify';
import VuetifyToast from 'vuetify-toast-snackbar';

Vue.use(VuetifyToast, {
  $vuetify: vuetify.framework,
  x: 'center',
  y: 'top',
  color: 'warning',
  icon: 'warning',
  queueable: true,
});
