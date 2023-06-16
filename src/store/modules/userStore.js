import {defineStore} from "pinia";

export const userStore = defineStore('user',{
    state:()=>{
        return {
            userData:{}
        }
    },
    actions: {
        setUserData(userData) {
             localStorage.setItem('user',userData);
             this.userData = userData;
        }
    },
    persist:{
        enable:true,
        strategies:[
            {
                storage:localStorage,
                path:['userData']
            }
        ]
    }
})

