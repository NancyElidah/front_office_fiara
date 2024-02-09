import { Component } from "react";
import Header from "../Header";
import Footer from "../Footer";
import sary from "../assets/vendors/images/v1.jpg";	
import { Link } from "react-router-dom";


class DetailsAnnonce extends Component{
	constructor(props){
		super(props);
    }

    render(){
		return(
            <>
            <Header/>
            <div className="main-container" style={{marginTop:-150}}>
		<div className="pd-ltr-20 xs-pd-20-10">
			<div className="min-height-200px">
				<div className="product-wrap">
					<div className="product-detail-wrap mb-30">
						<div className="row">
							<div className="col-lg-6 col-md-12 col-sm-12">
								<div className="product-slider slider-arrow">
									<div className="product-slide">
										<img src={sary} alt="" />
									</div>
								</div>
							</div>
							<div className="col-lg-6 col-md-12 col-sm-12">
								<div className="product-detail-desc pd-20 card-box height-100-p">
									<div className="pull-right">
										<Link to="/" className="btn  btn-sm scroll-click" rel="content-y"  data-toggle="collapse"  ><i class="icon-copy fa fa-heart" aria-hidden="true" style={{width:20}}></i></Link>
									</div>
                                    <div className="pull-right" style={{marginRight:20}}>
										<Link to="/all_chat" className="btn  btn-sm scroll-click" rel="content-y"  data-toggle="collapse"  ><i class="icon-copy fa fa-wechat" aria-hidden="true"></i></Link>
									</div>
									<h4 className="mb-20 pt-20">Gufram Bounce Black</h4>
									<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
									<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
									<div className="price">
										<del>$55.5</del><ins>$49.5</ins>
									</div>
									<table className="table" style={{border:"less"}}>
                            <thead>
                            </thead>
                            <tbody>
                                        <td>Prix</td>
                                        <td></td>
                                        <tr></tr>
                                        <td>Type</td>
                                        <td></td>
                                        <tr></tr>

                                        <td>Modele</td>
                                        <td></td>
                                        <tr></tr>

                                        <td>Marque</td>
                                        <td></td>

                                        <tr></tr>

                                        <td>Boite de vitesse</td>
                                        <td></td>


                                        <tr></tr>

                                        <td>Energie</td>
                                        <td></td>

                                        <tr></tr>

                                        <td>Couleur</td>
                                        <td></td>

                                        <tr></tr>

                                        <td>Nombre de place</td>
                                        <td></td>

                                        <tr></tr>

                                        <td>Nombre de porte</td>
                                        <td></td>
                            </tbody>
                        </table>
									<div className="row">
										<div className="col-md-6 col-12" style={{marginLeft:250}}>
											<Link to="" className="btn btn-outline-primary btn-block">Acheter</Link>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
                </div></div></div></div>
				
            <Footer/>
            </>
        );
    }
};
export default DetailsAnnonce ;