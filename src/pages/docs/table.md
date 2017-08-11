<docs-header :active="headerActive"></docs-header>

<div class="docs-container">
	<docs-sidebar :active="sidebarActive"></docs-sidebar>
	<div class="docs-content">

#### 使用示例

	<a-table :table-data="tableData" :table-head="tableHead" :raw="rawList"></a-table>

	data() {
		return {
			tableData: [
				{
					name: "田小啵",
					debt: 1000,
					nickName: "田师傅",
					operation: "<a href='http://baidu.com'>乱棍打死</a>"
				},
				{
					name: "张姨超",
					nickName: "超",
					debt: 2000,
					operation: "<a href='http://baidu.com'>乱棍打死</a>"
				},
				{
					name: "玩安旭",
					nickName: "老司机",
					debt: 3000,
					operation: "<a href='http://baidu.com'>乱棍打死</a>"
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
					key: "debt",
					sortable: true
				},
				{
					name: "操作",
					key: 'operation'
				}
			],
			rawList: ['operation']
		}
	}

#### Demo

<a-table :table-data="tableData" :table-head="tableHead" :raw="rawList"></a-table>

#### Props

<a-table :table-data="propTableData" :table-head="propTableHead"></a-table>

备注：

1. raw主要用来在单元格中呈现一些**操作**选项，比如链接、按钮等，在这里允许使用方自行定制HTML，
2. 需要在表格中进行排序时，只需要在`tableHead`中将相关数据项添加一个 `sortable`的属性即可，从实际业务考虑，只支持数据的排序

#### Events

无

<script>
	import Head from '../../common/table.js'
	export default {
		data() {
			return {
				sidebarActive: '/#/docs/table',
				headerActive: 'docs',
				rawList: ['operation'],
				tableData: [
					{
						name: "田小啵",
						debt: 1000,
						nickName: "田师傅",
						operation: "<a href='http://baidu.com'>乱棍打死</a>"
					},
					{
						name: "张姨超",
						nickName: "超",
						debt: 2000,
						operation: "<a href='http://baidu.com'>乱棍打死</a>"
					},
					{
						name: "玩安旭",
						nickName: "老司机",
						debt: 3000,
						operation: "<a href='http://baidu.com'>乱棍打死</a>"
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
						key: "debt",
						sortable: true
					},
					{
						name: "操作",
						key: 'operation'
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
					},
					{
						name: "raw",
						description: "需要直接渲染成HTML的列",
						type: "Array",
						necessary: "否",
						double: "否",
						default: "-"
					}
				],
				propTableHead: Head.propHead
			}
		}
	}
</script>

</div>
</div>