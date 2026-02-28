---
title: 更新日志
---

## 1.5.0

2026-?-?

### 新增和更新

- 优化 explorer-list 组件样式
- explorer 组件增加嵌套功能
- 新增 explorer-form 子组件
- 新增 explorer-container 子组件
- icon 组件增加 iconify 支持，方便 button 组件使用
- dialog 组件给 maxHeight 默认值

### 缺陷修复

- 修复 scrollbar 组件的参数传递

## 1.4.0

2026-2-25

### 新增和更新

- 新增 dark-switcher 组件
- 新增 color-switcher 组件
- 新增 splitter、splitter-panel 组件
- 新增 explorer 组件及其系列子组件 filter、query、list、table、column-table、tree、tools、panel、footer
- dialog 组件增加 padding 参数，完善 flex 模式。使用 vc-scrollbar 替换 el-scrollbar
- 所有组件支持暗黑模式

### 缺陷修复

- 修复 dual-pane 参数类型
- 修复 tinymce 组件的 cdn 引用
- 修复 dialog 组件的高度、全屏功能
- 修复 dialog 全屏/普通切换时，重新渲染了 scrollbar
- 修复 dialog 的 box-padding 在 append-to-body 模式下失效
- 修复 scrollbar 组件 flex 布局的样式问题，并修复使用 scrollbar 的组件
- 修复 input 块级/内联显示样式

## 1.3.0

2026-1-26

### 新增和更新

- 新增 dual-pane 组件

### 缺陷修复

- 修复 drag-verfy 组件的事件传递
- 修复 scrollbar 组件的样式问题

## 1.2.0

2026-1-20

### 新增和更新

- config-provider 组件增加 local-cdn 属性，用以配置指定的 cdn 地址
- 新增 iconify-icon 组件，支持 iconify 的图标库
- awesome-icon、svg-icon、el-icon 组件完善统一文字图标混排样式
- 新增 icon-picker 组件
- 新增 scrollbar 组件

## 1.1.0

2026-1-9

### 新增和更新

- 新增 drag-verify 组件

## 1.0.0

2025-12-15

### 架构

- 重新设计组件库的构建与打包产物
- 所有依赖更新到最新
- 组件库规范名称，统一前缀为 vc
- 支持自动导入，提供 resolver 和 dts 文件

### 新增和更新

- 统一 dialog 和 draw 的内容区域和滚动条风格
- dialog-camera-upload 默认不请求权限，请求权限只请求摄像头权限
- 统一 el-icon、svg-icon、awesome-icon 的参数，增加 size 和 color 参数
- svg-icon 增加自定义 path 插槽
- tags 组件动画关闭
- 移除 select、choice 等组件的数据缓存功能
- config-provider 增加配置 iconfont 的 js 地址，提供给 svg-icon 使用
- input 组件默认宽度调整
- choice-boolean 结果可设置数值型还是逻辑型
- backbottom 组件增加在指定容器（包括 el-scroll）的功能
- flag 增加 size 参数
- screenfull 增加颜色和大小参数，icon 切换

### 缺陷修复

- 修复组件库的类型
- 修复 pck-picker 在搜索后，click outside 出现的数据闪烁
- 修复 vuedraggable-es 的 package.json 中 main 的指向错误。使用 vuedraggable-es-fix 替换

## 0.13.0

2025-11-4

### 新增和更新

- 更新 element-plus 到 2.11.5 版本
- 新增 pca-picker 组件
- 重构 tree-picker 组件，把主组件从 h-select 换成 el-cascader。提取 el-cascaderPanel 为组件
- 更新 config-provider，增加跨域请求代理地址和 pac 数据源的 base url

## 0.12.0

2025-9-5

### 新增和更新

- 更新 element-plus 到 2.9.11 版本
- 调整 dialog 组件右上角操作按钮大小，滚动条属性
- dialog 组件增加默认全屏属性
- 新增 backbottom 组件
- 新增 chat-container 组件
- 新增 sync-scroll-container 组件

### 缺陷修复

- 更新 dialog 组件样式，修复 padding，

## 0.11.0

2024-11-27

### 新增和更新

- 更新 element-plus 到 2.8.8 版本
- 更新组件库的类型产物，适配 vue 和 volar
- 完善 button 组件的 confirm 参数
- 统一 choice 中 checkbox 和 radio 的样式
- radio 和 checkbox 使用新的 api
- 更新 dialog 组件样式
- 更新 dialog-upload-images 组件样式
- input-number 兼容 element-plus 2.8.8 版本 slot

