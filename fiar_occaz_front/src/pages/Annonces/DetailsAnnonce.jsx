import { Component } from "react";
import Header from "../Header";
import Footer from "../Footer";
import sary from "../assets/vendors/images/v1.jpg";	
import { Link } from "react-router-dom";
import AnnonceServiceInstance from "../service/AnnonceService";
import withRouter from "../Navigation/WithRouter";
import withNavigateHook from "../Navigation/WithNavigateHook";
import FavorisInstance from "../service/Favoris";

class DetailsAnnonce extends Component{
	constructor(props){
        super(props);
        this.state = {
            message: '',
            id: this.props.params.id,
            user :'',
            description : '',
            prix :'',
            type :'',
            modele:'',
            marque:'',
            boite:'',
            energie:'',
            couleur:'',
            nombre_place :'',
            nombre_porte:''
        }
        this.addToFavoris = this.addToFavoris.bind(this);
    }
    componentDidMount() {
        this.fetchData();
    }
    fetchData = () => {

        AnnonceServiceInstance.getOneAnnonce(this.state.id).then((res) => {
            this.setState({ 
                user :res.data.voiture.utilisateur.nom,
                description : res.data.description ,
                prix:res.data.voiture.prix,
                type:res.data.voiture.type.nom,
                modele:res.data.voiture.modele.nom,
                marque:res.data.voiture.marque.nom,
                boite:res.data.voiture.boiteVitesse.nom,
                energie: res.data.voiture.energie.energie,
                couleur:res.data.voiture.couleur.nom,
                nombre_place:res.data.voiture.nbPlace,
                nombre_porte:res.data.voiture.nbPorte
            });
        });
    }

    addToFavoris(e){
		e.preventDefault();
        if(sessionStorage.getItem("token")!== null && sessionStorage.getItem("utilisateur")){
            FavorisInstance.addFavoris().then(() => {
                this.props.navigation(`/:${sessionStorage.getItem("token")}/liste_favoris`);    
        }
        );
        }else {
            this.props.navigation(`/login/${true}/${"details_annonce/" + this.state.id}`);
        }
    }

    render(){
		return(
            <>
                  <Header></Header>
                <div class="main-container">
    <div class="pd-ltr-20">
        <div class="card-box pd-20 height-100-p mb-30" style={{marginTop:-150}}>
            <div class="row align-items-center">
                <div class="col-md-4">
                    <img src={sary} alt="" />
                </div>
                
                <div class="col-md-8">
                <div className="pull-right">
                    <button onClick={this.addToFavoris} className="btn  btn-sm scroll-click" rel="content-y"  data-toggle="collapse"  ><i class="icon-copy fa fa-heart" aria-hidden="true" style={{width:20}}></i></button>
                </div>
                <div className="pull-right" style={{marginRight:20}}>
                    <Link to="/all_chat" className="btn  btn-sm scroll-click" rel="content-y"  data-toggle="collapse"  ><i class="icon-copy fa fa-wechat" aria-hidden="true"></i></Link>
                </div>
                    <h4 className="mb-20 pt-20">{this.state.user}</h4>
                    <p class="font-18 max-width-600">{this.state.description}.</p>
                    
                    <table className="table" style={{border:"less"}}>
                            <thead>
                            </thead>
                            <tbody>
                                        <td>Prix</td>
                                        <td>{this.state.prix}</td>
                                        <tr></tr>
                                        <td>Type</td>
                                        <td>{this.state.type}</td>
                                        <tr></tr>

                                        <td>Modele</td>
                                        <td>{this.state.modele}</td>
                                        <tr></tr>

                                        <td>Marque</td>
                                        <td>{this.state.marque}</td>

                                        <tr></tr>

                                        <td>Boite de vitesse</td>
                                        <td>{this.state.boite}</td>


                                        <tr></tr>

                                        <td>Energie</td>
                                        <td>{this.state.energie}</td>

                                        <tr></tr>

                                        <td>Couleur</td>
                                        <td>{this.state.couleur}</td>

                                        <tr></tr>

                                        <td>Nombre de place</td>
                                        <td>{this.state.nombre_place}</td>

                                        <tr></tr>

                                        <td>Nombre de porte</td>
                                        <td>{this.state.nombre_porte}</td>
                            </tbody>
                        </table>
                </div>
            </div>
        </div>
        </div></div>
        <Footer></Footer>
            </>
        );
    }
};
export default withNavigateHook(withRouter(DetailsAnnonce)) ;