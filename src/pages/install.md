<docs-header :active="headerActive"></docs-header>

<div class="docs-container">
	<docs-sidebar :active="sidebarActive"></docs-sidebar>
	<div class="docs-content">

## 安装

### npm

	npm i amir-ui --save

在搭建 **Vue.js** 应用时，通常会配合 [Webpack](https://webpack.js.org/) 使用，因此推荐使用NPM的形式安装。

### CDN

你也可以通过Script标签引入的形式来使用

	<script type="text/javascript" src="https://unpkg.com/amir-ui/dist/amir.js"></script>

同时记得引入Amir样式文件

	<link rel="stylesheet" type="text/css" href="https://unpkg.com/amir-ui/dist/amir.css">

<router-view></router-view>

<script>
	export default {
		data() {
			return {
				sidebarActive: '/#/docs',
				headerActive: 'docs'
			}
		}
	}
</script>

</div>
</div>

