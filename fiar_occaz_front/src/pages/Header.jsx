import { Component } from "react";
import sary from "../pages/assets/src/images/fiara.png"
import { Link } from 'react-router-dom';
import withNavigateHook from "./Navigation/WithNavigateHook";
import "./assets/vendors/images/apple-touch-icon.png"
import "./assets/vendors/images/favicon-32x32.png"
import "./assets/vendors/images/favicon-16x16.png"
import "./assets/vendors/styles/core.css"
import "./assets/vendors/styles/icon-font.min.css"
import "./assets/vendors/styles/style.css"
class Header extends Component {
	constructor(props){
		super(props);
		this.state = {
			lien_favoris :'' ,
			lien_historique:'',
			lien_chat:''
		}
		this.handleLogOut = this.handleLogOut.bind(this);
	}
	handleLogOut(){
		sessionStorage.removeItem("token");
		sessionStorage.removeItem("utilisateur");
		sessionStorage.removeItem("user");
		this.props.navigation('/');
	}
	componentDidMount(){
		if (sessionStorage.getItem("token") !== null) {
		  this.setState({
			lien_favoris: `${sessionStorage.getItem("token")}/liste_favoris`,
			lien_historique: `${sessionStorage.getItem("token")}/historique`,
			lien_chat: `${sessionStorage.getItem("token")}/chat`
		  });
		} else if (sessionStorage.getItem("token") === null) {
		  this.setState({
			lien_favoris: `login/${true}/${"liste_favoris"}`,
			lien_historique: `login/${true}/${"historique"}`,
			lien_chat: `login/${true}/${"all_chat"}`
		  });
		}
	 }
	
	render(){
		return (
			<>
			<div className="header">
				<div className="header-left">
				 <div className="menu-icon dw dw-menu"></div>
				 <div className="search-toggle-icon dw dw-search2" data-toggle="header_search"></div>
				 <div className="header-search">
					 <form >
						 <div className="form-group mb-0">
							 <input type="text" className="form-control search-input" placeholder="Faire une rechere avancée"/>
							 <div className="dropdown">
								 <Link className="dropdown-toggle no-arrow" to="" role="button" data-toggle="dropdown">
								 <i className="dw dw-search2 search-icon"></i>
								 </Link>
							 </div>
						 </div>
					 </form>
				 </div>
					</div>
					<div className="header-right">
	  
				 <div className="user-notification">
					 <div className="dropdown">
						 <Link to={`/login/${true}/${"details_annonce"}`} className="btn btn-primary btn-sm scroll-click" rel="content-y"  data-toggle="collapse" role="button" ><i className="fa fa-sign-in"></i></Link>
					 </div>
				 </div>

				 </div>
				</div>
	 
		 <div className="left-side-bar">
			 <div className="brand-logo">
				 <a href="index.html">
					 <img src={sary} alt="" className="light-logo"/>
				 </a>
				 <div className="close-sidebar" data-toggle="left-sidebar-close">
					 <i className="ion-close-round"></i>
				 </div>
			 </div>
			 <div className="menu-block customscroll">
			 {sessionStorage.getItem("token") != null && sessionStorage.getItem("user")!=null && sessionStorage.getItem("utilisateur")!=null &&	(
				<div className="sidebar-menu">
					<ul id="accordion-menu">
					<li className="dropdown">
						<Link onClick={this.handleLogOut} className="dropdown-toggle">
						<span className="micon"><i className="fa fa-sign-out"></i></span><span className="">Se Deconnecter</span>
						</Link>
					</li>  
					</ul>
				</div>
			)}
				 <div className="sidebar-menu">
					 <ul id="accordion-menu">
					 <li className="dropdown">
					 <Link to='/' className="dropdown-toggle">
						 <span className="micon"><i className="fa fa-list"></i></span><span className="">Annonce</span>
					 </Link>
						 </li>	
					 </ul>
				 </div>
				 <div className="sidebar-menu">
					 <ul id="accordion-menu">
					 <li className="dropdown">
					 <Link to={"/"+this.state.lien_favoris} className="dropdown-toggle">
						<span className="micon"><i class="icon-copy fa fa-heart" aria-hidden="true"></i></span><span className="">Favoris</span>
					</Link>
						 </li>	
					 </ul>
				 </div>
				 <div className="sidebar-menu">
					 <ul id="accordion-menu">
					 <li className="dropdown">
					 <Link to={"/"+this.state.lien_historique} className="dropdown-toggle">
						<span className="micon"><i class="icon-copy fa fa-history" aria-hidden="true"></i></span><span className="">Historique</span>
					</Link>
						 </li>	
					 </ul>
				 </div>
				 <div className="sidebar-menu">
					 <ul id="accordion-menu">
					 <li className="dropdown">
					 <Link to={"/"+this.state.lien_chat} className="dropdown-toggle">
						<span className="micon"><i class="icon-copy fa fa-wechat" aria-hidden="true"></i></span><span className="">Chat</span>
					</Link>
						 </li>	
					 </ul>
				 </div>
				 <div className="sidebar-menu">
					 <ul id="accordion-menu">
					 <li className="dropdown">
					 <Link to="/recherche" className="dropdown-toggle">
						<span className="micon"><i class="icon-copy fa fa-search" aria-hidden="true"></i></span><span className="">Recherche</span>
					</Link>
						 </li>	
					 </ul>
				 </div>
			 </div>
		 </div>
		 <div className="main-container">
			 <div className="pd-ltr-20 xs-pd-20-10">
				 <div className="min-height-200px">
					 <div className="page-header">
						 <div className="row">
							 <div className="col-md-6 col-sm-12">
								 <div className="title">
									 <h4>Fiar'Occaz</h4>
								 </div>
								 <nav aria-label="breadcrumb" role="navigation">
									 <ol className="breadcrumb">
										 <li className="breadcrumb-item active" aria-current="page">Bienvenue : {sessionStorage.getItem("user")}</li>
									 </ol>
								 </nav>
							 </div>
						 </div>
					 </div>
				 </div>
				 </div>
			 </div>
			 
			</>
		);
	}
   
};

export default withNavigateHook(Header);
