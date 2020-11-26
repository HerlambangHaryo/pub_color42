<template>
	<div>
		<panel title="Panel Title Here">
			Panel Content Here
		</panel>
		
		<p>
			<a href="javascript:history.back(-1);" class="btn btn-success">
				<i class="fa fa-arrow-circle-left"></i> Back to previous page
			</a>
		</p>
	</div>
</template>


<script>
import PageOptions from '../config/PageOptions.vue'

export default {
	created() {
		PageOptions.pageWithoutSidebar = true;
	},
	beforeRouteLeave (to, from, next) {
		PageOptions.pageWithoutSidebar = false;
		next();
	}
}
</script>