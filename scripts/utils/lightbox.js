function initlightbox(){

    const links = document.querySelectorAll('.containerImg');
    console.log(links)
    buildDOM();
    const lightbox = document.querySelector('.lightbox');
    const lightboxContainer = document.querySelector('.lightbox__container');


    links.forEach((link,index) => link.addEventListener('click', e => {
        e.preventDefault()
        //new lightbox(e.currentTarget.getAttribute('href'))
        lightbox.style.display = 'flex';
        lightboxContainer.appendChild(link);
        console.log(link);
        console.log(index);

        const lightboxNext = document.querySelector('.lightbox__next');
        lightboxNext.addEventListener('click', function(){

            if(index<links.length-1){
                index+=1;
            }else{
                index=0;
            }
            link=links[index];
            lightboxContainer.removeChild(lightboxContainer.firstChild);
            lightboxContainer.appendChild(link);
        })

        const lightboxPrev = document.querySelector('.lightbox__prev');
        lightboxPrev.addEventListener('click', function(){

            if(index<links.length-1){
                index+=1;
            }else{
                index=0;
            }
            link=links[index];
            lightboxContainer.removeChild(lightboxContainer.firstChild);
            lightboxContainer.appendChild(link);
        })


        
   /*//function qui fait défiler les photos en appuyant sur le bouton ENTER quand PREV sélectionner
    lightboxPrev.addEventListener('keydown', function(e) {
        if (e.key === "Enter") {
            lightboxPrev();
        }
    })
    
    // fait défiler les photos avec le bouton du clavier "<--"
    window.addEventListener('keydown', function (e) {
        if (e.key === "ArrowLeft") {
           lightboxPrev();
        }
    })

    // function qui fait défiler les photos au click du bouton NEXT
    lightboxNext.addEventListener('click', (e) => {
        e.preventDefault();
          lightboxNext();
    })
    //function qui fait défiler les photos en appuyant sur le bouton ENTER quand NEXT sélectionner
    lightboxNext.addEventListener('keydown', function(e) {
        if (e.key === "Enter") {
          lightboxNext();
        }
    })
    
    // fait défiler les photos avec le bouton du clavier "-->"
    window.addEventListener('keydown', function (e) {
        if (e.key === "ArrowRight") {
          lightboxNext();
        }
    })*/

    }))


    //fermeture de la lightbox
    const lightboxClose = document.querySelector(".lightbox__close");
    lightboxClose.addEventListener('click', function(){
        lightbox.removeChild(lightbox.firstChild);
        //lightbox.appendChild(lightboxClose);
        lightbox.style.display = "none";
    })
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