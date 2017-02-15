export const chineseMenu = (value) => {
	return {
		home: '主页',
		forms: '表单',
		table: '表格',
		ui: 'UI组件',
		page1: '页面一',
		page4: '页面四',
		page5: '页面五',
		page6: '页面六'
	}[value] || '';
};