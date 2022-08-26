<template>
    <svg class="svg-icon" :class="[$style.icon]" aria-hidden="true">
        <use :xlink:href="`#icon-${props.name}`" />
    </svg>
</template>

<script lang="ts" setup>
const props = defineProps({
    name: { type: String, required: true },
})
</script>

<style lang="scss" module>
.icon {
    width: 1em;
    height: 1em;
    overflow: hidden;
    font-size: 1em;
    vertical-align: -0.15em;
    fill: currentcolor;
}
</style>
