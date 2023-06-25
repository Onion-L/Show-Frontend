import {defineStore} from "pinia";

export const teamStore = defineStore('team',{
    state:()=> ({
            teamList: []
    }),

    actions:{
      addTeamList() {

      }

    },
    persist:{
        enable:true,
        strategies:[
            {
                storage:localStorage,
                path:['teamList']
            }
        ]
    }
})
