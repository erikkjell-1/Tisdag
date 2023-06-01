import { getJokes } from '/Api.js';
import { display } from '/Display.js'

async function start() {
    const jokes = await getJokes();
    display(jokes);
}

start();
