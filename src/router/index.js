import Vue from 'vue'
import Router from 'vue-router'

//首页
import Index from '../pages/index.md'

//组件
import DocIndex from '../pages/install.md'

//changeLog
import ChangeLog from '../pages/changelog.md'

//文档具体内容

//用法
import Use from '../pages/docs/use.md'

Vue.use(Router);

//路由
let routes = [
	{
		path: '/',
		component: Index
	},
	{
		path: '/docs',
		component: DocIndex
	},
	{
		path: '/changelog',
		component: ChangeLog
	},
	{
		path: '/use',
		component: Use
	}
];

export default new Router({
	// mode: 'history',
	routes
});