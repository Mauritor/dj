import React from 'react';
import { Col, Card } from 'react-bootstrap';
//import img1 from '../images/img1.jpg'

export const Videos = () => {
    return (
        <>
            <Col className="col-md-4 my-5">
                    <Card className="myCard">
                        <Card.Img variant="top" />
                        <iframe height="300" src="https://www.youtube.com/embed/YXhqZ4lyxEA" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>

                        <Card.Body className="cardBody text-light">
                            <Card.Title>Nico</Card.Title>
                            <Card.Text>
                                Tocando una Chamarrita.
                            </Card.Text>
                        </Card.Body>
                    </Card>
            </Col>
            <Col className="col-md-4 my-5">
                    <Card className="myCard">
                        <Card.Img variant="top" />
                        <iframe height="300" src="https://www.youtube.com/embed/9PhoaSmpP8E" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                        <Card.Body className="cardBody text-light">
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                                Pa lo pibe.
                            </Card.Text>
                        </Card.Body>
                    </Card>
            </Col>
            <Col className="col-md-4 my-5">
                    <Card className="myCard">
                        <Card.Img variant="top" />
                        <iframe height="300" src="https://www.youtube.com/embed/NgO8kmr--CM" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                        <Card.Body className="cardBody text-light">
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                                Frulaaa.
                            </Card.Text>
                        </Card.Body>
                    </Card>
            </Col>

        </>
    )
}
