import axios from "axios";

import config from "../../config.json";

const API = config.API_LIVE;

async function register(data){
    try {
        const res = await axios.post(`${API}/auth/register`,data);
           return  await res.data;
    } catch (error) {
        console.log("Error While Calling Auth API",error
        );
    }
};

async function auth(creds){
    try {
        const res = await axios.post(`${API}/auth/login`,creds);
        return  await res.data;
    } catch (error) {
        console.log("Error While Calling Auth API",error
        );
    }
};





export {auth,register};