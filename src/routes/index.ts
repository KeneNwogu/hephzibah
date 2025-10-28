import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/HomeView.vue';
import AboutView from '../views/AboutView.vue';
import ContactPage from '../views/ContactPage.vue';
import PortfolioView from '../views/PortfolioView.vue';


const routes = [
    {
        path: '/',
        redirect: '/home'
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
    },
    {
        path: '/work',
        name: "Work",
        component: PortfolioView   
    },
    {
        path: '/portfolio',
        name: "Portfolio",
        component: PortfolioView   
    },
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