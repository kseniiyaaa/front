document.addEventListener('DOMContentLoaded', function() {
    const table = document.getElementById('numberTable');
    const colorPicker = document.getElementById('colorPicker');
    const targetNumber = 1;

    // Create the 6x6 table
    let number = 1;
    for (let i = 0; i < 6; i++) {
        const row = table.insertRow();
        for (let j = 0; j < 6; j++) {
            const cell = row.insertCell();
            cell.textContent = number;
            cell.dataset.number = number;

            // Add event listeners
            if (number === targetNumber) {
                cell.addEventListener('mouseover', function() {
                    cell.style.backgroundColor = getRandomColor();
                });

                cell.addEventListener('click', function() {
                    cell.style.backgroundColor = colorPicker.value;
                });

                cell.addEventListener('dblclick', function() {
                    changeRowColor(cell.parentElement, colorPicker.value);
                });
            }

            number++;
        }
    }

    // Function to get a random color
    function getRandomColor() {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    // Function to change the color of the entire row
    function changeRowColor(row, color) {
        for (let i = 0; i < row.cells.length; i++) {
            row.cells[i].style.backgroundColor = color;
        }
    }
});