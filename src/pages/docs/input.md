<docs-header :active="headerActive"></docs-header>

<div class="docs-container">
	<docs-sidebar :active="sidebarActive"></docs-sidebar>
	<div class="docs-content">

#### 使用示例

	<a-input 
		:placeholder="placeholder" 
		:readonly="readonly"
		:type="type"
		v-model="value"
		@input="emitInput"
		:required="required" >
	</a-input>

	methods: {
		emitInput(value) {
			console.log(value)
		}
	}

#### Demo

<a-input 
	:placeholder="placeholder" 
	:readonly="readonly"
	v-model="value"
	@input="emitInput"
	:required="required" >
</a-input>

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
				sidebarActive: '/#/docs/input',
				headerActive: 'docs',
				propTableData: [
					{
						name: "title",
						description: "输入框title",
						type: "String",
						necessary: "否",
						double: "否",
						default: "''",
					},
					{
						name: "name",
						description: "输入框name",
						type: "String",
						necessary: "否",
						double: "否",
						default: "''",
					},
					{
						name: "placeholder",
						description: "输入框placeholder",
						type: "String",
						necessary: "否",
						double: "否",
						default: "请输入内容",
					},
					{
						name: "readonly",
						description: "是否只读",
						type: "Boolean",
						necessary: "否",
						double: "否",
						default: "false",
					},
					{
						name: "value",
						description: "输入框value",
						type: "String",
						necessary: "否",
						double: "是",
						default: "false",
					},
					{
						name: "required",
						description: "是否必填项",
						type: "Boolean",
						necessary: "否",
						double: "否",
						default: "false",
					}
				],
				placeholder: "请输入内容",
				readonly: false,
				value: 'text',
				required: true,
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
		},
		methods: {
			emitInput(value){
				console.log(value);
			}
		}
	}
</script>