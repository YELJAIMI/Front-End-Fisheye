import {sortMedia} from '/Front-End-Fisheye/scripts/utils/Domtrie.js';
import {initlightbox} from '/Front-End-Fisheye/scripts/utils/lightbox.js';


const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const idphotographe = urlParams.get('idphotographe');
async function getPhotographers() {
    // Penser à remplacer par les données récupérées dans le json
    let datas = null;
    await fetch('/Front-End-Fisheye/data/photographers.json')
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
let photographerPrice = 0;

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

    sortMedia(media);
    console.log(media);
    //début header photographe
    const mainphotographer = document.querySelector('.photograph-header');
    mainphotographer.setAttribute('aria-label', 'information du photographe');
    const imglogo = document.getElementById('imglogo');
    imglogo.setAttribute('aria-label', 'lien vers la page d\'acceuil');
    const photographerTitle = document.createElement('h1');
    photographerTitle.setAttribute("id", 'namephotographer');
    const country = document.createElement('h3');
    //const city = document.createElement('h4');
    const tagline = document.createElement('p');
    const button = document.getElementById('contact_button');
    button.setAttribute('title', 'contactez-moi');
    photographerTitle.innerHTML = photographer.name;
    country.innerHTML = photographer.country+', '+photographer.city;
    tagline.innerHTML = photographer.tagline;
    //city.innerHTML = photographer.city;
    //mainphotographer.appendChild(photographerTitle)
    const profil = document.createElement('img');
    profil.setAttribute('src',"/Front-End-Fisheye/assets/photographers/"+photographer.portrait);
    profil.setAttribute('class',"profil");
    profil.setAttribute('alt', photographerTitle.outerHTML);
    country.setAttribute("class", "country");
    tagline.setAttribute("class", "tag");
    //mainphotographer.appendChild(profil);
    button.insertAdjacentHTML('beforebegin', photographerTitle.outerHTML);
    button.insertAdjacentHTML('beforebegin', country.outerHTML);
    button.insertAdjacentHTML('beforebegin', tagline.outerHTML);
    button.insertAdjacentHTML('afterend', profil.outerHTML);

    // Création de la liste des médias
    photographerPrice = photographer.price;

    displayMedia(media);
}
export function displayMedia(media){
    let countertotalLikes = 0;
    const mediaList = document.getElementById('main-media');
    for (let i=0;i<media.length;i++){
        const mediaDiv = document.createElement('article');
        mediaDiv.className = 'media';
        const lienImg = document.createElement('a');
        lienImg.className = 'containerImg';
        lienImg.setAttribute("href","/Front-End-Fisheye/assets/images/" +media[i].image+"");   
        lienImg.setAttribute("title",media[i].title);
        lienImg.setAttribute("aria-label",media[i].title);
        let mediaImg = null;
        if(media[i].image){
        mediaImg = document.createElement('img');
        mediaImg.setAttribute("class", "containerImg");
        mediaImg.setAttribute('src',"/Front-End-Fisheye/assets/images/" +media[i].image+"");
        mediaImg.setAttribute('alt',media[i].title);
        mediaImg.style.width = '';
        }else{
            mediaImg = document.createElement('video');
            mediaImg.setAttribute('src', "/Front-End-Fisheye/assets/images/"  +media[i].video+"");
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
        icone.setAttribute('aria-lebel', 'likes');
        medialikes.setAttribute('class', 'numberlikes');
        mediaTitle.innerText=media[i].title;
        medialikes.innerText=media[i].likes;
        
        lienImg.appendChild(mediaImg);
        mediaDiv.appendChild(lienImg);
        mediaDiv.appendChild(mediaTitle);
        mediaDiv.appendChild(icone);
        mediaDiv.appendChild(medialikes);
        mediaList.appendChild(mediaDiv);

        //likes.forEach(like => {
    
        //let spanLikes = like.nextSibling;
        //console.log(spanLikes);
        //let valueLikes = spanLikes.innerHTML;
        countertotalLikes+= parseInt(media[i].likes);
        //spanLikes.innerHTML = parseInt(valueLikes) +1;
        //})
    
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
      //totalLikes.insertAdjacentText('afterbegin', countertotalLikes);
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
         console.log(spanTotalLikes);
         spanLikes.innerHTML = parseInt(valueLikes) +1;
         spanTotalLikes.innerText = parseInt(spanTotalLikes.textContent) +1;
         //counterlike();
     }))
    initlightbox();
};

init();