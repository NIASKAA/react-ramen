import React from 'react'
import {Container} from 'react-bootstrap'
import './styles.css'
const AboutUs = () => {
    return (
        <>
            <Container className="aboutContainer">
                <img src="/images/about.jpg" alt="background" className="bgMain" id="aboutRamen"/>
                <div class="col-md-4">
                    <h4><strong>The Ramen Tale</strong></h4>
                    <p class="text-muted">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis consequatur
                    eligendi quisquam doloremque vero ex debitis veritatis placeat unde animi laborum
                    sapiente illo possimus, commodi dignissimos obcaecati illum maiores corporis.
                    </p>
                    <p class="text-muted">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod itaque voluptate
                    nesciunt laborum incidunt. Officia, quam consectetur. Earum eligendi aliquam illum
                    alias, unde optio accusantium soluta, iusto molestiae adipisci et?
                    </p>
                </div>
            </Container>
        </>
    )
}

export default AboutUs
