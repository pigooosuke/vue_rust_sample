<template>
  <v-app>
    <v-main>
      <v-container fluid pt-0>
        <router-view />
      </v-container>
    </v-main>
    <Footer>
      <template #foo="{items}">{{ items[0].title }}</template>
      <template #bar="{title, methodName}"
        >{{ title }}-{{ methodName }}</template
      >
    </Footer>
  </v-app>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';
import FooterCompoent from '@/components/Footer.vue';

export default defineComponent({
  components: { Footer: FooterCompoent },
});
</script>
