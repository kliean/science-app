<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <!-- <ion-back-button @click="removeDetail()"></ion-back-button> -->
          <ion-back-button></ion-back-button>
        </ion-buttons>
        <ion-title>patent detail</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <ion-list>
        <ion-item> patent id: {{ patent.dbid }} </ion-item>
        <!-- <ion-img src="src\static\img\ipr1.jpg" alt="图片消失了"> </ion-img> -->
        <Carousel></Carousel>
      </ion-list>
    </ion-content>
  </ion-page>
</template>

<script>
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonBackButton,
  IonTitle,
  IonButton,
  IonButtons,
  IonContent,
  IonList,
  IonItem,
  IonImg,
} from "@ionic/vue";
import Carousel from "./Carousel.vue";
export default {
  data() {
    return {
      patent: {},
    };
  },
  methods: {
    removeDetail() {
      localStorage.removeItem("patent_detail");
    },
    load() {
      this.patent = JSON.parse(localStorage.getItem("patent_detail"));
      // console.log(this.patent);
    },
  },
  props: ["id"],

  components: {
    IonPage,
    IonHeader,
    IonToolbar,
    IonBackButton,
    IonTitle,
    IonButton,
    IonButtons,
    IonContent,
    IonList,
    IonItem,
    IonImg,
    Carousel,
  },
  mounted() {
    this.load();
  },
};
</script>

<style>
</style>