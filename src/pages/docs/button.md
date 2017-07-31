<docs-header :active="headerActive"></docs-header>

<div class="docs-container">
	<docs-sidebar :active="sidebarActive"></docs-sidebar>
	<div class="docs-content">

#### 使用示例

	<a-button @click="emitClick"></a-button>
	<a-button class="hot"></a-button>
	<a-button>好的</a-button> 
	<a-button class="disabled">好的</a-button> 
	<a-button class="big"></a-button>
	<a-button class="bigger"></a-button> 

	methods: {
		emitClick() {
			console.log('clicked')
		}
	}

<p>normal：<a-button @click="emitClick"></a-button> </p>
<p>normal hot：<a-button class="hot"></a-button> </p>
<p>normal 自定义文案：<a-button>好的</a-button> </p>
<p>normal disabled：<a-button class="disabled">好的</a-button> </p>
<p>big: <a-button class="big"></a-button></p>
<p>bigger: <a-button class="bigger"></a-button></p> 

#### 参数

无



<script>
	export default {
		data() {
			return {
				sidebarActive: '/#/docs/button',
				headerActive: 'docs',
			}
		},
		methods: {
			emitClick() {
				console.log('clicked')
			}
		}
	}
</script>

</div>
</div>