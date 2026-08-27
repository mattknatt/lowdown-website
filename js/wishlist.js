const elFormWishlist = document.querySelector('#formWishlist');
const elArtist = document.querySelector('#txtArtist');
const elCountry = document.querySelector('#txtCountry')
const elWishedArtists = document.querySelector('.wishlist_artists')
const elError = document.querySelector('#error')

const artists = [{
        name : 'Kurt Vile',
        country : 'USA'
    },
    {
        name : 'Paul McCartney',
        country : 'United Kingdom'
    }];

const stringifiedArtists = JSON.stringify(artists);

localStorage.setItem(
    "wishedArtists",
    stringifiedArtists
);

showArtists();

function showArtists() {
    
    elWishedArtists.textContent = "";

    const getArtistsInfo = localStorage.getItem('wishedArtists');

    const wishedArtistsParsed = JSON.parse(getArtistsInfo);

    console.log(wishedArtistsParsed);

    wishedArtistsParsed.forEach(artist => {
        let article = document.createElement("article");
        article.textContent = `${artist.name} , ${artist.country}`;
        article.classList.add("wished_artist");
        elWishedArtists.appendChild(article);
    });
}


function addArtist(event) {

    event.preventDefault();

    let storedArtists = JSON.parse(localStorage.getItem('wishedArtists'));
    const artist = elArtist.value.trim();
    const country = elCountry.value.trim();

    // Validering: kräver minst 2 tecken i varje fält
    if (artist.length < 2) {
        elError.textContent = "Artistnamnet måste vara minst 2 tecken.";
        return;
    }

    if (country.length < 2) {
        elError.textContent = "Landet måste vara minst 2 tecken.";
        return;
    }

    // Allt giltigt — rensa ev. tidigare felmeddelande
    elError.textContent = "";

    storedArtists.push({"name" : artist, "country" : country});

    localStorage.setItem("wishedArtists", JSON.stringify(storedArtists));

    console.log(JSON.parse(localStorage.getItem("wishedArtists")));

    showArtists();
}

addEventListener('submit', addArtist);



