
import {createRouter, createWebHistory} from "vue-router";

import Main from "../pages/Main.vue";
import Login from "../pages/Login.vue";
import Register from "../pages/Register.vue";


const routes = [
    {
        path: '/',
        component: Main
    },
    {
        path: '/Login',
        component: Login
    },
    {
        path: '/Register',
        component: Register
    },

]

const router = createRouter({
    routes,
    history: createWebHistory()
})

export default router;