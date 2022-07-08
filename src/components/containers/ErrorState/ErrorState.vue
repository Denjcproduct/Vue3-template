<template>
    <div class="error-state">
        <div class="error-state_message">{{ errorMessage }}</div>
        <button @click="testClick">Test Click</button>
    </div>
</template>

<script lang="ts" setup>
defineProps<{
    errorMessage: string
}>()

const emit = defineEmits(['click'])

const testClick = () => {
    emit('click')
}
</script>
<style lang="scss" src="./error-state.scss" />
