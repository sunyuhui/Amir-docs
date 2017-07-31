<docs-header :active="headerActive"></docs-header>

<div class="docs-container">
	<docs-sidebar :active="sidebarActive"></docs-sidebar>
	<div class="docs-content">
	

#### 使用示例

	<a-button @click="emitClick">弹出toast</a-button>
	<a-toast :show.sync="showToast">Amir--toast</a-toast>

	data() {
		return {
			showToast: false
		}
	},
	methods: {
		emitClick() {
			this.showToast = true;
		}
	}

<a-button @click="emitClick">弹出toast</a-button>
<div class="toast-container">
	<a-toast :show.sync="showToast">Amir--toast</a-toast>
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
				sidebarActive: '/#/docs/toast',
				headerActive: 'docs',
				showToast: false,
				tableData: [
					{
						name: "show",
						description: "是否展示",
						type: "Boolean",
						necessary: "是",
						double: "是",
						default: "false"
					},
					{
						name: "time",
						description: "消失间隔时间(单位秒)",
						type: "Number",
						necessary: "否",
						double: "否",
						default: "2"
					}
				],
				tableHead: Head.propHead
			}
		},
		methods: {
			emitClick() {
				this.showToast = true;
			}
		}
	}
</script>

<style lang="less">
	.toast-container {
		position: relative;
		width:100%;
		height: 80px;
	}
</style>

</div>
</div>