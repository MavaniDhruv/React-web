import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Difference() {
    return (
        <div className="au-d1">
            <Container>
                <Row>
                    <Col xs={12} className='au-d11'>READ OUR DIFFERENCE</Col>
                    <Col xs={12} className='p1-h2 text-center'>WHY CHOOSE CREATIVE</Col>
                </Row>
                <Row className='au-d111-bg'>
                    <Col xs={12} sm={6} xl={4} className='mb-5'>
                        <Row className='au-d111'>
                            <Col xs={12}><div className="d111-i1"></div></Col>
                            <Col xs={12} className='d111-1'>Industry Experts As Trainers</Col>
                            <Col xs={12} className='d111-2'>Our trainers have 5+ years of industry experience coupled with extensive research and analysis.</Col>
                        </Row>
                    </Col>
                    <Col xs={12} sm={6} xl={4} className='mb-5'>
                        <Row className='au-d111'>
                            <Col xs={12}><div className="d111-i1 d111-i2"></div></Col>
                            <Col xs={12} className='d111-1'>Latest Curriculum</Col>
                            <Col xs={12} className='d111-2'>We Provides latest curriculum for all courses which designed in such a way that Students will get full knowledge within a short time.</Col>
                        </Row>
                    </Col>
                    <Col xs={12} sm={6} xl={4} className='mb-5'>
                        <Row className='au-d111'>
                            <Col xs={12}><div className="d111-i1 d111-i3"></div></Col>
                            <Col xs={12} className='d111-1'>Latest Technology</Col>
                            <Col xs={12} className='d111-2'>We strive to let you have a solid foundational knowledge of technologies shaping the IT World today.</Col>
                        </Row>
                    </Col>
                    <Col xs={12} sm={6} xl={4} className='mb-5'>
                        <Row className='au-d111'>
                            <Col xs={12}><div className="d111-i1 d111-i4"></div></Col>
                            <Col xs={12} className='d111-1'>Interview Assistance</Col>
                            <Col xs={12} className='d111-2'>At the end of each training,our training instructor will go through the possible technical questions you may be asked.</Col>
                        </Row>
                    </Col>
                    <Col xs={12} sm={6} xl={4} className='mb-5'>
                        <Row className='au-d111'>
                            <Col xs={12}><div className="d111-i1 d111-i5"></div></Col>
                            <Col xs={12} className='d111-1'>Free Upgradation</Col>
                            <Col xs={12} className='d111-2'>We will be provided free upgradation for any newer version of the course you have.</Col>
                        </Row>
                    </Col>
                    <Col xs={12} sm={6} xl={4} className='mb-5'>
                        <Row className='au-d111'>
                            <Col xs={12}><div className="d111-i1 d111-i6"></div></Col>
                            <Col xs={12} className='d111-1'>Lifetime Support</Col>
                            <Col xs={12} className='d111-2'>We will provide you lifetime support on all the courses you learned from us.</Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Difference;