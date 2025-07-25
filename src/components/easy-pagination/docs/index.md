## 功能

只做上下页，无需数量`total`, `page`, `pagesize`。最后一页可能为空（可以用额外逻辑规避），适合大数据量分页，因为用户不会翻到最后一页，样式风格和`el-pagination`保持一致


## 功能示例

<Example />

## 最小示例

<<< ./simple.vue{3,12,13}

## API

<Usage />

<script setup>
import Example from "./example.vue";
import Usage from "./usage.vue";
</script>