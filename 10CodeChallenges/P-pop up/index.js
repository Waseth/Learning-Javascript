const btn = document.querySelector('#btn-1')

function addParagraph(){
    const randomNum = Math.floor(Math.random() * 100);
    const pContent = 'The random number is: ' + randomNum;
    const newElement = document.createElement('p');
    newElement.textContent = pContent;
    document.body.appendChild(newElement);
}

btn.addEventListener("click", addParagraph);