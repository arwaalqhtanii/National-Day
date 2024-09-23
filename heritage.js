const heritageSites = [
   

    {
            name: "قصر المصمك",
            image: "https://i.pinimg.com/474x/04/f0/6e/04f06e08e037156d4fe8366dd096c5c2.jpg",
            description: "قصر المصمك هو قصر تاريخي في وسط الرياض. يعود تاريخه إلى القرن التاسع عشر ويعد موقعًا مهمًا في تاريخ المملكة العربية السعودية حيث شهد بداية استعادة الملك عبدالعزيز للرياض في عام 1902. القصر يتميز بجدرانه الطينية وساحاته الداخلية الواسعة."
        },
        {
            name: "الدرعية",
            image: "https://i.pinimg.com/474x/0e/e1/8d/0ee18df5ce6877d444db39b03f216992.jpg",
            description: "الدرعية هي أول عاصمة للدولة السعودية الأولى. تعتبر منطقة الدرعية حاليًا موقعًا تراثيًا عالميًا تحت رعاية اليونسكو. تضم الدرعية العديد من المواقع التاريخية التي تعكس بداية الدولة السعودية وتأسيس نظامها السياسي والاجتماعي."
        },
        {
            name: "سوق الخرج الشعبي",
            image: "https://i.pinimg.com/474x/a0/72/4e/a0724e67efb5ecb3d493fb313f48ee36.jpg",
            description: "سوق الخرج الشعبي هو مركز تجاري يعكس التراث الشعبي للمدينة. يمكن للزوار شراء العديد من المنتجات التقليدية مثل الملابس، الحرف اليدوية، والمأكولات المحلية. يتميز السوق بأجوائه التراثية التي تعكس الثقافة المحلية للخرج."
        },
        {
            name: "حديقة الأمير فيصل بن بندر",
            image: "https://i.pinimg.com/474x/15/00/2e/15002ebfe8f800fd09d1a9ea4b4a2bf3.jpg",
            description: "تعد حديقة الأمير فيصل بن بندر في الخرج وجهة رائعة للترفيه والاستجمام. تحتوي الحديقة على مناطق خضراء واسعة ومرافق ترفيهية متنوعة تجعلها مناسبة للعائلات والأطفال."
        },
        {
            name: "متحف التراث الشعبي",
            image: "https://i.pinimg.com/474x/24/3a/c9/243ac9da47b9804f7291aca5f33c2ea0.jpg",
            description: "متحف التراث الشعبي في الرياض يعرض قطعاً أثرية تعكس التراث الثقافي للمملكة. يعرض المتحف أدوات منزلية، أزياء تقليدية، وحرف يدوية قديمة تحاكي الحياة اليومية للسعوديين في الماضي."
        },
        {
            name: "سد وادي حنيفة",
            image: "https://i.pinimg.com/474x/88/96/ca/8896ca5b8adaf4e02fec730f59837b79.jpg",
            description: "سد وادي حنيفة هو معلم طبيعي في الرياض يشتهر بمناظره الخلابة وبيئته الطبيعية. يُعد السد مكانًا ممتازًا للاسترخاء والاستمتاع بالطبيعة بعيدًا عن صخب المدينة."
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
        })
        .catch(error => {
            console.error('Error:', error);
            alert('حدث خطأ أثناء إرسال تجربتك. حاول مرة أخرى.');
        });
    });