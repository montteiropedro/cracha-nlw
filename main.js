// JavaScript

const socialMediaLinks = {
    github: "montteiropedro",
    youtube: "",
    instagram: "pedromontteiro_",
    facebook: "pedromontteiro10",
    twitter: ""
}

function changeSocialMediaLinks() {
    // No lugar de "document.getElementById('socialLinks').children" eu poderia usar também "socialLinks.children", por se tratar de uma ID.
    for(let li of document.getElementById('socialLinks').children) {
        const social = li.getAttribute('class');

        li.children[0].href = `https://${social}.com/${socialMediaLinks[social]}`;
        // Através dos "[]" nós podemos informar ao objeto "socialMediaLinks" qual é a propriedade que queremos usar o valor. Quando "social='instagram'" por exemplo, o valor que usaremos será o da propriedade "instagram", o qual é "pedromontteiro_".
    }
}

changeSocialMediaLinks();

function getGetHubProfileInfos() {
    const url = `https://api.github.com/users/${socialMediaLinks.github}`;

    // Sobre o fetch: https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
    fetch(url).then(response => response.json()).then(data => {
        document.getElementById('userName').textContent = data.name;

        document.getElementById('userBio').textContent = data.bio;

        document.getElementById('userGitHub').href = data.html_url;

        document.getElementById('userGitHubLogin').textContent = data.login;

        document.getElementById('userAvatar').src = data.avatar_url;
    });


        // Utilizamos uma arrow function, fizemos algumas contrações porque só estamos recebendo um argumento e a função só fazendo uma coisa. Como ela poderia ter sido escrita: (response) => { response.json() }
}

getGetHubProfileInfos();