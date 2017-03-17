import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Front from '@/components/Front'
import Collection from '@/components/Collection'
import Find from '@/components/Find'
import Submit from '@/components/submit'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/front',
      name: 'Front',
      component: Front
    },
    {
      path: '/collection',
      name: 'Collection',
      component: Collection
    },
    {
      path: '/find',
      name: 'Find',
      component: Find
    },
    {
      path: '/submit',
      name: 'submit',
      component: Submit
    },
  ]
})
