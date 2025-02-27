
import { getUserInfo } from " ./services/user.js";
import { getRepositories } from "./services/repositories.js";
import { getUserEvents } from "./services/events.js";

import {user} from "./objects/user.js";
import {screen} from "./objects/screen.js";

document.getElementById('btn-search').addEventListener('click', () => {
    const username = document.getElementById('input-search').value;

    if(emptyInput(username)) return;  
    getUserData(username);
})

document.getElementById('input-search').addEventListener('keyup', (event) => {
    const username = event.target.value;
    const key = event.which || event.keyCode;

    if(key === 13){
        
        if(emptyInput(username)) return;
        getUserData(username);
    }
})  

async function getUserData(username){

    const userResponse = await getUserInfo(username);
    const repositoriesResponse = await getRepositories(username);
    const getEvents = await getUserEvents(username);

    if(userResponse.message === 'Not Found'){
        screen.renderNotFound();
        return;
    }

    user.setInfo(userResponse);
    user.setRepositories(repositoriesResponse);
    user.setEvents(getEvents);
    
    screen.renderUser(user);

}

function emptyInput(username){
    if(username.length === 0){
        alert('Preencha o campo com o nome do usuário no GitHub'); 
        return true;
    }
}




