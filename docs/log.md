---
title: 更新日志
---

2023-??-??

## 0.5.0

### 新增和更新

* 更新 dialog 和 drawer 的 lazy 销毁默认延迟为 300
* 更新 drawer 的 body 滚动条为 el-scrollbar
* input-number 组件增加 prepend 插槽，尺寸，宽度，class功能

2023-11-8

## 0.4.0

### 新增和更新

* 增加 input-number 组件
* dialog 组件增加 lazy 模式

### 缺陷修复

* 修复 choice 组件和 select 组件的 option 类型
* 修复 tree-picker 组件空白 Popover 空白的情况

2023-8-31

## 0.3.1

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
