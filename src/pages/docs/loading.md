<docs-header :active="headerActive"></docs-header>

<div class="docs-container">
	<docs-sidebar :active="sidebarActive"></docs-sidebar>
	<div class="docs-content">
	
#### 使用示例
	
	<a-loading v-show="showLoading"></a-loading>

	data() {
		return {
			showLoading: true
		}
	}

<div class="loading-container">
	<a-loading v-show="showLoading"></a-loading>
</div>


#### Props

<a-table :border="border" :tableData="tableData" :tableHead="tableHead"></a-table>

#### Events

无


<script>
	import Head from '../../common/table.js'
	export default {
		data() {
			return {
				sidebarActive: '/#/docs/loading',
				headerActive: 'docs',
				showLoading: true,
				border: true,
				tableData: [
					{
						name: "show",
						description: "是否展示Loading",
						type: "Boolean",
						necessary: "是",
						double: "是",
						default: "false"
					}
				],
				tableHead: Head.propHead
			}
		}
	}
</script>

<style lang="less">
	.loading-container {
		position: relative;
		width:100%;
		height: 60px;
	}
</style>

</div>
</div>