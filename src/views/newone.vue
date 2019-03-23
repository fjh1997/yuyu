<template>
	<div>
		<headTop></headTop>
		<br />
		<br />
		<br />
		<br />
		<br />
		<br />
		<br />
		<div class="maindiv">
			<div class="pushdatadiv">
				<img src="#" style="width: 100%; height: 250px; background: white;" />
				<hr style="height:1px;border:none;border-top:1px dashed #0066CC;" />
			</div>
			<div class="pushdatadiv" id="2">
				<img src="#" style="width: 100%; height: 250px; background: white;" />
				<hr style="height:1px;border:none;border-top:1px dashed #0066CC;" />
			</div>
			<div class="pushdatadiv" id="3">
				<img src="#" style="width: 100%; height: 250px; background: white;" />
				<hr style="height:1px;border:none;border-top:1px dashed #0066CC;" />
			</div>
			<div class="pushdatadiv" id="4">
				<img src="#" style="width: 100%; height: 250px; background: white;" />
				<hr style="height:1px;border:none;border-top:1px dashed #0066CC;" />
			</div>
		</div>
		<endLine></endLine>
	</div>
</template>
<script>
import headTop from '@/components/headTop.vue';
import endLine from '@/components/endLine.vue';
import $ from '../../public/js/canvas-particle.js'
export default {
	name: 'new',
	components: {
		headTop,
		endLine
	},
	mounted() {
		//这里面写初始化的Jquery，在生命周期的mount阶段才有用。
     window.onload = function() {
     		    //配置
     		    var config = {
     		        vx: 2,	//小球x轴速度,正为右，负为左
     		        vy: 2,	//小球y轴速度
     		        height: 0,	//小球高宽，其实为正方形，所以不宜太大
     		        width: 0,
     		        count: 200,		//点个数
     		        color: "121, 162, 185", 	//点颜色
     		        stroke: "200,101,200", 		//线条颜色
     		        dist: 15000,  //点吸附距离
     		        e_dist: 20000, 	//鼠标吸附加速距离
     		        max_conn: 15 	//点到点最大连接数
     		    }
     
     		    //调用
     		    CanvasParticle(config);
     }
	},
	methods: {
		//这里面写方法函数都没关系
	}
};
</script>
