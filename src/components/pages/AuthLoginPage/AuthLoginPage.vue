<template>
    <div class="auth-login-page">
        <div class="auth-login-page_title">{{ t('app.authLoginPageTitle') }}</div>
        <div class="auth-login-page_message">{{ t('app.authMessageAboutAuth') }}</div>
    </div>
</template>

<script lang="ts" setup>
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>

<style lang="scss" src="./auth-login-page.scss" />
