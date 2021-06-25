import Head from 'next/head'
import { Row, Col } from 'reactstrap';
import Texte from '../components/shared/Texte';
import FormationsCard from "../components/shared/FormationsCard"
import Sect__Formation from '../components/molecules/sectionFormation';
import Titre from '../components/shared/Titre';
import Footer from '../components/molecules/Footer';

export default function Formations() {

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
      <Sect__Formation/>
      <FormationsCard/>
      <Footer/>
      </div>
  )
}