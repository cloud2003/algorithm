import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import FoodView from '@/views/exercises/FoodView.vue';
import ChariotView from '@/views/exercises/ChariotView.vue';

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home,
        },
        {
            path: '/about',
            name: 'about',
            // route level code-splitting
            // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import(/* webpackChunkName: "about" */ './views/About.vue'),
        },
        {
            path: '/book',
            name: 'book',
            // route level code-splitting
            // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import('./views/BookExample.vue'),

            children: [
                {
                    // при совпадении пути с шаблоном /user/:id/profile
                    // в <router-view> компонента User будет показан UserProfile
                    path: '/food',
                    component: FoodView,
                },
                {
                    // при совпадении пути с шаблоном /user/:id/posts
                    // в <router-view> компонента User будет показан UserPosts
                    path: '/chariot',
                    component: ChariotView,
                },
            ],
        },
        {
            path: '/data-structures',
            name: 'dataStructures',
            component: () => import('./views/DataStructures.vue'),
        },
    ],
});
