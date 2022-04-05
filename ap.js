const auth = ""
const next = document.querySelector(".next");
const input = document.querySelector("input");
const searchbutton = document.querySelector(".searchbutton"); 

let pagenr = 1;
let search = false; 
let query = "";

input.addEventListener("input", (e) => {
    e.preventDefault();
    query = e.target.value;
});

async function curatedphotos(pagenr) {
    const data = await fetch (data.json)
}

const result= await data.json(); 
result.photos.foreach((photos) => {
    const pic = document.createElement("div");
    pic.innerHTML = `<img src=${photos.src.large}
            <p>Photo :${photos.name} </p>
        <a href=${photos.src.large}>Download</a>
         `;  
        document.querySelector(".gallery").appendChild(pic); 
});
