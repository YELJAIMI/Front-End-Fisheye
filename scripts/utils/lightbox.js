// ouverture de la lightbox 
export function initlightbox() {
    const links = document.querySelectorAll(".containerLink");
    //console.log(links);
    buildDOM();
    const lightbox = document.querySelector(".lightbox");
    const lightboxContainer = document.querySelector(".lightbox__container");
    const main = document.querySelector("#main-photograph");
    const contactModal = document.querySelector("#contact_modal");
    const lightboxClose = document.querySelector(".lightbox__close");



    links.forEach((link, index) =>
      link.addEventListener("click", (e) => {
        e.preventDefault();
        main.style.display = "none"
        lightbox.style.display = "flex";
        lightboxClose.focus()


  
        console.log(link);
        function clonelink(link) {
          let format = link.href.split(".");
          const img = link.querySelector("img") || link.querySelector("video");
          //console.log(format);
          let med = null;
          if (format.at(-1) == "mp4") {
            med = document.createElement("video");
            med.setAttribute("class", "container");
            med.setAttribute("controls", "controls");
            med.setAttribute("title", img.title);
            med.setAttribute("src", img.src);
            med.setAttribute("tabindex", "3");

            //titre video lightbox
           const titleVideo = document.createElement('span');
           //lightboxContainer.appendChild(titleVideo);
           titleVideo.setAttribute("class","titlemedia");
           titleVideo.textContent = med.title; 
            
          } else {
            med = document.createElement("img");
            med.setAttribute("class", "image-full-screen");
            med.setAttribute("alt", img.alt);
            med.setAttribute('title', link.title);
            med.setAttribute("src", img.src);
            med.setAttribute("tabindex", "3");
          }
          return med;
        }
        
        lightboxContainer.appendChild(clonelink(link));
        //titre image lightbox
        const title = document.createElement('span');
        title.setAttribute("class", "phototitle");
        title.textContent = link.title;
        lightboxContainer.appendChild(title);
        //console.log(link);
        //console.log(index);
  
        const lightboxNext = document.querySelector(".lightbox__next");
        const lightboxPrev = document.querySelector(".lightbox__prev");
  
        function next() {
        //   lightboxNext.addEventListener('click', function(){
  
          if (index < links.length - 1) {
            index += 1;
          } else {
            index = 0;
          }
          let newlink = links[index];
          lightboxContainer.removeChild(lightboxContainer.childNodes[0]);
          lightboxContainer.appendChild(clonelink(newlink));
        }
  
        function prev() {
          //console.log(index);
          //console.log(links.length);
          if (index > 0) {
            index -= 1;
          } else {
            index = links.length - 1;
          }
          let newlink = links[index];
          lightboxContainer.removeChild(lightboxContainer.childNodes[0]);
          lightboxContainer.appendChild(clonelink(newlink));
        }
        
        //fermeture de la lightbox
        lightboxClose.addEventListener("click", function () {
          lightbox.removeChild(lightbox.firstChild);
          //lightbox.appendChild(lightboxClose);
          lightbox.style.display = "none";
          main.style.display = "block"
        //   contactModal.style.display = "flex"
          initlightbox();
        });
  
        // Ferme la lighbox avec boutton "Escape"
        window.addEventListener("keydown", function (e) {
          if (e.key === "Escape" || e.key === "Esc") {
            lightbox.removeChild(lightbox.firstChild);
            lightbox.style.display = "none";
            main.style.display = "block"
            // contactModal.style.display = "flex"
            initlightbox();
          }
        });
  
        // function qui fait défiler les photos au click du bouton NEXT
        lightboxNext.addEventListener("click", function (e) {
          e.preventDefault();
          next();
        });
  
        lightboxPrev.addEventListener("click", function () {
          e.preventDefault();
          prev();
        });
  
        // fait défiler les photos avec le bouton du clavier "-->"
        window.addEventListener("keydown", function (e) {
          if (e.key === "ArrowRight"){
            next();
          }
          if (e.key === "ArrowLeft") {
            prev();
          }
        });
  
        
      })
    );
  }
  
  function buildDOM() {
    const lightbox = document.querySelector(".lightbox");
    const dom = document.createElement("div");
  
    dom.classList.add("lightbox_child");
    dom.innerHTML = `
      <button title="close"  class="lightbox__close" tabindex="1"></button>
      <button title="next"  class="lightbox__next"tabindex="4"></button>
      <div class="lightbox__container"></div> 
      <button title="prev"  class="lightbox__prev" tabindex="2"></button>`;
    lightbox.appendChild(dom);
  }
  