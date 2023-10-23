import Vue from 'vue'
import Vuex from 'vuex'
import Md5 from "ts-md5";


const fields = [
    "userId", "name", "username", "password",
    "deptId", "deptName", "roleId", "roleName",
    "funcIds", "deptRoles", "roleParams", "passwordRaw",
    "roleRoute", "breadcrumbs"
];
const LSKEY = "__vuex_state";

// 从 sessionStorage 加载数据
const last = JSON.parse(window.sessionStorage.getItem(LSKEY) || "{}");

const store = new Vuex.Store({
    state: last,

    mutations: {
        changeTheme(state, payload) {
            state.theme = payload
        },
        changeNavPriority(state, payload) {
            state.navPriority = payload >= 0 ? 0 : -1
        },
        login(state, payload) {
            //console.log("in VueX login");

            fields.forEach(p => Vue.set(state, p, payload[p]));

            // funcIds 和 roleParams将在 "/" 加载时获取
            //state.funcIds = [];
            Vue.set(state, "funcIds", []);
            // state.roleRoute =
            // state.roleParams = [];
            Vue.set(state, "roleParams", []);

            Vue.set(state, "breadcrumbs", [{text: "起始页", href: state.roleRoute}])

            window.sessionStorage.setItem(LSKEY, JSON.stringify(state));
        },
        logout(state) {
            //console.log("in VueX logout");

            fields.forEach(p => Vue.set(state, p, null));

            // funcIds 和 roleParams将在 "/" 加载时获取
            //state.funcIds = [];
            Vue.set(state, "funcIds", []);
            // state.roleParams = [];
            Vue.set(state, "roleParams", []);

            window.sessionStorage.removeItem(LSKEY);
        },
        changeRole(state, payload) {
            // console.log("in VueX changeRole");

            //state.deptId = payload.deptId;
            Vue.set(state, "deptId", payload.deptId);

            // state.deptName = payload.deptName;
            Vue.set(state, "deptName", payload.deptName);

            // state.roleId = payload.roleId;
            Vue.set(state, "roleId", payload.roleId);

            // state.roleName = payload.roleName;
            Vue.set(state, "roleName", payload.roleName);

            // state.roleRoute = payload.roleRoute;
            Vue.set(state, "roleRoute", payload.roleRoute);


            // funcIds 和 roleParams将在 "/" 加载时获取
            //state.funcIds = [];
            Vue.set(state, "funcIds", []);
            // state.roleParams = [];
            Vue.set(state, "roleParams", []);

            Vue.set(state, "breadcrumbs", [{text: "起始页", href: state.roleRoute}])

            window.sessionStorage.setItem(LSKEY, JSON.stringify(state));
        },
        funcsAndParams(state, payload) {
            // console.log("in VueX funcIds");

            //state.funcIds = payload.funcIds;
            Vue.set(state, "funcIds", payload.funcIds);

            //state.roleParams = payload.roleParams;
            Vue.set(state, "roleParams", payload.roleParams);

            window.sessionStorage.setItem(LSKEY, JSON.stringify(state));
        },
        updateUser(state, payload) {
            Vue.set(state, "username", payload.username);
            Vue.set(state, "name", payload.name);

            // state.deptName = payload.deptName;
            Vue.set(state, "password", md5(payload.password));
            Vue.set(state, "passwordRaw", payload.password);

            window.sessionStorage.setItem(LSKEY, JSON.stringify(state));
        },
        updatePassword(state, payload) {
            window.console.log(payload)
            // state.deptName = payload.deptName;
            Vue.set(state, "password", md5(payload));
            Vue.set(state, "passwordRaw", payload);

            window.sessionStorage.setItem(LSKEY, JSON.stringify(state));
        },
        updateBreadcrumbs(state, items) {
            Vue.set(state, "breadcrumbs", items);
            window.sessionStorage.setItem(LSKEY, JSON.stringify(state));
        }
    },

    actions: {
        changeTheme(context, theme) {
            context.commit('changeTheme', theme)
        },
        changeNavPriority(context, priority) {
            context.commit('changeNavPriority', priority)
        },
        updateBreadcrumbs(context, items) {
            context.commit('updateBreadcrumbs', items)
        }
    },

    getters: {
        authenticated: state => state.userId != null,
        userId: state => state.userId,
        name: state => state.name,
        username: state => state.username,
        password: state => state.password,
        passwordRaw: state => state.passwordRaw,
        deptId: state => state.deptId,
        deptName: state => state.deptName,
        roleId: state => state.roleId,
        roleName: state => state.roleName,
        funcIds: state => state.funcIds,
        roleParams: state => state.roleParams,
        deptRoles: state => state.deptRoles,
        roleRoute: state => state.roleRoute,
        breadcrumbs: state => state.breadcrumbs
    },

    strict: process.env.NODE_ENV !== 'production'
})

function getStoreFromStorage() {
    return JSON.parse(window.sessionStorage.getItem(LSKEY) || "{}")
}

export {store, getStoreFromStorage}