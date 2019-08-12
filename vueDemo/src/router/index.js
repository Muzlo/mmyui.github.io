import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import news from '@/components/news'
import music from '@/components/music'
import musicSearch from '@/components/musicSearch'
import musicDetail from '@/components/musicDetail'
import musicDetails from '@/components/musicDetails'
import pic from '@/components/pic'
import joke from '@/components/joke'
import jokeDetail from '@/components/jokeDetail'
Vue.use(Router)

export default new Router({
  mode:"hash",
  routes: [
    {
      path: '/',
      name: 'index',
      component: index,
      meta: {index: 1},
      children:[
        {
          path: '/',
          name: 'news',
          component: news,
          meta: {index: 1}
        },
        {
          path: 'news',
          name: 'news',
          component: news,
          meta: {index: 1}
        },
        {
          path: 'music',
          name: 'music',
          component: music,
          meta: {index: 5}
        },
        {
          path: 'musicSearch',
          name: 'musicSearch',
          component: musicSearch,
          meta: {index: 6}
        },
        {
          path: 'musicDetail',
          name: 'musicDetail',
          component: musicDetail,
          meta: {index: 7}
        },
        {
          path: 'musicDetails',
          name: 'musicDetails',
          component: musicDetails,
          meta: {index: 8}
        },
        {
          path: 'pic',
          name: 'pic',
          component: pic,
          meta: {index: 3}
        },
        {
          path: 'joke',
          name: 'joke',
          component: joke,
          meta: {index: 2}
        },
        {
          path: 'jokeDetail',
          name: 'jokeDetail',
          component: jokeDetail,
          meta: {index: 20}
        }
      ]
    }
  ]
})
