document.addEventListener("DOMContentLoaded", ()=>{
    const avatar = document.querySelector('.profile-avatar')
    const profileName = document.querySelector('.profile-name');
    const repositories = document.querySelector('#repositories');
    const followers = document.querySelector('#followers');
    const following = document.querySelector('#following');
    const profileLink = document.querySelector('.profile-link');
    
    const API = `https://api.github.com/users/Mauriciosouza8989`
    
    fetch(API)
    .then((res)=>{
        return res.json();
    })
    .then((data)=>{
        console.log(data);
        avatar.src = data.avatar_url;
        profileName.innerHTML = `@${data.login}`;
        repositories.innerHTML = data.public_repos;
        followers.innerHTML = data.followers;
        following.innerHTML = data.following;
        profileLink.href = data.html_url;
    })
    .catch(()=>{
        alert("Houve um erro de carregamento. recarregue a pagina novamente");
    })
})
