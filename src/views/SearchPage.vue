<template>
  <ion-page>
    <p>搜索</p>
    
  </ion-page>
</template>

<script lang="ts">
import { IonPage, IonTabButton, IonLabel, IonIcon } from '@ionic/vue';

import {search } from 'ionicons/icons';

export default {
  components: { IonPage, IonTabButton, IonLabel, IonIcon },
  data() {
    return {
      icon: {
        search
      }
    };
  },
};
</script>

<style scoped>

</style>
