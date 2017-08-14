import Vue from 'vue'
import Router from 'vue-router'

import Root from '../App.vue'

//首页
import Index from '../pages/index.md'

//组件
import DocIndex from '../pages/install.md'

//changeLog
import ChangeLog from '../pages/changelog.md'

//------------------文档具体内容 begin

//用法
import Use from '../pages/docs/use.md'

//Loading
import Loading from '../pages/docs/loading.md'
//toast
import Toast from '../pages/docs/toast.md'
//button
import Button from '../pages/docs/button.md'
//confirm
import Confirm from '../pages/docs/confirm.md'
//pagination
import Pagination from '../pages/docs/pagination.md'

import Table from '../pages/docs/table.md'

import Input from '../pages/docs/input.md'

import Select from '../pages/docs/select.md'

import Textarea from '../pages/docs/textarea.md'

import Dialog from '../pages/docs/dialog.md'

import Upload from '../pages/docs/upload.md'


//-------------------文档具体内容 end

Vue.use(Router);

//路由
let routes = [
	{
		path: '/',
		component: Index
	},
	{
		path: '/docs',
		component: Root,
		children: [
			{
				path: '/',
				component: DocIndex
			},
			{
				path: 'use',
				component: Use
			},
			{
				path: 'loading',
				component: Loading
			},
			{
				path: 'toast',
				component: Toast
			},
			{
				path: 'button',
				component: Button
			},
			{
				path: 'confirm',
				component: Confirm
			},
			{
				path: 'pagination',
				component: Pagination
			},
			{
				path: 'table',
				component: Table
			},
			{
				path: 'input',
				component: Input
			},
			{
				path: 'select',
				component: Select
			},
			{
				path: 'textarea',
				component: Textarea
			},
			{
				path: 'dialog',
				component: Dialog
			},
			{
				path: 'upload',
				component: Upload
			}
		]

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