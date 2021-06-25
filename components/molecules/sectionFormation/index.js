import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import Titre from "../../shared/Titre";
import SectionFormStc from "./sectionFormation.stc";
import SousTitle from '../../shared/SousTitle';

const Sect__Formation = (props) => {

  return (
    <SectionFormStc>
    <Container className="mb-5">
        <Row>
          <Col lg="4">
            
          </Col>

          <Col lg="4" className="header__form">
            <SousTitle text__transform="uppercase" font__weight="500" text__align="center" color="#8c89a2" padding__bottom="0" texte="FORMATIONS" className="sousTitle__formContact mb-0" /><br></br>
            <Titre couleur="#3f3a64" poid_font="700" taille="34px" text__align="center" className="mt-0" texte="La liste des formations" />
          </Col>

          <Col smlg="4">
            
          </Col>

        </Row>

        <Row>
            <Col lg={4}>

            </Col>

            <Col lg={4}>
                
            </Col>

            <Col lg={4}>
                
            </Col>
        </Row>
    </Container>

    
    </SectionFormStc>
  );
}

export default Sect__Formation;