import { Component } from "react";
import Header from "../Header";
import Footer from "../Footer";
import sary from "../assets/vendors/images/v1.jpg"
import { Link } from "react-router-dom";

class Historiques extends Component{
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
					<div className="product-list">
						<ul className="row">
							<li className="col-lg-4 col-md-6 col-sm-12">
								<div className="product-box">
									<div className="producct-img"><img src={sary} alt=""/></div>
									<div className="product-caption">
										<h4><a href="#">Gufram Bounce Black</a></h4>
										<div className="price">
											<del>$55.5</del><ins>$49.5</ins>
										</div>
										
                                        <Link to='/details_annonce' className="btn btn-outline-primary" style={{marginLeft:250}}>Voir</Link>
									</div>
								</div>
							</li>
							<li className="col-lg-4 col-md-6 col-sm-12">
								<div className="product-box">
									<div className="producct-img"><img src={sary} alt=""/></div>
									<div className="product-caption">
										<h4><a href="#">Gufram Bounce White</a></h4>
										<div className="price">
											<del>$75.5</del><ins>$50</ins>
										</div>
										
                                        <Link to='/details_annonce' className="btn btn-outline-primary" style={{marginLeft:250}}>Voir</Link>
									</div>
								</div>
							</li>
							<li className="col-lg-4 col-md-6 col-sm-12">
								<div className="product-box">
									<div className="producct-img"><img src={sary} alt=""/></div>
									<div className="product-caption">
										<h4><a href="#">Contrast Lace-Up Sneakers</a></h4>
										<div className="price">
											<ins>$80</ins>
										</div>
										
                                        <Link to='/details_annonce' className="btn btn-outline-primary" style={{marginLeft:250}}>Voir</Link>
									</div>
								</div>
							</li>
							<li className="col-lg-4 col-md-6 col-sm-12">
								<div className="product-box">
									<div className="producct-img"><img src={sary} alt=""/></div>
									<div className="product-caption">
										<h4><a href="#">Apple Watch Series 3</a></h4>
										<div className="price">
											<ins>$380</ins>
										</div>
										
                                        <Link to='/details_annonce' className="btn btn-outline-primary" style={{marginLeft:250}}>Voir</Link>
									</div>
								</div>
							</li>

							<li className="col-lg-4 col-md-6 col-sm-12">
								<div className="product-box">
									<div className="producct-img"><img src={sary} alt=""/></div>
									<div className="product-caption">
										<h4><a href="#">Gufram Bounce White</a></h4>
										<div className="price">
											<del>$75.5</del><ins>$50</ins>
										</div>
										
                                        <Link to='/details_annonce' className="btn btn-outline-primary" style={{marginLeft:250}}>Voir</Link>
									</div>
								</div>
							</li>
							<li className="col-lg-4 col-md-6 col-sm-12">
								<div className="product-box">
									<div className="producct-img"><img src={sary} alt=""/></div>
									<div className="product-caption">
										<h4><a href="#">Apple Watch Series 3</a></h4>
										<div className="price">
											<ins>$380</ins>
										</div>
										
                                        <Link to='/details_annonce' className="btn btn-outline-primary" style={{marginLeft:250}}>Voir</Link>
									</div>
								</div>
							</li>
							<li className="col-lg-4 col-md-6 col-sm-12">
								<div className="product-box">
									<div className="producct-img"><img src={sary} alt="" /></div>
									<div className="product-caption">
										<h4><a href="#">Gufram Bounce Black</a></h4>
										<div className="price">
											<del>$55.5</del><ins>$49.5</ins>
										</div>
										
                                        <Link to='/details_annonce' className="btn btn-outline-primary" style={{marginLeft:250}}>Voir</Link>
									</div>
								</div>
							</li>
							<li className="col-lg-4 col-md-6 col-sm-12">
								<div className="product-box">
									<div className="producct-img"><img src={sary} alt="" /></div>
									<div className="product-caption">
										<h4><a href="#">Contrast Lace-Up Sneakers</a></h4>
										<div className="price">
											<ins>$80</ins>
										</div>
										
                                        <Link to='/details_annonce' className="btn btn-outline-primary" style={{marginLeft:250}}>Voir</Link>
									</div>
								</div>
							</li>

							<li className="col-lg-4 col-md-6 col-sm-12">
								<div className="product-box">
									<div className="producct-img"><img src={sary} alt="" /></div>
									<div className="product-caption">
										<h4><a href="#">Gufram Bounce Black</a></h4>
										<div className="price">
											<del>$55.5</del><ins>$49.5</ins>
										</div>
										
                                        <Link to='/details_annonce' className="btn btn-outline-primary" style={{marginLeft:250}}>Voir</Link>
									</div>
								</div>
							</li>
							<li className="col-lg-4 col-md-6 col-sm-12">
								<div className="product-box">
									<div className="producct-img"><img src={sary} alt="" /></div>
									<div className="product-caption">
										<h4><a href="#">Gufram Bounce White</a></h4>
										<div className="price">
											<del>$75.5</del><ins>$50</ins>
										</div>
										
                                        <Link to='/details_annonce' className="btn btn-outline-primary" style={{marginLeft:250}}>Voir</Link>
									</div>
								</div>
							</li>
							<li className="col-lg-4 col-md-6 col-sm-12">
								<div className="product-box">
									<div className="producct-img"><img src={sary} alt="" /></div>
									<div className="product-caption">
										<h4><a href="#">Contrast Lace-Up Sneakers</a></h4>
										<div className="price">
											<ins>$80</ins>
										</div>
                                        <Link to='/details_annonce' className="btn btn-outline-primary" style={{marginLeft:250}}>Voir</Link>
									</div>
								</div>
							</li>
							<li className="col-lg-4 col-md-6 col-sm-12">
								<div className="product-box">
									<div className="producct-img"><img src={sary} alt="" /></div>
									<div className="product-caption">
										<h4><a href="#">Apple Watch Series 3</a></h4>
										<div className="price">
											<ins>$380</ins>
										</div>
										
                                        <Link to='/details_annonce' className="btn btn-outline-primary" style={{marginLeft:250}}>Voir</Link>
									</div>
								</div>
							</li>
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
export default Historiques ;