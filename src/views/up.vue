<template>
	<div>
	<headTop></headTop>
<div class="upmain" onclick="uploade()">
			<form id="_uploadForm" enctype="multipart/form-data"><input id="file" type="file" accept=".zip" />
			<input type="text" id="restitle"></form>
			<br/><br/>
			<p id="url">点击加号上传</p>
		</div>

<endLine></endLine>
	
	</div>
</template>

	<script >
	
		import headTop from '@/components/headTop.vue'
		import endLine from '@/components/endLine.vue'
		export default {
  name: 'up',
  components: {
    headTop,
    endLine
  }
}
	</script>
	<style type="text/css">
		#join:hover {
				border-top: 7px solid rgb(3, 35, 14);
			}
			
			#_uploadForm {}
			
			#_uploadForm:hover {
				opacity: 0.5;
			}
			
			#file {
				position: absolute;
				width: 400px;
				height: 400px;
				margin: auto;
				top: 20%;
				left: 0;
				right: 0;
				bottom: 0;
				text-align: center;
				filter: blur(10px);
				filter: brightness(150%);
				background-color: #FFFFFF;
				opacity: 0.2;
				background-image: url(../assets/img/add.png);
				background-size: 100%;
				background-repeat: no-repeat;
				border-radius: 1000px;
			}
			
			#url {
				color: coral;
				font-size: 30px;
			}
	</style>