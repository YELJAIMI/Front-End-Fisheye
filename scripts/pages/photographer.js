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
    
    console.log(+photographer.name);

    /*for (i=0;i<photographers.length;i++){
        if(photographers[i].id==idphotographe){
            photographer=photographers[i];
        }
    }*/
    
    const media = medias.filter(function(media){
        return media.photographerId == idphotographe;
    }
    );
    console.log(media);

    const mainphotographer = document.getElementById('main-photographer');
    const photographerTitle = document.createElement('h1');
    photographerTitle.innerHTML = photographer.name;
    mainphotographer.appendChild(photographerTitle);

    // Création de la liste des médias
    const mediaList = document.getElementById('main-media');
    for (i=0;i<media.length;i++){
        const mediadiv = document.createElement('div');
        mediadiv.className = 'media';
        const mediaImg = document.createElement('img');
        mediaImg.setAttribute('src',"assets/images/"+media[i].image+"");
        mediaImg.setAttribute('alt',media[i].title);
        mediaImg.style.width = '400px';
        mediadiv.appendChild(mediaImg);
        mediaList.appendChild(mediadiv);
    }

};

init();