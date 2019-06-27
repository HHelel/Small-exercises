<template>
	<div>
		<router-link to="/home/news">news</router-link>
		<router-link to="/home/message">Message</router-link>
		
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