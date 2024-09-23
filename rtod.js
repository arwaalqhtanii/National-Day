const heritageSites = [
    {
        name: "متحف الملك عبد العزيز",
        image: "https://i.pinimg.com/474x/3b/f8/4b/3bf84b2a7b0a463430cf876cdde6cb5f.jpg",
        description: "متحف الملك عبد العزيز هو أحد المتاحف الوطنية الرئيسية في المملكة، ويضم مجموعة كبيرة من القطع الأثرية التي تسرد تاريخ المملكة العربية السعودية منذ نشأتها وحتى اليوم،."
    },
    {
        name: "كورنيش الدمام",
        image: "https://i.pinimg.com/736x/72/8c/57/728c57e05a5c6a7ce0b68fd546b99b1b.jpg",
        description: "يُعد كورنيش الدمام من أهم الوجهات الترفيهية في المنطقة الشرقية، حيث يمتد على طول البحر ويوفر مساحات خضراء واسعة، وممرات للمشي، وأماكن مخصصة للعائلات، بالإضافة إلى مناطق لعب للأطفال."
    },
    {
        name: "برج المملكة",
        image: "https://i.pinimg.com/564x/cf/cd/c6/cfcdc623c5242acff14b5705aae2fc9e.jpg",
        description: "برج المملكة هو أحد أبرز معالم الرياض، حيث يتضمن مراكز تسوق فاخرة ومكاتب تجارية وفندقًا عالميًا. يعد البرج وجهة رئيسية للسياح والزوار لما يتمتع به من تصميم معماري مميز."
    },
    {
        name: "برج الفيصلية",
        image: "https://i.pinimg.com/474x/0a/2c/7b/0a2c7b537c1ca8803565ebb87d6b20d5.jpg",
        description: "برج الفيصلية يُعتبر واحدًا من أبرز معالم الرياض، ويمثل مزيجًا رائعًا بين العمارة التقليدية والمعاصرة. يضم البرج مجمعًا تجاريًا وفندقًا فاخرًا ومطاعم عالمية، ويتميز بتصميمه الذي يشبه الهرم."
    },
    {
        name: "الواجهة البحرية الخبر",
        image: "https://i.pinimg.com/474x/5f/d6/6b/5fd66bece2157bbf4f54f3f2cc0e7bfa.jpg",
        description: "الواجهة البحرية في الخبر تُعد واحدة من أجمل المناطق السياحية في المدينة، حيث تضم مساحات خضراء ومناطق للجلوس والمشي. تعتبر المكان المثالي للاستمتاع بالهواء النقي والمطاعم الفاخرة."
    },
    {
        name: "متحف الدمام",
        image: "https://i.pinimg.com/474x/ac/b3/e9/acb3e95917421c295be688d7eb1c45d8.jpg",
        description: "متحف الدمام هو مركز تاريخي يعرض مجموعة متنوعة من القطع الأثرية التي تسلط الضوء على تاريخ المنطقة الشرقية وثقافتها، بما في ذلك الأدوات المنزلية القديمة، الأزياء التقليدية، والأعمال الحرفية."
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