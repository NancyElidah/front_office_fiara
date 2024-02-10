import { Component } from "react";
import Modal from "react-modal";
import Header from "../Header";
import withRouter from "../Navigation/WithRouter";
import withNavigateHook from "../Navigation/WithNavigateHook";
import UserService from "../service/UserService";

class Login extends Component{
    constructor(props){
		super(props);
		this.state = {
			isOpen : this.props.params.open , 
            lien : this.props.params.lien,
            email :'nelly@gmail.com',
			motDePasse :'nelly'
		};
		this.OpenModal = this.OpenModal.bind(this);
		this.closeOpen = this.closeOpen.bind(this);
        this.handleEmail = this.handleEmail.bind(this);
        this.handleMotDePasse = this.handleMotDePasse.bind(this);
        this.login = this.login.bind(this);
	}
	OpenModal(){
		console.log("Open");
		this.setState({
			isOpen : true 
		});
	}
	closeOpen(){
		this.setState({
			isOpen : false
		});
	}
    handleEmail= (e) => {
        var value = e.target.value;
        this.setState({
            email :value
        })
    }

	handleMotDePasse= (e) => {
        var value = e.target.value;
        this.setState({
            motDePasse :value
        })
    }
    login(e){
		e.preventDefault();
        var email = this.state.email ; 
        var motDePasse = this.state.motDePasse;
        console.log(email , motDePasse);
        UserService.loginUser(email ,motDePasse).then(res => {
            if(res.data.token === null){
                alert("vous n'êtes pas inscrit sur cette site") ; 
            }else{
                if(res.data.status === 5){
                    console.log(res.data.user);
                    sessionStorage.setItem("utilisateur",res.data.user);
                    sessionStorage.setItem("token",res.data.token);
                    sessionStorage.setItem("user",res.data.name);
					if(this.props.params.idUtils===null){
						this.props.navigation(`/${sessionStorage.getItem("token")}/${this.state.lien}`);
					}else{
						this.props.navigation(`/${sessionStorage.getItem("token")}/${this.state.lien}/${this.props.params.idUtils}`);
					}

                }else{
                    alert("Erreur");
                }
            }
        });
        this.closeOpen();
    }
    render(){
        return(
            <>
            <Header/>
                <Modal 
							appElement={document.getElementById('root') || undefined} 
							isOpen={this.state.isOpen} 
							onRequestClose={this.closeOpen}
							style={{
								overlay: {
									backgroundColor: 'rgba(0, 0, 0, 0.75)'
								},
								content: {
								top: '50%',
								left: '60%',
								right: 'auto',
								bottom: 'auto',
								marginRight: '-50%',
								transform: 'translate(-50%, -50%)',
								width: '50%',
								backgroundColor: 'transparent', // Ceci rendra le contenu du modal transparent
								color: 'white',
								border:'transparent'
								}
							}}
						>
						<div className="container">
							<div className="row align-items-center">
								<div className="col-md-9 col-lg-9" style={{marginLeft:100}}>
									<div className="login-box bg-white box-shadow border-radius-10">
										<div className="login-title">
											<h2 className="text-center text-primary">Connection sur Fiar'Occaz</h2>
										</div>
										<form onSubmit={this.login}>
											<div className="input-group custom">
												<input type="email" className="form-control form-control-lg" value={this.state.email} placeholder="Votre email" onChange={this.handleEmail}/>
												<div className="input-group-append custom">
													<span className="input-group-text"><i className="icon-copy dw dw-user1"></i></span>
												</div>
											</div>
											<div className="input-group custom">
												<input type="password" className="form-control form-control-lg" value ={this.state.motDePasse} placeholder="**********"  onChange={this.handleMotDePasse}/>
												<div className="input-group-append custom">
													<span className="input-group-text"><i className="dw dw-padlock1"></i></span>
												</div>
											</div>
											<div className="row">
												<div className="col-sm-12">
													<div className="input-group mb-0">
														
														<button className="btn btn-primary btn-lg btn-block"> Se Connecter</button>
													</div>
												</div>
											</div>
										</form>
									</div>
								</div>
							</div>
						</div>
					</Modal>
            </>
        );
    }
}
export default withNavigateHook(withRouter(Login)) ; 