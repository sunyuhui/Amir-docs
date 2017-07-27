<template>
	<div class="header-container">
		<div class="header">
			<span class="title">Amir</span>
			<div class="item-container">
				<a :class="{item: true, active: active === 'index'}" href="/">首页</a>
				<a :class="{item: true, active: active === 'docs'}" href="/#/docs">组件</a>
				<a :class="{item: true, active: active === 'log'}" href="/#/changelog">changeLog</a>
				<i class="github-icon"></i>
			</div>

		</div>
	</div>

</template>

<script>
	export default {
		props: {
			active: {
				type: String
			}
		}
	}
</script>
<style lang="less">
	@mainColor: #3dc6b6;
	.header-container {
		width: 100%;
		height:67px;
		// background: #202436;
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

					&.active {
						color:#30b6aa;
					}

					&:hover {
						cursor:pointer;
						text-decoration:none;
						color:#30b6aa;
					}
				}

				.github-icon {
					display: inline-block;
					width:16px;
					height:16px;
					background: url(../img/a.png) no-repeat center;
					// background:#f00;
					background-size: cover;
					z-index: 1000;
				}
			}

		}
	}
</style>