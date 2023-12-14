function LastInFirstOne(){
    let ol = document.querySelector('ol');
    let li5 = ol.children[4]
    ol.insertBefore(li5, ol.firstChild);
};

function LastInFirstTwo(){
    let ol = document.querySelector('ol');
    let lastElement = ol.lastElementChild;
    ol.insertBefore(lastElement, ol.firstChild);
}
LastInFirstTwo();

// -----------------
function inverseTitle(){
    let parentSection = document.querySelector('main');
    let secondeSection = parentSection.children[1];
    let thirdSection = parentSection.children[2];
    let secondeTitle = secondeSection.querySelector('h2');
    let thirdTitle = thirdSection.querySelector('div > h2');
    secondeSection.appendChild(thirdTitle);
    thirdSection.appendChild(secondeTitle);
}
inverseTitle()

// -----------------
let DOM = document;
let lastChild = document.querySelector('html');
DOM.removeChild(lastChild)
