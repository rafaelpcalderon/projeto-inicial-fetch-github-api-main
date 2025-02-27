import { baseUrl } from "../variables.js";

async function getUserInfo(username){
    const response = await fetch(`${baseUrl}${username}`);
    return await response.json();	
};

export { getUserInfo };