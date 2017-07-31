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

#### Demo

<div class="loading-container">
	<a-loading v-show="showLoading"></a-loading>
</div>


#### Props

<a-table :tableData="tableData" :tableHead="tableHead"></a-table>

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
				tableData: [
					{
						name: "show",
						description: "是否展示",
						type: "Boolean",
						necessary: "是",
						double: "否",
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