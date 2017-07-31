<docs-header :active="headerActive"></docs-header>

<div class="docs-container">
	<docs-sidebar :active="sidebarActive"></docs-sidebar>
	<div class="docs-content">

#### 使用示例

	<a-pagination :current-page="currentPage" :total-page="totalPage" @switchPage="switchPage" :goto="goto"></a-pagination>

	data() {
		return {
			currentPage: 4,
			totalPage: 24,
			goto: true
		}
	},
	methods: {
		switchPage(currentPage) {
			console.log('测试',currentPage);
		}
	}

#### Demo

<a-pagination :current-page.sync="currentPage" :total-page="totalPage" @switchPage="switchPage" :goto="goto"></a-pagination>

#### Props

<a-table :tableData="propTableData" :tableHead="propTableHead"></a-table>


#### Events

<a-table :tableData="eventTableData" :tableHead="eventTableHead"></a-table>



<script>
	import Head from '../../common/table.js'
	export default {
		data() {
			return {
				sidebarActive: '/#/docs/pagination',
				headerActive: 'docs',
				currentPage: 4,
				totalPage: 24,
				goto: true,
				propTableData: [
					{
						name: "currentPage",
						description: "当前页码",
						type: "Number",
						necessary: "否",
						double: "否",
						default: "1"
					},
					{
						name: "totalPage",
						description: "总页码数",
						type: "Number",
						necessary: "是",
						double: "否",
						default: "-"
					},
					{
						name: "goto",
						description: "是否展示跳转到**页",
						type: "Boolean",
						necessary: "否",
						double: "否",
						default: "false"
					}
				],
				propTableHead: Head.propHead,
				eventTableData: [
					{
						name: "switchPage",
						description: "点击页码之后触发的事件",
						param: "点击之后的当前页码"
					}
				],
				eventTableHead: Head.eventHead

			}
		},
		methods: {
			switchPage(currentPage) {
				console.log('测试',currentPage);
			}
		}
	}
</script>

</div>
</div>