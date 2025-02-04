const apiUrl = 'https://api.statusbadges.me/presence/1083542161162780744';

fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
        const status = document.getElementById('status');
        const statusCurrent = data.status;
        if (statusCurrent) {
            status.textContent = `Status: ${statusCurrent}`;
        }

        const statusListening = document.getElementById('ouvindo');
        const spotifyMusic = data.activities.find(activity => activity.name === 'Spotify');
        if (yandexMusic) {
            statusListening.textContent = `Ouvindo: ${spotifyMusic.details} - ${spotifyMusic.state}`;
        }

        const statusAPP = document.getElementById('APP');
        const game = data.activities.find(activity => activity.type === 0);
        if (game) {
            statusAPP.textContent = `Jogando: ${game.name}`;
        }
    })
    .catch(error => {
        statusText.textContent = 'Error loading status';
    });
