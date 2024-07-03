import React from "react"
import jokesData from "./jokesData"

function Joke() {
    const getRandomJoke = () => {
        let randomIndex = Math.floor(Math.random() * jokesData.length)
        return jokesData[randomIndex]
    }
    const joke = getRandomJoke()
    return (
        <div>
            <h3>
                Joke of the day:
            </h3>
            <p hidden={!joke.question}>
                Question: {joke.question}
            </p>
            <p>Answer: {joke.answer}</p>
            <br/>
        </div>
    )
}

export default Joke