<template>
  <ion-page>
    <ion-list>
      <ion-item v-for="n in news" :href="`/article/${n.dbid}`">
        <ion-label>{{ n.title }}</ion-label>
      </ion-item>
    </ion-list>

  </ion-page>
</template>

<script lang="ts">
import { IonPage, IonTabButton, IonIcon, IonItem, IonLabel, IonList } from '@ionic/vue';

import { home } from 'ionicons/icons';

export default {
  components: { IonPage, IonTabButton, IonIcon, IonItem, IonLabel, IonList },
  data() {
    return {
      icon: { home },
      sections: { news: { articles: Array() } },
      loading: true
    };
  },
  computed:{
    news(){
      return this.sections.news.articles
    }
  },
  mounted() {
    this.axios.get('/api/site/index').then(
      rsp => {
        this.sections = rsp.data
      })
      .finally(() => {
        this.loading = false
      })
  }
};
</script>

<style scoped></style>
