class lightbox{
static init (){
    const links = document.querySelectorAll('video[src$=".mp4"], img[src$=".jpg"], img[src$=".jpeg"]')
    .forEach(link => link.addEventListener('click', e => {
        e.preventDefault()
        new lightbox(e.currentTarget.getAttribute('href'))
        console.log(links)
    }))
}

constructor(url){
    this.element = this.buildDOM(url);
    this.loadImages(url);
    document.body.appendChild(this.element)
}

loadImage(url){
    const images = new Image();
    const container = this.element.querySelector('.lightbox__container');
    const loader = document.createElement('div');
    loader.classList.add('lightbox__loader');
    container.appendChild(loader);
    images.onload = function(){
        console.log('charger');
    container.removeChild(loader);
    container.appendChild(images)
    }
    images.src = url;
}

buildDOM(url){
    const dom = document.createElement('div')
    dom.classList.add('lightbox')
    dom.innerHTML = `    <div class="lightbox">
    <button class="lightbox__close">Fermer</button>
    <button class="lightbox__next">suivant</button>
    <button class="lightbox__prev">précédent</button>
    <div class="lightbox__container"></div>
  </div>`
  return dom;
}


}