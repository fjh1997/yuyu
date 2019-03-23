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
			<div class="pushdatadiv" >
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

	},
	methods: {
		//这里面写方法函数都没关系
	}
};
</script>
