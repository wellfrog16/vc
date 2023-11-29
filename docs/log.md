---
title: 更新日志
---

## 0.7.1

2023-??-??

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
