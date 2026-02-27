# explorer

## 功能

管理后台常用布局功能组件的集合，包含以下组件：

- Explorer：根容器组件
- ExplorerPanel：面板容器组件
- ExplorerFilter：筛选区域组件
- ExplorerQuery：查询区域组件
- ExplorerTools：工具栏组件
- ExplorerList：列表区域组件
- ExplorerTree：树结构组件
- ExplorerTable：表格区域组件
- ExplorerForm：表单组件
- ExplorerFooter：底部组件（带分页）
- ExplorerColumnTable：表格列配置组件，供 ExplorerTools 使用，也可以单独在页面使用

## 功能示例

<Example />

## 最小示例

<<< ./simple.vue{3}

## explorer API

<Usage />

## explorer-panel API

<UsagePanel />

## explorer-filter API

<UsageFilter />

## explorer-query API

<UsageQuery />

## explorer-tools API

<UsageTools />

## explorer-list API

<UsageList />

## explorer-tree API

<UsageTree />

## explorer-table API

<UsageTable />

## explorer-form API

<UsageForm />

## explorer-footer API

<UsageFooter />

## explorer-column-table API

<UsageColumnTable />

<script setup>
import Example from "./example.vue";
import Usage from "./usage.vue";
import UsagePanel from "./usage-panel.vue";
import UsageFilter from "./usage-filter.vue";
import UsageQuery from "./usage-query.vue";
import UsageList from "./usage-list.vue";
import UsageTree from "./usage-tree.vue";
import UsageTable from "./usage-table.vue";
import UsageForm from "./usage-form.vue";
import UsageTools from "./usage-tools.vue";
import UsageFooter from "./usage-footer.vue";
import UsageColumnTable from "./usage-column-table.vue";
</script>
