import styles from "../styles/homePage.module.scss";
import commonStyles from "../styles/common.module.scss";
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import { Card, Row, Carousel } from "react-bootstrap";
import { AiFillWechat } from "react-icons/ai";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import Nav from "react-bootstrap/Nav";
function LandingPage() {
    const [selectedNavItem, setSelectedNavItem] = useState<string>("0");

    const carouselContainer = classNames("container", styles.carouselContainer);
    const imageOne = classNames(styles.imageOne);
    const imageTwo = classNames(styles.imageTwo);
    const imageThree = classNames(styles.imageThree);
    const bannerText = classNames(styles.customCarouselBannertxt);
    const buttonStyle = classNames(
        "btn btn-secondary",
        styles.customCarouselButton
    );

    function changeSelectedNavItem(selectedkey: any) {
        if (selectedNavItem !== selectedkey) {
          setSelectedNavItem(selectedkey);
        }
      }

    return (
        <>
            <div className={styles.homePageWrapper}>
                <div className={styles.homePageContainer}>
                    <div className={styles.layoutContent}>
                    </div>
                    <div className={carouselContainer}>
                        <div className="text-white my-4 text-center">
                            <Carousel controls={false} className={styles.carouselItem}>
                                <Carousel.Item className={styles.carouselItem}>
                                    <div className={imageOne}></div>
                                    <Carousel.Caption className={bannerText}>
                                        <h5>Playgrounds</h5>
                                        <p>Release of playgrounds for chat, completions and Dall-E.</p>
                                        {/* <button
                                            className={buttonStyle}
                                            onClick={() =>
                                                window.open(
                                                    `${window.location}isPal`
                                                )
                                            }
                                        >
                                            Start here
                                        </button> */}
                                    </Carousel.Caption>
                                </Carousel.Item>
                                <Carousel.Item className={styles.carouselItem}>
                                    <div className={imageTwo}></div>
                                    <Carousel.Caption className={bannerText}>
                                        <h5>Manufacturing engineering chat</h5>
                                        <p>Release of manufacturing engineering chat with BOS documents to improve productivity of manufacturing engineers.</p>
                                        {/* <button
                                            className={buttonStyle}
                                            onClick={() =>
                                                window.open(
                                                    `${window.location}ticket`
                                                )
                                            }
                                        >
                                            Start here
                                        </button> */}
                                    </Carousel.Caption>
                                </Carousel.Item>
                            </Carousel>
                        </div>
                        <div className="" style={{paddingBottom: '10px'}}>
                            <Nav
                                variant="pills"
                                className={commonStyles.customNavPillBar}
                                onSelect={changeSelectedNavItem}    
                            >
                                <Nav.Item className={`${commonStyles.customNav}`}>
                                    <Nav.Link
                                    eventKey={0}
                                    data-id={`nav-0`}
                                    className={`${commonStyles.customNavPill} ${selectedNavItem == '0' ? commonStyles.navActive : ''}`}
                                    >
                                        Playgrounds
                                    </Nav.Link>
                                </Nav.Item>
                                <Nav.Item className={`${commonStyles.customNav}`}>
                                    <Nav.Link
                                    eventKey={1}
                                    data-id={`nav-1`}
                                    className={`${commonStyles.customNavPill} ${selectedNavItem == '1' ? commonStyles.navActive : ''}`}
                                    >
                                        Manufacturing
                                    </Nav.Link>
                                </Nav.Item>
                            </Nav>
                            <Card className={commonStyles.landingPageCard}>
                                <Card.Body>
                                    <Row>
                                        { selectedNavItem == '0' ?  ( 
                                            <>
                                                <div className="col-md-4">
                                                    <Link
                                                        style={{padding: 0}}
                                                        to={`chat`
                                                            .replace(/ /g, "")
                                                            .toLowerCase()}
                                                        relative={"route"}
                                                    >
                                                        <Card className={commonStyles.landingPageChildCard}>
                                                            <Card.Body>
                                                                <AiFillWechat style={{ fontSize: '46px' }} />
                                                                <span className={commonStyles.cardBodyTile}>Chat</span>
                                                            </Card.Body>
                                                        </Card>
                                                    </Link>
                                                </div>
                                                <div className="col-md-4">
                                                    <Card className={commonStyles.landingPageChildCard}>
                                                        <Card.Body>
                                                            <AiFillWechat style={{ fontSize: '46px' }} />
                                                            <span className={commonStyles.cardBodyTile}>Completions</span>
                                                        </Card.Body>
                                                    </Card>
                                                </div>
                                                <div className="col-md-4">
                                                    <Card className={commonStyles.landingPageChildCard}>
                                                        <Card.Body>
                                                            <AiFillWechat style={{ fontSize: '46px' }} />
                                                            <span className={commonStyles.cardBodyTile}>Dalle-E</span>
                                                        </Card.Body>
                                                    </Card>
                                                </div> 
                                            </>
                                        ) : (<></>) }
                                        { selectedNavItem == '1' ?  ( 
                                            <>
                                                <div className="col-md-4">
                                                    <Link
                                                        style={{padding: 0}}
                                                        to={`https://manufacturinggpt.qa.clarios.com/`}
                                                        relative={"path"}
                                                        target="_blank"
                                                    >
                                                        <Card className={commonStyles.landingPageChildCard}>
                                                            <Card.Body>
                                                                <AiFillWechat style={{ fontSize: '46px' }} />
                                                                <span className={commonStyles.cardBodyTile}>Manufacturing GPT</span>
                                                            </Card.Body>
                                                        </Card>
                                                    </Link>
                                                </div>
                                            </>
                                        ) : (<></>) }
                                    </Row>
                                </Card.Body>
                            </Card>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default LandingPage;
