<docs-header :active="headerActive"></docs-header>

<div class="docs-container">
	<docs-sidebar :active="sidebarActive"></docs-sidebar>
	<div class="docs-content">

#### 使用示例

	<a-textarea 
		v-model="value" 
		:placeholder="placeholder" 
		:max="max" >
	</a-textarea>

	data() {
		return {
			value: 'textarea',
			placeholder: "请输入内容",
			max: 10
		}
	}

#### Demo

<a-textarea 
	v-model="value" 
	:placeholder="placeholder" 
	:max="max" >
</a-textarea>

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
				sidebarActive: '/#/docs/textarea',
				headerActive: 'docs',
				value: 'textarea',
				placeholder: "请输入内容",
				max: 10,
				propTableData: [
					{
						name: "value",
						description: "textarea中的输入值",
						type: "String",
						necessary: "否",
						double: "否",
						default: "''"
					},
					{
						name: "placeholder",
						description: "textarea的placeholder",
						type: "String",
						necessary: "否",
						double: "否",
						default: "''"
					},
					{
						name: "readonly",
						description: "是否只读",
						type: "Boolean",
						necessary: "否",
						double: "否",
						default: "false"
					},
					{
						name: "cols",
						description: "宽度",
						type: "Number",
						necessary: "否",
						double: "否",
						default: "30"
					},
					{
						name: "rows",
						description: "高度",
						type: "Number",
						necessary: "否",
						double: "否",
						default: "6"
					},
					{
						name: "max",
						description: "内容字数限制",
						type: "Number",
						necessary: "否",
						double: "否",
						default: "6"
					}
				],
				propTableHead: Head.propHead,
				eventTableData: [
					{
						name: "input",
						description: "输入内容后触发的事情",
						param: "输入之后的value"
					}
				],
				eventTableHead: Head.eventHead
			}
		}
	}
</script>