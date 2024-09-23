fetch('https://66e7e6bbb17821a9d9da704c.mockapi.io/home')
.then(response => response.json())
.then(data => {
    const experiencesContainer = document.getElementById('userExperiences');
    data.forEach(experience => {
        const experienceCard = `
            <div class="col-md-4">
                <div class="card mb-4">
                    <div class="card-body">
                        <h5 class="card-title">${experience.name}</h5>
                        <p class="card-text">${experience.experience}</p>
                        ${experience.image ? `<img src="${experience.image}" class="img-fluid" alt="Experience Image">` : ''}
                    </div>
                </div>
            </div>
        `;
        experiencesContainer.innerHTML += experienceCard;
    });
})
.catch(error => {
    console.error('Error:', error);
});