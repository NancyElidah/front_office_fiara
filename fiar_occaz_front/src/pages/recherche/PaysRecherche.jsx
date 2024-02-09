import { Component } from "react";
import Header from "../Header";
import Footer from "../Footer";
import withNavigateHook from "../Navigation/WithNavigateHook";
class ModelRecherche extends Component{
    constructor (props){
        super(props);
        this.state = {
            type:[],
            idType :''        
        }
    }
    componentDidMount() {
        
    }
    handleIdType = (e) => {
        var value = e.target.value;
        this.setState({
          idType: value
        });
    }
    searchType =(e)=>{
        e.preventDefault();
        
        this.props.navigation("/resultat_annonce");

    }

    render(){
        return(
            <>
            <Header />
            <div className="main-container" style={{marginTop:-150}}>
                <div className="pd-ltr-20 xs-pd-20-10">
                    <div className="min-height-200px">
                        <div className="page-header">
					        <div className="clearfix">
						        <div className="pull-left">
                                    <h4 className="text-blue h4" style={{color:"blue"}}>Pays</h4>
                                    <p className="mb-20" style={{fontSize:10}}>Faire une recherche à partir d'un pays de voiture</p>
						        </div>
                            </div>
                    <form>
                    <div class="form-group row" style={{marginLeft:50}}>
							<label class="col-sm-12 col-md-2 col-form-label">Pays</label>
							<div class="col-sm-12 col-md-8">
								<select class="custom-select col-12" value={this.state.idType} onChange={this.handleIdType}>
									<option selected="">Choisir...</option>
									{
                                    this.state.type.map(
                                      carte => <option value={carte.idType} key={carte.idType} >{carte.nom}</option>
                                    )}
								</select>
							</div>
						</div>
                        
                        <div className="col-sm-12 col-md-12">
							<button className="btn btn-primary" style={{width:250 , marginLeft:410}} onClick={this.searchType}>Rechercher</button>
						</div>
						
					</form>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer/>
        </>
        );
    }
}
export default withNavigateHook(ModelRecherche) ; 