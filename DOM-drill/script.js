let ul = document.querySelector("ul");
let array = Array.from(ul.childNodes);
let body = document.querySelector("body");

array.forEach((element, index) => {
    if (element.nodeType === 1) {
        if (element.textContent.includes("Fast and Furious") && element !== ul.firstChild) {
            ul.prepend(element);
            element.classList.add("important");
        }

        element.addEventListener("click", () => {
            if (element.textContent.includes("Fast and Furious")) {
                alert(element.textContent + "The most important franchise ever, the story of DOM(inic) Toretto's family. It's not about car, it's about family.");
            } else {
                alert(element.textContent);
            }
        });

        for (let i = index + 1; i < array.length; i++) {
            if (element.isEqualNode(array[i])) {
                ul.removeChild(array[i]);
            }
        }
    }
});

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function sortListRandomly() {
    let listItems = Array.from(ul.children);
    shuffleArray(listItems);
    ul.innerHTML = ""; // Clear the current list

    // Re-add the shuffled items to the list
    listItems.forEach(item => {
        ul.appendChild(item);
    });

    // Ensure "Fast and Furious" is still the first child
    let fastAndFuriousElement = ul.querySelector(".important");
    ul.prepend(fastAndFuriousElement);
}

let important = document.querySelector('.important');
function getCloned() {
    let cloned = important.cloneNode(true);
    cloned.classList.remove("important");
    important.parentNode.insertBefore(cloned, important);
}

body.addEventListener("keyup", (e) => {
    switch (e.key) {
        case 'r':
            newArray = [];
            sortListRandomly();
            break;
        case 'd':
            getCloned();
            break;
        default:
            break;
    }
});

let div = document.createElement('div');
let select = document.createElement('select');

let optionImportant = document.createElement('option');
optionImportant.setAttribute('value', "important");
optionImportant.appendChild(document.createTextNode("important franchises"));

let optionNormal = document.createElement('option');
optionNormal.setAttribute('value', "normal");
optionNormal.appendChild(document.createTextNode("normal franchises"));

body.insertBefore(div, ul);
div.appendChild(select);
select.appendChild(optionImportant);
select.appendChild(optionNormal);

function filter() {
    
}



let elementList = document.querySelector('ul');
select.addEventListener('change', function() {
    let selectedOption = document.querySelector('select').value;
    let theMovie = document.querySelector('li.important');

    if (selectedOption === "important") {
        document.querySelectorAll('li').forEach(element => {
            element.style.display = "none";
        });
        theMovie.style.display = "block";
    }
});

