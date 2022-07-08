<template>
    <div class="home-page">
        <div class="home-page_title">{{ t('app.homePageTitle') }}</div>
    </div>
</template>

<script lang="ts" setup>
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>

<style lang="scss" src="./home-page.scss" />
