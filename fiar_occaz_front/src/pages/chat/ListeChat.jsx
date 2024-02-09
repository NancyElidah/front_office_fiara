import { Component } from "react";
import Header from "../Header";
import Footer from "../Footer";
import { Link } from "react-router-dom";

class ListeChat extends Component{
    render(){
        return (
            <>
            <Header/>
            <div className="main-container" style={{marginTop:-150}}>
		<div className="pd-ltr-20 xs-pd-20-10">
			<div className="min-height-200px">
				<div className="product-wrap">
					<div className="product-list">

								<div className="chat-search">
									<span className="ti-search"></span>
									<input type="text" placeholder="Search Contact"/>
								</div>
								<div className="notification-list chat-notification-list customscroll">
									<ul>
										<li>
											<Link to = "/chat">
												<h3 className="clearfix">John Doe</h3>
												<p><i className="fa fa-circle text-light-green"></i> online</p>
											</Link>
										</li>
										<li className="active">
											<Link to = "/chat">
												<h3 className="clearfix">John Doe</h3>
												<p><i className="fa fa-circle text-light-green"></i> online</p>
											</Link>
										</li>
										<li>
											<Link to = "/chat">
												<h3 className="clearfix">John Doe</h3>
												<p><i className="fa fa-circle text-light-green"></i> online</p>
											</Link>
										</li>
										<li>
											<Link to = "/chat">
												<h3 className="clearfix">John Doe</h3>
												<p><i className="fa fa-circle text-warning"></i> active 5 min</p>
											</Link>
										</li>
										<li>
											<Link to = "/chat">
												<h3 className="clearfix">John Doe</h3>
												<p><i className="fa fa-circle text-warning"></i> active 4 min</p>
											</Link>
										</li>
										<li>
											<Link to = "/chat">
												<h3 className="clearfix">John Doe</h3>
												<p><i className="fa fa-circle text-warning"></i> active 3 min</p>
											</Link>
										</li>
										<li>
											<Link to = "/chat">
												<h3 className="clearfix">John Doe</h3>
												<p><i className="fa fa-circle text-light-orange"></i> offline</p>
											</Link>
										</li>
										<li>
											<Link to = "/chat">
												<h3 className="clearfix">John Doe</h3>
												<p><i className="fa fa-circle text-light-orange"></i> offline</p>
											</Link>
										</li>
										<li>
											<Link to = "/chat">
												<h3 className="clearfix">John Doe</h3>
												<p><i className="fa fa-circle text-light-orange"></i> offline</p>
											</Link>
										</li>
										<li>
											<Link to = "/chat">
												<h3 className="clearfix">John Doe</h3>
												<p><i className="fa fa-circle text-light-orange"></i> offline</p>
											</Link>
										</li>
										<li>
											<Link to = "/chat">
												<h3 className="clearfix">John Doe</h3>
												<p><i className="fa fa-circle text-light-orange"></i> offline</p>
											</Link>
										</li>
										<li>
											<Link to = "/chat">
												<h3 className="clearfix">John Doe</h3>
												<p><i className="fa fa-circle text-light-orange"></i> offline</p>
											</Link>
										</li>
									</ul>
								</div>
							</div>
						</div>
                        </div>
                        </div>
                        </div>
                <Footer/>
            </>
        )
    }
}
export default ListeChat ;