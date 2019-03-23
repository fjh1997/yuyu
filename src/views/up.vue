<template>
	<div>
		<!-- ok
		 -->
		<headTop></headTop>
		<div class="upmain" onclick="">
			<form id="_uploadForm" enctype="multipart/form-data">
				<textarea class="restitle" placeholder="输入一下简介叭" maxlength="233" id="packtitle"></textarea>
				<select class="resclass" id="packclass">
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
			
		</div>
		<input type="submit" value="提交" class="submitres"  @click="submit()"/>
 <uploader :options="options" class="uploader-example" ref="uploader" >
    <uploader-unsupport></uploader-unsupport>
    <uploader-drop>
      <p>拖材质包到这里</p>
      <uploader-btn>选择</uploader-btn>
    </uploader-drop>
    <uploader-list></uploader-list>
  </uploader>
		<endLine></endLine>
	</div>
</template>
<script>

import headTop from '@/components/headTop.vue';
import endLine from '@/components/endLine.vue';

export default {

	data () {
      return {
        options: {
          // https://github.com/simple-uploader/Uploader/tree/develop/samples/Node.js
          target: '/upload',
          testChunks: false
        },
        attrs: {
          accept: 'image/*'
        }
      }
    },
	name: 'up',
	components: {
		headTop,
		endLine
		
	},
	mounted() {
		var filEvent=this.$refs.uploader.uploader;
		$('.restitle').hide();
	//	$('.submitres').hide();
		$('.resclass').hide();
		//这里写初始化的Jquery，只渲染一次
		
		filEvent.on('fileSuccess', function (rootFile, file, message) {
  console.log(file.file.name);//--------------------------------------------------传输完成回调位置
			//e.currentTarget.files 是一个数组，如果支持多个文件，则需要遍历
			var name = file.file.name;
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
		});//-------------------------------------------------------------------------对应上面的括号
			
	},
	methods: {
		//方法都写到这里
	submit: function(event){
var fileup=this.$refs.uploader.uploader.files[0];
alert(fileup.uniqueIdentifier)


	}

				
		
	}
	}
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
 .uploader-example {
    width: 880px;
    padding: 15px;
    margin: 40px auto 0;
    font-size: 12px;
    box-shadow: 0 0 10px rgba(0, 0, 0, .4);
  }
  .uploader-example .uploader-btn {
    margin-right: 4px;
  }
  .uploader-example .uploader-list {
    max-height: 440px;
    overflow: auto;
    overflow-x: hidden;
    overflow-y: auto;
  }
</style>
