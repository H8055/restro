import HomePage from './components/HomePage.vue'
import SignUp from './components/SignUp.vue'
import LoginPage from './components/LoginPage.vue'
import {createRouter,createWebHistory} from "vue-router"

const routes=[
    {
        name:'HomePage',
        path:'/',
        component:HomePage,
    },
    {
        name:'SignUp',
        path:'/SignUp',
        component:SignUp,
    },
    {
        name:'loginPage',
        path:'/loginPage',
        component:LoginPage,
    },
];

const router = createRouter({
    history:createWebHistory(),
    routes,
});

export default router;