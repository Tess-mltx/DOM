const _initTime = Date.now()

const getElapsedTime = () => {
  return Number((Date.now() - _initTime) / 1000).toFixed(2) + 's'
}

const clickOnSquare = (e) => {
  let displayedSquareWrapper = document.querySelector('.displayedsquare-wrapper')
  let classColor = e.target.classList[1]
  let elapsedTime = getElapsedTime()
  console.log(classColor);
  console.log(elapsedTime);

  let displayedSquare = document.createElement("div")
  displayedSquare.classList.add('displayedsquare', classColor)
  displayedSquareWrapper.appendChild(displayedSquare)

  let listNewLog = document.querySelector('ul')
  let newLog = document.createElement('li')
  newLog.appendChild(document.createTextNode(classColor + " " + elapsedTime))
  listNewLog.appendChild(newLog)
}

const actionSquares = document.querySelectorAll('.actionsquare')
for (let actionSquare of actionSquares) {
  actionSquare.addEventListener('click', clickOnSquare)
}


const body = document.querySelector('body')
body.addEventListener("keydown", (e) => {
  switch (e.key) {
    case ' ':
      let h = (Math.floor(Math.random()*(360))); 
      let s = (Math.floor(Math.random()*(100)));
      let l = (Math.floor(Math.random()*(100)));
      let color = ("hsl(" + h + ", " + s + "%, " + l + "%)");
      body.style.backgroundColor = color;
      console.log(color);
      break;
    case 'l':
      let ul = document.querySelector('ul')
      ul.innerHTML = '';
      break;
    case 's':
      let displayedWrapper = document.querySelector('.displayedsquare-wrapper')
      displayedWrapper.innerHTML = '';
      break;
    default :
      break;
  } 
});

const clickOnDisplayerSquare = (e) => {
  let classColor = e.target.classList[1];
  alert("this square is " + classColor);
};

const actionDisplayedSquares = document.querySelectorAll('.displayedsquare-wrapper');
for (let actionDisplayedSquare of actionDisplayedSquares) {
  actionDisplayedSquare.addEventListener('click', clickOnDisplayerSquare)
}