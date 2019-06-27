import Vue from 'vue'
import Router from 'vue-router'
//import HelloWorld from '@/components/HelloWorld'
import About from '../views/About'
import Home from '../views/home'
import News from '../views/news'
import Message from '../views/message'
import MessageDetail from '../views/messageDetail'

import 'bootstrap/dist/css/bootstrap.min.css'


//这个index.js是路由器模块
Vue.use(Router)

export default new Router({
  routes:[
    {
    	path:'/about',
    	component:About
    },
    {
    	path:'/home',
    	component:Home,
    	children:[
				{
					path: '/home/news',
					component:News
				},
				{
					path: 'message',  //简化写法
					component:Message,
					children:[
						{
							path:'/home/message/detail/:id',
							component:MessageDetail
						}
					]
				},
			]
    },
//  {
//  	path:'/',
//  	redirect:'/About'   //默认请求About
//  }
  ]
})
//配置路由




//基本路由步骤:
//1.在views文件夹中新建组件
//2.在index.js中添加组件和路由地址