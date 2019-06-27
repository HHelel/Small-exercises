<template>
	<div>
		<router-link to="/link1">Link1</router-link>
		<router-link to="/link2">Link2</router-link>
		
		<div class=".jies">
			<router-view></router-view>
		</div>
	</div>
</template>

<script>
</script>

<style>
	.jies{font-size:22px;text-align:center;}
</style>