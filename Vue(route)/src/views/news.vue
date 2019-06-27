<template>
	<ul class="list-group">
		<li class="list-group-item" v-for="(news,index) in newsArr" :key="index">{{news}}</li>

	</ul>
</template>

<script>
export default{
	data(){
		return{
			newsArr:['news001','news003','news005']
		}
	}
}
</script>



<style>
</style>