import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import Image from 'react-bootstrap/Image';

function Placement() {
    return (
        <>
            <Container className='pt-5'>
                <Row>
                    <Col xs={12} className='au-d11'>STUDENT PLACEMENT</Col>
                    <Col xs={12} className='p1-h2 text-center'>OUR RECRUITMENT PARTNERS</Col>
                </Row>
                <Row className='d-flex justify-content-center mb-5'>
                    <Col className='au-p-bg' xl={2} md={4} sm={6} xs={12}>
                        {['top'].map((placement) => (
                            <OverlayTrigger
                                key={placement}
                                placement={placement}
                                overlay={
                                    <Tooltip id={`tooltip-${placement}`}>
                                        Windex Software Solution
                                    </Tooltip>
                                }
                            >
                                <Button className='au-p-i p-0'><Image className='au-p-i1' src={require("../../image/Windex-Software-Solution.png")} fluid />;</Button>
                            </OverlayTrigger>
                        ))}
                    </Col>
                    <Col className='au-p-bg' xl={2} md={4} sm={6} xs={12}>
                        {['top'].map((placement) => (
                            <OverlayTrigger
                                key={placement}
                                placement={placement}
                                overlay={
                                    <Tooltip id={`tooltip-${placement}`}>
                                        Maruti Business Plus
                                    </Tooltip>
                                }
                            >
                                <Button className='au-p-i p-0'><Image className='au-p-i1' src={require("../../image/Maruti-Business-Plus.png")} fluid />;</Button>
                            </OverlayTrigger>
                        ))}
                    </Col>
                    <Col className='au-p-bg' xl={2} md={4} sm={6} xs={12}>
                        {['top'].map((placement) => (
                            <OverlayTrigger
                                key={placement}
                                placement={placement}
                                overlay={
                                    <Tooltip id={`tooltip-${placement}`}>
                                        CODEEDOC
                                    </Tooltip>
                                }
                            >
                                <Button className='au-p-i p-0'><Image className='au-p-i1' src={require("../../image/CODEEDOC.png")} fluid />;</Button>
                            </OverlayTrigger>
                        ))}
                    </Col>
                    <Col className='au-p-bg' xl={2} md={4} sm={6} xs={12}>
                        {['top'].map((placement) => (
                            <OverlayTrigger
                                key={placement}
                                placement={placement}
                                overlay={
                                    <Tooltip id={`tooltip-${placement}`}>
                                        Tupple Apps
                                    </Tooltip>
                                }
                            >
                                <Button className='au-p-i p-0'><Image className='au-p-i1' src={require("../../image/Tupple-Apps.png")} fluid />;</Button>
                            </OverlayTrigger>
                        ))}
                    </Col>
                    <Col className='au-p-bg' xl={2} md={4} sm={6} xs={12}>
                        {['top'].map((placement) => (
                            <OverlayTrigger
                                key={placement}
                                placement={placement}
                                overlay={
                                    <Tooltip id={`tooltip-${placement}`}>
                                        Pixasoft Infotech
                                    </Tooltip>
                                }
                            >
                                <Button className='au-p-i p-0'><Image className='au-p-i1' src={require("../../image/pixasoft-infotech.png")} fluid />;</Button>
                            </OverlayTrigger>
                        ))}
                    </Col>
                    <Col className='au-p-bg' xl={2} md={4} sm={6} xs={12}>
                        {['top'].map((placement) => (
                            <OverlayTrigger
                                key={placement}
                                placement={placement}
                                overlay={
                                    <Tooltip id={`tooltip-${placement}`}>
                                        Laneteam
                                    </Tooltip>
                                }
                            >
                                <Button className='au-p-i p-0'><Image className='au-p-i1' src={require("../../image/laneteam.png")} fluid />;</Button>
                            </OverlayTrigger>
                        ))}
                    </Col>
                </Row>
                {/* <Row className='d-flex au-p22-bg mb-5'>
                    <Col xs={12} className='au-p2'>Our Demanded Course -</Col>
                    <Col className='au-p22-bg p-0'>
                        <div className="au-p22">Ios App Training Institute</div>
                        <div className="au-p22">Ios App Training Institute</div>
                        <div className="au-p22">Ios App Training Institute</div>
                        <div className="au-p22">Ios App Training Institute</div>
                        <div className="au-p22">Ios App Training Institute</div>
                        <div className="au-p22">Ios App Training Institute</div>
                        <div className="au-p22">Ios App Training Institute</div>
                    </Col>
                </Row> */}
            </Container >
        </>
    )
}

export default Placement;