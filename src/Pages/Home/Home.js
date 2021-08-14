import React from 'react'
import { Container } from 'react-bootstrap'
import './styles.css'
const Home = () => {
    return (
        <>
          <Container className="imageContain">
            <img src="/images/main.jpg" className="bgMain"/>
          </Container>

          <Container class="col-md-6 gx-5 mb-4">
          <h4><strong>Example</strong></h4>
          <p class="text-muted">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis consequatur
            eligendi quisquam doloremque vero ex debitis veritatis placeat unde animi laborum
            sapiente illo possimus, commodi dignissimos obcaecati illum maiores corporis.
          </p>
        </Container>
        </>
    )
}

export default Home
