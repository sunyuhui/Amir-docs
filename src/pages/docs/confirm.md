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

<a-button @click="emitClick">弹出确认框</a-button>
<a-confirm :show.sync="showConfirm" @confirm="confirm" @cancel="cancel">你确定吗？</a-confirm>

#### 参数

show: 是否展示，必须

<script>
	export default {
		data() {
			return {
				sidebarActive: '/#/docs/confirm',
				headerActive: 'docs',
				showConfirm: false
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