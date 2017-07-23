<template>
  <div class="container">
    <p class="title">Amir -- Vue组件库</p>

    <div class="all-demos">
      <amir-button></amir-button>
    </div>

    <a target="_blank" href="https://wiki.sankuai.com/pages/viewpage.action?pageId=674565072">移动端设计规范</a>
    <a target="_blank" href="https://wiki.sankuai.com/pages/viewpage.action?pageId=504677791">PC端设计规范</a>
  </div>
</template>

<script>
	export default {
		name: 'app',
    data: function () {
      return {
      }
    }
	}
</script>

<style lang="less" scoped>
@mainColor: #3dc6b6;
.container {
  margin:60px auto;
  width:500px;
  height: 300px;
  text-align: center;

  .title {
    font-size: 30px;
  }

  a {
    font-size: 14px;
    text-decoration: none;
  }

  .all-demos {
    width:300px;
    margin-bottom: 20px;
    .title {
      font-size: 20px;
      color:@mainColor;
    }
    a {
      display: block;
      color:#000;
      border-radius: 4px;
      margin-bottom: 5px;
    }
  }

}
</style>