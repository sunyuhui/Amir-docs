<template>
	<div class="header-container">
		<div class="header">
			<span class="title">Amir</span>
			<div class="item-container">
				<a class="item" href="/">首页</a>
				<a class="item" href="/#/docs">组件</a>
				<a class="item" href="/#/changelog">changeLog</a>
			</div>
		</div>
	</div>

</template>

<script>
	export default {

	}
</script>
<style lang="less">
	@mainColor: #3dc6b6;
	.header-container {
		width: 100%;
		height:67px;
		background: #202436;
		.header {
			max-width: 980px;
			min-width: 200px;
			height:67px;
			line-height: 67px;
			margin:0 auto;
			color:#fff;
			.title {
				font-size: 25px;
			}
			.item-container {
				display: inline-block;
				float: right;

				.item {
					margin-left: 10px;
					color:#fff;

					&:hover {
						cursor:pointer;
						text-decoration:none;
					}
				}
			}
		}
	}
</style>