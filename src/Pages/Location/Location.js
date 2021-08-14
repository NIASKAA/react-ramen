import React from 'react'
import {Container, Table} from 'react-bootstrap'

const Location = () => {
    return (
        <>
            <Container className="">
                <img src="" className=""/>
            </Container>

            <Container class="container">
                <Table class="table">
                <thread>
                    <tr>
                    <th class="text-center" scope="col">Hours</th>
                    <th scope="col"></th>
                    </tr>
                </thread>
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
                </Table>
            </Container>
        </>
    )
}

export default Location
