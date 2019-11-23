import Vue from 'vue'
import App from './components/app.vue'
import './styles/reset.css'
import './styles/homePage.scss'
import './styles/player.scss'
import './styles/playPage.scss'
// import './image/span2.jpg'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueMeta from 'vue-meta'

Vue.use(VueMeta)
Vue.use(VueAxios, axios)

var root = document.createElement('div')
document.body.appendChild(root)

Vue.config.productionTip = false

new Vue({
    render: h => h(App),
    router: router
    // component:


}).$mount(root)