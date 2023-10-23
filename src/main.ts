import { createApp } from 'vue'
import App from './App.vue'
import router from './router';

import { IonicVue } from '@ionic/vue';

/* Core CSS required for Ionic components to work properly */
import '@ionic/vue/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/vue/css/normalize.css';
import '@ionic/vue/css/structure.css';
import '@ionic/vue/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/vue/css/padding.css';
import '@ionic/vue/css/float-elements.css';
import '@ionic/vue/css/text-alignment.css';
import '@ionic/vue/css/text-transformation.css';
import '@ionic/vue/css/flex-utils.css';
import '@ionic/vue/css/display.css';

/* Theme variables */
import './theme/variables.css';

import axios from 'axios'
import VueAxios from 'vue-axios'
import { token } from './utils'

// axios.defaults.baseURL = 'http://222.197.219.10:9001'

// 请求拦截器, 附加用户、角色信息
axios.interceptors.request.use(
    function (config: any) {
        console.log("axios:" + config.url)
        // 如果用户已经登录，则在请求中生成 X-AUTH-TOKEN 头信息
        if (store.getters.userId) {
            console.log(" in Vue.axios.interceptors.request");
            config.headers['Access-Control-Allow-Origin'] = "*"
            config.headers['X-AUTH-TOKEN'] =
                token(
                    config.method,
                    config.url.split('?')[0], // 只要请求路径
                    config.data ? JSON.stringify(config.data).length : 0,
                    store.getters.username,
                    store.getters.password,
                    store.getters.deptId,
                    store.getters.roleId
                );
        }
        return config;
    },
    function (error) {
        // Do something with request error
        return Promise.reject(error);
    }
);

import { store, key } from './store'

const app = createApp(App)
    .use(IonicVue)
    .use(router)
    .use(store, key)
    .use(VueAxios, axios);

router.isReady().then(() => {
    app.mount('#app');
});