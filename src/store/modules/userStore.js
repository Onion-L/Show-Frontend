import {defineStore} from "pinia";
import axios from "axios";

export const userStore = defineStore('user',{
    state:()=>{
        return {
            userList:{}
        }
    },
    actions:{
        /*async fetchUser(username) {
            try {
                const response = await axios.get('/api/user',username,{
                    headers: {
                        Authorization: 'Bearer ' + token
                    }
                });
                this.userList = response.data;
            }catch (err) {
                console.error(err);
            }
        }*/
    }
})

