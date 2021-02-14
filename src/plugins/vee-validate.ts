import Vue from 'vue';
import {
  configure,
  extend,
  localize,
  ValidationObserver,
  ValidationProvider,
} from 'vee-validate';
import ja from 'vee-validate/dist/locale/ja';
import { required, max, ext, size } from 'vee-validate/dist/rules';
import { customRules } from '@/validation/custom-rules';

const config = {
  bails: false,
  mode: 'eager',
};

configure(config);

localize('ja', ja);

Vue.component('ValidationObserver', ValidationObserver);
Vue.component('ValidationProvider', ValidationProvider);

extend('required', required);
extend('max', max);
extend('ext', ext);
extend('size', size);

// カスタムルールの登録
for (const key in customRules) {
  extend(key, customRules[key]);
}
