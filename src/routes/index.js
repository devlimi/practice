import Vue from 'vue';
import VueRouter from 'vue-router';
import NewsView from '@/views/NewsView';
import JobsView from '@/views/JobsView';
import AskView from '@/views/AskView';
Vue.use(VueRouter);

export const router = new VueRouter({
  mode:'history',
  routes:[
    {
      path:'',
      redirect:'/news',
    },
    {
      path:'/news',
      component: NewsView,
    },
    {
      path:'/jobs',
      component:JobsView,
    },
    {
      path:'/ask',
      component:AskView,
    }
  ]
})