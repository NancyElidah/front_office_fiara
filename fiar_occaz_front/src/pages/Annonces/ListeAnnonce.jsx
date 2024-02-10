import { Component } from "react";
import Header from "../Header";
import Footer from "../Footer";
import sary from "../assets/vendors/images/v1.jpg"
import { Link } from "react-router-dom";
import AnnonceServiceInstance from "../service/AnnonceService";
import { useEffect } from "react";


class ListeAnnonce extends Component{
    constructor(props){
        super(props);
		this.state = {
            liste_marque :[],
        }
    }
	  componentDidMount(){
        this.fetchData();
    }
    FetchDataComponent = () => {
        useEffect(() => {
            this.fetchData();
        }, [this.state]);
        return null;
    }
    fetchData = () => {
        let token = sessionStorage.getItem("token");
        let id = sessionStorage.getItem("utilisateur");
        AnnonceServiceInstance.getAllPublication(token,id).then((res)=> {
            this.setState({liste_marque:res.data});
        });
    }
    render(){
        return(
            <>
            <Header/>
			<this.FetchDataComponent />
                <div className="main-container" style={{marginTop:-150}}>
		<div className="pd-ltr-20 xs-pd-20-10">
			<div className="min-height-200px">
				<div className="product-wrap">
					<div className="product-list">
						<ul className="row">
							{
								this.state.liste_marque.map (
									annonce => 
									<li className="col-lg-4 col-md-6 col-sm-12">
								<div className="product-box">
									<div className="producct-img"><img src={sary} alt=""/></div>
									<div className="product-caption">
										<h4>{annonce.utilisateur}</h4>
										<div className="price">
											<ins>AR {annonce.prix}</ins>
										</div>
										
                                        <Link to='/details_annonce' className="btn btn-outline-primary" style={{marginLeft:250}}>Voir</Link>
									</div>
								</div>
							</li>
								)
							}
						</ul>
					</div>
				</div>
			</div>
            </div>
            </div>
            <Footer/>
            </>
        );
    }
};
export default ListeAnnonce ;