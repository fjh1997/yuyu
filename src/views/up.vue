<template>
	<div>
		<headTop></headTop>
		<div class="upmain" onclick="uploade()">
			<form id="_uploadForm" enctype="multipart/form-data"><input id="file" type="file" accept=".zip" />
				<textarea class="restitle" placeholder="输入一下简介叭"></textarea>
				<input type="radio" class="resradio" />
			</form>
			<br/><br/>
			<p id="url">点击加号上传</p>
		</div>
			<input type="submit" value="提交" class="submitres" />
		<endLine></endLine>

	</div>
</template>
<script type="text/javascript" src="../assets/js/jquery-2.1.0.js" ></script>
<script>
		
	
	
	
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
	.submitres {
		position: absolute;
		background: initial; 
		color: #FFFFFF;
		font-size: 30px;
		left:0px;
	}
	#join:hover {
		border-top: 7px solid rgb(3, 35, 14);
	}
	
	#_uploadForm {}
	
	#file:hover {
		opacity: 0.6;
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
	
	.restitle {
		position: absolute;
		width: 200px;
		height: 200px;
	}
</style>