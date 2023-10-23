// store.ts
import { InjectionKey } from 'vue'
import { createStore, useStore as baseUseStore, Store } from 'vuex'
import {Md5} from 'ts-md5';

// 为 store state 声明类型
export interface State {
    [key: string]: any
    // userId: string,
    // name: string,
    // username: string,
    // password: string,
    // deptId: string,
    // deptName: string,
    // roleId: string,
    // roleName: string,
    // funcIds: string,
    // deptRoles: string,
    // roleParams: string,
    // passwordRaw: string,
    // roleRoute: string,
    // breadcrumbs: string,
    // theme:string,

}

const fields = [
    "userId", "name", "username", "password",
    "deptId", "deptName", "roleId", "roleName",
    "funcIds", "deptRoles", "roleParams", "passwordRaw",
    "roleRoute", "breadcrumbs"
];

// 定义 injection key
export const key: InjectionKey<Store<State>> = Symbol()

// 
const LSKEY = "__vuex_state";
const state: { [key: string]: any } = JSON.parse(window.sessionStorage.getItem(LSKEY) || "{}");

export const store = createStore<State>({
    state: state,
    mutations: {
        changeTheme(state, payload) {
            state.theme = payload
        },
        
        login(state, payload) {
            //console.log("in VueX login");

            fields.forEach(p => state.set(p, payload[p]));

            // funcIds 和 roleParams将在 "/" 加载时获取
            //state.funcIds = [];
            state.set("funcIds", []);
            // state.roleRoute =
            // state.roleParams = [];
            state.set("roleParams", []);

            state.set( "breadcrumbs", [{ text: "起始页", href: state.roleRoute }])

            window.sessionStorage.setItem(LSKEY, JSON.stringify(state));
        },
        logout(state) {
            //console.log("in VueX logout");

            fields.forEach(p => state.set( p, null));

            // funcIds 和 roleParams将在 "/" 加载时获取
            //state.funcIds = [];
            state.set( "funcIds", []);
            // state.roleParams = [];
            state.set( "roleParams", []);

            window.sessionStorage.removeItem(LSKEY);
        },
        changeRole(state, payload) {
            // console.log("in VueX changeRole");

            //state.deptId = payload.deptId;
            state.set( "deptId", payload.deptId);

            // state.deptName = payload.deptName;
            state.set( "deptName", payload.deptName);

            // state.roleId = payload.roleId;
            state.set( "roleId", payload.roleId);

            // state.roleName = payload.roleName;
            state.set( "roleName", payload.roleName);

            // state.roleRoute = payload.roleRoute;
            state.set( "roleRoute", payload.roleRoute);


            // funcIds 和 roleParams将在 "/" 加载时获取
            //state.funcIds = [];
            state.set( "funcIds", []);
            // state.roleParams = [];
            state.set( "roleParams", []);

            state.set( "breadcrumbs", [{ text: "起始页", href: state.roleRoute }])

            window.sessionStorage.setItem(LSKEY, JSON.stringify(state));
        },
        funcsAndParams(state, payload) {
            // console.log("in VueX funcIds");

            //state.funcIds = payload.funcIds;
            state.set( "funcIds", payload.funcIds);

            //state.roleParams = payload.roleParams;
            state.set( "roleParams", payload.roleParams);

            window.sessionStorage.setItem(LSKEY, JSON.stringify(state));
        },
        updateUser(state, payload) {
            state.set( "username", payload.username);
            state.set( "name", payload.name);

            // state.deptName = payload.deptName;
            state.set( "password", Md5.hashStr(payload.password));
            state.set( "passwordRaw", payload.password);

            window.sessionStorage.setItem(LSKEY, JSON.stringify(state));
        },
        updatePassword(state, payload) {
            window.console.log(payload)
            // state.deptName = payload.deptName;
            state.set( "password", Md5.hashStr(payload));
            state.set( "passwordRaw", payload);

            window.sessionStorage.setItem(LSKEY, JSON.stringify(state));
        },
        updateBreadcrumbs(state, items) {
            state.set( "breadcrumbs", items);
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

// define your own `useStore` composition function
export function useStore () {
    return baseUseStore(key)
  }
