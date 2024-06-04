import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { LuMail } from "react-icons/lu";
import { MdVerified, MdOutlineFacebook, MdOutlineWhatsapp } from "react-icons/md";
import { GrGooglePlus, GrYoutube } from "react-icons/gr";
import { VscTwitter } from "react-icons/vsc";
import { BiCheckCircle } from "react-icons/bi";
import { RxLinkedinLogo, RxInstagramLogo } from "react-icons/rx";

function Head(props) {

    return (
        <>
            <div className="head-t">
                <Container >
                    <Row className='head-t-r'>
                        <Col xl={4} className='h-t-r1'>
                            <div className="h-t-r11 "><LuMail className='t-r-icon me-1'></LuMail> info@cdmi.in</div>
                            <div className="h-t-r11 ms-3"><MdVerified className='t-r-icon me-1'></MdVerified> Verify Certificate</div>
                        </Col>
                        <Col xl={4} className='h-t-r12 d-flex justify-content-center'>HAVE ANY QUESTION ? +91 90333 16003</Col>
                        <Col xl={4} className='icon-bg d-flex justify-content-sm-center justify-content-md-end'>
                            <MdOutlineFacebook className='t-r-icon1 h-t-r11 me-1 ms-1'></MdOutlineFacebook>
                            <VscTwitter className='t-r-icon1 h-t-r11 me-1 ms-1'></VscTwitter>
                            <GrGooglePlus className='t-r-icon1 h-t-r11 me-1 ms-1'></GrGooglePlus>
                            <RxLinkedinLogo className='t-r-icon1 h-t-r11 me-1 ms-1'></RxLinkedinLogo>
                            <RxInstagramLogo className='t-r-icon1 h-t-r11 me-1 ms-1'></RxInstagramLogo>
                            <MdOutlineWhatsapp className='t-r-icon1 h-t-r11 me-1 ms-1'></MdOutlineWhatsapp>
                            <GrYoutube className='t-r-icon1 h-t-r11 me-1 ms-1'></GrYoutube>
                        </Col>
                    </Row>
                </Container>
            </div>

            <Container>
                {['xl'].map((expand) => (
                    <Navbar key={expand} expand={expand} className="bg-body-tertiary menu">
                        <Container fluid>
                            <Navbar.Brand href="#"><Image src={require("../image/creative-logo-blue.png")} className='menu-img' /></Navbar.Brand>
                            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
                            <Navbar.Offcanvas
                                id={`offcanvasNavbar-expand-${expand}`}
                                aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                                placement="end"
                            >
                                <Offcanvas.Header closeButton>
                                    <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                                        Offcanvas
                                    </Offcanvas.Title>
                                </Offcanvas.Header>
                                <Offcanvas.Body>
                                    <Nav className="justify-content-end flex-grow-1 menu-link-bg">
                                        <Nav.Link href="/" className='menu-link'>HOME</Nav.Link>
                                        <NavDropdown
                                            title="COURSES"
                                            xid={`offcanvasNavbarDropdown-expand-${expand}`}
                                        >
                                            <table>
                                                <tr>
                                                    {props.data.map((item) => {
                                                        return (
                                                            <td className='p-0'>
                                                                <td className='type'>{item.type}</td>
                                                                <tr>
                                                                    {item.course.map((item) => {
                                                                        return (
                                                                            <>
                                                                                <NavDropdown.Item href="#action3" className='course'><BiCheckCircle className='course-icon'></BiCheckCircle>{item}</NavDropdown.Item>
                                                                            </>
                                                                        )
                                                                    })
                                                                    }
                                                                </tr>
                                                            </td>
                                                        )
                                                    })
                                                    }
                                                </tr>
                                            </table>

                                        </NavDropdown>
                                        <NavDropdown
                                            title="ACTIVITIES"
                                            id={`offcanvasNavbarDropdown-expand-${expand}`}
                                        >
                                            <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                                            <NavDropdown.Item href="#action4">
                                                Another action
                                            </NavDropdown.Item>
                                            <NavDropdown.Divider />
                                            <NavDropdown.Item href="#action5">
                                                Something else here
                                            </NavDropdown.Item>
                                        </NavDropdown>
                                        <Nav.Link href="/blog" className='menu-link'>BLOG</Nav.Link>
                                        <NavDropdown
                                            title="GET IN TOUCH"
                                            id={`offcanvasNavbarDropdown-expand-${expand}`}
                                        >
                                            <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                                            <NavDropdown.Item href="#action4">
                                                Another action
                                            </NavDropdown.Item>
                                            <NavDropdown.Divider />
                                            <NavDropdown.Item href="#action5">
                                                Something else here
                                            </NavDropdown.Item>
                                        </NavDropdown>
                                        <Nav.Link href="/about" className='menu-link'>ABOUT US</Nav.Link>
                                        <NavDropdown
                                            title="STUDENT ZONE"
                                            id={`offcanvasNavbarDropdown-expand-${expand}`}
                                        >
                                            <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                                            <NavDropdown.Item href="#action4">
                                                Another action
                                            </NavDropdown.Item>
                                            <NavDropdown.Dividxhner />
                                            <NavDropdown.Item href="#action5">
                                                Something else here
                                            </NavDropdown.Item>
                                        </NavDropdown>
                                    </Nav>
                                </Offcanvas.Body>
                            </Navbar.Offcanvas>
                        </Container>
                    </Navbar>
                ))}
            </Container>
        </>
    );
}

export default Head;