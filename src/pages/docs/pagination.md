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

<a-pagination :current-page.sync="currentPage" :total-page="totalPage" @switchPage="switchPage" :goto="goto"></a-pagination>

#### 参数

currentPage: 当前页码，非必须，默认为1

totalPage:总页码，必须

switchPage: 切换页码后的回调函数

goto: 是否展示跳转到**页, 默认否




<script>
	export default {
		data() {
			return {
				sidebarActive: '/#/docs/pagination',
				headerActive: 'docs',
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
	}
</script>

</div>
</div>