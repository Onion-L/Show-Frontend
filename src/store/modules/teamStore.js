import {defineStore} from "pinia";
import axios from "axios";

export const teamStore = defineStore('team',{
    state:()=>{
        return {
            teamList:[]
        }
    },
    actions:{
        async fetchTeamList() {
            try {
                const response = await axios.get('/api/teamList');
                this.teamList = response.data.list;
            }catch (err) {
                console.error(err);
            }
        }
    },
})
