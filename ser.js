const distances = {
    "الرياض-الخرج": "50 كم",
    "الخرج-الرياض": "50 كم",
    "الرياض-الدمام": "450 كم",
    "الدمام-الرياض": "450 كم",
    "الخرج-الدمام": "400 كم",
    "الدمام-الخرج": "400 كم"
};

document.getElementById('searchForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const fromCity = document.getElementById('fromCity').value;
    const toCity = document.getElementById('toCity').value;

    const key1 = `${fromCity}-${toCity}`;
    const key2 = `${toCity}-${fromCity}`;
    const distance = distances[key1] || distances[key2] || "المسافة غير متاحة.";

    document.getElementById('result').innerHTML = `المسافة بين ${fromCity} و ${toCity} هي ${distance}`;
    document.getElementById('result').style.display = 'block';

    showMap(fromCity, toCity);
});

document.getElementById('getWeather').addEventListener('click', function() {
    const city = document.getElementById('toCity').value;
    if (city) {
        showWeather(city);
    } else {
        alert("يرجى اختيار مدينة للطقس.");
    }
});

document.getElementById('searchHeritage').addEventListener('click', function() {
    const fromCity = document.getElementById('fromCity').value;
    const toCity = document.getElementById('toCity').value;
    if (fromCity && toCity) {
        if ((fromCity === "الرياض" && toCity === "الخرج") || (fromCity === "الخرج" && toCity === "الرياض")) {
            window.location.href = "heritage.html"; 
        } else if ((fromCity === "الرياض" && toCity === "الدمام") || (fromCity === "الدمام" && toCity === "الرياض")) {
            window.location.href = "heritage_riyadh_dammam.html";
        } else if ((fromCity === "الدمام" && toCity === "الخرج") || (fromCity === "الخرج" && toCity === "الدمام")) {
            window.location.href = "heritage_dammam_kharj.html"; 
        } else {
            alert("المعالم السياحية غير متاحة لهذا الخيار.");
        }
    } else {
        alert("يرجى اختيار المدينتين للبحث عن المعالم.");
    }
});

function showMap(fromCity, toCity) {
    const locations = {
        "الرياض": [24.7136, 46.6753],
        "الخرج": [24.1584, 47.3882],
        "الدمام": [26.4207, 50.0888]
    };

    const map = L.map('map').setView(locations[fromCity], 8);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    L.marker(locations[fromCity]).addTo(map).bindPopup(`من ${fromCity}`).openPopup();
    L.marker(locations[toCity]).addTo(map).bindPopup(`إلى ${toCity}`);
    
    map.flyTo(locations[fromCity], 8, {animate: true, duration: 2});
}

function showWeather(city) {
    const apiKey = 'f628fbebe4d12e42c60d8511b456a040'; 
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city},sa&appid=${apiKey}&units=metric`;

    fetch(apiUrl)
        .then(response => {
            if (!response.ok) throw new Error('Network response was not ok');
            return response.json();
        })
        .then(data => {
            if (data.cod === 200) {
                const temp = data.main.temp;
                const description = data.weather[0].description;
                document.getElementById('weather').innerHTML = `درجة الحرارة في ${city} هي ${temp}°C مع ${description}`;
                document.getElementById('weather').style.display = 'block';
            } else {
                document.getElementById('weather').innerHTML = "لا توجد معلومات عن الطقس.";
                document.getElementById('weather').style.display = 'block';
            }
        })
        .catch(error => {
            console.error('Error fetching the weather data:', error);
            document.getElementById('weather').innerHTML = "حدث خطأ أثناء استعلام الطقس.";
            document.getElementById('weather').style.display = 'block';
        });
}
