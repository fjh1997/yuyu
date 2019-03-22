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

export default {
	name: 'new',
	components: {
		headTop,
		endLine
	},
	mounted() {
		//这里面写初始化的Jquery，在生命周期的mount阶段才有用。

		$('.div').text('服务器未响应或未连接服务器 \n 无资源'); //有内容删掉这个就行
	},
	methods: {
		//这里面写方法函数都没关系
	}
};
</script>
