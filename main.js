// JavaScript

const socialMediaLinksJs = {
    github: 'montteiropedro',
    youtube: '',
    instagram: 'pedromontteiro_',
    facebook: 'pedromontteiro10',
    twitter: ''
}

function changeSocialMediaLinks() {
    for(let li of document.getElementById('socialMediaLinks').children) {
        const social = li.getAttribute('class');

        li.children[0].href = `https://${social}.com/${socialMediaLinksJs[social]}`;
    }
}

changeSocialMediaLinks();

function getGitHubProfileInfos() {
    const url = `https://api.github.com/users/${socialMediaLinksJs.github}`;

    // Sobre o fetch: https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
    fetch(url)
    .then(response => response.json())
    .then(data => {
        document.getElementById('userAvatar').src = data.avatar_url

        document.getElementById('userName').textContent = data.name;

        document.getElementById('userGitHubPage').href = data.html_url;

        document.getElementById('userGitHubLogin').textContent = data.login;

        document.getElementById('userBio').textContent = data.bio;
    });
}

getGitHubProfileInfos();