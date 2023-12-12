let learner = ["Josh", "Thom", "Marvyn", "Mathias", "Huseyin", "Giuseppe", "Aurélien", "Alexis", "Ugur", "Noé", "Alice", "Jeremy" ];
let newLearner = learner.sort((a, b) => 0.5 - (Math.random()));

function SectionLearner() {
    newLearner.forEach(element  => {
        let x = document.querySelector("article");
        let y = document.createElement("section");
        let z = document.createElement("p");

        x.appendChild(y);
        y.appendChild(z);
        z.appendChild(document.createTextNode(element));

        let h = (Math.floor(Math.random()*(360)));
        let s = (Math.floor(Math.random()*(100)));
        let l = (Math.floor(Math.random()*(100)));
        let colorBg = ("hsl(" + h + ", " + s + "%, " + l + "%)");


        y.style.backgroundColor = colorBg;

        if(l < 50){
            z.style.color = "hsl(" + h + ", " + s + "%, " + 85 + "%)";
        } else {
            z.style.color = "hsl(" + h + ", " + s + "%, " + 15 + "%)";
        };
        
        
    })    
}
SectionLearner();

function RandomColor(){
    let r = (Math.floor(Math.random()*(255)));
    let g = (Math.floor(Math.random()*(255)));
    let b = (Math.floor(Math.random()*(255)));
    return("rgb(" + r + ", " + g + ", " + b + ")");
};


