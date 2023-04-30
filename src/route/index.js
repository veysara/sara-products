import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'Home',
        component: () => import('../views/home/SdHome.vue')
    },
    {
        path: '/quality',
        name: 'Quality',
        component: () => import('../views/pages/SdQuality.vue')
    },
    {
        path: '/about-desktops',
        name: 'Desktops',
        component: () => import('../views/pages/SdDesktops.vue')
    },
    {
        path: '/about-desktop-price',
        name: 'Desktops-Price',
        component: () => import('../views/pages/SdDesktopPrice.vue')
    },
    {
        path: '/about-laptop',
        name: 'Laptop',
        component: () => import('../views/pages/SdLaptop.vue')
    },
    {
        path: '/about-laptop-detail',
        name: 'Laptop-Detail',
        component: () => import('../views/pages/SdLaptopDetail.vue')
    },
    {
        path: '/about-iphones',
        name: 'Iphones',
        component: () => import('../views/pages/SdIphones.vue')
    },
    {
        path: '/about-iphone-detail',
        name: 'Iphone-Detail',
        component: () => import('../views/pages/SdIphoneDetail.vue')
    },
    {
        path: '/about-ipads',
        name: 'Ipads',
        component: () => import('../views/pages/SdIpads.vue')
    },
    {
        path: '/buy-ipads',
        name: 'Buy-Ipads',
        component: () => import('../views/pages/SdBuyIpad.vue')
    },
    {
        path: '/about-contact',
        name: 'Contact',
        component: () => import('../views/pages/SdContact.vue')
    },
];

const router = new VueRouter({
    mode: 'history',
    routes,
});

export default router
