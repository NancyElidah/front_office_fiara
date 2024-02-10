
import {Route,Routes} from 'react-router-dom'
import ListeAnnonce from './pages/Annonces/ListeAnnonce';
import DetailsAnnonce from './pages/Annonces/DetailsAnnonce';
import Login from './pages/Login/Login';
import ListeFavoris from './pages/Annonces/ListeFavoris';
import Recherche from './pages/recherche/Recherche';
import TypeRecherche from './pages/recherche/TypeRecherche';
import BoiteRecherche from './pages/recherche/BoiteRecherche';
import MarqueRecherche from './pages/recherche/MarqueRecherche';
import ModelRecherche from './pages/recherche/ModelRecherche';
import Energie from './pages/recherche/Energie';
import CouleurRecherche from './pages/recherche/CouleurRecherche';
import PaysRecherche from './pages/recherche/PaysRecherche';
import Prix from './pages/recherche/Prix';
import AnneeRecherche from './pages/recherche/AnneeRecherche';
import ListeRecherche from './pages/recherche/ListeRecherche';
import ListeChat from './pages/chat/ListeChat';
import Chat from './pages/chat/Chat';
import RechercheAvance from './pages/recherche/RechercheAvance';


function App() {
  return (
      <>
          <Routes>
              <Route path="/" element= {<ListeAnnonce/>}/>
              <Route path="/details_annonce/:id" element= {<DetailsAnnonce/>}/>
              <Route path="/:token/details_annonce/:id" element= {<DetailsAnnonce/>}/>
              <Route path="/login/:open/:lien" element= {<Login/>}/>
              <Route path="/login/:open/:lien/:idUtils" element= {<Login/>}/>
              <Route path="/:token/liste_favoris" element= {<ListeFavoris/>}/>
              <Route path="/recherche" element= {<Recherche/>}/>
              <Route path="/recherche_type" element= {<TypeRecherche/>}/>
              <Route path="/recherche_boite" element= {<BoiteRecherche/>}/>
              <Route path="/recherche_marque" element= {<MarqueRecherche/>}/>
              <Route path="/recherche_modele" element= {<ModelRecherche/>}/>
              <Route path="/recherche_energie" element= {<Energie/>}/>
              <Route path="/recherche_couleur" element= {<CouleurRecherche/>}/>
              <Route path="/recherche_pays" element= {<PaysRecherche/>}/>
              <Route path="/recherche_prix" element= {<Prix/>}/>
              <Route path="/recherche_annee" element= {<AnneeRecherche/>}/>
              <Route path="/resultat_annonce" element= {<ListeRecherche/>}/>
              <Route path="/all_chat" element= {<ListeChat/>}/>
              <Route path="/chat" element= {<Chat/>}/>
              <Route path="/recherche_avance" element= {<RechercheAvance/>}/>
          </Routes>
      </>
  );
}

export default App;
