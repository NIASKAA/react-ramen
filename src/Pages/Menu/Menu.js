import React from 'react'
import {Container, Row, Col, Card} from 'react-bootstrap'
import './styles.css'
const Menu = () => {
    const CardStyle = {
        width: "18rem"
    }
    
    const ImgStyle={
        width: "17.9rem"
    }
    return (
        <>
            <Container class="display">
                <Row class="row">
                    <h2 class="title text-center">Appetizer</h2>
                    <Col class="col">
                        <Card class="card" style={CardStyle}>
                            <Card.Img src="/images/edamame.jpeg" class="card-img-top" style={ImgStyle}/>
                            <Card.Body class="card-body">
                                <h5 class="card-title">Edamame</h5>
                                <p class="card-text">Dried Snow Peas</p>
                            </Card.Body>
                        </Card>
                    </Col>
            
                    <Col class="col">
                        <Card class="card" style={CardStyle}>
                            <Card.Img src="/images/takoyaki.jpeg" class="card-img-top" style={ImgStyle}/>
                            <Card.Body class="card-body">
                                <h5 class="card-title">Takoyaki</h5>
                                <p class="card-text">Classic Octopus Balls</p>
                            </Card.Body>
                        </Card>
                    </Col>
            
                    <Col class="col">
                        <Card class="card" style={CardStyle}>
                        <Card.Img src="/images/karaage.jpeg" class="card-img-top" alt="thePlugSelect" style={ImgStyle}/>
                            <Card.Body class="card-body">
                                <h5 class="card-title">Chicken Karrage</h5>
                                <p class="card-text">Fried Chicken with spicy mayo sauce</p>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            
                <Row class="row align-items-center">
                    <Col class="col">
                        <Card class="card" style={CardStyle}>
                            <Card.Img src="/images/poke.jpeg" class="card-img-top" style={ImgStyle}/>
                            <Card.Body class="card-body">
                                <h5 class="card-title">Poke bowl</h5>
                                <p class="card-text">Salmon Rice bowl with avocado</p>
                            </Card.Body>
                        </Card>
                    </Col>
            
                    <Col class="col">
                        <Card class="card" style={CardStyle}>
                            <Card.Img src="/images/gyoza.jpeg" class="card-img-top" style={ImgStyle}/>
                            <Card.Body class="card-body">
                                <h5 class="card-title">Gyoza</h5>
                                <p class="card-text">Pan-Fried Japanese Dumpling</p>
                            </Card.Body>
                        </Card>
                    </Col>
                
                    <Col class="col">
                        <Card class="card" style={CardStyle}>
                            <Card.Img src="/images/seaweedsald.jpeg" class="card-img-top" style={ImgStyle}/>
                            <Card.Body class="card-body">
                                <h5 class="card-title">Seaweed Salad</h5>
                                <p class="card-text">Classic salad composed of green seaweed</p>
                            </Card.Body>
                        </Card>
                    </Col>  
                </Row>

                <hr style={{margin: "20px"}}/>

                <Row class="row">
                    <h2 class="title text-center">Entree</h2>
                    <Col class="col">
                        <Card class="card" style={CardStyle}>
                        <Card.Img src="/images/tonkotsu.jpg" class="card-img-top" style={ImgStyle}/>
                        <Card.Body class="card-body">
                            <h5 class="card-title">Tonkotsu Ramen</h5>
                            <p class="card-text">Pork bone broth based ramen with bamboo shoots and ajitama eggs. (Soft boiled eggs)</p>
                        </Card.Body>
                        </Card>
                    </Col>
            
                    <Col class="col">
                        <Card class="card" style={CardStyle}>
                            <Card.Img src="/images/spicy.jpeg" class="card-img-top" style={ImgStyle}/>
                            <Card.Body class="card-body">
                                <h5 class="card-title">Spicy Tonkotsu Ramen</h5>
                                <p class="card-text">Pork bone broth based ramen with bamboo shoots and ajitama eggs.</p>
                            </Card.Body>
                        </Card>
                    </Col>
            
                    <Col class="col">
                        <Card class="card" style={CardStyle}>
                            <Card.Img src="/images/shoyu.jpg" class="card-img-top" alt="thePlugSelect" style={ImgStyle}/>
                            <Card.Body class="card-body">
                                <h5 class="card-title">Shoyu Ramen</h5>
                                <p class="card-text">A lighter pork bone based ramen. For a better clean taste.</p>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            
                <Row class="row align-items-center">
                    <Col class="col">
                        <Card class="card" style={CardStyle}>
                            <Card.Img src="/images/miso.jpg" class="card-img-top" style={ImgStyle}/>
                            <Card.Body class="card-body">
                                <h5 class="card-title">Miso Ramen</h5>
                                <p class="card-text">Using miso paste as it's main broth.</p>
                            </Card.Body>
                        </Card>
                    </Col>
            
                    <Col class="col">
                        <Card class="card" style={CardStyle}>
                            <Card.Img src="/images/spicyMiso.jpeg" class="card-img-top" style={ImgStyle}/>
                            <Card.Body class="card-body">
                                <h5 class="card-title">Spicy Miso Ramen</h5>
                                <p class="card-text">Using spice to infuse the miso broth. For people who wants a kick.</p>
                            </Card.Body>
                        </Card>
                    </Col>
                
                
                    <Col class="col">
                        <Card class="card" style={CardStyle}>
                            <Card.Img src="/images/toripaitan.jpeg" class="card-img-top" style={ImgStyle}/>
                            <Card.Body class="card-body">
                                <h5 class="card-title">Tori Paitan Ramen</h5>
                                <p class="card-text">A chicken based broth ramen. Using Chicken oil to enrich the soup.</p>
                        </Card.Body>
                    </Card>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Menu
