<template>
	<div>
	<head>
		<meta charset="utf-8" />
		<title>材质包免费下载站</title>
		
		
	</head>

	<body>
		<div class="top"></div>
		<div class="top_main">
			<div class="class_res">
				<a href="newone" class="class_a">最新</a>
				<a href="pvp" class="class_a" style="left:100px">PVP</a>
				<a href="mc" class="class_a" style="left:200px">生存</a>
				<a href="px" class="class_a" style="left:300px">高分辨率</a>
				<a href="" class="class_a" style="left:400px">音效</a>
				<a href="3D" class="class_a" style="left:500px">3D</a>
				<a href="fun" class="class_a" style="left:600px">恶搞</a>
				<a href="self" class="class_a" style="left:700px">自制</a>
				<a href="up" class="class_a" id="join" style="left:800px;border-top: 7px solid rgb(3, 101, 100);">投稿</a>
			</div>
			<div class="search">
				<input type="search" placeholder="搜索啥材质包" class="search_Res" />
			</div>
		</div>
		
		
	</body>
</div>
</template>
<script>


    export default {
    	name: 'HeadTop',
    }
</script>

<style type="text/css">
			* {
				-webkit-transition: all 0.375s;
				-ms-transition: all 0.375s;
				-moz-transition: all 0.375s;
				transition: all 0.375s;
			}
			
			body {
				background-image: url(../assets/img/background.jpg);
				background-repeat: no-repeat;
				background-size: 100%;
			}
			
			.top {
				position: fixed;
				background-color: #202020;
				top: 0px;
				margin: auto;
				left: 0;
				right: 0;
				width: 100%;
				height: 80px;
				opacity: 0.8;
				z-index: 1;
				filter: blur(2px);
			}
			
			.top_main {
				position: fixed;
				top: 0px;
				margin: auto;
				left: 0;
				right: 0;
				height: 80px;
				opacity: 0.8;
				z-index: 1;
			}
			
			.maindiv {
				position: absolute;
				width: 95%;
				height: 80%;
				margin: auto;
				top: 150px;
				left: 0;
				right: 0;
				bottom: 0;
				background-color: #D0D0D0;
				z-index: 0;
				opacity: 0.8;
			}
			
			.end {
				position: absolute;
				margin: auto;
				left: 36%;
				bottom: -100px;
				-ms-user-select: none;
				-moz-user-select: none;
				-webkit-user-select: none;
			}
			
			.search_Res {
				position: absolute;
				color: white;
				font-size: 30px;
				background-color: initial;
				border-radius: 10px;
				height: 79px;
				width: 399px;
				top: 1px;
				right: 1px;
			}
			
			.search_Res:hover {
				border-radius: 0px;
				background-color: #202020;
			}
			
			.class_a {
				position: absolute;
				width: 100px;
				height: 70px;
				color: #FFFFFF;
				border: 1px solid #202020;
				border-left: none;
				border-top: 7px solid rgb(3, 101, 100);
				border-bottom: none;
				top: 1px;
				text-decoration: none;
				line-height: 100px;
				text-align: center;
				display: block;
				/* 设置为块元素 */
				line-height: 100px;
				/* 设置垂直居中 */
				text-align: center;
			}
			
			.class_a:hover {
				border-top: 7px solid rgb(3, 54, 73);
			}
			.div{
				position: absolute;
				height:50%;
				width: 33%;
				background-color: rgb(205,179,128);
				border:1px solid #202020;
			}
			.div:hover{
				box-shadow:-10px 0px 15px #202020,   /*左边阴影*/ 
                                                   0px -10px 15px #202020,  /*上边阴影*/ 
                                                   10px 0px 15px #202020,  /*右边阴影*/ 
                                                   0px 10px 15px #202020;
			}
			.divson{
				position: absolute;
				width: 100%;
				height:80%;
				text-align: center;
				border-bottom: 1px solid #202020;
			}
			
		</style>