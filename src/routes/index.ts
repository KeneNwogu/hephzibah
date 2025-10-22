import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/HomeView.vue';
import AboutView from '../views/AboutView.vue';
import ContactPage from '../views/ContactPage.vue';


const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/home',
        name: 'Home',
        component: Home
    },
    {
        path: '/about',
        name: 'About',
        component: AboutView
    },
    {
        path: '/contact',
        name: "Contact",
        component: ContactPage
    }
    // {
    //     path: '/about',
    //     name: 'About',
    //     // Lazy loading the route
    //     component: () => import('../views/About.vue')
    // },
    // Add a catch-all 404 route
    // {
    //     path: '/:pathMatch(.*)*',
    //     name: 'NotFound',
    //     component: () => import('../views/NotFound.vue')
    // }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;