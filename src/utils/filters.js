export const chineseMenu = (value) => {
	return {
		home: '主页',
		nav1: '导航一',
		nav2: '导航二',
		nav3: '导航三',
		page1: '页面一',
		page4: '页面四',
		page5: '页面五',
		page6: '页面六'
	}[value] || '暂无';
};