const mainContainer = document.querySelector('.main-container');

const gridSize = 16;
const gridTotal = gridSize * gridSize;

for (i = 0; i < gridTotal; i++){
    const div = document.createElement('div');
    div.addEventListener('mouseover', () => {
        div.style.backgroundColor = '#16264C';
        div.style.borderColor = '#0f1b37';
    });
    mainContainer.append(div);
}

// function changeColor (){
//     div.style.backgroundColor = 'red';
// };

console.log(gridTotal);