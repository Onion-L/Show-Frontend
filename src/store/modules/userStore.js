import {defineStore} from "pinia";
import axios from "axios";

export const userStore = defineStore('user',{
    state:()=>{
        return {
            userList:{},
            cookie:''
        }
    },
    actions:{
        async fetchUser(username) {
            try {
                const response = await axios.get('/api/user',username);
                this.userList = response.data;
            }catch (err) {
                console.error(err);
            }
        }
    }
})

