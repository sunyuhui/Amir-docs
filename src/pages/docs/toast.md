<docs-header :active="headerActive"></docs-header>

<div class="docs-container">
	<docs-sidebar :active="sidebarActive"></docs-sidebar>
	<div class="docs-content">
	

#### 使用示例

	<a-button @click="emitClick">弹出toast</a-button>
	<a-toast :show.sync="showToast">Amir--toast</a-toast>

	data() {
		return {
			showToast: false
		}
	},
	methods: {
		emitClick() {
			this.showToast = true;
		}
	}

<a-button @click="emitClick">弹出toast</a-button>
<div class="toast-container">
	<a-toast :show.sync="showToast">Amir--toast</a-toast>
</div>

#### 参数

show: 是否展示，必须

time: 间隔时间，非必须，单位秒，默认2




<script>
	export default {
		data() {
			return {
				sidebarActive: '/#/docs/toast',
				headerActive: 'docs',
				showToast: false
			}
		},
		methods: {
			emitClick() {
				this.showToast = true;
			}
		}
	}
</script>

<style lang="less">
	.toast-container {
		position: relative;
		width:100%;
		height: 80px;
	}
</style>

</div>
</div>