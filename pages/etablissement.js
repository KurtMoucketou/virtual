import Head from 'next/head'
import { Row, Col } from 'reactstrap';
import Texte from '../components/shared/Texte';
import CoursCard from "../components/shared/CourCard"
import FormContact from '../components/shared/ContactForm';
import Titre from '../components/shared/Titre';
import Footer from '../components/molecules/Footer';

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
      <FormContact/>
      <CoursCard/>
      <Footer/>
      </div>
  )
}
