const bodyElem = document.querySelector('body');

function display(jokes) {
    jokes.forEach((joke) => {
        const jokeElem = `
        <article>
        <p>${joke.setup}</p>
        <p>${joke.punchline}</p>
        </article>
        `
        bodyElem.insertAdjacentHTML('beforeend', jokeElem);
    });
}

export { display }