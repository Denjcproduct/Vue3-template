<template>
    <div class="not-found-error-page">
        <ErrorState :error-message="t('app.errors.testErrorMessage')" @click="testClick" />
    </div>
</template>

<script lang="ts" setup>
import ErrorState from '@/components/containers/ErrorState'

import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const testClick = () => {
    alert('Test Click')
}
</script>
<style lang="scss" src="./not-found-error-page.scss" />
