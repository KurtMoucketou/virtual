import Head from 'next/head'
import { Container } from 'reactstrap';
import ContactSection from '../components/molecule/ContactSection';
import MenuSection from '../components/molecule/MenuSection';
import PageBanList from '../components/molecule/PageBanList';
import PageBannerSection from '../components/molecule/PageBannerSection';
import TitleSection from '../components/molecule/TitleSection';
import Texte from '../components/shared/Texte';

export default function Menu() {

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
      <Head>
        <title>CrocPiz</title>
        <link rel="icon" href="/img/favicon.ico" />
      </Head>

      <main className="main">
        <PageBannerSection titre="Contact" sousTitre="get in touch" />
        <PageBanList filAriannes={filAriannes} />
        <ContactSection />
      </main>

    </div>
  )
}
