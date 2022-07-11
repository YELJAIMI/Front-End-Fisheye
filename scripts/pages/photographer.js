const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const idphotographe = urlParams.get('idphotographe');
async function getPhotographers() {
    // Penser à remplacer par les données récupérées dans le json
    let datas = null;
    await fetch('../../data/photographers.json')
    .then(function(data) {
    console.log(data)
    return data.json();
    })
    .then(function(result) {
    console.log(result.photographers)
    datas = result;
    })
    console.log(datas);
    return datas; 
}

async function init() {
    // Récupère les datas des photographes
    const  datas  = await getPhotographers();
    console.log(datas);
    
    console.log(idphotographe);

    const photographers = datas.photographers;
    const medias = datas.media;
    console.log(medias);
    //recupére le photographe=>l'id
    const photographer = photographers.find(function(photographer){
        return photographer.id == idphotographe;
    }
    );
    
    console.log(photographer.name);
    
    const media = medias.filter(function(media){
        return media.photographerId == idphotographe;
    }
    );
    console.log(media);
    //début header photographe
    const mainphotographer = document.querySelector('.photograph-header');
    const photographerTitle = document.createElement('h1');
    const button = document.getElementById('contact_button');
    photographerTitle.innerHTML = photographer.name;
    //mainphotographer.appendChild(photographerTitle)
    const profil = document.createElement('img');
    profil.setAttribute('src',"/assets/photographers/"+photographer.portrait);
    profil.setAttribute('class',"profil");
    //mainphotographer.appendChild(profil);
    button.insertAdjacentHTML('beforebegin', photographerTitle.outerHTML);
    button.insertAdjacentHTML('afterend', profil.outerHTML);

    // Création de la liste des médias
    const mediaList = document.getElementById('main-media');
    for (i=0;i<media.length;i++){
        const mediaDiv = document.createElement('article');
        mediaDiv.className = 'media';
        let mediaImg = null;
        if(media[i].image){
        mediaImg = document.createElement('img');
        mediaImg.setAttribute('src',"/assets/images/" +media[i].image+"");
        
        mediaImg.setAttribute('alt',media[i].title);
        mediaImg.style.width = '';
        }else{
            mediaImg = document.createElement('video');
            mediaImg.setAttribute('src',"/assets/images/" +media[i].video+"");
            mediaImg.setAttribute('class', 'containerImg');
            mediaImg.setAttribute('alt',media[i].title);
            mediaImg.setAttribute('controls','controls');
            mediaImg.style.width = '';
        }

        const mediaTitle = document.createElement('h2');
        const icone = document.createElement('i');
        const medialikes = document.createElement('span');
        icone.setAttribute('class','fas fa-heart');
        mediaTitle.innerText=media[i].title;
        medialikes.innerText=media[i].likes;

        mediaDiv.appendChild(mediaImg);
        mediaDiv.appendChild(mediaTitle);
        mediaDiv.appendChild(icone);
        mediaDiv.appendChild(medialikes);
        mediaList.appendChild(mediaDiv);
    }

};

init();