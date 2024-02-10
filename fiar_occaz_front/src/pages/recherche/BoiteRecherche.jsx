import { Component } from "react";
import Header from "../Header";
import Footer from "../Footer";
import withNavigateHook from "../Navigation/WithNavigateHook";
import BoiteInstance from "../service/Boite";
class BoiteRechere extends Component{
    constructor (props){
        super(props);
        this.state = {
            type:[],
            idbv :''        
        }
    }
    componentDidMount() {
        BoiteInstance.getAllBoite()
          .then((res) => {
            this.setState({ type: res.data });
          })
          .catch((error) => {
            console.error('Error fetching data: ', error);
          });
      }
    handleidbv = (e) => {
        var value = e.target.value;
        this.setState({
          idbv: value
        });
        alert(this.state.idbv);
    }
    searchType =(e)=>{
        e.preventDefault();
        BoiteInstance.getResBoite(this.state.idbv).then((res) => {
            this.props.navigation(`/resultat_annonce/${res.data}`);
        });

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
                                    <h4 className="text-blue h4" style={{color:"blue"}}>Boite de vitèsse</h4>
                                    <p className="mb-20" style={{fontSize:10}}>Faire une recherche à partir d'une Boite de vitèsse de voiture</p>
						        </div>
                            </div>
                    <form>
                    <div class="form-group row" style={{marginLeft:50}}>
							<label class="col-sm-12 col-md-2 col-form-label">Boite de vitèsse</label>
							<div class="col-sm-12 col-md-8">
								<select class="custom-select col-12" value={this.state.idbv} onChange={event => this.handleidbv(event)}>
									<option selected="">Choisir...</option>
									{
                                    this.state.type.map(
                                      carte => <option value={carte.idbv} key={carte.idbv} >{carte.nom}</option>
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
export default withNavigateHook(BoiteRechere) ; 