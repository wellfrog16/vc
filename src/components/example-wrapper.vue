<template>
    <ElDescriptions ref="el" :column="1" border class="example" :direction="direction" :class="$style.main">
        <slot :direction="direction" />
    </ElDescriptions>
</template>

<script lang="ts" setup>
import { computed, ref } from 'vue'
import { ElDescriptions } from 'element-plus'
import { useElementSize } from '@vueuse/core'

const el = ref(null)
const { width } = useElementSize(el)
const minWidth = 500
const direction = computed(() => width.value < minWidth ? 'vertical' : 'horizontal')
</script>

<style lang="scss" module>
.main {
    line-height: 1;

    :global {
        a.el-link {
            text-decoration: none;
        }

        .el-descriptions__table {
            table {
                border-collapse: separate;
            }

            tbody tr:nth-child(2n) {
                background-color: inherit;
            }
        }
    }
}
</style>
