# jquery-roll

方便的一键返回顶部jQuery插件

## 用法

选定一个元素作为“返回顶部”的入口，例如
  
	var $gotoTop = $('#gotoTop');
	
然后使用`.roll()`方法即可，如

	$gotoTop.roll();
	
点击`#gotoTop`元素即可返回顶部。

## 进阶

`roll()`方法接受一个参数对象`options`，以实现更灵活的应用。

### 方向

- 参数：`direction`
- 取值：`'left'`/`'top'` 默认值为`'top'`

除了可以返回顶部，还可以使用`direction:'left'`返回“最左边”。如

	$gotoTop.roll({
		direction:'left'
	});
	
### 速度

- 参数：`animSpeed`
- 取值：数值，单位ms

传入一个数值以决定动画速度，暂不支持jQuery的`fast`、`slow`等参数。如

	$gotoTop.roll({
		animSpeed:400
	});
	
### Easing

- 参数：`effect`
- 取值：jQuery的easing函数名，默认为linear，可以使用jQuery.easing插件扩充后再使用。如

	$gotoTop.roll({
		effect:'easingInOut'
	});

> 如果看不懂什么是Easing，建议直接忽略本参数。

### 滚动到指定元素位置

除了可以滚动到最顶部（最左边），还可以滚动到一个指定元素`someElement`所在的位置。方法是在“返回顶部”按钮的`href`属性中写上`someElement`的选择器。

如页面中有一个元素id为`header`，点击返回顶部时希望回到`#header`元素所在位置，则在返回顶部按钮上写上`href="#header"`即可。
	
