import { useEffect, useState } from "react";
import { Form, Row } from "react-bootstrap";
import { Movie } from "./Movie";

export default function Games() {
    const [movies, setMovies] = useState([{}])
    useEffect(() => {
        fetch("http://localhost:3000/movies")
            .then(r => r.json())
            .then(data => {
                setMovies(data)
            })
    }, [])
    const element = movies.map(movie => {
        return <Movie key={movie.id} name={movie.name} ben_review={movie.ben_review} img={movie.img} author={movie.author} time_to_consume={movie.time_to_consume} rating={movie.rating} description={movie.description}/>
    })
    return (

        <>
            <h1>Movie reviews</h1>
            <Row xs={1} md={2}>
                {element}
            </Row>
        </>
    )
}