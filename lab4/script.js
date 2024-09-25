// варіант n = 1
const n = 1;
const targetIndex = (n % 10) + 1;  // Визначаємо номер елемента

function toggleColor(element, colorClass) {
    element.classList.toggle(colorClass);
}

document.addEventListener('DOMContentLoaded', () => {
    const targetElementId = document.getElementById(`item-${targetIndex}`);
    const nextElement = document.querySelector(`#item-${targetIndex + 1}`);

    // Клік з getElementById
    if (targetElementId) {
        targetElementId.addEventListener('click', () => {
            toggleColor(targetElementId, 'bg-color-1');
        });
    }

    // Клік з querySelector
    if (nextElement) {
        nextElement.addEventListener('click', () => {
            toggleColor(nextElement, 'bg-color-2');
        });
    }
});

document.addEventListener('DOMContentLoaded', () => {
    const imageContainer = document.querySelector('a[href="https://www.wien.info/de"]');

    const addImage = () => {
        if (!document.getElementById('image')) {
            const newImage = document.createElement('img');
            newImage.id = 'image';
            newImage.src = 'http://surl.li/zevevg';
            newImage.alt = 'Відень, Австрія';
            newImage.width = 600;
            imageContainer.appendChild(newImage);
        }
    };

    const increaseImage = () => {
        const image = document.getElementById('image');
        if (image) {
            image.width += 50;
        }
    };

    const decreaseImage = () => {
        const image = document.getElementById('image');
        if (image && image.width > 50) {
            image.width -= 50;
        }
    };

    const removeImage = () => {
        const image = document.getElementById('image');
        if (image) {
            image.remove();
        }
    };

    document.getElementById('add').addEventListener('click', addImage);
    document.getElementById('increase').addEventListener('click', increaseImage);
    document.getElementById('decrease').addEventListener('click', decreaseImage);
    document.getElementById('remove').addEventListener('click', removeImage);
});
