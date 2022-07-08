import { createApp } from 'vue'
import { createI18n } from 'vue-i18n'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
/*
 * All i18n resources specified in the plugin `include` option can be loaded
 * at once using the import syntax
 * https://github.com/intlify/vite-plugin-vue-i18n
 */

/* @ts-ignore*/
import messages from '@intlify/vite-plugin-vue-i18n/messages'

import AuthLayout from '@/components/layouts/AuthLayout'
import DefaultLayout from '@/components/layouts/DefaultLayout'
import ErrorLayout from '@/components/layouts/ErrorLayout'

import AxiosPlugin from '@/plugins/axios'

const app = createApp(App)

const i18n = createI18n({
    locale: 'en',
    fallbackLocale: 'en',
    messages
})

app.use(createPinia())
app.use(AxiosPlugin)
app.use(i18n)
app.use(router)

app.component('AuthLayout', AuthLayout)
app.component('DefaultLayout', DefaultLayout)
app.component('ErrorLayout', ErrorLayout)

app.mount('#app')
