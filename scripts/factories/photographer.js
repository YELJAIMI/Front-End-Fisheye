function photographerFactory(data) {
    const { name, portrait, id, city, country, tagline, price} = data;

    const picture = `/Front-End-Fisheye/assets/photographers/${portrait}`;
    function getUserCardDOM() {
        const article = document.createElement( 'article' );
        const img = document.createElement( 'img' );
        img.setAttribute("src", picture);
        img.setAttribute('class', 'photo');
        const h2 = document.createElement( 'h2' );
        h2.textContent = name;
        const h3 = document.createElement('h3');
        h3.setAttribute("class", "city");
        h3.textContent = city+', ';
        const h4 = document.createElement('h4');
        h4.setAttribute("class", "country");
        h4.textContent = country;
        const p = document.createElement('p');
        p.setAttribute("class", "tagline");
        p.textContent = tagline;
        const div = document.createElement('div');
        div.setAttribute("class", "price");
        div.textContent = price+'€/jour';
        let lien = document.createElement('a');
        lien.setAttribute("href", "/Front-End-Fisheye/photographer.html?idphotographe="+id);
        article.appendChild(img);
        article.appendChild(h2);
        article.appendChild(h3);
        article.appendChild(h4);
        article.appendChild(p);
        article.appendChild(div);
        lien.appendChild(article);
        return(lien);
    }
    return { name, picture, getUserCardDOM }
}