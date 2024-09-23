const heritageSites = [
    {
        name: "قصر إبراهيم الأثري - الأحساء",
        image: "https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcSYg86tAz63EK9E6ar62sWKJFdZaUII-C3JQK0Ku3w4zG0q6z12BmZGs3a8cNjeRiRCbM1jzCPWuCuaESFuR3MdBtv4aRxpvGWZ034z574",
        description: "قصر إبراهيم هو أحد أهم المعالم التاريخية في الأحساء. يعود تاريخه إلى القرن السابع عشر ويعكس التراث الثقافي والحضاري في المنطقة الشرقية."
    },
    {
        name: "جبل القارة - الأحساء",
        image: "https://i.pinimg.com/474x/1b/af/6d/1baf6d35b869c23894e8c50a49f7b250.jpg",
        description: "جبل القارة هو معلم طبيعي في الأحساء، يتميز بتكويناته الصخرية المذهلة ويعد وجهة مثالية لمحبي المغامرة والطبيعة."
    },
    {
        name: "بحيرة الأصفر - الأحساء",
        image: "https://i.pinimg.com/474x/04/f0/6e/04f06e08e037156d4fe8366dd096c5c2.jpg",
        description: "بحيرة الأصفر هي واحدة من أجمل المناطق الطبيعية في المملكة. تقع في الأحساء وتعتبر مكانًا رائعًا للاسترخاء والاستمتاع بالطبيعة."
    },
    {
        name: "جسر الملك فهد",
        image: "https://i.pinimg.com/474x/b3/77/97/b3779743b18f0d5742d5c874ab581824.jpg",
        description: "جسر الملك فهد هو أحد أهم المعالم الهندسية في المملكة. يربط بين السعودية والبحرين، ويعد طريقًا رئيسيًا للتجارة والسفر بين البلدين."
    },
    {
        name: "سوق الخرج الشعبي",
        image: "https://i.pinimg.com/474x/a0/72/4e/a0724e67efb5ecb3d493fb313f48ee36.jpg",
        description: "يعد سوق الخرج الشعبي من أقدم الأسواق في المنطقة، حيث يعرض العديد من المنتجات التقليدية والحرف اليدوية التي تعكس التراث المحلي."
    },
    {
        name: "كورنيش الدمام",
        image: "https://i.pinimg.com/736x/72/8c/57/728c57e05a5c6a7ce0b68fd546b99b1b.jpg",
        description: "واجهة الدمام البحرية تقدم تجربة رائعة للعائلات والزوار للاستمتاع بالمناظر الخلابة على طول ساحل الخليج العربي."
    }
];

const heritageCards = document.getElementById('heritageCards');

heritageSites.forEach(site => {
    const card = document.createElement('div');
    card.className = 'col-md-4';
    card.innerHTML = `
        <div class="card">
            <img src="${site.image}" class="card-img-top" alt="${site.name}">
            <div class="card-body">
                <h5 class="card-title">${site.name}</h5>
                <p class="card-text">${site.description}</p>
            </div>
        </div>
    `;
    heritageCards.appendChild(card);
});

document.getElementById('shareExperienceBtn').addEventListener('click', function() {
    const experienceModal = new bootstrap.Modal(document.getElementById('experienceModal'));
    experienceModal.show();
});


document.getElementById('experienceForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const experience = document.getElementById('experience').value;


    fetch('https://66e7e6bbb17821a9d9da704c.mockapi.io/home', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name, experience })
    })
    .then(response => response.json())
    .then(data => {
        alert('تم إرسال تجربتك بنجاح!');
        document.getElementById('experienceForm').reset(); 
        const experienceModal = bootstrap.Modal.getInstance(document.getElementById('experienceModal'));
        experienceModal.hide(); 
    })
    .catch(error => {
        console.error('Error:', error);
        alert('حدث خطأ أثناء إرسال تجربتك. حاول مرة أخرى.');
    });
});