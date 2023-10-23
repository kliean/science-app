<template>
  <ion-page>
    <ion-card v-if="usrInfo">
      <ion-card-header>
        <ion-card-title>线岩团</ion-card-title>
        <ion-card-subtitle>20060055, xianyt@kust.edu.cn</ion-card-subtitle>
      </ion-card-header>

      <ion-card-content>
        Here's a small text description for the card content. Nothing more, nothing less.
      </ion-card-content>
    </ion-card>
    <w-login v-else />

  </ion-page>
</template>

<script lang="ts">
import {
  IonPage, IonTabButton, IonLabel, IonIcon, IonCard,
  IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle
} from '@ionic/vue';

import WLogin from './widget/LoginWidget.vue'

import { person } from 'ionicons/icons';

export default {
  components: {
    IonPage, IonTabButton, IonLabel, IonIcon, IonCard,
    IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle,
    WLogin
  },
  data() {
    return {
      usrInfo: null,
      icon: {
        person
      }
    };
  },
};
</script>

<style scoped></style>
