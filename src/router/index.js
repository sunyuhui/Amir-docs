import Vue from 'vue'
import Router from 'vue-router'

//首页
import Index from '../pages/index.md'

//文档首页
import DocIndex from '../pages/install.md'

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
	}
];

export default new Router({
	// mode: 'history',
	routes
});