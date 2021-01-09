<template>
  <div>
    <p>ホーム画面</p>
    <p><router-link to="sign-in">サインイン</router-link></p>
    <p><button @click="calendar">カレンダー</button></p>
    <p><button @click="profile">プロフィール</button></p>
    <p><button @click="share">共有</button></p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';

export default defineComponent({
  setup(prop, context) {
    const calendar = () => {
      context.root.$router
        .push({
          name: 'calendar',
          params: { type: 'month' },
        })
        //eslint-disable-next-line @typescript-eslint/no-empty-function
        .then(() => {})
        //eslint-disable-next-line @typescript-eslint/no-empty-function
        .catch(() => {});
    };
    const profile = () => {
      context.root.$router
        .push('profile')
        //eslint-disable-next-line @typescript-eslint/no-empty-function
        .then(() => {})
        //eslint-disable-next-line @typescript-eslint/no-empty-function
        .catch(() => {});
    };
    const share = () => {
      context.root.$router
        .push('share')
        //eslint-disable-next-line @typescript-eslint/no-empty-function
        .then(() => {})
        //eslint-disable-next-line @typescript-eslint/no-empty-function
        .catch(() => {});
    };
    return {
      calendar,
      profile,
      share,
    };
  },
});
</script>
