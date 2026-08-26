function createNode(element) {
    return document.createElement(element);
}

function append(parent, el) {
    return parent.appendChild(el);
}

const section = document.querySelector('#events');

async function getEvents() {
    const url = 'data/events.json';
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
        }

        const result = await response.json();
        const events = result.events;

        events.forEach(function (event) {
            const article = createNode('article');
            article.classList.add('event');

            const name = createNode('h2');
            name.textContent = event.eventName;

            const artists = createNode('p');
            artists.classList.add('event');
            artists.textContent = event.eventArtists;

            const date = createNode('p');
            date.classList.add('event-date');
            date.textContent = event.eventDate;

            append(article, name);
            append(article, artists);
            append(article, date);
            append(section, article);
        });
    } catch (error) {
        console.error(error.message);
    }
}

getEvents();