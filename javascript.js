const mainContainer = document.querySelector('.main-container');

const gridSize = 16;
const gridTotal = gridSize * gridSize;

for (i = 0; i < gridTotal; i++){
    const div = document.createElement('div');
    mainContainer.append(div);
}

console.log(gridTotal);