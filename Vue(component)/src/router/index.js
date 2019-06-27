import Vue from 'vue'
import Router from 'vue-router'
//import HelloWorld from '@/components/HelloWorld'
import About from '../views/About'
import Link from '../views/link'
import Link1 from '../views/link1'
import Link2 from '../views/link2'

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
    	path:'/link',
    	component:Link,
    	children:[
				{
					path: '/link1',
					component:Link1
				},
				{
					path: '/link2',
					component:Link2
				},
			]
    },
    {
    	path:'/',
    	redirect:'/About'   //默认请求About
    }
  ]
})
//配置路由




//基本路由步骤:
//1.在views文件夹中新建组件
//2.在index.js中添加组件和路由地址