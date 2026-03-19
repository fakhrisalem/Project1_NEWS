/*weather */
const apikey="896a420be0288168a3bf25ebc20f4952";
const counteryname="EG";
const city="Cairo";
fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},${counteryname}&appid=${apikey}&units=metric`)

.then(response=>response.json())
.then(data=>{
    console.log(data)
    const temp=data.main.temp;
    const description=data.weather[0].description;
    document.getElementById("temperature").textContent=`${temp}`;
    document.getElementById("description").textContent=description;

})
.catch(error=>{
    console.log("error",error);
})
/* sports */
const apiKey = "6f635f919d2eda4f5ddecf71e09e2fba55c3be0e5eda04b89cdeadafca3ad4a3";

const apiUrl = `https://apiv2.allsportsapi.com/football/?met=Livescore&APIkey=${apiKey}`;
fetch(apiUrl)
.then(response => response.json())
.then(data => {

    console.log("Full API Response:", data);

    const container = document.getElementById("matchescontainer");
    container.innerHTML = "";

    const matches = data.result || [];

    if (matches.length === 0) {
        container.innerHTML = "<p>No live matches found.</p>";
        return;
    }

  
    matches.slice(0, 4).forEach(match => {

        container.innerHTML += `
            <div class="card mb-3 p-3 shadow-sm">
                <div class="d-flex justify-content-between align-items-center">

                  
                    <div class="text-center">
                        <img src="${match.home_team_logo || ''}" 
                             width="30" 
                             style="object-fit:contain">
                        <div class="fw-bold mt-1">
                            ${match.event_home_team || "Home"}
                        </div>
                    </div>

               
                    <div class="text-center">
                        <div class="badge bg-dark">
                            ${match.event_time || ""}
                        </div>
                        <div class="small text-muted mt-1">
                            ${match.event_status || ""}
                        </div>
                    </div>

                 
                    <div class="text-center">
                        <img src="${match.away_team_logo || ''}" 
                             width="30" 
                             style="object-fit:contain">
                        <div class="fw-bold mt-1">
                            ${match.event_away_team || "Away"}
                        </div>
                    </div>

                </div>
            </div>
        `;
    });

})
.catch(error => {
    console.error("API Error:", error);
});

/* Rate*/
fetch("https://api.exchangerate-api.com/v4/latest/USD")
.then(response => response.json())
.then(data => {

    const usdToEgp = data.rates.EGP;


    const sarToUsd = 1 / data.rates.SAR;
    const sarToEgp = usdToEgp / sarToUsd;

    document.getElementById("usdRate").innerText = usdToEgp.toFixed(2);
    document.getElementById("sarRate").innerText = sarToEgp.toFixed(2);

})
.catch(error => {
    console.log("Currency API Error:", error);
});

//news
const API_KEY = 'c4142957f0b011e67ad05bac110d4598'; 

async function getNews(type, value, containerId) {
    let url;
    if (type === 'category') {
        url = `https://gnews.io/api/v4/top-headlines?category=${value}&lang=en&max=10&apikey=${API_KEY}`;
    } else {
       
        url = `https://gnews.io/api/v4/search?q=${value}&lang=en&max=10&apikey=${API_KEY}`;
    }
    
    try {
        const response = await fetch(url);
        const data = await response.json();
        if (data.articles) {
            renderNews(data.articles, containerId, value);
        }
    } catch (error) {
        console.error("Error:", error);
    }
}

function renderNews(articles, containerId, label) {
    const container = document.getElementById(containerId);
    container.innerHTML = ''; 

    articles.forEach(article => {
       
        let badgeClass = 'bg-secondary';
        if (label === 'sports') badgeClass = 'bg-primary';
        if (label === 'football') badgeClass = 'bg-success';
        if (label === 'world') badgeClass = 'bg-danger';

        container.innerHTML += `
            <div class="col-md-6 col-xl-4 mb-2">
                <div class="card h-100 shadow-sm border-0 news-card" style="border-radius: 12px; overflow: hidden;">
                    <img src="${article.image || 'https://via.placeholder.com/400x250'}" 
                         class="card-img-top" style="height:160px; object-fit:cover;">
                    <div class="card-body d-flex flex-column p-3">
                        <span class="badge ${badgeClass} mb-2" style="width: fit-content;">${label.toUpperCase()}</span>
                        <h6 class="fw-bold mb-2" style="font-size: 0.85rem; height: 40px; overflow: hidden;">${article.title}</h6>
                        <p class="text-muted small mb-3" style="font-size: 0.75rem; height: 45px; overflow: hidden;">
                            ${article.description ? article.description.slice(0, 70) + '...' : 'Click for details.'}
                        </p>
                        <a href="${article.url}" target="_blank" class="btn btn-outline-dark btn-sm mt-auto" style="border-radius: 20px;">Read More</a>
                    </div>
                </div>
            </div>`;
    });
}


document.addEventListener('DOMContentLoaded', () => {
    getNews('category', 'sports', 'sports-container');     
    getNews('search', 'football', 'football-container');   
    getNews('category', 'world', 'politics-container');    
});
