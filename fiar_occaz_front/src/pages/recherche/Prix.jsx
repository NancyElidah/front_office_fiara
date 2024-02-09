import { Component } from "react";
import Header from "../Header";
import Footer from "../Footer";
import withNavigateHook from "../Navigation/WithNavigateHook";
class Prix extends Component{
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
                                        <h4 className="text-blue h4" style={{color:"blue"}}>Filtre Entre 2 Prix</h4>
                                        <p className="mb-20" style={{fontSize:10}}>Ajouter un prix minimum et un autre maximum</p>
                                    </div>
                                </div>
                        <form>
                            <div className="form-group row" style={{marginLeft:50}}>
                                <label className="col-sm-12 col-md-2 col-form-label" >Prix minimum : </label>
                                <div className="col-sm-12 col-md-8">
                                    <input className="form-control" type="text" placeholder="Prix minimum" />
                                </div>
                            </div>
                            <div className="form-group row" style={{marginLeft:50}}>
                                <label className="col-sm-12 col-md-2 col-form-label" >Prix maximum : </label>
                                <div className="col-sm-12 col-md-8">
                                    <input className="form-control" type="text" placeholder="Prix maximum" />
                                </div>
                            </div>
                            <div className="col-sm-12 col-md-12">
                                <button className="btn btn-primary"  style={{width:250 , marginLeft:410}}>Recherche</button>
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
export default withNavigateHook(Prix) ; 