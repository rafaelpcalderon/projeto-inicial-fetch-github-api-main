const screen = {
  userProfile: document.querySelector('.profile-data'),

  renderUser(user) {
    this.userProfile.innerHTML =
      `<div class="info">
              <img src="${user.avatarUrl}" alt="Foto do perfil do usuário"/>
                <div class="data">
                  <h2>${user.name ?? 'Não possui nome'}</h2>
                  <p>${user.bio ?? 'Não possui biografia'}</p>
                  
                  <div class="follows">
                  <p>👥Seguidores: ${user.followers}</p>
                  <p>👥Seguindo: ${user.following}</p>
                  </div>
                </div>
                `;

    let repositoriesItens = '';

    user.repositories.forEach(repo => {
      repositoriesItens += `
              <div class="list-container"> 
                <li>
                  <a href="${repo.html_url}" target="_blank">${repo.name} 
                    <div class="additional-repo-info">
                      <div class="repo-info">
                        <p>🍴${repo.forks}</p> 
                        <p>⭐${repo.stargazers_count}</p> 
                        <p>👀${repo.watchers}</p> 
                        <p>👨‍🏫${repo.language}</p>
                      </div>
                    </div>
                  </a>
                 </li>
              </div>`

    });

    if (user.repositories.length > 0) {
      this.userProfile.innerHTML +=
        `<div class="repositories">
                <h2>Repositorios</h2>
                        <ul>${repositoriesItens}</ul>
             </div>`;
    }

    let eventsItens = '';
    let eventsHtml = '<div class="events"><h2>Eventos</h2><ul>';

    user.events.forEach(event => {
      if (event.type === 'PushEvent') {
        eventsHtml += 
        `
        <div class="events"> 
          <div class="commit">
            <a class="link" href="https://github.com/${event.repo.name}" target="_blank"> 
              <li>${event.repo.name}
              </li>
            </a> 
              <span>- ${event.payload.commits[0].message}</span>
          </div>
        </div>
                        `;
      } else if (event.type === 'CreateEvent') {
        eventsItens += `<p>Sem mensagem de commit.</p>`;
      }
    });
    eventsHtml += '</ul></div>';
    this.userProfile.innerHTML += eventsHtml;
  },

  renderNotFound() {
    this.userProfile.innerHTML = '<h3> Usuário não encontrado</h3>';
  }
}

export { screen };