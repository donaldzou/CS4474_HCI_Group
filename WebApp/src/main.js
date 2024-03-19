import './assets/main.css'
import 'bootstrap/dist/js/bootstrap.bundle.js'
import { createApp } from 'vue'
import App from './App.vue'
import {createPinia} from "pinia";
import {createRouter, createWebHashHistory} from "vue-router";
import Welcome from "@/pages/welcome.vue";
import Circuit from "@/pages/circuit.vue";
import {supabase} from "@/supabase.js";
const pinia = createPinia()

const routes = [
    {
        path: '/', component: Welcome
    },
    {
        path: '/circuit', component: Circuit
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

router.beforeEach(async (to,
                         from,
                         next) => {
    const {data, error} = await supabase.auth.getSession();
    const { session, user } = data
    if (!session && to.path !== "/"){
        next("/")
    }else{
        next();
    }





})

const app = createApp(App)

app.use(pinia)
app.use(router)
app.mount('#app')
