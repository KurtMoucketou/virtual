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
                                    <img className="imgCard" src="/img/thumbail-1.jpg" alt="" />
                                </a>
                            </div>

                            <div className="info">
                                <Titre text__align="left" texte="IFIAG vocational School" className="titre__Card" />
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
                                <Titre text__align="left" texte="CESIM" />
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
                                    <img className="imgCard" src="/img/thumbail-3.jpg" alt="" />
                                </a>
                            </div>

                            <div className="info">
                                <Titre text__align="left" texte="ESCA" className="titre__Card" />
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
                                <Titre text__align="left" texte="Art’Com Sup" />
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

                <Row className="ranger">
                    <Col className="col-lg-6 mb-4 col__container">
                        <div className="cours__2">
                            <div className="thumbnail">
                                <a href="#" className="">
                                    <img className="imgCard" src="/img/thumbail-6.jpg" alt="" />
                                </a>
                            </div>

                            <div className="info">
                                <Titre text__align="left" texte="AEROSUP" className="titre__Card" />
                                <Texte color="#000" fontTaille="16px" alignement="justify-center">Ecole Supérieure de l'Aéronautique et de la Haute Technologie</Texte>
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
                                    <img className="imgCard" src="/img/thumbnail-7.jpg" alt="" />
                                </a>
                            </div>

                            <div className="info">
                                <Titre text__align="left" texte="ESTEM" />
                                <Texte fontTaille="16px" alignement="justify-center">Ecole Supérieure en Ingénierie de L’Information, Télécommunication, Management & Genie Civil</Texte>
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

                <Row className="ranger">
                    <Col className="col-lg-6 mb-4 col__container">
                        <div className="cours__2">
                            <div className="thumbnail">
                                <a href="#" className="">
                                    <img className="imgCard" src="/img/thumbnail-8.jpg" alt="" />
                                </a>
                            </div>

                            <div className="info">
                                <Titre text__align="left" texte="ADALIA" className="titre__Card" />
                                <Texte color="#000" fontTaille="16px" alignement="justify-center">ADALIA School of Business</Texte>
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
                                    <img className="imgCard" src="/img/thumbnail-9.png" alt="" />
                                </a>
                            </div>

                            <div className="info">
                                <Titre text__align="left" texte="Ostelea Rabat" />
                                <Texte fontTaille="16px" alignement="justify-center">l'école supérieure du tourisme et de l'hôtellerie</Texte>
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