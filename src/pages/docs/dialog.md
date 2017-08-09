<docs-header :active="headerActive"></docs-header>

<div class="docs-container">
	<docs-sidebar :active="sidebarActive"></docs-sidebar>
	<div class="docs-content">

#### 使用示例

	<a-button @click="emitClick">显示Dialog</a-button>
	<a-dialog :title="title" :show.sync="showDialog">
		<p>姓名：<a-input :placeholder="placeholder"></a-input>姓名：<a-input :placeholder="placeholder"></a-input></p>
		<p>姓名：<a-input :placeholder="placeholder"></a-input></p>
		<p>姓名：<a-input :placeholder="placeholder"></a-input></p>
		<p>姓名：<a-input :placeholder="placeholder"></a-input></p>
		<p>姓名：<a-input :placeholder="placeholder"></a-input></p>
		<p>姓名：<a-input :placeholder="placeholder"></a-input></p>
		<p>姓名：<a-input :placeholder="placeholder"></a-input></p>
		<p slot="footer">
			<a-button @click="showDialog = false">取消</a-button>
			<a-button @click="showDialog = false">确定</a-button>
		</p>
	</a-dialog>

#### Demo

<a-button @click="emitClick">显示Dialog</a-button>
<a-dialog :title="title" :show.sync="showDialog">
	<p>姓名：<a-input :placeholder="placeholder"></a-input>姓名：<a-input :placeholder="placeholder"></a-input></p>
	<p>姓名：<a-input :placeholder="placeholder"></a-input></p>
	<p>姓名：<a-input :placeholder="placeholder"></a-input></p>
	<p>姓名：<a-input :placeholder="placeholder"></a-input></p>
	<p>姓名：<a-input :placeholder="placeholder"></a-input></p>
	<p>姓名：<a-input :placeholder="placeholder"></a-input></p>
	<p>姓名：<a-input :placeholder="placeholder"></a-input></p>
	<p slot="footer">
		<a-button @click="showDialog = false">取消</a-button>
		<a-button @click="showDialog = false">确定</a-button>
	</p>
</a-dialog>

#### Props

<a-table :tableData="propTableData" :tableHead="propTableHead"></a-table>

#### Events

无

备注：Dialog中的底部按钮使用具名`footer`的slot，其他内容由使用方自行填充。

</div>
</div>

<script>
	import Head from '../../common/table.js'
	export default {
		data() {
			return {
				sidebarActive: '/#/docs/dialog',
				headerActive: 'docs',
				title: '标题',
				placeholder: '请输入姓名',
				showDialog: false,
				propTableData: [
					{
						name: "title",
						description: "弹出框的title",
						type: "String",
						necessary: "否",
						double: "否",
						default: "''"
					},
					{
						name: "show",
						description: "是否展示Dialog",
						type: "Boolean",
						necessary: "否",
						double: "否",
						default: "false"
					}

				],
				propTableHead: Head.propHead,
				eventTableData: [
					{
						name: "click",
						description: "按钮点击之后触发的事件",
						param: "无"
					}
				],
				eventTableHead: Head.eventHead
			}
		},
		methods: {
			emitClick() {
				this.showDialog = true;
			}
		}
	}
</script>