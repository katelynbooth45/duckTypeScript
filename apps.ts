const generateRandom: number = Math.floor(Math.random() * 15);

const ducks: HTMLCollectionOf<Element> = document.getElementsByClassName('duck'); 

interface ClickedDucks {
    style: string;
    addEventListener: Function;
}

interface changeColor {
    backgroundColor: string;
}

ducks[generateRandom].id = 'goose';

const clickedDucks: any[] = [];


const changeColor = (event) => {
    if (event.target.classList.contains('duck')) {
        event.target.style.backgroundColor = 'green';
        clickedDucks.push(event.target);
        console.log(clickedDucks);
    } 
    if (event.target.id === 'goose') {
        for (let duck of clickedDucks) {
            duck.style.backgroundColor = 'yellow';
        }
        event.target.style.backgroundColor = 'red';
    }
}

for (let i = 0; i < ducks.length; i++) {
    ducks[i].addEventListener('click', (event) => changeColor(event));
}