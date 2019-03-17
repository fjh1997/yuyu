<template>
	<div>
		<!-- ok
		 -->
		<headTop></headTop>
		<div class="upmain" onclick="">
			<form id="_uploadForm" enctype="multipart/form-data">
				<input id="file" v-on:change="success()" type="file" accept=".zip" />
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
		<input type="submit" value="提交" class="submitres"  />

		<endLine></endLine>
	</div>
</template>
<script>
/////////////////////////////注释注释注释注释注释注释注释注释注释注释注释注释注释注释注释注释注释注释注释注释注释注释注释注释注释注释注释注释注释注释注释
import async from 'async';
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
		$('.resclass').hide();
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
			$('.resclass').show();
			$('.restitle').show();
			$('.submitres').show();
		});
			$('.submitres').on('click', function() {
				var file = $("#file")[0].files[0], //上传文件主体
					name = file.name, //文件名
					size = file.size, //总大小
					succeed = 0; //当前上传数
				var shardSize = 2 * 1024 * 1024, //以2MB为一个分片
					shardCount = Math.ceil(size / shardSize); //总片数

				/*生成上传分片文件顺充，通过async.eachLimit()进行同步上传
				    attr里面是[0,1,2,3...,最后一位]
				*/
				var attr = [];
				for (var i = 0; i < shardCount; ++i) {
					attr.push(i);
				}



				async.eachLimit(attr, 1, function(item, callback) {
					var i = item;
					var start = i * shardSize, //当前分片开始下标
						end = Math.min(size, start + shardSize); //结束下标

					//构造一个表单，FormData是HTML5新增的
					var form = new FormData();
					form.append("data", file.slice(start, end)); //slice方法用于切出文件的一部分
					form.append("name", name); //文件名字
					form.append("total", shardCount); //总片数
					form.append("index", i + 1); //当前片数
					//Ajax提交

					$.ajax({
						url: "/upload",
						type: "post",
						data: form,
						timeout: 120 * 1000,
						async: false, //同步
						processData: false, //很重要，告诉jquery不要对form进行处理
						contentType: false, //很重要，指定为false才能形成正确的Content-Type
						success: function(data) {
							++succeed;
							var data = eval('(' + data + ')');
							/*返回code为0是成功上传，1是请继续上传*/
							if (data.code == 0) {
								console.log(data.msg);
							} else if (data.code == 1) {
								console.log(data.msg);
							}
							//生成当前进度百分比
							var jd = Math.round(succeed / shardCount * 100) + '%';
							$('#url').html(jd);
							/*如果是线上，去掉定时，直接callback()，
							这样写是为方便，本地测试看到进度条变化
							因为本地做上传测试是秒传，没有时间等待*/
							setTimeout(callback, 50);
						}
					});
				}, function(err) {
					$('#url').html("上传成功");
				});
				});
	},
	methods: {
		//方法都写到这里
		success: function(event) {},

				
		
	}
};
</script>
<style type="text/css">
.resclass {
	border-top: 8px solid #2b81af;
	position: absolute;
	top: 160px;
	left: 800px;
	color: #2b81af;
		font-size: 25px;
	width: 200px;
}
.resclass:hover {
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
