<template>
    <div>
        <vc-explorer-modal-form v-model="modalVisible" :form="form" type="dialog" width="1400px" height="600px">
            <vc-explorer explorer-key="playground-test">
                <vc-explorer-panel size="250px">
                    <div>1111</div>
                </vc-explorer-panel>
                <vc-explorer-panel>
                    <vc-scrollbar always view-margin="0px">
                        <vc-explorer-column-table ref="columnTableRef" v-model:data="data" mode="full" editable>
                            <el-table-column label="操作" width="80" align="center">
                                <template #default>
                                    <vc-button :icon="{ name: 'Delete' }" plain type="danger" :confirm="{ type: 'none' }" />
                                </template>
                            </el-table-column>
                        </vc-explorer-column-table>
                    </vc-scrollbar>
                </vc-explorer-panel>
            </vc-explorer>
        </vc-explorer-modal-form>
        <el-button @click="modalVisible = true">打开</el-button>
    </div>
</template>

<script setup lang="ts">
const modalVisible = ref(false)

const columnTableRef = useTemplateRef('columnTableRef')
const form = reactive({
    fields: {
        id: '',
        name: '',
    },
    rules: {
        name: [
            { required: true, message: '请输入名称', trigger: 'blur' },
        ],
    },
})
const data = ref([])

watch(modalVisible, val => {
    if (val) {
        setTimeout(() => {
            console.log(columnTableRef.value?.tableRef)
        }, 1000)
    }
})
</script>
