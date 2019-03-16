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
		import $ from 'jquery'
		import headTop from '@/components/headTop.vue'
		import endLine from '@/components/endLine.vue'
		

			var file = $('#file'),
			aim = $('#url');
		file.on('change', function(e) {
			//e.currentTarget.files 是一个数组，如果支持多个文件，则需要遍历
			var name = e.currentTarget.files[0].name;
			aim.text(name);
		});


		function postData() {
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