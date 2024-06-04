import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Placement from '../AboutUs/Placement';

import { BsCalendarEvent ,BsFillChatDotsFill } from "react-icons/bs";

function Blogs() {
    return (
        <>
            <div className="blog-bg">
                <Container>
                    <Row>
                        <Col className="page-t ps-3">Blog</Col>
                        <Col className="page-t1 pe-3">Home / Blog</Col>
                    </Row>
                </Container>
            </div>
            <Container>
                <Row className='au-d111-bg mt-5 pt-5'>
                    <Col xs={12} sm={6} xl={4} className='mb-5'>
                        <Row className='b-card'>
                            <Col xs={12} className='p-0'><img className='b-card-i1' src={require("../../image/1_Civil_engineering_training_institute_in_rander.jpg")} /></Col>
                            <Col xs={12} className='b-card-1'>Future Trends in Game Development</Col>
                            <Col xs={12} className='b-card-2'>What is Game Development? IT industry is the fastest growing industry in the globe. In 2020 worldwide 7.26 Million users use the...</Col>
                            <Col xs={12} className='b-card-3'>Read More...</Col>
                            <Col xs={12} className='b-card-4'><BsCalendarEvent></BsCalendarEvent><div className="b-card-44">18th Apr,2020</div> <BsFillChatDotsFill></BsFillChatDotsFill> <div className="b-card-44">0 Comment</div></Col>
                        </Row>
                    </Col>
                    <Col xs={12} sm={6} xl={4} className='mb-5'>
                        <Row className='b-card'>
                            <Col xs={12} className='p-0'><img className='b-card-i1' src={require("../../image/2_game_design_class_in_surat.jpg")} /></Col>
                            <Col xs={12} className='b-card-1'>Top 10 Most Demanded Programming Languages to Learn for Future in 2020</Col>
                            <Col xs={12} className='b-card-2'>There are many programming languages working in the IT industry these days. Also, much more useful programming language...</Col>
                            <Col xs={12} className='b-card-3'>Read More...</Col>
                            <Col xs={12} className='b-card-4'><BsCalendarEvent></BsCalendarEvent><div className="b-card-44">18th Apr,2020</div> <BsFillChatDotsFill></BsFillChatDotsFill> <div className="b-card-44">0 Comment</div></Col>
                        </Row>
                    </Col>
                    <Col xs={12} sm={6} xl={4} className='mb-5'>
                        <Row className='b-card'>
                            <Col xs={12} className='p-0'><img className='b-card-i1' src={require("../../image/3_graphics_design.jpg")} /></Col>
                            <Col xs={12} className='b-card-1'>What is AI (Artificial Intelligence) ? </Col>
                            <Col xs={12} className='b-card-2'>What is AI (Artificial Intelligence)? A lot of such technologies are evolving in the recent IT (Information Technology) sector in the...</Col>
                            <Col xs={12} className='b-card-3'>Read More...</Col>
                            <Col xs={12} className='b-card-4'><BsCalendarEvent></BsCalendarEvent><div className="b-card-44">18th Apr,2020</div> <BsFillChatDotsFill></BsFillChatDotsFill> <div className="b-card-44">0 Comment</div></Col>
                        </Row>
                    </Col>
                    <Col xs={12} sm={6} xl={4} className='mb-5'>
                        <Row className='b-card'>
                            <Col xs={12} className='p-0'><img className='b-card-i1' src={require("../../image/4_android_app_development_course_in_surat1.png")} /></Col>
                            <Col xs={12} className='b-card-1'>Future Scope of Android Application Development</Col>
                            <Col xs={12} className='b-card-2'>Scope for Android Application Development in 2020   Mobile application development one of the fastest growing IT career paths in...</Col>
                            <Col xs={12} className='b-card-3'>Read More...</Col>
                            <Col xs={12} className='b-card-4'><BsCalendarEvent></BsCalendarEvent><div className="b-card-44">18th Apr,2020</div> <BsFillChatDotsFill></BsFillChatDotsFill> <div className="b-card-44">0 Comment</div></Col>
                        </Row>
                    </Col>
                    <Col xs={12} sm={6} xl={4} className='mb-5'>
                        <Row className='b-card'>
                            <Col xs={12} className='p-0'><img className='b-card-i1' src={require("../../image/5_temptee.jpg")} /></Col>
                            <Col xs={12} className='b-card-1'>Front End, Back End, and Full Stack Developers: A Comparison</Col>
                            <Col xs={12} className='b-card-2'>Front-End vs Back-End vs Full Stack Web Developers   Front End Developers As the name implies, front developers work on the...</Col>
                            <Col xs={12} className='b-card-3'>Read More...</Col>
                            <Col xs={12} className='b-card-4'><BsCalendarEvent></BsCalendarEvent><div className="b-card-44">18th Apr,2020</div> <BsFillChatDotsFill></BsFillChatDotsFill> <div className="b-card-44">0 Comment</div></Col>
                        </Row>
                    </Col>
                    <Col xs={12} sm={6} xl={4} className='mb-5'>
                        <Row className='b-card'>
                            <Col xs={12} className='p-0'><img className='b-card-i1' src={require("../../image/6_Flutter-vs-RN-02.png")} /></Col>
                            <Col xs={12} className='b-card-1'>Flutter vs React Native: A Developer’s Perspective</Col>
                            <Col xs={12} className='b-card-2'>Flutter vs React Native React Native by Facebook and Flutter by Google – two hot cross-platform app development...</Col>
                            <Col xs={12} className='b-card-3'>Read More...</Col>
                            <Col xs={12} className='b-card-4'><BsCalendarEvent></BsCalendarEvent><div className="b-card-44">18th Apr,2020</div> <BsFillChatDotsFill></BsFillChatDotsFill> <div className="b-card-44">0 Comment</div></Col>
                        </Row>
                    </Col>
                </Row>
            </Container>

            <Placement></Placement>
        </>
    )
}

export default Blogs;