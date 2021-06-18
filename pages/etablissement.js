import Head from 'next/head'
import { Row, Col } from 'reactstrap';
//import MenuSection from '../components/molecule/MenuSection';
//import PageBanList from '../components/molecule/PageBanList';
//import PageBannerSection from '../components/molecule/PageBannerSection';
//import TitleSection from '../components/molecule/TitleSection';
import Texte from '../components/shared/Texte';
import CoursCard from "../components/shared/CourCard"
import FormContact from '../components/shared/ContactForm';
import Titre from '../components/shared/Titre';

export default function Etablissement() {

  const filAriannes=[
    {
        contenu:<li><a href=""><Texte texte="Home" fontTaille="16px" /></a></li>
    },
    {
        contenu:<li> {">"} </li>
    },
    {
        contenu:<li><a href=""><Texte texte ="Contact" fontTaille="16px" /></a></li>
    },
]

  return (
    <div className="App">
      <div>
        <Row>
          <Col sm="4">
            
          </Col>

          <Col sm="4">
            <Titre couleur="#3f3a64" poid_font="700" taille="34px" texte="La liste des écoles" />
          </Col>

          <Col sm="4">
            
          </Col>

        </Row>
      <FormContact/>
      <CoursCard/>
      </div>
    </div>
  )
}
