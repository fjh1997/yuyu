<template>
	<div>
	<headTop></headTop>
<div class="maindiv">
			主页</div>

  <endLine></endLine>

</div>
</template>
<script >
	import $ from 'jquery'

		
		$(".div").text("服务器未响应或未连接服务器 \n 无资源");
		import headTop from '@/components/headTop.vue'
		import endLine from '@/components/endLine.vue'
		
		export default {
  name: 'new',
  components: {
    headTop,
    endLine
  }
}
</script>