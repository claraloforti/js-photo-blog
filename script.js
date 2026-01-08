
// SETUP
// Seleziono elemento di container output
const outputContainer = document.querySelector(".container-cards");

// Dichiaro variabile con l'URL del server da cui estrapolerò i dati
const endpoint = "https://lanciweb.github.io/demo/api/pictures/";


// ELABORAZIONE
// Chiamata Ajax all'endpoint
axios.get(endpoint)
    .then(response => {
        // Ottengo l'array di oggetti dall'API
        const posts = response.data;

        // Creo variabile di accumulo per l'output
        let postsOutput = "";

        // Ciclo l'array di oggetti per estrapolare le info
        posts.forEach(post => {

            // Destructuring
            const { url, title, date } = post;

            // Valorizzo la variabile di accumulo dell'output
            postsOutput += `
            <div class="card">
                <img src="${url}" alt="immagine" class="response-img">
                <h2>${title}</h2>
                <p>${date}</p>
                <img src="../assets_day1/img/pin.svg" alt="pin" class="pin">
            </div>`;
        });

        // Inserisco in pagina le card
        outputContainer.innerHTML = postsOutput;
    })

    .catch(error => {
        console.log("Errore!")
    });