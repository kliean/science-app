<template>
    <ion-page>
        <ion-card>
            <ion-card-title>{{ aritcle.title }}</ion-card-title>
            <ion-card-subtitle>发布人：{{ aritcle.author }}， 发布日期：{{ aritcle.pubDate }}, 浏览次数：{{ aritcle.visited }}</ion-card-subtitle>
            <ion-card-content v-html="aritcle.content"></ion-card-content>
        </ion-card>
    </ion-page>
</template>
  
<script lang="ts">
import { IonPage, IonTabButton, IonIcon, IonCard, IonCardTitle, IonCardSubtitle, IonCardContent } from '@ionic/vue';

import { home } from 'ionicons/icons';

export default {
    components: { IonPage, IonTabButton, IonIcon, IonCard, IonCardTitle, IonCardSubtitle, IonCardContent },
    data() {
        return {
            icon: { home },
            aritcle: Object(),
            loading: true
        };
    },

    mounted() {
        const dbid = this.$route.params.dbid
        this.axios.get(`/api/site/article/${dbid}`).then(
            rsp => {
                this.aritcle = rsp.data
            })
            .finally(() => {
                this.loading = false
            })
    }
};
</script>
  
<style scoped></style>
  