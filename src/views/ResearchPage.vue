<template>
  <ion-page>
    <p>科学研究</p>
    
  </ion-page>
</template>

<script lang="ts">
import { IonPage, IonTabButton, IonLabel, IonIcon } from '@ionic/vue';

import {grid } from 'ionicons/icons';

export default {
  components: { IonPage, IonTabButton, IonLabel, IonIcon },
  data() {
    return {
      icon: {
        grid
      }
    };
  },
};
</script>

<style scoped>

</style>
