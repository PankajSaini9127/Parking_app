function setLogin(data){
    return {
        type:"SET_AUTH",
        payload:data
    };
};

export {setLogin};