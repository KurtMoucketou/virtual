import Head from 'next/head'
import Section1Accueil from '../components/molecules/Section1Accueil'
import SectionBottomShape from '../components/molecules/SectionBottomShape'
import SectionBrand from '../components/molecules/SectionBrand'
import SectionBrandUniversite from '../components/molecules/SectionBrandUniversite'
import SectionConseilEtudiant from '../components/molecules/SectionConseilEtudiant'
import Ecole from '../components/molecules/sectionEcoleMois'
import SectionEtudiantTestimony from '../components/molecules/SectionEtudiantTestimony'
import NoGuitter from '../components/molecules/SectionNoGuitter'

export default function Home() {
  return (
    <div className="App">
      <Head>
        <title>Ofa | Accueil</title>
        <link rel="icon" href="/img/favicon.ico" />
      </Head>

      <main className="main">
        <Section1Accueil />
        <SectionBottomShape />
        <div className="container">
            <NoGuitter />
            <Ecole />
        </div>
        <SectionBrand/>
        <SectionBrandUniversite />
        <SectionEtudiantTestimony/>
        <SectionConseilEtudiant />
      </main>

    </div>
  )
}
