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

<script type="text/javascript">
import async from 'async';
import $ from 'jquery';
import headTop from '@/components/headTop.vue';
import endLine from '@/components/endLine.vue';
import pull from '../assets/js/pullToRefresh.js';
export default {
	name: 'mc',
	components: {
		headTop,
		endLine
	}
};

   
</script>

<style></style>
