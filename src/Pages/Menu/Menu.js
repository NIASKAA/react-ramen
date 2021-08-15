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
                            <Card.Img src="/images/edamame.jpeg" className="imgClass" style={ImgStyle} alt="edamame"/>
                            <Card.Body className="bodyStyle">
                                <h5 className="cardTitle">Edamame</h5>
                                <p className="cardText">Dried Snow Peas</p>
                            </Card.Body>
                        </Card>
                    </Col>
            
                    <Col class="col">
                        <Card class="card" style={CardStyle}>
                            <Card.Img src="/images/takoyaki.jpeg" className="imgClass" style={ImgStyle} alt="takoyaki"/>
                            <Card.Body className="bodyStyle">
                                <h5 className="cardTitle">Takoyaki</h5>
                                <p className="cardText">Classic Octopus Balls</p>
                            </Card.Body>
                        </Card>
                    </Col>
            
                    <Col class="col">
                        <Card class="card" style={CardStyle}>
                        <Card.Img src="/images/karaage.jpeg" className="imgClass" alt="Chicken Karrage" style={ImgStyle}/>
                            <Card.Body className="bodyStyle">
                                <h5 className="cardTitle">Chicken Karrage</h5>
                                <p className="cardText">Fried Chicken with spicy mayo sauce</p>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            
                <Row class="row align-items-center">
                    <Col class="col">
                        <Card class="card" style={CardStyle}>
                            <Card.Img src="/images/poke.jpeg" className="imgClass" alt="Poke bowl" style={ImgStyle}/>
                            <Card.Body className="bodyStyle">
                                <h5 className="cardTitle">Poke bowl</h5>
                                <p className="cardText">Salmon Rice bowl with avocado</p>
                            </Card.Body>
                        </Card>
                    </Col>
            
                    <Col class="col">
                        <Card class="card" style={CardStyle}>
                            <Card.Img src="/images/gyoza.jpeg" className="imgClass"  alt="gyoza" style={ImgStyle}/>
                            <Card.Body className="bodyStyle">
                                <h5 className="cardTitle">Gyoza</h5>
                                <p className="cardText">Pan-Fried Japanese Dumpling</p>
                            </Card.Body>
                        </Card>
                    </Col>
                
                    <Col class="col">
                        <Card class="card" style={CardStyle}>
                            <Card.Img src="/images/seaweedsald.jpeg" className="imgClass" alt="seaweed" style={ImgStyle}/>
                            <Card.Body className="bodyStyle">
                                <h5 className="cardTitle">Seaweed Salad</h5>
                                <p className="cardText">Classic salad composed of green seaweed</p>
                            </Card.Body>
                        </Card>
                    </Col>  
                </Row>

                <hr style={{margin: "20px"}}/>

                <Row class="row">
                    <h2 class="title text-center">Entree</h2>
                    <Col class="col">
                        <Card class="card" style={CardStyle}>
                        <Card.Img src="/images/tonkotsu.jpg" className="imgClass" alt="tonkotsu" style={ImgStyle}/>
                        <Card.Body className="bodyStyle">
                            <h5 className="cardTitle">Tonkotsu Ramen</h5>
                            <p className="cardText">Pork bone broth based ramen with bamboo shoots and ajitama eggs. (Soft boiled eggs)</p>
                        </Card.Body>
                        </Card>
                    </Col>
            
                    <Col class="col">
                        <Card class="card" style={CardStyle}>
                            <Card.Img src="/images/spicy.jpeg" className="imgClass" alt="spicy tonkotsu" style={ImgStyle}/>
                            <Card.Body class="bodyStyle">
                                <h5 className="cardTitle">Spicy Tonkotsu Ramen</h5>
                                <p className="cardText">Pork bone broth based ramen with bamboo shoots and ajitama eggs.</p>
                            </Card.Body>
                        </Card>
                    </Col>
            
                    <Col class="col">
                        <Card class="card" style={CardStyle}>
                            <Card.Img src="/images/shoyu.jpg" className="imgClass" alt="shoyu ramen" style={ImgStyle}/>
                            <Card.Body class="bodyStyle">
                                <h5 className="cardTitle">Shoyu Ramen</h5>
                                <p className="cardText">A lighter pork bone based ramen. For a better clean taste.</p>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            
                <Row class="row align-items-center">
                    <Col class="col">
                        <Card class="card" style={CardStyle}>
                            <Card.Img src="/images/miso.jpg" className="imgClass" alt="miso ramen" style={ImgStyle}/>
                            <Card.Body className="bodyStyle">
                                <h5 className="cardTitle">Miso Ramen</h5>
                                <p className="cardText">Using miso paste as it's main broth.</p>
                            </Card.Body>
                        </Card>
                    </Col>
            
                    <Col class="col">
                        <Card class="card" style={CardStyle}>
                            <Card.Img src="/images/spicyMiso.jpeg" className="imgClass" alt="spicy miso" style={ImgStyle}/>
                            <Card.Body className="bodyStyle">
                                <h5 className="cardTitle">Spicy Miso Ramen</h5>
                                <p className="cardText">Using spice to infuse the miso broth. For people who wants a kick.</p>
                            </Card.Body>
                        </Card>
                    </Col>
                
                
                    <Col class="col">
                        <Card class="card" style={CardStyle}>
                            <Card.Img src="/images/toripaitan.jpeg" className="imgClass" alt="toripaitan" style={ImgStyle}/>
                            <Card.Body className="bodyStyle">
                                <h5 className="cardTitle">Tori Paitan Ramen</h5>
                                <p className="cardText">A chicken based broth ramen. Using Chicken oil to enrich the soup.</p>
                        </Card.Body>
                    </Card>
                    </Col>
                </Row>

                <hr style={{margin: "20px"}}/>
            </Container>
        </>
    )
}

export default Menu
