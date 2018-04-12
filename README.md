## slide-out

从右侧滑出操作层，用于编辑/查看 详情

## 使用

从npm安装ct-adc-slideout

```
npm install ct-adc-slideout --save

```
在代码中使用

```
import slideout from 'ct-adc-slideout'

<template>
	<slideout v-model="show"></slideout>
</template>

<script>
	export default {
		data: {
			show: false
		},
		components: {
			slideout
		}
	}
</script>

```

## props

参数 | 说明 | 类型 | 默认值 | 可选值 | 描述 |
--- | --- | --- | --- | ---- | ---
value | 是否显示 | boolean | false | | 是否显示弹出层，用v-model绑定|
index | 层级 | number | 1000 | | 遮罩层的z-index|
title | 标题 | string | 标题 | | |
width | 宽度 | string | 50% | | |
hide-on-blur |  | boolean | false | |点击遮罩层是否关闭弹出层|
is-transparent |	| boolean | false | | 背景是否透明 |

## 插槽

名称 | 描述 | 
--- | --- 
head | 头部的插槽 |
body | 内容的插槽 | 


## 事件

事件名称 | 说明 | 回调参数 | 描述
--- | --- | --- | --- 
on-show |  |  | 显示时的事件
on-after-show |  |  | 完全显示时的事件
on-hide |  |  | 隐藏时的事件
on-after-hide |  |  | 完全隐藏时的事件	

## 方法

方法名称 | 参数 | 必填 | 参数类型 | 描述
--- | --- | --- | --- | ---
scrollTo(axisY) | axisY | 否 | Number |控制内容滚动的位置，不填则回到顶部

## 更新日志

[更新日志](https://github.com/ct-adc/adc-slideout/blob/master/CHANGELOG.md)


