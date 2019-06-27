<template>
	<div>
		<slot>{{msg}}</slot>
	</div>
</template>

<script>
export default{
	data(){
		return{
			msg:"111000"
		}
	},
	props:["ht"]
}
</script>

<style>
</style>