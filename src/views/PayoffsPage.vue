<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>科研成果</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <ion-grid>
        <ion-row>
          <ion-col v-for="it in result" :key="it.id" size="3">
            <div class="grid-item" @click="navToResult(it.id)">
              <ion-icon name="book"></ion-icon>
              <span>{{ it.title }}</span>
            </div>
          </ion-col>
        </ion-row>
      </ion-grid>
    </ion-content>
    <ion-router-outlet></ion-router-outlet>
  </ion-page>
</template>

<script lang="ts">
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonGrid,
  IonRow,
  IonCol,
  IonTabButton,
  IonLabel,
  IonIcon,
  IonRouterOutlet,
} from "@ionic/vue";

import { library, book } from "ionicons/icons";

export default {
  components: {
    IonPage,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonGrid,
    IonRow,
    IonCol,
    IonTabButton,
    IonLabel,
    IonIcon,
    IonRouterOutlet,
  },
  data() {
    return {
      icon: {
        library,
        book,
      },
      result: [
        { id: 1, icon: "book", title: "专利" },
        { id: 2, icon: "book", title: "专利" },
        { id: 3, icon: "book", title: "专利" },
        { id: 4, icon: "book", title: "专利" },
        { id: 5, icon: "book", title: "专利" },
        { id: 6, icon: "book", title: "专利" },
        { id: 7, icon: "book", title: "专利" },
        { id: 8, icon: "book", title: "专利" },
      ],
    };
  },
  methods: {
    navToResult(rid) {
      console.log(rid);
      this.$router.push({ name: "patent" });
    },
  },
};
</script>

<style scoped>
.grid-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
}
</style>
