import React from 'react';
import CoursCardStc from "./CoursCard.stc";
import { Container, Row, Col } from 'reactstrap';
import { GrFormSchedule } from 'react-icons/gr';
import Titre from "../Titre";
import Texte from '../Texte';

const CoursCard = (props) => {
  return <CoursCardStc>
            <Container className="">
                <Row className="">
                    <Col className="col-lg-6 mb-4">
                        <div className="cours__2">
                            <div className="thumbnail">
                                <a href="#" className="">
                                    <img src="/img/thumbail.jpg" alt="" />
                                </a>
                            </div>

                            <div className="info">
                                <Titre texte="CESIM" />
                                <Texte texte="Centre des Etudes Supérieures d’Ingénierie et de Management" />
                                <ul>
                                    <li>
                                        <img src="/img/ma.jpg" alt="" /><span>Casablanca</span>
                                    </li>
                                    <li>
                                        <GrFormSchedule/>
                                        <span>Formations</span>
                                    </li>
                                </ul>
                            </div>

                        </div>

                    </Col>
                </Row>

            </Container>
        </CoursCardStc>;
};

export default CoursCard;