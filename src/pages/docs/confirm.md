<docs-header :active="headerActive"></docs-header>

<div class="docs-container">
	<docs-sidebar :active="sidebarActive"></docs-sidebar>
	<div class="docs-content">

#### 使用示例

	<a-button @click="emitClick">弹出确认框</a-button>
	<a-confirm :show.sync="showConfirm" @confirm="confirm" @cancel="cancel">你确定吗？</a-confirm>

	methods: {
		emitClick() {
			this.showConfirm = true;
		},
		confirm() {
			console.log('confirm is clicked');
		},
		cancel() {
			console.log('cancel is clicked');
		}
	}

#### Demo

<a-button @click="emitClick">弹出确认框</a-button>
<a-confirm :show.sync="showConfirm" @confirm="confirm" @cancel="cancel">你确定吗？</a-confirm>

#### Props

<a-table :tableData="propTableData" :tableHead="propTableHead"></a-table>

#### Events

<a-table :tableData="eventTableData" :tableHead="eventTableHead"></a-table>

<script>
	import Head from '../../common/table.js'
	export default {
		data() {
			return {
				sidebarActive: '/#/docs/confirm',
				headerActive: 'docs',
				showConfirm: false,
				propTableData: [
					{
						name: "show",
						description: "是否展示",
						type: "Boolean",
						necessary: "是",
						double: "是",
						default: "否"
					},
					{
						name: "confirmText",
						description: "confirm文案",
						type: "String",
						necessary: "否",
						double: "否",
						default: "确定"
					},
					{
						name: "cancelText",
						description: "cancel文案",
						type: "String",
						necessary: "否",
						double: "否",
						default: "取消"
					}
				],
				propTableHead: Head.propHead,
				eventTableData: [
					{
						name: "confirm",
						description: "点击【确定】之后触发的事件",
						param: "无"
					},
					{
						name: "cancel",
						description: "点击【取消】之后触发的事件",
						param: "无"
					}
				],
				eventTableHead: Head.eventHead
			}
		},
		methods: {
			emitClick() {
				this.showConfirm = true;
			},
			confirm() {
				console.log('confirm is clicked');
			},
			cancel() {
				console.log('cancel is clicked');
			}
		}
	}
</script>


</div>
</div>