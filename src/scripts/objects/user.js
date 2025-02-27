const user = {
    avatarUrl: '',
    name: '',
    bio: '',
    username: '',
    followers: '',
    following: '',
    events: [],
    repositories: [],

    setInfo(gitHubUser){
        this.avatarUrl = gitHubUser.avatar_url;
        this.name = gitHubUser.name;
        this.bio = gitHubUser.bio;
        this.username = gitHubUser.login;
        this.following = gitHubUser.following;
        this.followers = gitHubUser.followers;
    },

    setEvents(events){ 
        this.events = events;
    },

    setRepositories(repositories){
        this.repositories = repositories;
    },
}

export { user };