import React from 'react';
import CoursCardStc from "./CoursCard.stc";
import { Container, Row, Col } from 'reactstrap';
import { GrFormSchedule } from 'react-icons/gr';
import Titre from "../Titre";
import Texte from '../Texte';

const CoursCard = (props) => {
  return <CoursCardStc>
            <Container className="">
                <Row className="ranger">
                    <Col className="col-lg-6 mb-4 col__container">
                        <div className="cours__2">
                            <div className="thumbnail">
                                <a href="#" className="">
                                    <img className="imgCard" src="/img/thumbail.jpg" alt="" />
                                </a>
                            </div>

                            <div className="info">
                                <Titre texte="IFIAG vocational School" className="titre__Card" taille="14px" />
                                <Texte color="#000" fontTaille="16px" alignement="justify-center">Centre des Etudes Supérieures d’Ingénierie et de Management</Texte>
                                <ul>
                                    <li>
                                        <img src="/img/ma.jpg" alt="" /><span className="texte__info"> Casablanca</span>
                                    </li>
                                    <li>
                                        <GrFormSchedule/>
                                        <span className="texte__info"> 14 Formations</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </Col>

                    <Col className="col-lg-6 mb-4 col__container">
                        <div className="cours__2">
                            <div className="thumbnail">
                                <a href="#" className="">
                                    <img className="imgCard" src="/img/thumbail.jpg" alt="" />
                                </a>
                            </div>

                            <div className="info">
                                <Titre texte="CESIM" />
                                <Texte fontTaille="16px" alignement="justify-center">Centre des Etudes Supérieures d’Ingénierie et de Management</Texte>
                                <ul>
                                    <li>
                                        <img src="/img/ma.jpg" alt="" /><span className="texte__info"> Casablanca</span>
                                    </li>
                                    <li>
                                        <GrFormSchedule/>
                                        <span className="texte__info"> 14 Formations</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </Col>
                </Row>

                <Row className="ranger">
                    <Col className="col-lg-6 mb-4 col__container">
                        <div className="cours__2">
                            <div className="thumbnail">
                                <a href="#" className="">
                                    <img className="imgCard" src="/img/thumbail.jpg" alt="" />
                                </a>
                            </div>

                            <div className="info">
                                <Titre texte="ESCA" className="titre__Card" />
                                <Texte color="#000" fontTaille="16px" alignement="justify-center">ESCA Ecole de Management</Texte>
                                <ul>
                                    <li>
                                        <img src="/img/ma.jpg" alt="" /><span className="texte__info"> Rabat</span>
                                    </li>
                                    <li>
                                        <GrFormSchedule/>
                                        <span className="texte__info"> 14 Formations</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </Col>

                    <Col className="col-lg-6 mb-4 col__container">
                        <div className="cours__2">
                            <div className="thumbnail">
                                <a href="#" className="">
                                    <img className="imgCard" src="/img/cour-5.jpg" alt="" />
                                </a>
                            </div>

                            <div className="info">
                                <Titre texte="Art’Com Sup" />
                                <Texte fontTaille="16px" alignement="justify-center">Ecole Supérieure De Design.</Texte>
                                <ul>
                                    <li>
                                        <img src="/img/ma.jpg" alt="" /><span className="texte__info"> Rabat</span>
                                    </li>
                                    <li>
                                        <GrFormSchedule/>
                                        <span className="texte__info"> 14 Formations</span>
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