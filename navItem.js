var template = `<div>
   <el-menu-item :index="item.path" v-if="item.parentResource ==0" v-show ="!getSubMenu(item.children) && item.resourceType ==0  && !item.hidden">
	    <i class="el-icon-location"></i>
	    <span slot="title">{{item.name}}</span>
	</el-menu-item>
	<el-menu-item v-else :index="item.path">{{item.name}}</el-menu-item>
	
	<el-submenu v-show="item.children && getSubMenu(item.children)" :index="navIndex">
	    <template slot="title" >
	      <i class="el-icon-location"></i>
	      <span slot="title">{{ item.name }}</span>
	    </template>
	    <span slot="title" v-show="item.parentResource !=0">{{ item.name }}</span>
	    <nav-item 
	        v-for="(subItem,i) in item.children" 
	        :key="navIndex+'-'+i" 
	        :navIndex="navIndex+'-'+i"
	        :item="subItem" >
	    </nav-item>
	</el-submenu>
</div>`;


    var navItem = Vue.component('navItem',
        {
            template: template,
            data(){
                return {
                    
                }
            },
            props: ['item','navIndex']
        });
