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
    const country = document.createElement('h3');
    //const city = document.createElement('h4');
    const tagline = document.createElement('p');
    const button = document.getElementById('contact_button');
    photographerTitle.innerHTML = photographer.name;
    country.innerHTML = photographer.country+', '+photographer.city;
    tagline.innerHTML = photographer.tagline;
    //city.innerHTML = photographer.city;
    //mainphotographer.appendChild(photographerTitle)
    const profil = document.createElement('img');
    profil.setAttribute('src',"/assets/photographers/"+photographer.portrait);
    profil.setAttribute('class',"profil");
    country.setAttribute("class", "country");
    tagline.setAttribute("class", "tag");
    //mainphotographer.appendChild(profil);
    button.insertAdjacentHTML('beforebegin', photographerTitle.outerHTML);
    button.insertAdjacentHTML('beforebegin', country.outerHTML);
    button.insertAdjacentHTML('beforebegin', tagline.outerHTML);
    button.insertAdjacentHTML('afterend', profil.outerHTML);

    // Création de la liste des médias
    const mediaList = document.getElementById('main-media');
    for (i=0;i<media.length;i++){
        const mediaDiv = document.createElement('article');
        mediaDiv.className = 'media';
        const lienImg = document.createElement('a');
        lienImg.className = 'lienimg';
        lienImg.setAttribute("href",media[i].video);
        lienImg.setAttribute("href",media[i].image);   
        lienImg.setAttribute("title",media[i].title);
        lienImg.setAttribute("aria-label",media[i].title);
        let mediaImg = null;
        if(media[i].image){
        mediaImg = document.createElement('img');
        lienImg.setAttribute("href", media[i].video);
        mediaImg.setAttribute("class", "artImg");
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
        
        lienImg.appendChild(mediaImg);
        mediaDiv.appendChild(lienImg);
        mediaDiv.appendChild(mediaImg);
        mediaDiv.appendChild(mediaTitle);
        mediaDiv.appendChild(icone);
        mediaDiv.appendChild(medialikes);
        mediaList.appendChild(mediaDiv);
    }
};

init();