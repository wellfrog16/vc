---
title: 更新日志
---

## 0.11.1

2025-??-??

### 新增和更新

* 更新 element-plus 到 2.9.11 版本
* 调整 dialog 组件右上角操作按钮大小，滚动条属性
* dialog 组件增加默认全屏属性
* 新增 backbottom 组件

### 缺陷修复

* 更新 dialog 组件样式，修复 padding，

## 0.11.0

2024-11-27

### 新增和更新

* 更新 element-plus 到 2.8.8 版本
* 更新组件库的类型产物，适配 vue 和 volar
* 完善 button 组件的 confirm 参数
* 统一 choice 中 checkbox 和 radio 的样式
* radio 和 checkbox 使用新的 api
* 更新 dialog 组件样式
* 更新 dialog-upload-images 组件样式
* input-number 兼容 element-plus 2.8.8 版本 slot

### 缺陷修复

* 修复组件样式优先级
* 修复 tinymce 组件的 cdn 引用
* 修复 thousand-input 组件样式和闪烁
* 修复 dialog-map-point 组件

## 0.10.2

2024-11-7

### 新增和更新

* 文档工具用 vitepress 替换 vuepress，并调整文档的目录结构。组件库产物不变

## 0.10.1

2024-03-16

### 新增和更新

* choice-boolean 组件增加复选支持

### 缺陷修复

* 修复 select 组件，options 值为 true/false 时，选择值错误的情况
* 修复 button 组件，当没有 comfirm 时依然渲染 Popconfirm

## 0.9.1

2024-02-19

### 新增和更新

* 新增 input 组件，提供内联和块级两种展示方式
* select 组件增加内联和块级两种展示方式
* 调整 tree-picker 组件使用 h-select 作为基础功能组件，并调整参数
* 调整 thousand-input 组件使用 h-input 作为基础功能组件，并调整参数

### 缺陷修复

* 修复 switch 组件的参数类型
* 修复 element-plus 2.5.x 版本之后对于 select 宽度的破坏性更新

## 0.8.0

2024-01-18

### 新增和更新

* 打包内容增加 directives 和 use 以及类型
* dialog 组件增加默认 footer
* drawer 组件增加默认 footer
* button 的 confirm 属性增加支持 popconfirm | messagebox 两种方式

### 缺陷修复

* 修复 tinymce 组件在 dialog 中的样式
* 修复 drawer 组件滚动条出现时的样式

## 0.7.1

2023-12-05

### 新增和更新

* dialog 组件增加 flex 属性
* tinymce 组件增加对话框示例，并更新样式

### 缺陷修复

* 修复 dialog 组件的 closed 事件
* 修复 drawer 组件的 closed 事件

## 0.7.0

2023-11-29

### 新增和更新

* dialog 组件增加 height 和 max-height 属性
* 调整 button 的 confirm 功能的默认按钮类型

### 缺陷修复

* 修复 tree-picker 组件异常提示
* 修复 dialog 组件全屏时高度错误

## 0.6.0

2023-11-21

### 新增和更新

* button 组件增加 confirm 提示参数
* tags 组件增加支持 $attr
* 增加 config-provider 组件，并同步 button 组件的参数
* 更新 cropper 组件的 dialog
* 将 confirm-switch 组件改名为 switch，增加 confirm 参数，用于开启关闭二次确认

## 0.5.3

2023-11-15

### 新增和更新

* 更新 input-number 组件宽度属性的作用元素
* button 组件增加默认点击节流

### 缺陷修复

* 修复 input-number 组件的负数异常
* 修复 input-number 组件样式
* 修复 tree-picker 组件样式
* 修复 drawer 组件重复渲染的bug

## 0.5.0

2023-11-8

### 新增和更新

* 更新 dialog 和 drawer 的 lazy 销毁默认延迟为 300
* 更新 drawer 的 body 滚动条为 el-scrollbar
* input-number 组件增加 prepend 插槽，尺寸，宽度，class功能

## 0.4.0

2023-11-8

### 新增和更新

* 增加 input-number 组件
* dialog 组件增加 lazy 模式

### 缺陷修复

* 修复 choice 组件和 select 组件的 option 类型
* 修复 tree-picker 组件空白 Popover 空白的情况

## 0.3.1

2023-8-31

### 缺陷修复

* HImage 组件始终挂在 body 上，以确保显示正确
* 修复 tree-picker 组件的 ClickOutside 失效的问题
* 修复 choice 组件和 select 组件的 props 类型，并更新文档

## 0.3.0

2022-10-30

### 新增和更新

* 增加 volar 用的 global.d.ts
* 增加 commitlint
* 增加 HDialog 组件
* HDialogMapPoint、HDialogCameraUpload、HDialogUploadImages 改用 HDialog 组件
* HDialogUploadImages 支持全屏

### 缺陷修复

* 修复全量构建工程
* 修复全量构建的组件名
* 优化单独构建
* 修复 button 组件的 $attrs

## 0.2.0

2022-10-18

### 新增

* 增加 dialog-camera-upload 组件

### 缺陷修复

* 修复 currency 组件小数点格式化
