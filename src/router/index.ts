import { createRouter, createWebHistory } from 'vue-router'
import guards from './guards'

const router = createRouter({
    history: createWebHistory(import.meta.env.TEST_UI_BASE_PATH || '/'),
    routes: [
        {
            path: '/auth/login',
            name: 'auth-login',
            component: () => import('@/components/pages/AuthLoginPage'),
            meta: {
                layout: 'AuthLayout'
            },
            beforeEnter: [guards.authenticatedUserTryOpenAuthPages]
        },
        {
            path: '/',
            name: 'home',
            component: () => import('@/components/pages/HomePage'),
            beforeEnter: [guards.isAuthenticated]
        },
        {
            path: '/404',
            name: 'not-found-error-page',
            component: () => import('@/components/pages/NotFoundErrorPage'),
            meta: {
                layout: 'ErrorLayout'
            }
        },
        {
            path: '/:pathMatch(.*)',
            redirect: () => ({ name: 'not-found-error-page' })
        }
    ]
})

export default router
