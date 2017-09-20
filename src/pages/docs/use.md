<docs-header :active="headerActive"></docs-header>

<div class="docs-container">
	<docs-sidebar :active="sidebarActive"></docs-sidebar>
	<div class="docs-content">

## 使用

**Amir** 的使用非常简单

#### NPM

像使用其他Vue插件那样使用即可，有一点需要注意的是需要单独引入Amir样式文件。

##### 完整引入

	import Vue from 'vue'

	import Amir from 'amir-ui'
	import 'amir-ui/dist/amir.css'   //引入Amir样式文件

	Vue.use(Amir)

##### 按需引入
	
	import Vue from 'vue'
	import button from 'amir-ui/dist/button'
	import 'amir-ui/dist/amir.css'   //引入Amir样式文件

	Vue.component(button.name, button);

如果将每个组件的样式文件都单独打包，那在引入时会非常繁琐，并且打包之后的CSS相比JS，文件大小很小，因此 Amir 选择了CSS文件不拆分，即使在按需引入时，CSS文件也需要完整引入。

#### CDN 

使用CDN形式的引入方式时，只需要像[安装](/#/docs)所描述的那样引入 `Amir.js`、`Amir.css`即可。


<script>
	export default {
		data() {
			return {
				sidebarActive: '/#/docs/use',
				headerActive: 'docs'
			}
		}
	}
</script>
</div>
</div>