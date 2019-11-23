import Vue from 'vue'
import Router from 'vue-router'
import player from './components/player/player.vue'

Vue.use(Router)
export default new Router({
    mode: 'hash',
    linkActiveClass: 'class', //不確定
    routes: [{
        path: '/',
        name: 'player',
        component: player,
    },]
})