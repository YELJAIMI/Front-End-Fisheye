import {sortMedia} from '../utils/Domtrie.js';
import {initlightbox} from '../utils/lightbox.js';

 // OBTENIR les parametres URL
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const idphotographe = urlParams.get('idphotographe');
async function getPhotographers() {
    // Penser à remplacer par les données récupérées dans le json
    let datas = null;
    await fetch('./data/photographers.json')
    .then(function(data) {
    return data.json();
    })
    .then(function(result) {
    datas = result;
    })
    return datas; 
}
let photographerPrice = 0;

async function init() {
    // Récupère les datas des photographes
    const  datas  = await getPhotographers();
    const photographers = datas.photographers;
    const medias = datas.media;
    
    //recupére le photographe=>l'id
    const photographer = photographers.find(function(photographer){
        return photographer.id == idphotographe;
    }
    );
    
    //console.log(photographer.name);

    const media = medias.filter(function(media){
        return media.photographerId == idphotographe;
    }
    );

    sortMedia(media);
    //console.log(media);
    //début header photographe
    const mainphotographer = document.querySelector('.photograph-header');
    mainphotographer.setAttribute('aria-label', 'information du photographe');
    const imglogo = document.getElementById('imglogo');
    imglogo.setAttribute('aria-label', 'lien vers la page d\'acceuil');
    const photographerTitle = document.createElement('h1');
    photographerTitle.setAttribute("id", 'namephotographer');
    const country = document.createElement('h2');
    const tagline = document.createElement('p');
    const button = document.getElementById('contact_button');
    button.setAttribute('title', 'contactez-moi');
    photographerTitle.innerHTML = photographer.name;
    country.innerHTML = photographer.country+', '+photographer.city;
    tagline.innerHTML = photographer.tagline;
    const profil = document.createElement('img');
    profil.setAttribute('src',"./assets/photographers/"+photographer.portrait);
    profil.setAttribute('class',"profil");
    profil.setAttribute('alt', photographerTitle.outerHTML);
    country.setAttribute("class", "country");
    tagline.setAttribute("class", "tag");
    button.insertAdjacentHTML('beforebegin', photographerTitle.outerHTML);
    button.insertAdjacentHTML('beforebegin', country.outerHTML);
    button.insertAdjacentHTML('beforebegin', tagline.outerHTML);
    button.insertAdjacentHTML('afterend', profil.outerHTML);

    photographerPrice = photographer.price;
    
    displayMedia(media);
}
// Création de la liste des médias
export function displayMedia(media){
    let countertotalLikes = 0;
    const mediaList = document.getElementById('main-media');
    for (let i=0;i<media.length;i++){
        const mediaDiv = document.createElement('article');
        mediaDiv.className = 'media';
        const lienImg = document.createElement('a');
        lienImg.className = 'containerLink';   
        lienImg.setAttribute("title",media[i].title);
        lienImg.setAttribute("aria-label",media[i].title);
        let mediaImg = null;
        if(media[i].image){
        lienImg.setAttribute("href","./assets/images/" +media[i].image+""); 
        mediaImg = document.createElement('img');
        mediaImg.setAttribute("class", "containerImg");
        mediaImg.setAttribute('src',"./assets/images/" +media[i].image+"");
        mediaImg.setAttribute('alt',media[i].title);
        mediaImg.style.width = '';
        }else{
            lienImg.setAttribute("href","./assets/images/" +media[i].video+""); 
            mediaImg = document.createElement('video');
            mediaImg.setAttribute('src', "./assets/images/"  +media[i].video+"");
            mediaImg.setAttribute('class', 'containerImg');
            mediaImg.setAttribute('alt',media[i].title);
            mediaImg.setAttribute('controls','controls');
            mediaImg.style.width = '';
        }

        const mediaTitle = document.createElement('h2');
        mediaTitle.setAttribute('class', 'titlephoto');
        const icone = document.createElement('button');
        const medialikes = document.createElement('span');
        icone.setAttribute('class','fas fa-heart');
        icone.setAttribute('id', 'heart');
        icone.setAttribute('aria-label', 'likes');
        icone.setAttribute('alt', 'button');
        mediaTitle.innerText=media[i].title;
        medialikes.innerText=media[i].likes;
    
        lienImg.appendChild(mediaImg);
        lienImg.appendChild(mediaTitle);
        mediaDiv.appendChild(lienImg);
        mediaDiv.appendChild(icone);
        mediaDiv.appendChild(medialikes);
        mediaList.appendChild(mediaDiv);

 
        countertotalLikes+= parseInt(media[i].likes);
    
    } 

      // DOM FOOTER    *************************************
      counterlike();
      function counterlike(){ 
        const footer = document.createElement('footer');
        const body = document.querySelector('body');

        body.appendChild(footer);
        
        const footerInfo = document.createElement('div');
        footer.appendChild(footerInfo);
        footerInfo.setAttribute("class","footerinfo");
  
      const totalLikes = document.createElement('div');
      footerInfo.appendChild(totalLikes);
      totalLikes.setAttribute("class","totallikes");
  
      const textNumber = document.createElement('span');
      totalLikes.appendChild(textNumber);
      textNumber.setAttribute("class","textnumber");
      textNumber.setAttribute("aria-label","nombre total de likes");
      textNumber.textContent = countertotalLikes;
  
      const HeartFooter = document.createElement('i');
      totalLikes.appendChild(HeartFooter);
      HeartFooter.setAttribute("class","fas fa-heart");
  
      //ECRIT le prix/jour dans le FOOTER
      const price = document.createElement('div');
      footerInfo.appendChild(price);
      price.setAttribute("class","price");
      price.innerHTML = `<span class="price">${photographerPrice}€/jour</span>`;
    }

     //compteur des likes 
     const likes = document.querySelectorAll('.fas', '.fa-heart');
     likes.forEach(like => like.addEventListener('click', e =>{
         e.preventDefault();
         let spanLikes = like.nextSibling;
         let valueLikes = spanLikes.innerHTML;
         let spanTotalLikes = document.querySelector('.textnumber');
         //console.log(spanTotalLikes);
         spanLikes.innerHTML = parseInt(valueLikes) +1;
         spanTotalLikes.innerText = parseInt(spanTotalLikes.textContent) +1;
         //counterlike();
     }))
    initlightbox();
};

init();