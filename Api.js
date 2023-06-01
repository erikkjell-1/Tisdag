const BASE_URL = "https://karljoke.herokuapp.com/jokes/programming/ten";

async function getJokes() {
    const response = await fetch(BASE_URL);
    const data = await response.json();

    return data;
}

export { getJokes }