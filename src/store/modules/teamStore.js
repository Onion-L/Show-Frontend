import {defineStore} from "pinia";

export const teamStore = defineStore('team',{
    state:()=>{
        return {
            teamList:[]
        }
    },
    actions:{
       addTeamList(team) {

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
