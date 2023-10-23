<template>
  <ion-card>
    <ion-card-header>
      <ion-card-subtitle>请输入登录信息</ion-card-subtitle>
    </ion-card-header>

    <ion-card-content>
      <ion-item>
        <ion-input label="用户名或邮箱" label-placement="stacked"></ion-input>
      </ion-item>
      <ion-item>
        <ion-input label="密码" label-placement="stacked"></ion-input>
      </ion-item>

      <ion-button expand="block" size="default" @click="onLogin">登录</ion-button>

    </ion-card-content>
  </ion-card>
</template>

<script lang="ts">
const LOGIN_URL = '/api/login';

import { Md5 } from "ts-md5";
import { token } from '../../utils'

import { useStore } from '../../store'


import {
  IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle,
  IonItem, IonInput, IonButton
} from '@ionic/vue';

import { defineComponent } from 'vue';

const store = useStore()

export default defineComponent({
  components: {
    IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle,
    IonItem, IonInput, IonButton
  },
  data() {
    return {
      usrInfo: null,
      username: "",
      password: "",

      message: "",
      loading: false,
      udrItems: Array(),
      udr: {roleRoute: ""},
      step: ""
    };
  },
  methods: {
    doLogin() {
      console.log("doLogin()")
      const vm = this;

      store.commit("login",
          Object.assign({}, this.udr,
              {deptRoles: this.udrItems},
              {"password": Md5.hashStr(this.password), "passwordRaw": this.password}));

      const path = this.udr.roleRoute;
      this.$router.push({path: path});
    },
    onLogin() {
      const md5Passwd = Md5.hashStr(this.password);
      const username = this.username;
      const tok = token('GET', LOGIN_URL, 0, username, md5Passwd, '', '');


      const vm = this;
      this.axios.get(LOGIN_URL, { headers: { 'X-AUTH-TOKEN': tok } })
        .then(
          rsp => {
            if (!Array.isArray(rsp.data)) {
              vm.message = rsp.data.message;
              vm.loading = false;
              return;
            }

            vm.udrItems = rsp.data.map(
              udr => {
                delete udr.password;
                return udr;
              }
            );

            // 默认先选中第一个角色
            vm.udr = vm.udrItems[0];

            // 该用户只有一个部门和角色
            if (vm.udrItems.length === 1) {
              this.doLogin();
            } else {
              vm.step = "role";
            }

            vm.loading = false;
          }
        )
        .catch(() => {
          vm.loading = false;
        });
    }
  }
});
</script>