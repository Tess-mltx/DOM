let ul = document.querySelector("ul");
console.log(ul);

ul.childNodes.forEach(element => {
    if (element.nodeType === 1) {
        if (element.textContent.includes("Fast and Furious") && element !== ul.firstChild) {
            ul.prepend(element);
            element.classList.add("important");
        }

    }
    element.addEventListener("click", () => {
        if (element.textContent.includes("Fast and Furious")) {
            alert(element.textContent + "The most important franchise ever, the story of DOM(inic) Toretto's family. It's not about car, it's about family.");
        } else {
            alert(element.textContent);
        }
    })
});

console.log();

