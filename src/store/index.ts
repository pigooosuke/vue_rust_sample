import Vue from 'vue';
import Vuex from 'vuex';
import { config } from 'vuex-module-decorators';

Vue.use(Vuex);
config.rawError = true;

export default new Vuex.Store({
  strict: true,
});
