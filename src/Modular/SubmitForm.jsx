import { useEffect, useState } from "react";
import { Button, Fade, Form } from "react-bootstrap";

export default function SubmitForm() {
    const [click, setClick] = useState(false)
    return (
        <>

            <Button onClick={() => setClick(!click)}>Create a Review</Button>
            <Fade in={click}>
                <Form onSubmit={(e) => {
                    e.preventDefault()
                    fetch(`http://localhost:3000/${e.target["form"].value}`, {
                        method: "POST",
                        headers: {

                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify({
                            name: e.target["title"].value,
                            author: e.target["author"].value,
                            time_to_consume: e.target["length"].value,
                            ben_review: e.target["review"].value,
                            rating: e.target["rating"].value,
                            img: e.target["image"].value,
                            description: e.target["description"].value
                        })
                    })
                        .then(r => r.json())
                        .then((data) => console.log("success"))
                }}>
                    <Form.Group className="mb-3" >
                        <Form.Label>Media Title</Form.Label>
                        <Form.Control type="text" placeholder="Enter Media Title" name="title" id="title" />
                    </Form.Group>
                    <Form.Group className="mb-3" >
                        <Form.Label>Media Author</Form.Label>
                        <Form.Control type="text" placeholder="Enter Media Author" name="author" id="author" />
                    </Form.Group> <Form.Group className="mb-3" >
                        <Form.Label>Media Length</Form.Label>
                        <Form.Control type="number" placeholder="Enter Media Length (in minutes)" name="length" id="length" />
                    </Form.Group> <Form.Group className="mb-3" >
                        <Form.Label>Media Description</Form.Label>
                        <Form.Control type="text" placeholder="Enter Media Description" name="description" id="description" />
                    </Form.Group> <Form.Group className="mb-3" >
                        <Form.Label>Media Review</Form.Label>
                        <Form.Control type="text" placeholder="Enter Media Review" name="review" id="review" />
                    </Form.Group>
                    <Form.Group className="mb-3" >
                        <Form.Label>Media Image</Form.Label>
                        <Form.Control type="text" placeholder="Enter Media Image" name="image" id="image" />
                    </Form.Group>
                    <Form.Group className="mb-3" >
                        <Form.Label>Media Rating</Form.Label>
                        <Form.Control type="number" placeholder="Enter Media Rating" name="rating" id="rating" />
                    </Form.Group>
                    <Form.Group>
                        <Form.Select aria-label="Select Media Type" name="form" id="form">
                            <option>Media Type</option>
                            <option value="books">Books</option>
                            <option value="movies">Movies</option>
                            <option value="games">Games</option>
                        </Form.Select>
                    </Form.Group>
                    <Button type="submit">Submit form</Button>
                </Form>
            </Fade>
        </>
    )
}