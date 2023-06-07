import {defineStore} from "pinia";
import axios from "axios";

export const tagStore = defineStore('tags',{
    state:()=>{
        return {
            tagList:[]
        }
    },
    actions:{
        async fetchTagList() {
            try {
                const response = await axios.get('/api/tagList');
                this.tagList = response.data;
            }catch (err) {
                console.error(err);
            }
        }
    },
})
