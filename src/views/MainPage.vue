<template>
  <ion-page>
    <ion-tabs>
      <ion-router-outlet></ion-router-outlet>
      <ion-tab-bar slot="bottom">
        <ion-tab-button tab="home" href="/home">
          <ion-icon :icon="icon.home" />
          <ion-label>首页</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="radio" href="/payoffs">
          <ion-icon :icon="icon.library" />
          <ion-label>科研成果</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="search" href="/search">
          <ion-icon :icon="icon.search" />
          <ion-label>搜索</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="research" href="/research">
          <ion-icon :icon="icon.grid" />
          <ion-label>科学研究</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="my" href="/my">
          <ion-icon :icon="icon.person" />
          <ion-label>我的</ion-label>
        </ion-tab-button>

      </ion-tab-bar>
    </ion-tabs>
  </ion-page>
</template>

<script lang="ts">
import { IonPage, IonTabs, IonRouterOutlet, IonTabBar, IonTabButton, IonLabel, IonIcon } from '@ionic/vue';
import { home, grid, library, search, person } from 'ionicons/icons';

export default {
  components: { IonPage, IonTabs, IonRouterOutlet, IonTabBar, IonTabButton, IonLabel, IonIcon },
  data() {
    return {
      icon: { home, grid, library, search, person }
    };
  },
};
</script>

<style scoped></style>
