<template>
	<div>
		<p>ID:{{$route.params.id}}</p>
		<ul>
			<li>id:{{messageDetail.id}}</li>
			<li>title:{{messageDetail.title}}</li>
			<li>content:{{messageDetail.content}}</li>
		</ul>
	</div>
</template>





<script>
export default{
	data(){
		return{
			messageDetail:{}     //显示对应id值的一条数据
		}
	},
	mounted(){
		setTimeout(() => {
			const allMessageDetails=[
				{
					id:1,
					title:'message001',
					content:'message001 content...'
				},
				{
					id:2,
					title:'message002',
					content:'message002 content...'
				},
				{
					id:4,
					title:'message004',
					content:'message004 content...'
				}
			]
			this.allMessageDetails=allMessageDetails   //重新赋值
			const id = this.$route.params.id*1		   //获取点击的链接对应 的id值
			this.messageDetail = allMessageDetails.find(detail => detail.id===id)    //获取id值对应的那条数据，并赋值给data数据
			//find(detail => true)
			//查找满足条件中的某一个(id一致)
		},1000)
	},
	watch:{
		$route:function(value){   //路由链接param发生了改变
			const id = value.params.id*1
			this.messageDetail =this.allMessageDetails.find(detail => detail.id===id)
		}
	}
	
}
</script>




<style>
</style>