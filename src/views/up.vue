<template>
	<div>
		<!-- ok
		 -->
		<headTop></headTop>
		<div class="upmain" onclick="">
			<form id="_uploadForm" enctype="multipart/form-data">
				<input id="file" v-on:change="success()"  type="file" accept=".zip" />
				<textarea class="restitle" placeholder="输入一下简介叭" maxlength="233"></textarea>
				<select class="resclass">
					<option value="0">PVP</option>
					<option value="1">生存</option>
					<option value="2">高分辨率</option>
					<option value="3">音效</option>
					<option value="4">3D</option>
					<option value="5">恶搞</option>
					<option value="6">自制</option>
				</select>
			</form>
			<br />
			<br />
			<p id="url">点击加号上传</p>
		</div>
		<input type="submit" value="提交" class="submitres" @click="postData" />

		<endLine></endLine>
	</div>
</template>
<script>
import $ from 'jquery';
import headTop from '@/components/headTop.vue';
import endLine from '@/components/endLine.vue';
export default {
	name: 'up',
	components: {
		headTop,
		endLine
	},
	mounted() {
		$('.restitle').hide();
		$('.submitres').hide();

		//这里写初始化的Jquery，只渲染一次
		var file = $('#file'),
			aim = $('#url');
		file.on('change', function(e) {
			//e.currentTarget.files 是一个数组，如果支持多个文件，则需要遍历
			var name = e.currentTarget.files[0].name;
			aim.text(name);
			file.hide();
			$('.restitle').css('top', '160px');
			$('.restitle').css('left', '10%');
			$('.restitle').css('width', '40%');
			$('.restitle').css('height', '50%');
			$('.restitle').css('height', '50%');
			$('.restitle').show();
			$('.submitres').show();
		});
	},
	methods: {
		//方法都写到这里
		success: function(event) {},

		postData: function() {
			var formData = new FormData();
			formData.append('file', $('#file')[0].files[0]);
			formData.append('restitle', $('#restitle').val());
			formData.append('service', 'App.Passion.UploadFile');
			//formData.append('token', token);
			$.ajax({
				url: '/upload',
				/*接口域名地址*/
				type: 'post',
				data: formData,
				contentType: false,
				processData: false,
				success: function(res) {
					console.log(res.data);
					if (res.data['code'] == 'succ') {
						alert('上传成功');
					} else if (res.data['code'] == 'err') {
						alert('emmm上传失败');
					} else {
						console.log(res);
					}
				}
			});
		}
	}
};
</script>
<style type="text/css">
.resclass {
	border-top: 8px solid #2b81af;
	position: absolute;
	top:160px;
	left:800px;
	color:#2b81af ;
	font-size: 25px;
	width:200px
}
.resclass:hover{
	border: 2px solid #2b81af;
}
.restitle {
	border-top: 0px solid #2b81af;
	font-size: 25px;
}
.restitle:hover {
	border-top: 40px solid #2b81af;
}
.restitle:focus {
	border: 5px solid #528ce0;
}
.submitres {
	position: absolute;
	background: initial;
	color: coral;
	font-size: 30px;
	border: 10px solid rgb(222, 125, 44);
	left: 70.5rem;
	bottom: 0px;
}
.submitres:hover {
	border: 10px solid #528ce0;
}
#join:hover {
	border-top: 7px solid rgb(3, 35, 14);
}

#_uploadForm {
}

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
	background-color: #ffffff;
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
