const elFormWishlist = document.querySelector('#formWishlist');
const elArtist = document.querySelector('#txtArtist');
const elCountry = document.querySelector('#txtCountry')
const elWishedArtists = document.querySelector('.wishlist_artists')

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
    const artist = elArtist.value;
    const country = elCountry.value;

    storedArtists.push({"name" : artist, "country" : country});

    localStorage.setItem("wishedArtists", JSON.stringify(storedArtists));

    console.log(JSON.parse(localStorage.getItem("wishedArtists")));

    showArtists();
}

addEventListener('submit', addArtist);



