const jokeEl = document.getElementById('joke');
const jokeBtn = document.getElementById('jokebtn');

jokeBtn.addEventListener('click', generateJoke);

generateJoke();

async function generateJoke() {
    const config = {
        headers: {
            'Accept': 'application/json'
        }
    }

    const res = await fetch('https://icanhazdadjoke.com/', config);

    const data = await res.json();

    jokeEl.innerHTML = data.joke;
} 


//if this block of code beneath is replaced with line 8 to line 20, 
//we'll have the exact same outcome.


// function generateJoke() {
//     const config = {
//         headers: {
//             'Accept': 'application/json'
//         }
//     }

//     fetch ('https://icanhazdadjoke.com/', config)
//     .then(res => res.json())
//     .then(data => {
//         jokeEl.innerHTML = data.joke
//     });
// } 