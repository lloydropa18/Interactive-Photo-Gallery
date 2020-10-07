const lightbox = document.createElement('div');
lightbox.id = "lightbox";
document.body.appendChild(lightbox);
const IMAGES = document.querySelectorAll('img');
let image =  document.createElement('img');
let caption = document.createElement('p');
let searchBar = document.querySelector('#searchbar');


IMAGES.forEach(img =>{
    img.addEventListener('click',()=>{
        lightbox.classList.toggle('active');
        let src = img.getAttribute('src');
        src = src.replace('thumbnails/', "");
        image.setAttribute('src',src);
        lightbox.appendChild(image); 
        caption.innerHTML = img.alt;
        lightbox.append(caption)
    }); 
    searchBar.addEventListener('keyup',()=>{
        let textEntered = searchBar.value;
        let imgAlt = img.alt.toLowerCase();
        let originTextMatch =  imgAlt.includes(textEntered.toLowerCase());
        if (!originTextMatch){
            img.style.display = "none"
        } else {
            img.style.display = "block";
        }     
    });
});

lightbox.addEventListener('click',()=>{
    lightbox.classList.toggle('active');
    lightbox.removeChild(image);
});