### 缺陷修复

- 修复组件样式优先级
- 修复 tinymce 组件的 cdn 引用
- 修复 thousand-input 组件样式和闪烁
- 修复 dialog-map-point 组件

## 0.10.2

2024-11-7

### 新增和更新

- 文档工具用 vitepress 替换 vuepress，并调整文档的目录结构。组件库产物不变

## 0.10.1

2024-03-16

### 新增和更新

- choice-boolean 组件增加复选支持

### 缺陷修复

- 修复 select 组件，options 值为 true/false 时，选择值错误的情况
- 修复 button 组件，当没有 comfirm 时依然渲染 Popconfirm

## 0.9.1

2024-02-19

### 新增和更新

- 新增 input 组件，提供内联和块级两种展示方式
- select 组件增加内联和块级两种展示方式
- 调整 tree-picker 组件使用 h-select 作为基础功能组件，并调整参数
- 调整 thousand-input 组件使用 h-input 作为基础功能组件，并调整参数

### 缺陷修复

- 修复 switch 组件的参数类型
- 修复 element-plus 2.5.x 版本之后对于 select 宽度的破坏性更新

## 0.8.0

2024-01-18

### 新增和更新

- 打包内容增加 directives 和 use 以及类型
- dialog 组件增加默认 footer
- drawer 组件增加默认 footer
- button 的 confirm 属性增加支持 popconfirm | messagebox 两种方式

### 缺陷修复

- 修复 tinymce 组件在 dialog 中的样式
- 修复 drawer 组件滚动条出现时的样式

## 0.7.1

2023-12-05

### 新增和更新

- dialog 组件增加 flex 属性
- tinymce 组件增加对话框示例，并更新样式

### 缺陷修复

- 修复 dialog 组件的 closed 事件
- 修复 drawer 组件的 closed 事件

## 0.7.0

2023-11-29

### 新增和更新

- dialog 组件增加 height 和 max-height 属性
- 调整 button 的 confirm 功能的默认按钮类型

### 缺陷修复

- 修复 tree-picker 组件异常提示
- 修复 dialog 组件全屏时高度错误

## 0.6.0

2023-11-21

### 新增和更新

- button 组件增加 confirm 提示参数
- tags 组件增加支持 $attr
- 增加 config-provider 组件，并同步 button 组件的参数
- 更新 cropper 组件的 dialog
- 将 confirm-switch 组件改名为 switch，增加 confirm 参数，用于开启关闭二次确认

## 0.5.3

2023-11-15

### 新增和更新

- 更新 input-number 组件宽度属性的作用元素
- button 组件增加默认点击节流

### 缺陷修复

- 修复 input-number 组件的负数异常
- 修复 input-number 组件样式
- 修复 tree-picker 组件样式
- 修复 drawer 组件重复渲染的bug

## 0.5.0

2023-11-8

### 新增和更新

- 更新 dialog 和 drawer 的 lazy 销毁默认延迟为 300
- 更新 drawer 的 body 滚动条为 el-scrollbar
- input-number 组件增加 prepend 插槽，尺寸，宽度，class功能

## 0.4.0

2023-11-8

### 新增和更新

- 增加 input-number 组件
- dialog 组件增加 lazy 模式

### 缺陷修复

- 修复 choice 组件和 select 组件的 option 类型
- 修复 tree-picker 组件空白 Popover 空白的情况

## 0.3.1

2023-8-31

### 缺陷修复

- VcImage 组件始终挂在 body 上，以确保显示正确
- 修复 tree-picker 组件的 ClickOutside 失效的问题
- 修复 choice 组件和 select 组件的 props 类型，并更新文档

## 0.3.0

2022-10-30

### 新增和更新

- 增加 volar 用的 global.d.ts
- 增加 commitlint
- 增加 VcDialog 组件
- VcDialogMapPoint、VcDialogCameraUpload、VcDialogUploadImages 改用 VcDialog 组件
- VcDialogUploadImages 支持全屏

### 缺陷修复

- 修复全量构建工程
- 修复全量构建的组件名
- 优化单独构建
- 修复 button 组件的 $attrs

## 0.2.0

2022-10-18

### 新增

- 增加 dialog-camera-upload 组件

### 缺陷修复

- 修复 currency 组件小数点格式化
