import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import FooterStc from "./Footer.stc";
import { AiFillFacebook, AiFillLinkedin } from 'react-icons/ai';
import { FaTwitter } from 'react-icons/fa';
import { FiInstagram } from 'react-icons/fi';
//import SousTitre from "../../shared/SousTitre";
import Texte from "../../shared/Texte";
import Link from "next/link";
import ElementMenu from "../../shared/ELementMenu";
import Titre from "../../shared/Titre";

const Menus01 = [
  { lien: "/elprofa", texte: "Etablissements" },
  { lien: "/elprofa", texte: "Métiers" },
  { lien: "/elprofa", texte: "Logement" }
];

const Menus01B =[
  { lien: "/elprofa", texte: "Formations" },
  { lien: "/elprofa", texte: "Vols et guides" },
];

const Menus02 = [
    { lien: "/elprofa", texte: "Inscription" },
    { lien: "/elprofa", texte: "Bourses" },
    { lien: "/elprofa", texte: "Mentions légales" },
    { lien: "/elprofa", texte: "Journées portes ouvertes" },
    { lien: "/elprofa", texte: "Salon virtuel" },
    { lien: "/elprofa", texte: "Conditions d'utilisation" },
    { lien: "/elprofa", texte: "politique de confidentialité" }
  ];

const Footer = (props) => {
  return (
    <FooterStc>
      <Container>
        <Row className="row__footer">
          <Col xl={5} className="col-xl-3 col-md-4 col-sm-7 col-12 max-mb-50" >
              <div className="footer__widget">
                  <Titre text__align="left" couleur="#3f3a64" poid_font="700" taille="18px" texte="ofaoriente.com" />
              
              <div className="footer__widget__content">
                  <div className="content">
                    <Texte fontTaille="16px" poid_font="600" couleur="#404040" className="text__Footer">Plus grands réseau d’établissements supérieurs et professionnels en Afrique.</Texte><br></br>
                    <Texte fontTaille="16px" poid_font="600" couleur="#404040">+212 522 33 44 55 </Texte>
                  <p>
                    <a href=""><Texte texte="info@ofaoriente.com" fontTaille="16px" /></a>
                  </p>
                </div>
              <div className="social__Medias">
                  <a href="#" className="footer__social__inline"><AiFillFacebook size={24} /></a>
                  <a href="#" className="footer__social__inline"><FaTwitter size={24} /></a>
                  <a href="#" className="footer__social__inline"><FiInstagram size={24} /></a>
                  <a href="#" className="footer__social__inline"><AiFillLinkedin size={24} /></a>
              </div>
              </div>
              </div> 
            </Col>

            <Col lg={3} className="divMenu col-xl-3 col-md-4 col-sm-7 col-12 max-mb-50">
              <h4 className="title__menu">Rubriques</h4>
        <Row className="element__menuA">
            <Col className="element__footer__unA">
            <ul>
              {Menus01.map((menu, index) => (
                <ElementMenu
                  couleur="#fff"
                  key={index}
                  taille="13px"
                  marge_bas="20px"
                  texte={menu.texte}
                  font_weight="600"
                  lien={menu.lien}
                />
              ))}
            </ul>
            </Col>
            
            <Col>
            <ul>
              {Menus01B.map((menu, index) => (
                <ElementMenu
                  couleur="#fff"
                  key={index}
                  taille="13px"
                  marge_bas="20px"
                  texte={menu.texte}
                  lien={menu.lien}
                />
              ))}
            </ul>
        </Col>
    </Row>
          </Col>

              
          <Col lg={3} className="divMenu col-xl-3 col-md-4 col-sm-7 col-12 max-mb-50">
              <p className="title__menu">Liens utiles</p>
            <ul>
              {Menus02.map((menu, index) => (
                <ElementMenu
                  couleur="#fff"
                  key={index}
                  taille="13px"
                  marge_bas="20px"
                  texte={menu.texte}
                  lien={menu.lien}
                />
              ))}
            </ul>
          </Col>

        </Row>
        

        <Row className="row max-mt-20">
          <Col lg={10} className="colCopy">
                <Texte fontTaille="12px" poid_font="400" couleur="#ababab" alignement="center" className="copyright">© 2021 ofa oriente by Dubani Agency. <a href="">All Rights Reserved</a></Texte>
          </Col>

        </Row>
      </Container>
    </FooterStc>
  );
};

export default Footer;
