<template>
	<div>
	<headTop></headTop>
<div class="maindiv">
			<div class="div"></div>
			<div class="div" style="left: 33%;"></div>
			<div class="div" style="left: 66%;"></div>
			<div class="div" style="bottom: 0%;"></div>
			<div class="div" style="bottom: 0% ;left:33%;"></div>
			<div class="div" style="bottom: 0%; left:66%;"></div>
</div>
  <endLine></endLine>

</div>
</template>
<script >
	import $ from 'jquery'
	import headTop from '@/components/headTop.vue'
	import endLine from '@/components/endLine.vue'
	
export default {
	
  name: 'new',
  components: {
    headTop,
    endLine,
  },
mounted(){
//这里面写初始化的Jquery，在生命周期的mount阶段才有用。

		$(".div").text("服务器未响应或未连接服务器 \n 无资源");
	
}
  ,
  methods:{
//这里面写方法函数都没关系

  }
}
</script>