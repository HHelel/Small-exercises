<template>
	<div>
		<ul class="list-group">
			<li class="list-group-item" v-for="(message,index) in messages" :key="message.id">
				<router-link :to="`/home/message/detail/${message.id}`">{{message.title}}</router-link>
				<button @click="pushShow(message.id)">push查看</button>
				<button @click="replaceShow(message.id)">replace查看</button>
			</li>
		</ul>
		<button @click="$router.back()">回退</button>
		<hr>
		<router-view></router-view>
	</div>
</template>

<script>
export default{
	data(){
		return{
			messages:[]
		}
	},
	mounted(){
		setTimeout(() => {
			const messages =[
				{
					id:1,
					title:'message001'
				},
				{
					id:2,
					title:'message002'
				},
				{
					id:4,
					title:'message004'
				},
			]
			this.messages=messages
		},1000)
		//延迟1秒再渲染页面，防止因为数据还没有全部加载出来页面就完成渲染了
	},
	methods:{
		pushShow(id){
			this.$router.push(`/home/message/detail/${id}`)
		},
		replaceShow(id){
			this.$router.replace(`/home/message/detail/${id}`)
		}
	}
}
</script>


<style>
</style>