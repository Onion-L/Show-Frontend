import * as VueRouter from "vue-router";
import HomePage from '../pages/Home/HomePage.vue';
import TeamPage from '../pages/Team/TeamPage.vue';
import PersonPage from '../pages/Person/PersonPage.vue';
import SearchPage from "../pages/Search/SearchPage.vue";
import BasicLayout from "../Layout/BasicLayout.vue";
import PersonInfo from "../pages/PersonInfo/PersonInfo.vue";
import EditPage from "../pages/Edit/EditPage.vue";
import SettingPage from "../pages/Setting/SettingPage.vue"
import LoginPage from "../pages/Login/LoginPage.vue";
import RegisterPage from "../pages/Register/RegisterPage.vue";
import TeamInfo from "../pages/TeamInfo/TeamInfo.vue";
import ExceptionPage from "../pages/ExceptionPage/ExceptionPage.vue";
import TeamAddPage from "../pages/Team/TeamAddPage.vue";
import TestPage from "../pages/Test/TestPage.vue";
import EditGenderPage from "../pages/Edit/EditGenderPage.vue";
import MyTeamPage from "../pages/MyTeam/MyTeamPage.vue";


const routes = [
    {
        path:'/',
        component:BasicLayout,
        redirect:'/home',
        children:[
            {
                path:'home',
                component:HomePage,
            },
            {
                path:'person',
                component:PersonPage
            },{
                path:'team',
                component:TeamPage
            },
        ],

    },
    {
        path:'/addTeam',
        component:TeamAddPage
    },
    {
        path:'/login',
        component: LoginPage
    },
    {
        path:'/register',
        component: RegisterPage
    },
    {
        path:'/search',
        component: SearchPage
    },

    {
        path:'/info',
        component: PersonInfo,
    },
    {
        path:'/info/edit',
        component: EditPage
    },
    {
        path:'/gender',
        component: EditGenderPage
    },
    {
        path:'/setting',
        component: SettingPage
    },
    {
        path:'/teamInfo',
        component: TeamInfo
    },
    {
        path:'/myTeam',
        component: MyTeamPage
    },
    {
        path:'/error',
        component:ExceptionPage
    },
    {
        path:'/test',
        component:TestPage
    }
];
const router = VueRouter.createRouter({
    // 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
    history: VueRouter.createWebHashHistory(),
    routes,
});

/*router.beforeEach((to, from, next) => {
    if((!document.cookie && to.path !== '/login') || from.path === '/login') {
        next('/login');
    }else {
        next();
    }
})*/

export default router;
