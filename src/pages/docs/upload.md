<docs-header :active="headerActive"></docs-header>

<div class="docs-container">
	<docs-sidebar :active="sidebarActive"></docs-sidebar>
	<div class="docs-content">

#### 使用示例

	<a-upload @selectFile="selectFile">上传文件</a-upload>

	methods: {
		selectFile(files) {
			console.log(files);
		}
	}

#### Demo

<a-upload @selectFile="selectFile">上传文件</a-upload>

#### Props

<a-table :tableData="propTableData" :tableHead="propTableHead"></a-table>

#### Events

<a-table :tableData="eventTableData" :tableHead="eventTableHead"></a-table>

</div>
</div>

<script>
	import Head from '../../common/table.js'
	export default {
		data() {
			return {
				sidebarActive: '/#/docs/upload',
				headerActive: 'docs',
				propTableData: [
					{
						name: "multiple",
						description: "是否可多选",
						type: "Boolean",
						necessary: "否",
						double: "否",
						default: "false"
					},
					{
						name: "readonly",
						description: "是否只读",
						type: "Boolean",
						necessary: "否",
						double: "否",
						default: "false"
					}
				],
				propTableHead: Head.propHead,
				eventTableData: [
					{
						name: "selectFile",
						description: "选择文件之后触发的事件",
						param: "Array: 选择的文件"
					}
				],
				eventTableHead: Head.eventHead
			}
		},
		methods: {
			selectFile(files) {
				console.log(files);
			}
		}
	}
</script>