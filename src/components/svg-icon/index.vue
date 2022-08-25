<template>
    <i v-if="props.box" class="svg-icon-box" :class="[$style.box]">
        <svg class="svg-icon" :class="[$style.icon]" aria-hidden="true">
            <use :xlink:href="`#icon-${props.name}`" />
        </svg>
    </i>
    <svg v-else class="svg-icon" :class="[$style.icon]" aria-hidden="true">
        <use :xlink:href="`#icon-${props.name}`" />
    </svg>
</template>

<script lang="ts" setup>
const props = defineProps({
    name: { type: String, required: true },
    box: { type: Boolean, default: false },
})
</script>

<style lang="scss" module>
.box {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 24px;
    height: 24px;
    text-align: center;
    vertical-align: middle !important;
}

.icon {
    width: 1em;
    height: 1em;
    overflow: hidden;
    font-size: 1em;
    vertical-align: -0.15em;
    fill: currentcolor;
}
</style>
