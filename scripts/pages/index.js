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
        return photographers; 
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
    