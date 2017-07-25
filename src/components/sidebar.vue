<template>
	<div class="sidebar-container">
		<template v-for="item in sidebar">
			<span class="title">{{item.title}}</span>
			<template v-for="nav in item.subNav">
				<a :href="nav.url" :class="{nav: true, active: nav.url === active }">{{nav.name}}</a>
			</template>
		</template>
	</div>
</template>

<script>
	import SideBar from '../common/sidebar.js'
	export default {
		props: {
			active: {
				type: String
			}
		},
		data() {
			return {
				sidebar: SideBar
			}
		}
	}
</script>

<style lang="less">
	.sidebar-container {
		float:left;
		width:200px;
		min-height: 200px;
		background:#f5f7fa;
		border:1px solid #d8d8d8;
		span, a {
			display: block;
			padding-left: 30px;
		}
		.title {
			height:44px;
			line-height: 44px;
			background:rgba(255, 255, 255, 0.9);
			color:#333;
			margin:10px 0;
		}
		.nav {
			color: #666;
			height:30px;
			line-height: 30px;
			margin:1px 0;
			&.active {
				color:#30b6aa;
				border-left: 2px solid #30b6aa;
				padding-left: 28px;
			}
			&:hover {
				background:#eee;
				text-decoration: none;
			}
		}
	}
</style>