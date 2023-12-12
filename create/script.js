let learner = ["Josh", "Thom", "Marvyn", "Mathias", "Huseyin", "Giuseppe", "Aurélien", "Alexis", "Ugur", "Noé", "Alice", "Jeremy" ];

function SectionLerner() {
    
    learner.forEach(element  => {
        let x = document.querySelector("article");
        let y = document.createElement("section");
        let z = document.createElement("p");


        x.appendChild(y);
        y.appendChild(z);
        z.appendChild(document.createTextNode(element));

        y.style.backgroundColor = RandomColor()
        
    })
}
SectionLerner();

function RandomColor(){
    let r = (Math.floor(Math.random()*(255)));
    let g = (Math.floor(Math.random()*(255)));
    let b = (Math.floor(Math.random()*(255)));
    return("rgb(" + r + ", " + g + ", " + b + ")");
};

