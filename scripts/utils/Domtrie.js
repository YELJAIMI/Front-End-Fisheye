const body = document.querySelector('body');


// DOM   SECTION trier avec menu déroulant  ****************

const mainPhotograph = document.getElementById('main-photograph');

const sectionTrier = document.createElement('section');
sectionTrier.id = 'filter';
mainPhotograph.appendChild(sectionTrier);
sectionTrier.setAttribute("role","listbox");


    const label = document.createElement('span');
    label.textContent = 'Trier par';
    label.setAttribute("for","trier les images");
    label.setAttribute("class","trierpar"),
    label.setAttribute("aria-label","trier par");
    sectionTrier.appendChild(label);

    const divSelect = document.createElement('div');
    sectionTrier.appendChild(divSelect);
    divSelect.setAttribute("class","divselect");

      const select = document.createElement('select');
      divSelect.appendChild(select);
      select.setAttribute("id","select");
      
          
           const optiondate = document.createElement('option');
           select.appendChild(optiondate);
           optiondate.setAttribute("value","date");
           optiondate.setAttribute("class","new-option-date")
           optiondate.setAttribute("selected","");
           optiondate.textContent = "Date";

           const optionPopularite = document.createElement('option');
           select.appendChild(optionPopularite);
           optionPopularite.setAttribute("value","popularite");
           optionPopularite.setAttribute("id","popularite");
           optionPopularite.setAttribute("class","new-option-popularite");
           optionPopularite.textContent = "Popularite";

           const optionTitre = document.createElement('option');
           select.appendChild(optionTitre);
           optionTitre.setAttribute("value","titre");
           optionTitre.setAttribute("class","new-option-titre");
           optionTitre.setAttribute("id","titre");
           optionTitre.textContent = "Titre";


           
           function sortMedia(filterMedia) {
    
   
            const selectMenu = document.getElementById('select');
        
            selectMenu.addEventListener('change', function() {
        
             document.getElementById('main-photograph').innerHTML = "";
        
             // classement alphabethique des titres
          
                if (this.value == "titre") {
        
                    filterMedia = filterMedia.sort((a, b) => {
                       if (a.title < b.title) { return -1;}
                       else {return 1;};
                       
                    });
        
              
             
        
                 // classement des likes décroissant  
                } else if (this.value == "popularite") {
        
                    filterMedia = filterMedia.sort((a, b) => {
                       return b.likes - a.likes;
        
                    }); 
           
                 
        
                    // classement par date
                }else if (this.value == "date") {
        
                    filterMedia = filterMedia.sort((a, b) => {
                       let aDate = a.date;
                       let bDate = b.date;
                    
                       if (aDate < bDate) {
                           return -1;
                        } else if (aDate == bDate) {
                           return 0;
                        } else {
                           return 1;
                        }
                    
                    });
                    
                    
                 }
                 
                 filterMedia.forEach((media) => {
                    init(media);
                    
                 })
        
        
              });
              
           }