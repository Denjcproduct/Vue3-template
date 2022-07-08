import type { NavigationGuardNext, RouteLocationNormalized } from 'vue-router'

const authenticatedUserTryOpenAuthPages = (
    to: RouteLocationNormalized,
    from: RouteLocationNormalized,
    next: NavigationGuardNext
) => {
    const isAuthenticated = localStorage.getItem('is-authenticated')

    if (isAuthenticated) {
        next({ name: 'home' })
    } else {
        next()
    }
}

export default authenticatedUserTryOpenAuthPages
