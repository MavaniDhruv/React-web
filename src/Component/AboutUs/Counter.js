import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { ImHappy } from "react-icons/im";
import { FaChalkboardTeacher } from "react-icons/fa";
import { PiStudentFill ,PiCertificateBold} from "react-icons/pi";

function Counter() {
    return (
        <div className="cou-bg">
            <Container>
                <Row className='text-center cou-bg-1'>
                    <Col md={3} xs={6}>
                        <Row>
                            <Col xs={12} className='cou-i'><ImHappy></ImHappy></Col>
                            <Col xs={12} className='cou-1'>14000+</Col>
                            <Col xs={12} className='cou-2'>HAPPY STUDENTS</Col>
                        </Row>
                    </Col>
                    <Col md={3} xs={6}>
                        <Row>
                            <Col xs={12} className='cou-i'><PiCertificateBold></PiCertificateBold></Col>
                            <Col xs={12} className='cou-1'>10+</Col>
                            <Col xs={12} className='cou-2'>CERTIFICATION APPROVAL</Col>
                        </Row>
                    </Col>
                    <Col md={3} xs={6}>
                        <Row>
                            <Col xs={12} className='cou-i'><FaChalkboardTeacher></FaChalkboardTeacher></Col>
                            <Col xs={12} className='cou-1'>70+</Col>
                            <Col xs={12} className='cou-2'>CERTIFIED TEACHERS</Col>
                        </Row>
                    </Col>
                    <Col md={3} xs={6}>
                        <Row>
                            <Col xs={12} className='cou-i'><PiStudentFill></PiStudentFill></Col>
                            <Col xs={12} className='cou-1'>9000+</Col>
                            <Col xs={12} className='cou-2'>STUDENTS PLACED</Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Counter;