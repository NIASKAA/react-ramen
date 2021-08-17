import React from 'react'
import {Container, Table, Row, Col} from 'react-bootstrap'
import './styles.css'

const Location = () => {
    return (
        <>
            <Container className="">
                <img src="" className=""/>
            </Container>

            <Container class="container">
                <h3 className="text-center">Hours</h3>
                <Table class="table">
                    <tbody>
                        <tr>
                            <th class="text-center" scope="col">Monday:</th>
                            <td>5:00 PM to 2:00 AM</td>
                        </tr>
                        <tr>
                            <th class="text-center" scope="col">Tuesday:</th>
                            <td>5:00 PM to 2:00 AM</td>
                        </tr>
                        <tr>
                            <th class="text-center" scope="col">Wednesday:</th>
                            <td>5:00 PM to 2: 00 AM</td>
                        </tr>
                        <tr>
                            <th class="text-center" scope="col">Thursday:</th>
                            <td>5:00 PM to 2:00 AM</td>
                        </tr>
                        <tr>
                            <th class="text-center" scope="col">Friday:</th>
                            <td>5:00 PM to 2:00 AM</td>
                        </tr>
                        <tr>
                            <th class="text-center" scope="col">Saturday:</th>
                            <td>5:00 PM to 2:00</td>
                        </tr>
                        <tr>
                            <th class="text-center" scope="col">Sunday:</th>
                            <td>Closed</td>
                        </tr>
                    </tbody>
                </Table>
            </Container>
            <Container>
                <Row>
                    <Col>
                        <h4>Location</h4>
                        <img src="./images/location.png" alt="location"  className="locationStyle"/>
                    </Col>
                    <Col>
                        <h4 className="contactText">Contact</h4>
                            <p className="contactText">Email: ramenshop@gmail.com</p>
                            <p className="contactText">Phone: 888-999-7777</p>
                    </Col>
                </Row>

            </Container>
        </>
    )
}

export default Location
