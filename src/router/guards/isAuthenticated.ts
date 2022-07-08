import type { NavigationGuardNext, RouteLocationNormalized } from 'vue-router'

const isAuthenticated = (to: RouteLocationNormalized, from: RouteLocationNormalized, next: NavigationGuardNext) => {
    const isAuthenticated = localStorage.getItem('is-authenticated')

    if (!isAuthenticated && to.name !== 'auth-login') {
        next({ name: 'auth-login' })
    } else {
        next()
    }
}

export default isAuthenticated
