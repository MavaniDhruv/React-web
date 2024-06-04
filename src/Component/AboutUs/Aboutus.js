import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Difference from './Difference';
import Placement from './Placement';
import Counter from './Counter';

function Aboutus(){
    return(
        <>
            <div className="blog-bg">
                <Container>
                    <Row>
                        <Col className="page-t ps-3">About Us</Col>
                        <Col className="page-t1 pe-3">Home / About Us</Col>
                    </Row>
                </Container>
            </div>

            <Difference></Difference>

            <Counter></Counter>

            <Placement></Placement>
        </>
    )
}

export default Aboutus;