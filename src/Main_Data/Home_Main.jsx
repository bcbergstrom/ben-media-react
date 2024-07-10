import Carousel from 'react-bootstrap/Carousel';
import { Col, Container, Row } from 'react-bootstrap';


export default function Home() {
    return (
        <Container>
            <Row>
                <Col></Col>
                <Col>
                    <h1 className="text-center"> Ben's Media</h1>
                </Col>
                <Col></Col>
            </Row>
            <Row>
                <Col></Col>
                <Col>
                    <Carousel>
                        <Carousel.Item>
                            <img src={"https://t3.ftcdn.net/jpg/06/27/23/00/360_F_627230085_1u4gXJJQrlF53oEgg6w2Wa2HC4IdbDL1.jpg"}></img>
                            <Carousel.Caption>
                                <h3>Books!</h3>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img src={"https://st.depositphotos.com/1653909/1228/i/450/depositphotos_12283193-stock-photo-movie-clapper-and-film-reels.jpg"}></img>
                            <Carousel.Caption>
                                <h3>Movies!</h3>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img src={"https://cdn.pixabay.com/photo/2021/09/07/07/11/game-console-6603120_640.jpg"}></img>
                            <Carousel.Caption>
                                <h3>Games!</h3>
                            </Carousel.Caption>
                        </Carousel.Item>

                    </Carousel>
                </Col>
                <Col></Col>
            </Row>
            <Row>
                <Col></Col>
                <Col>
                    <h2>What's this about?</h2>
                    <p>
                        Have you ever wondered - what media does our friend Ben like? Well look no further, as this site is a record of all/majority of the media I've consumed in the past while!
                    </p>
                </Col>
                <Col></Col>
            </Row>
        </Container>
    )
}