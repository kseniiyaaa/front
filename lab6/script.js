document.addEventListener('DOMContentLoaded', () => {
    const fetchButton = document.getElementById('fetchButton');
    const userInfo = document.getElementById('userInfo');

    fetchButton.addEventListener('click', () => {
        fetch('https://randomuser.me/api/?results=5')
            .then(response => response.json())
            .then(data => {
                userInfo.innerHTML = ''; // Очистка інформацію про попереднього користувача
                data.results.forEach(user => {
                    displayUserInfo(user);
                });
            })
            .catch(error => console.error('Error fetching data:', error));
    });

    function displayUserInfo(user) {
        const userCard = document.createElement('div');
        userCard.className = 'card mb-3';
        userCard.style.width = '18rem';
        userCard.innerHTML = `
            <img src="${user.picture.large}" class="card-img-top" alt="User Picture">
            <div class="card-body">
                <h5 class="card-title">${user.name.first} ${user.name.last}</h5>
                <p class="card-text"><strong>Cell:</strong> ${user.cell}</p>
                <p class="card-text"><strong>City:</strong> ${user.location.city}</p>
                <p class="card-text"><strong>Country:</strong> ${user.location.country}</p>
            </div>
        `;
        userInfo.appendChild(userCard);
    }
});