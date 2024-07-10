import { useEffect, useState } from "react";
import { Form, Row } from "react-bootstrap";
import { Book } from "./Book";

export default function Books() {
    const [books, setBooks] = useState([{}])
    useEffect(() => {
        fetch("http://localhost:3000/books")
            .then(r => r.json())
            .then(data => {
                setBooks(data)
            })
    }, [])
    const element = books.map(book => {
        return <Book key={book.id} name={book.name} ben_review={book.ben_review} img={book.img} author={book.author} time_to_consume={book.time_to_consume} rating={book.rating} description={book.description}/>
    })
    return (

        <>
            <h1>Book reviews</h1>
            <Row xs={1} md={2}>
                {element}
            </Row>
        </>
    )
}