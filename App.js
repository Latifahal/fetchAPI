const Joke = document.getElementById('joke')

const JokeBtn = document.getElementById('jokeBtn') 

// JokeBtn.addEventListener("click", () => {
//     console.log("I have clicked the btn");
// })


// we are now passing the makeJoke argument so that whenever i click on the btn the function runs
JokeBtn.addEventListener("click", makeJoke)



async function makeJoke(){
    const config = {
        headers: {
            Accept: "application/json"
        }
    }

    const res = await fetch("https://icanhazdadjoke.com", config)

    const data = await res.json()

    // const displayJoke = json.Joke

    console.log(res, "res");
    console.log(data, "data");

    Joke.innerHTML = data.joke
}

