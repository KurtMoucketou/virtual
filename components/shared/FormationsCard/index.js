import React from 'react';
import FormationsCardStc from "./FormationsCard.stc";
import { Container, Row, Col } from 'reactstrap';
import { GrFormSchedule } from 'react-icons/gr';
import Titre from "../Titre";

const FormationsCard = (props) => {
  return <FormationsCardStc>
            <Container className="container">
                <Row className="ranger">
                    <Col lg={4}>
                        <div className="formation__2">

                            <div className="info">
                                    <a>
                                        <Titre taille="18px" text__align="left" texte="Management international de Transport et logistique" className="titre__Card" />
                                    </a>
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

                    <Col lg={4}>
                        <div className="formation__2">

                            <div className="info">
                                <Titre taille="18px" text__align="left" texte="Master en Finance et Management international" />
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

                    <Col lg={4}>
                        <div className="formation__2">

                            <div className="info">
                                <Titre taille="18px" text__align="left" texte="Diplôme d’Etudes Universitaires des Métiers Technico-Commerciaux" />
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

                <Row className="ranger mb-5 mt-5">
                    <Col lg={4}>
                        <div className="formation__2">

                            <div className="info">
                                    <a>
                                        <Titre taille="18px" text__align="left" texte="Master Management en Hôtellerie Internationale" className="titre__Card" />
                                    </a>
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

                    <Col lg={4}>
                        <div className="formation__2">

                            <div className="info">
                                <Titre taille="18px" text__align="left" texte="Master Marketing digital et E-Business" />
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

                    <Col lg={4}>
                        <div className="formation__2">

                            <div className="info">
                                <Titre taille="18px" text__align="left" texte="Management International & Logistique" />
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

                <Row className="ranger mb-5 mt-5">
                    <Col lg={4}>
                        <div className="formation__2">

                            <div className="info">
                                    <a>
                                        <Titre taille="18px" text__align="left" texte="Master Trading et Finance des Marchés" className="titre__Card" />
                                    </a>
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

                    <Col lg={4}>
                    </Col>

                    <Col lg={4}>
                    </Col>
                    
                </Row>

            </Container>
        </FormationsCardStc>;
};

export default FormationsCard;