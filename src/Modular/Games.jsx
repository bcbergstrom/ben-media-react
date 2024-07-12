import { useEffect, useState } from "react";
import { Form, Row } from "react-bootstrap";
import { Game } from "./Game";

export default function Games() {
    const [games, setGames] = useState([{}])
    useEffect(() => {
        fetch("http://localhost:3000/games")
            .then(r => r.json())
            .then(data => {
                setGames(data)
            })
    }, [])
    const element = games.map(game => {
        return <Game key={game.id} name={game.name} ben_review={game.ben_review} img={game.img} author={game.author} time_to_consume={game.time_to_consume} rating={game.rating} description={game.description}/>
    })
    return (

        <>
            <h1>Game reviews</h1>
            <Row xs={1} md={2}>
                {element}
            </Row>
        </>
    )
}