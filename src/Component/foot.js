import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { MdOutlineFacebook, MdOutlineWhatsapp } from "react-icons/md";
import { GrGooglePlus, GrYoutube } from "react-icons/gr";
import { VscTwitter } from "react-icons/vsc";
import { RxLinkedinLogo, RxInstagramLogo } from "react-icons/rx";
import { FaHandPointRight } from "react-icons/fa";
import { BiSolidBank } from "react-icons/bi";

function Foot() {
    return (
        <>
            <div className="f-bg">
                <Container>
                    <Row className='foot-bg'>
                        <Col xs={12} lg={4}>
                            <Row>
                                <Col xs={12}><img className='f-logo' src={require("../image/creative-logo-white.png")} /></Col>
                                <Col xs={12} className='f-p1'>Creative Design and Multimedia Institute is leading computer training institute in surat. We offers government approved computer training courses in Surat.</Col>
                                <Col xs={12} className='f-p1-l1'>FOLLOW US ON</Col>
                                <Col xs={12} className='d-flex'>
                                    <div className="f-p1-icon1"><MdOutlineFacebook></MdOutlineFacebook></div>
                                    <div className="f-p1-icon1"><VscTwitter></VscTwitter></div>
                                    <div className="f-p1-icon1"><GrGooglePlus></GrGooglePlus></div>
                                    <div className="f-p1-icon1"><RxLinkedinLogo></RxLinkedinLogo></div>
                                    <div className="f-p1-icon1"><RxInstagramLogo></RxInstagramLogo></div>
                                    <div className="f-p1-icon1"><MdOutlineWhatsapp></MdOutlineWhatsapp></div>
                                    <div className="f-p1-icon1"><GrYoutube></GrYoutube></div>
                                </Col>
                            </Row>
                        </Col>
                        <Col xs={12} lg={3}>
                            <Row className='mb-4'>
                                <Col xs={12} className='f-p2'>FEATURE LINKS</Col>
                                <Col xs={12} className='f-p22'><FaHandPointRight></FaHandPointRight> About Us</Col>
                                <Col xs={12} className='f-p22'><FaHandPointRight></FaHandPointRight> Blogs</Col>
                                <Col xs={12} className='f-p22'><FaHandPointRight></FaHandPointRight> Join Us</Col>
                                <Col xs={12} className='f-p22'><FaHandPointRight></FaHandPointRight> Company Login</Col>
                                <Col xs={12} className='f-p22'><FaHandPointRight></FaHandPointRight> Certificate verification</Col>
                            </Row>
                        </Col>
                        <Col xs={12} lg={5}>
                            <Row>
                                <Col xs={12} className='f-p2'>CONTACT US</Col>
                                <Col xs={12} className='f-p1-l1 f-p3-1 mb-1'>HADE OFFICE - YOGICHOWK</Col>
                                <Col xs={12} className='f-p3'>401-404, 4th Floor, City Center Complex, Nr. Yogichowk, Varachha, Surat.</Col>
                                <Col xs={12} className='f-p33 d-flex'>Mo : <div className="f-p33-1">+91 90333 16003</div></Col>
                                <Col xs={12} className='f-p1-l1 f-p3-1 mb-1'>OTHER BRANCHES</Col>
                                <Col xs={12} className='f-p22'><BiSolidBank></BiSolidBank> Katargam</Col>
                                <Col xs={12} className='f-p22'><BiSolidBank></BiSolidBank> Mota Varachha</Col>
                                <Col xs={12} className='f-p22'><BiSolidBank></BiSolidBank> Adajan</Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className="f-bg1">
                <Container>
                    <Row className='foot-bg-1'>
                        <Col>© 2023 All Rights Reserved by Creative Design & Multimedia Institute.</Col>
                    </Row>
                </Container>
            </div>
        </>
    )
}

export default Foot;