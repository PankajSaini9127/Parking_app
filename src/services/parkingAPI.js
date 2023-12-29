import axios from "axios";


import config from "../../config.json";

const API = config.API_LIVE;

export async function getAllParking(token){
    try {
        const response = await axios.get(`${API}/parking/get-all-parking`,{
            headers:{
                "Authorization":token
           }
        })
        if (response) {
            return response.data
        };
    } catch (error) {
        console.log("Error while Call get parking API",error);
    }
};


export async function addNewParking(token,data){
    try {

        const response = await axios.post(`${API}/parking/add`,data,{
            headers:{
                "Authorization":token
           }
        })
        if (response) {
            return response.data
        };
    } catch (error) {
        console.log("Error while Call Add parking API",error);
    }
};

export async function parkingRequest(token,data){
    try {

        const response = await axios.post(`${API}/parking/add-parking-request`,data,{
            headers:{
                "Authorization":token
           }
        })
        if (response) {
            return response.data
        };
    } catch (error) {
        console.log("Error while Call Add parking request API",error);
    }
};

export async function getUserRequestParking(token,id){
    try {
        const response = await axios.get(`${API}/parking/get-users-parking-req?id=${id}`,{
            headers:{
                "Authorization":token
           }
        })
        if (response) {
            return response.data
        };
    } catch (error) {
        console.log("Error while Call get parking request API",error);
    }
};
