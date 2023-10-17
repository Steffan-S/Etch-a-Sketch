const mainContainer = document.querySelector('#main-container');

let gridSize = 16; // default grid size (on page load)
createGrid(gridSize);

// Grid size button
const gridSizeButton = document.querySelector('button');

gridSizeButton.addEventListener('click', () => {
    let currentGridSize = gridSize;
    console.log(currentGridSize + ' current grid size');
    gridSize = prompt('Enter grid size');

    if (gridSize != null && gridSize < 50 && !isNaN(gridSize)) {
        console.log(gridSize + ' I want a new grid with this grid size');
        deleteGrid(currentGridSize);
        createGrid(gridSize);
    } else {
        console.log(gridSize + ' not a great succes');
    }
});

function createGrid(grid){
    const gridTotal = grid * grid;    
    console.log(gridTotal + ' creating new grid');

    const gridItemHeight = 480 / grid;

    for (i = 0; i < gridTotal; i++){
        const div = document.createElement('div');
        div.style.height = gridItemHeight + 'px';
        div.style.width = gridItemHeight + 'px';
        
        div.addEventListener('mouseover', () => {
            div.style.backgroundColor = '#16264C';
            div.style.borderColor = '#0f1b37';
        });
        mainContainer.append(div);
    }
};

function deleteGrid(currentGridSize){
    const currentGridTotal = currentGridSize * currentGridSize;    
    console.log(currentGridTotal +' deleting this many old grid blocks');

    for (i = currentGridTotal; i > 0; i--){
        console.log(currentGridSize + ' the loop is running');
        const mainContainer = document.getElementById('main-container');
        mainContainer.removeChild(mainContainer.lastChild);
    }
};


