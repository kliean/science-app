<template>
  <ion-page>
    <p>科研成果</p>
    
  </ion-page>
</template>

<script lang="ts">
import { IonPage, IonTabButton, IonLabel, IonIcon } from '@ionic/vue';

import {library } from 'ionicons/icons';

export default {
  components: { IonPage, IonTabButton, IonLabel, IonIcon },
  data() {
    return {
      icon: {
        library
      }
    };
  },
};
</script>

<style scoped>

</style>
