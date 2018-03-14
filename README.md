## slide-out

从右侧滑出操作层，用于编辑/查看 详情

## 在线demo

[在线demo]({在线demo地址})

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
value |  | boolean | false | | 是否显示弹出层，用v-model绑定|
title | 标题 | string | 标题 | | |
width | 宽度 | string | 50% | | |
hide-on-blur |  | boolean | false | |点击遮罩层是否关闭弹出层|

## 事件

事件名称 | 说明 | 回调参数 | 描述
--- | --- | --- | --- 
on-show |  |  | on-show
on-hide |  |  | on-hide

## 更新日志

[更新日志]({CHANGELOG.md的线上地址})


