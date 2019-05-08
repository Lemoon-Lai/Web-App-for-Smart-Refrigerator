import { LIST_DATA } from "./actionTypes";
import axios from 'axios';

export const getListData = ()=>(dispatch)=>{
    axios({
        // method: 'get',
        // url: '/json/foodRecord.json'

        method: 'post',
        url: 'http://192.168.1.37:3000/api',
        data: {
            url: '../json/foodRecord.json'
            // params: {
            //     url:'',
            //     userid:''
            // }
        }
        
    }).then((resp) => {
        dispatch({
            type: LIST_DATA,
            obj: resp.data
        })
    });
}