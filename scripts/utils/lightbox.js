export function initlightbox(){

    const links = document.querySelectorAll('.containerImg');
    console.log(links)
    buildDOM();
    const lightbox = document.querySelector('.lightbox');
    const lightboxContainer = document.querySelector('.lightbox__container');


    links.forEach((link,index) => link.addEventListener('click', e => {
        e.preventDefault()
        //new lightbox(e.currentTarget.getAttribute('href'))
        lightbox.style.display = 'flex';

        function clonelink(link){
            let format = link.src.split('.');
            let med = null;
            if (format.at(-1) == 'mp4') {
                med = document.createElement('video');
                med.setAttribute('class','container');
                med.setAttribute('controls', 'controls');
                med.setAttribute('title', link.title);
                med.setAttribute('src', link.src); 
            }else{ 
                med = document.createElement('img');
                med.setAttribute('class', 'image-full-screen');
                med.setAttribute('alt', link.alt);
                med.setAttribute('src', link.src);
            }
            return med;
        }

        lightboxContainer.appendChild(clonelink(link));
        console.log(link);
        console.log(index);

        const lightboxNext = document.querySelector('.lightbox__next');
        lightboxNext.addEventListener('click', function(){
          
            if(index<links.length-1){
                index+=1;
            }else{
                index=0;
            }
            let newlink=links[index];
            lightboxContainer.removeChild(lightboxContainer.childNodes[0]);
            lightboxContainer.appendChild(clonelink(newlink));
        })

        const lightboxPrev = document.querySelector('.lightbox__prev');
        lightboxPrev.addEventListener('click', function(){

            console.log(index);
            console.log(links.length);
            if(index>0){
                index-=1;
            }else{
                index=links.length-1;
            }
            let newlink=links[index];
            lightboxContainer.removeChild(lightboxContainer.childNodes[0]);
            lightboxContainer.appendChild(clonelink(newlink));
        })

        //fermeture de la lightbox
            const lightboxClose = document.querySelector(".lightbox__close");
                lightboxClose.addEventListener('click', function(){
                lightbox.removeChild(lightbox.firstChild);
                //lightbox.appendChild(lightboxClose);
                lightbox.style.display = "none";
                initlightbox();
            })

        // Ferme la lighbox avec boutton "Escape"
            window.addEventListener('keydown', function (e) {
                if (e.key === "Escape" || e.key === "Esc") {
                lightbox.removeChild(lightbox.firstChild);
                lightbox.style.display = "none"; 
                initlightbox();  
                };
            });

                /*let i = 0;
                let lienimage = document.querySelectorAll('.lienimg');
                //const lienimage = document.querySelectorAll('.lienimg');
                
                let allMedia = [];
                
            
                for (let href of lienimage ) {
                   allMedia.push(href);
                }*/


// selectionne l'image de la lightbox
const images = document.getElementsByClassName('image-full-screen');
//selectionne la video de la lightbox
const focusVideo = document.getElementsByClassName('container');
//selectionne tous les éléments focusables
 const focusableElements = `${lightboxClose},${lightboxNext},${images},${focusVideo},${lightboxPrev},`;
//selectionne la lightbox
 const selectLightbox = document.querySelector('.lightbox');
//premier éléments focusable
 const firstFocusableElememt = lightboxNext;
 //contenu de tous
 const focusableElement = focusableElements;
 //dernier élément focusable
 const lastFocusableElement = lightboxClose;

 document.addEventListener('keydown', function(e) {
    let isTabPressed = e.key === 'Tab';
    if (!isTabPressed) {
      return;
    }

    if (e.shiftKey) { //les touches shift + tab (combinaison)
        if (document.activeElement === firstFocusableElememt) {
            firstFocusableElememt.focus();
            lastFocusableElement.focus();
            //selectLightbox.focus();
            e.preventDefault();
        }
      } else { // la touche tabulation appuyer
        if (document.activeElement === lastFocusableElement) { 
          //firstFocusableElememt.focus(); 
          focusableElements.focus();
          lightboxContainer.focus();
          e.preventDefault();
        }
      }
    }); 
    firstFocusableElememt.focus();
                    
                    // ouvre la lightbox avec touche "ENTER"
                        lightboxContainer.addEventListener('keydown', function(e) {
                        if (e.key === "Enter") {
                            lightbox.remove(lienimage);
                            lightbox.style.display = "none";
                            initlightbox();
                        }
                    });


 
        // function qui fait défiler les photos au click du bouton PREV
                lightboxPrev.addEventListener('click', function (e) {
                    e.preventDefault();
                    lightboxPrev;
                });
                
        //function qui fait défiler les photos en appuyant sur le bouton ENTER quand PREV sélectionner
                lightboxPrev.addEventListener('keydown', function(e) {
                    if (e.key === "Enter") {
                        lightboxPrev;
                    }
                })
        // fait défiler les photos avec le bouton du clavier "<--"
                window.addEventListener('keydown', function (e) {
                    if (e.key === "ArrowLeft") {
                       lightboxPrev;
                    }
                    initlightbox;
        
                })
    

        /*// function qui fait défiler les photos au click du bouton NEXT
                lightboxNext.addEventListener('click', function(e) {
                e.preventDefault();
                lightboxNext;
            })

    //function qui fait défiler les photos en appuyant sur le bouton ENTER quand NEXT sélectionner
                lightboxNext.addEventListener('keydown', function(e) {
                if (e.key === "Enter") {
                lightboxNext;
            }
        })
    
    // fait défiler les photos avec le bouton du clavier "-->"
                window.addEventListener('keydown', function (e) {
                if (e.key === "ArrowRight") {
                lightboxNext;
            }
        })*/

}))

}

function buildDOM(){
    const lightbox = document.querySelector('.lightbox');
    const dom = document.createElement('div');

    dom.classList.add('lightbox_child')
    dom.innerHTML = `
    <button class="lightbox__close"></button>
    <button class="lightbox__next"></button>
    <div class="lightbox__container"></div> 
    <button class="lightbox__prev"></button>` 
  lightbox.appendChild(dom);
}