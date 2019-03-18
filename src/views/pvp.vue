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

<script>
import async from 'async';
import $ from 'jquery';
import headTop from '@/components/headTop.vue';
import endLine from '@/components/endLine.vue';
export default {
	name: 'pvp',
	components: {
		headTop,
		endLine
	}
};

</script>

<style></style>
