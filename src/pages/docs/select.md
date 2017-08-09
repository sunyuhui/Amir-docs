<docs-header :active="headerActive"></docs-header>

<div class="docs-container">
	<docs-sidebar :active="sidebarActive"></docs-sidebar>
	<div class="docs-content">

#### 使用示例

	<a-select :selectData="selectData" v-model="value" class="demo"></a-select>

	data() {
		return {
			selectData: [
				{
					value: "1",
					text: "option1"
				},
				{
					value: "2",
					text: "option2"
				}
			],
			value: '2'
		}
	}

#### Demo

<a-select :selectData="selectData" v-model="value" class="demo"></a-select>

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
				sidebarActive: '/#/docs/select',
				headerActive: 'docs',
				selectData: [
					{
						value: "1",
						text: "option1"
					},
					{
						value: "2",
						text: "option2"
					}
				],
				value: '2',
				propTableData: [
					{
						name: "selectData",
						description: "select中的所有选项",
						type: "Array",
						necessary: "否",
						double: "否",
						default: "-"
					},
					{
						name: "selected",
						description: "选中值",
						type: "String | Number",
						necessary: "否",
						double: "否",
						default: "-"
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
						name: "change",
						description: "改变选项之后触发的事件",
						param: "选中的选项的value值"
					}
				],
				eventTableHead: Head.eventHead
			}
		}
	}
</script>