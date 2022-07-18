import {createRouter, createWebHistory} from "vue-router";
import Home from '../views/Home.vue'
import Repos from '../views/Repos.vue'
import Result from "../views/Result.vue";

const routes = [
    {
        path: "/",
        name: "Home",
        component: Home,
    },
    {
        path: "/result",
        name: "Result",
        component: Result,
    },
    {
        path: "/repos",
        name: "Repos",
        component: Repos,
    },
]
const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router