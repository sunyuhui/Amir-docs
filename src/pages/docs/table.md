<docs-header :active="headerActive"></docs-header>

<div class="docs-container">
	<docs-sidebar :active="sidebarActive"></docs-sidebar>
	<div class="docs-content">

#### 使用示例

	<a-table :tableData="tableData" :tableHead="tableHead"></a-table>

	data() {
		return {
			tableData: [
				{
					name: "田小啵",
					debt: 1000,
					nickName: "田师傅"
				},
				{
					name: "张姨超",
					nickName: "超",
					debt: 2000
				},
				{
					name: "玩安旭",
					nickName: "老司机",
					debt: 3000
				}
			],
			tableHead: [
				{
					name: "姓名",
					key: "name"
				},
				{
					name: "昵称",
					key: "nickName"
				},
				{
					name: "欠款",
					key: "debt"
				}
			]
		}
	}

#### Demo

<a-table :tableData="tableData" :tableHead="tableHead"></a-table>

#### Props

<a-table :tableData="propTableData" :tableHead="propTableHead"></a-table>

备注：

#### Events

无

<script>
	import Head from '../../common/table.js'
	export default {
		data() {
			return {
				sidebarActive: '/#/docs/table',
				headerActive: 'docs',
				tableData: [
					{
						name: "田小啵",
						debt: 1000,
						nickName: "田师傅"
					},
					{
						name: "张姨超",
						nickName: "超",
						debt: 2000
					},
					{
						name: "玩安旭",
						nickName: "老司机",
						debt: 3000
					}
				],
				tableHead: [
					{
						name: "姓名",
						key: "name"
					},
					{
						name: "昵称",
						key: "nickName"
					},
					{
						name: "欠款",
						key: "debt"
					}
				],
				propTableData: [
					{
						name: "tableData",
						description: "表格数据",
						type: "Array",
						necessary: "否",
						double: "否",
						default: "[]"
					},
					{
						name: "tableHead",
						description: "表头数据",
						type: "Array",
						necessary: "否",
						double: "否",
						default: "-"
					},
					{
						name: "border",
						description: "是否显示分割线",
						type: "Boolean",
						necessary: "否",
						double: "否",
						default: "false"
					}
				],
				propTableHead: Head.propHead
			}
		}
	}
</script>

</div>
</div>