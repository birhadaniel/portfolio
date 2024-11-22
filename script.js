


// const side =document.querySelector("#sidemenu");
// const openbtn = document.querySelector(".fa-bars");


// openbtn.addEventListener("click", (e) => {
//     side.classList.toggle("active");

//     if(sidemenu.className=="active"){
//         // side.style.display="none"
//         openbtn.className="fa-solid fa-xmark";
//     }else{
//         openbtn.className="fa-solid fa-bars";
//         // side.style.display="block"
//     }
// });

const side =document.querySelector("#sidemenu");
const menuicon = document.querySelector("#menuicon");
const menubtn = menuicon.querySelector(".fa-bars");

menuicon.addEventListener("click", (e) =>{
    side.classList.toggle("active");
    
    const isopen= side.classList.contains("open");
    menubtn.setAttribute("class",isopen ? "fa-solid fa-xmark" : "fa-solid fa-bars");
});











