

export const request = ({method, url, data, params}) =>{
    const variables ={
        url,
        method,
        params,
        data,
    };
    const token = localStorage.getItem("t");
    if(token){
        variables.header ={
            Authorization: "Bearer " + token,
            TokenCybersoft:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJGcm9udCBFbmQgNjQiLCJIZXRIYW5TdHJpbmciOiIyMS8wMS8yMDIyIiwiSGV0SGFuVGltZSI6IjE2NDI3MjMyMDAwMDAiLCJuYmYiOjE2MTYxNzMyMDAsImV4cCI6MTY0Mjg3MDgwMH0.2sSWVGy-3Ce9iJ8bIYmYOJ9aE1eu3fz07DtA2ECfiyk",
        }
    }
    return axios(variables);
}