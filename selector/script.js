/*
*/

let classImportant = document.querySelector(".important");
classImportant.setAttribute("title", "This is an important item");

function displayImg(){
    let imgImp = document.querySelectorAll("img")
    imgImp.forEach(img => {
        if (img.className === "important"){

        } else {
            img.style.display = "none";
        }
    })
}
displayImg();

function displayConssoleP(){
    let paragraph = document.querySelectorAll("p");
    paragraph.forEach(p => {
        if (p.classList.length == 0){
            console.log(p);
        } else {
            console.log(p + p.classList);
        }
    })
}
displayConssoleP();