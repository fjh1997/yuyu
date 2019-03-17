<template>
	<div >
		<!-- 我疯了，到底咋回事
		 加了:id="" 元素就会消失
		 加了js部分，整个页面除了背景全消失
		 你看看咋回事
		 -->
		<headTop></headTop>
		<div class="upmain" onclick="uploade()">
			<form id="_uploadForm" enctype="multipart/form-data"><input  id="file"  v-on:change= "success()" type="file" accept=".zip" />
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
<script>
		
	
	
		import $ from 'jquery'
	import headTop from '@/components/headTop.vue'
	import endLine from '@/components/endLine.vue'
	export default {
		name: 'up',
		components: {
			headTop,
			endLine,
		},
		mounted(){

			//这里写初始化的Jquery，只渲染一次
			var file = $('#file'),
			aim = $('#url');
		file.on('change', function(e) {
			//e.currentTarget.files 是一个数组，如果支持多个文件，则需要遍历
			var name = e.currentTarget.files[0].name;
			aim.text(name);
		});

		},
		methods:{
			//方法都写到这里
			success:function(event)
			{
				alert('上传成功');
			},

		 postData:function() {
			var formData = new FormData();
			formData.append("file", $("#file")[0].files[0]);
			formData.append("restitle",$("#restitle").val());
			formData.append("service", 'App.Passion.UploadFile');
			formData.append("token", token);
			$.ajax({
				url: 'http://stupidfish.ticp.net',
				/*接口域名地址*/
				type: 'post',
				data: formData,
				contentType: false,
				processData: false,
				success: function(res) {
					console.log(res.data);
					if(res.data["code"] == "succ") {
						alert('上传成功');
					} else if(res.data["code"] == "err") {
						alert('emmm上传失败');
					} else {
						console.log(res);
					}
				}
			})
		}
		

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