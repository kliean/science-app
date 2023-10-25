import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import MainPage from '../views/MainPage.vue'
import { Component } from 'ionicons/dist/types/stencil-public-runtime';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/',
    component: MainPage,
    children: [
      {
        path: '/home',
        name: 'Home',
        component: () => import('../views/HomePage.vue')
      },
      {
        path: '/payoffs',
        name: 'payoffs',
        component: () => import('../views/PayoffsPage.vue'),
        children: [

        ]
      },
      {
        path: '/search',
        name: 'search',
        component: () => import('../views/SearchPage.vue')
      },
      {
        path: '/research',
        name: 'research',
        component: () => import('../views/ResearchPage.vue')
      },
      {
        path: '/my',
        name: 'my',
        component: () => import('../views/Mypage.vue')
      },
      {
        path: '/article/:dbid',
        name: 'article',
        component: () => import('../views/widget/ArticlePage.vue')
      },
      {
        path: '/patent',
        name: 'patent',
        component: () => import('@/views/patent/Index.vue')
      },
      {
        path: '/detail/:id',
        name: 'detail',
        component: () => import('@/views/patent/Detail.vue'),
        props: true
      },
      {
        path: 'testvue',
        component: () => import('@/views/Test.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
