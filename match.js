const apiKey = "6f635f919d2eda4f5ddecf71e09e2fba55c3be0e5eda04b89cdeadafca3ad4a3";

const apiUrl = `https://apiv2.allsportsapi.com/football/?met=Livescore&APIkey=${apiKey}`;

fetch(apiUrl)
.then(response => response.json())
.then(data => {

    console.log(data);

    const container = document.getElementById("matchesContainer");
    container.innerHTML = "";

    const matches = data.result || [];

    if (matches.length === 0) {
        container.innerHTML = "<p>No live matches available</p>";
        return;
    }

   
    matches.slice(0, 4).forEach(match => {

        container.innerHTML += `
        
        <section class="scoreboard-container">
            <div class="score-card">

                <div class="match-status live">
                    ${match.event_status || "LIVE"}
                </div>

                <div class="match-content">

                    <div class="team home">
                        <img src="${match.home_team_logo || ''}" alt="home">
                        <h2>${match.event_home_team}</h2>
                    </div>

                    <div class="result">
                        <span class="score-number">
                            ${match.event_home_score || 0}
                        </span>
                        <span class="divider">-</span>
                        <span class="score-number">
                            ${match.event_away_score || 0}
                        </span>

                        <div class="match-date">
                            ${match.event_date}
                        </div>
                    </div>

                    <div class="team away">
                        <img src="${match.away_team_logo || ''}" alt="away">
                        <h2>${match.event_away_team}</h2>
                    </div>

                </div>

            </div>
        </section>

        `;
    });

})
.catch(error => {
    console.error("API Error:", error);
});
/////
