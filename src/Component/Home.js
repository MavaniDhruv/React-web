import Counter from "./AboutUs/Counter";
import Difference from "./AboutUs/Difference";
import Placement from "./AboutUs/Placement";

import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

import Slider from "react-slick";
import "../../node_modules/slick-carousel/slick/slick.css";
import "../../node_modules/slick-carousel/slick/slick-theme.css";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { PiStarFill, PiStarHalfFill } from "react-icons/pi";
import { BsArrowRight } from "react-icons/bs";

function Home() {
    // const settings = {
    //     dots: true,
    //     infinite: true,
    //     speed: 1000,
    //     fade: true,
    //     slidesToShow: 1,
    //     slidesToScroll: 1
    // };
    return (
        <>
            {/* <Slider className="pad-0" {...settings}>
                <div >
                    <img className="pad-0" src={require("../image/slider-1.webp")} />
                </div>
                <div>
                    <img src={require("../image/slider-2.webp")} />
                </div>
                <div>
                    <img src={require("../image/slider-3.webp")} />
                </div>
                <div>
                    <img src={require("../image/slider-4.webp")} />
                </div>
                <div>
                    <img src={require("../image/slider-5.webp")} />
                </div>
                <div>
                    <img src={require("../image/slider-6.webp")} />
                </div>
            </Slider> */}


            <OwlCarousel className='owl-theme' items={1} loop margin={2} nav dots={false} autoplay autoplayTimeout={3000} smartSpeed={1500}>
                <div class='item'>
                    <img src={require("../image/slider-1.webp")} />
                </div>
                <div class='item'>
                    <img src={require("../image/slider-2.webp")} />
                </div>
                <div class='item'>
                    <img src={require("../image/slider-3.webp")} />
                </div>
                <div class='item'>
                    <img src={require("../image/slider-4.webp")} />
                </div>
                <div class='item'>
                    <img src={require("../image/slider-5.webp")} />
                </div>
                <div class='item'>
                    <img src={require("../image/slider-6.webp")} />
                </div>
                <div class='item'>
                    <img src={require("../image/slider-7.webp")} />
                </div>
                <div class='item'>
                    <img src={require("../image/slider-8.webp")} />
                </div>
                <div class='item'>
                    <img src={require("../image/slider-9.webp")} />
                </div>
            </OwlCarousel>


            {/* part-1 */}

            <Container className='p1'>
                <Row>
                    <Col xs={12} className='p1-h1'>CREATIVE COURSE</Col>
                    <Col xs={12} className='p1-h2 text-center'>OFFERED COURSES</Col>
                </Row>
                <Row>
                    <Col xs={12} sm={6} xl={4} className='p1-h3'>
                        <Row className='p1-card'>
                            <Col xs={12} className='p-0'><img className='p1-card-i' src={require("../image/_0032_data-science.webp")} /></Col>
                            <Col xs={12} className='p1-card1 ps-3'>Development Courses</Col>
                            <Col xs={6} className='p1-card2 ps-3'><PiStarFill></PiStarFill> <PiStarFill></PiStarFill> <PiStarFill></PiStarFill> <PiStarFill></PiStarFill> <PiStarHalfFill></PiStarHalfFill></Col>
                            <Col xs={6} className='p-0 pe-3 d-flex justify-content-end align-content-center'><button className='p1-card-btn'>Know More..!</button></Col>
                        </Row>
                    </Col>
                    <Col xs={12} sm={6} xl={4} className='p1-h3'>
                        <Row className='p1-card'>
                            <Col xs={12} className='p-0' ><img className='p1-card-i' src={require("../image/_0060_1_Animation.webp")} /></Col>
                            <Col xs={12} className='p1-card1 ps-3'>Design Courses</Col>
                            <Col xs={6} className='p1-card2 ps-3'><PiStarFill></PiStarFill> <PiStarFill></PiStarFill> <PiStarFill></PiStarFill> <PiStarFill></PiStarFill> <PiStarHalfFill></PiStarHalfFill></Col>
                            <Col xs={6} className='p-0 pe-3 d-flex justify-content-end align-content-center'><button className='p1-card-btn'>Know More..!</button></Col>
                        </Row>
                    </Col>
                    <Col xs={12} sm={6} xl={4} className='p1-h3'>
                        <Row className='p1-card'>
                            <Col xs={12} className='p-0' ><img className='p1-card-i' src={require("../image/c++-training-institute.jpg")} /></Col>
                            <Col xs={12} className='p1-card1 ps-3'>Programming IT</Col>
                            <Col xs={6} className='p1-card2 ps-3'><PiStarFill></PiStarFill> <PiStarFill></PiStarFill> <PiStarFill></PiStarFill> <PiStarFill></PiStarFill> <PiStarHalfFill></PiStarHalfFill></Col>
                            <Col xs={6} className='p-0 pe-3 d-flex justify-content-end align-content-center'><button className='p1-card-btn'>Know More..!</button></Col>
                        </Row>
                    </Col>
                    <Col xs={12} sm={6} xl={4} className='p1-h3'>
                        <Row className='p1-card'>
                            <Col xs={12} className='p-0'><img className='p1-card-i' src={require("../image/_0010_react-js-training-institute.webp")} /></Col>
                            <Col xs={12} className='p1-card1 ps-3'>Trendy Courses</Col>
                            <Col xs={6} className='p1-card2 ps-3'><PiStarFill></PiStarFill> <PiStarFill></PiStarFill> <PiStarFill></PiStarFill> <PiStarFill></PiStarFill> <PiStarHalfFill></PiStarHalfFill></Col>
                            <Col xs={6} className='p-0 pe-3 d-flex justify-content-end align-content-center'><button className='p1-card-btn'>Know More..!</button></Col>
                        </Row>
                    </Col>
                    <Col xs={12} sm={6} xl={4} className='p1-h3'>
                        <Row className='p1-card'>
                            <Col xs={12} className='p-0' ><img className='p1-card-i' src={require("../image/_0049_12_Google_SketchUp.webp")} /></Col>
                            <Col xs={12} className='p1-card1 ps-3'>Civil-Mech. Engineering</Col>
                            <Col xs={6} className='p1-card2 ps-3'><PiStarFill></PiStarFill> <PiStarFill></PiStarFill> <PiStarFill></PiStarFill> <PiStarFill></PiStarFill> <PiStarHalfFill></PiStarHalfFill></Col>
                            <Col xs={6} className='p-0 pe-3 d-flex justify-content-end align-content-center'><button className='p1-card-btn'>Know More..!</button></Col>
                        </Row>
                    </Col>
                    <Col xs={12} sm={6} xl={4} className='p1-h3'>
                        <Row className='p1-card'>
                            <Col xs={12} className='p-0' ><img className='p1-card-i' src={require("../image/_0030_digital-marketing-training-institute.webp")} /></Col>
                            <Col xs={12} className='p1-card1 ps-3'>Business Development</Col>
                            <Col xs={6} className='p1-card2 ps-3'><PiStarFill></PiStarFill> <PiStarFill></PiStarFill> <PiStarFill></PiStarFill> <PiStarFill></PiStarFill> <PiStarHalfFill></PiStarHalfFill></Col>
                            <Col xs={6} className='p-0 pe-3 d-flex justify-content-end align-content-center'><button className='p1-card-btn'>Know More..!</button></Col>
                        </Row>
                    </Col>
                </Row>
                <Row className='text-center pb-5'>
                    <Col><button className='p1-card-btn2'>View All Courses <BsArrowRight></BsArrowRight></button></Col>
                </Row>
            </Container>

            {/* part-2 */}

            {/* <Row className='p2'>
                <Col xs={12} md={12} className='p2-1'>
                    <Row>
                        <Col xs={12} className='p2-h1'>ABOUT US</Col>
                        <Col xs={12} className='p2-h2'>IT CAREER IN SURAT, MOVING TOWARDS THE BETTER TOMORROW!</Col>
                        <Col xs={12} className='p2-h3'>Creative Design & Multimedia Institute(CDMI) is a reputed training institute in Surat for web design, Game design,Mobile App Development, Game Development ,Video Editing & All types of IT Courses with 9 years of full-fledged, result-oriented training experience. We stepped in the market in 2014 with the goal to help students, working professionals and other interested candidates get that dream job or open that desired freelance business in some of the most popular Computer / IT fields. Our aim is to ease the hiring process for businesses and organizations by providing work-ready professionals who can contribute greatly to their success. Since then, we have worked hard to achieve this goal and dedicated our time and resources to train students extensively.</Col>
                        <Col><button className='p1-card-btn2'>Enroll Now..! <BsArrowRight></BsArrowRight></button></Col>
                    </Row>
                </Col>
                <Col xs={12} md={5} className='p2-2 p-0'><iframe width="100%" height="90%" src="https://www.youtube.com/embed/ZZpoqf-mwEM?si=ana1EUaislVUNnFC" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></Col>
            </Row> */}

            {/* About us */}

            <Counter></Counter>

            <Difference></Difference>

            <Placement></Placement>
        </>
    )
}


export default Home;