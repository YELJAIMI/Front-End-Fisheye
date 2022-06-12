/*async function getdata(){ 
await fetch('../../data/photographers.json')
.then(function(data) {
    console.log(data)
return data.json();
})
.then(function(result) {
    console.log(result.photographers)
return result.photographers;
})
}
*/
    async function getPhotographers() {
        // Penser à remplacer par les données récupérées dans le json
        let photographers = null;
        await fetch('../../data/photographers.json')
        .then(function(data) {
        console.log(data)
        return data.json();
        })
        .then(function(result) {
        console.log(result.photographers)
        photographers = result.photographers;
        })
        console.log(photographers);
/*
        const photographers = [
            {
                "name": "Ma data test",
                "id": 1,
                "city": "Paris",
                "country": "France",
                "tagline": "Ceci est ma data test",
                "price": 400,
                "portrait": "account.png"
            },
            {
                "name": "Autre data test",
                "id": 2,
                "city": "Londres",
                "country": "UK",
                "tagline": "Ceci est ma data test 2",
                "price": 500,
                "portrait": "account.png"
            },
        ]
        */
        // et bien retourner le tableau photographers seulement une fois
        return photographers; 
           // ({ photographers: [...photographers, ...photographers, ...photographers]})
         //({photographers:[...photographers]}); 
    }

    async function displayData(photographers) {
        const photographersSection = document.querySelector(".photographer_section");

        photographers.forEach((photographer) => {
            const photographerModel = photographerFactory(photographer);
            const userCardDOM = photographerModel.getUserCardDOM();
            photographersSection.appendChild(userCardDOM);
        });
    };

    async function init() {
        // Récupère les datas des photographes
        const  photographers  = await getPhotographers();
        console.log(photographers);
        displayData(photographers);
    };
    
    init();
    