<template>
	<div>
		<div id="app">
			<img src="./assets/logo.png">

			<app-hell><p>这是父组件的数据</p></app-hell>
			
			<div class="input-group"style="width:300px;left:0;right:0;margin:0 auto;">
				<span class="input-group-addon" id="basic-addon1">账号：</span>
				<input v-model="Username" type="text" class="form-control" placeholder="Username" aria-describedby="basic-addon1">
			</div>
			<div class="input-group" style="width:300px;left:0;right:0;margin:0 auto;">
				<span class="input-group-addon" id="basic-addon1">密码：</span>
				<input v-model="Paseword" type="password" class="form-control" placeholder="Paseword" aria-describedby="basic-addon1">
			</div>
			<div class="btn-group" role="group" aria-label="..." style="display:block;">
				<button type="button" class="btn btn-default" @click="join">登录</button>
			</div>
			<!--登录组件-->
		   	<router-link to="/about">About</router-link>
		   	<router-link to="/home">Home</router-link>
		   	<div class="jumbotron">
		  		<router-view></router-view>
		   	</div>
		</div>

	</div>
</template>

<script>
export default{
	data(){
		return{
			Username:'',
			Paseword:''
		}
	},
	methods:{
		join(){
			if(this.Username=='Helel'&&this.Paseword=='65591894700'){
				alert("登录成功！！！")
			}else if(this.Username!=='Helel'&&this.Paseword=='65591894700'){
				alert("账号错误！！！")
			}else if(this.Username=='Helel'&&this.Paseword!=='65591894700'){
				alert("密码错误！！！")
			}else if(this.Username==null&&this.Paseword==null){
				alert("请输入账号！！！")
			}
		},
		
	}
}
</script>

<style>
#app{
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>