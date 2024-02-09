import { Component } from "react";
import Header from "../Header";
import Footer from "../Footer";

class Chat extends Component{
    render(){
        return (
            <>
                <Header/>
                <div className="main-container" style={{marginTop:-150}}>
		<div className="pd-ltr-20 xs-pd-20-10">
			<div className="min-height-200px">
				<div className="page-header">
					<div className="row">
						<div className="col-md-6 col-sm-12">
            <div className="col-lg-9 col-md-8 col-sm-12" style={{marginLeft:250}}>
							<div className="chat-detail">
								<div className="chat-profile-header clearfix">
									<div className="left">
										<div className="clearfix">
											<div className="chat-profile-name">
												<h3>Rachel Curtis</h3>
											</div>
										</div>
									</div>
								</div>
								<div className="chat-box">
									<div className="chat-desc customscroll">
										<ul>
											<li className="clearfix admin_chat">
												<span className="chat-img">
												</span>
												<div className="chat-body clearfix">
													<p>Maybe you already have additional info?</p>
													<div className="chat_time">09:40PM</div>
												</div>
											</li>
											<li className="clearfix admin_chat">
												<span className="chat-img">
												</span>
												<div className="chat-body clearfix">
													<p>It is to early to provide some kind of estimation here. We need user stories.</p>
													<div className="chat_time">09:40PM</div>
												</div>
											</li>
											<li className="clearfix">
												<span className="chat-img">
												</span>
												<div className="chat-body clearfix">
													<p>We are just writing up the user stories now so will have requirements for you next week. We are just writing up the user stories now so will have requirements for you next week.</p>
													<div className="chat_time">09:40PM</div>
												</div>
											</li>
											<li className="clearfix">
												<span className="chat-img">
												</span>
												<div className="chat-body clearfix">
													<p>Essentially the brief is for you guys to build an iOS and android app. We will do backend and web app. We have a version one mockup of the UI, please see it attached. As mentioned before, we would simply hand you all the assets for the UI and you guys code. If you have any early questions please do send them on to myself. Ill be in touch in coming days when we have requirements prepared. Essentially the brief is for you guys to build an iOS and android app. We will do backend and web app. We have a version one mockup of the UI, please see it attached. As mentioned before, we would simply hand you all the assets for the UI and you guys code. If you have any early questions please do send them on to myself. Ill be in touch in coming days when we have.</p>
													<div className="chat_time">09:40PM</div>
												</div>
											</li>
											<li className="clearfix admin_chat">
												<span className="chat-img">
												</span>
												<div className="chat-body clearfix">
													<p>Maybe you already have additional info?</p>
													<div className="chat_time">09:40PM</div>
												</div>
											</li>
											<li className="clearfix admin_chat">
												<span className="chat-img">
												</span>
												<div className="chat-body clearfix">
													<p>It is to early to provide some kind of estimation here. We need user stories.</p>
													<div className="chat_time">09:40PM</div>
												</div>
											</li>
											<li className="clearfix">
												<span className="chat-img">
												</span>
												<div className="chat-body clearfix">
													<p>We are just writing up the user stories now so will have requirements for you next week. We are just writing up the user stories now so will have requirements for you next week.</p>
													<div className="chat_time">09:40PM</div>
												</div>
											</li>
											<li className="clearfix">
												<span className="chat-img">
												</span>
												<div className="chat-body clearfix">
													<p>Essentially the brief is for you guys to build an iOS and android app. We will do backend and web app. We have a version one mockup of the UI, please see it attached. As mentioned before, we would simply hand you all the assets for the UI and you guys code. If you have any early questions please do send them on to myself. Ill be in touch in coming days when we have requirements prepared. Essentially the brief is for you guys to build an iOS and android app. We will do backend and web app. We have a version one mockup of the UI, please see it attached. As mentioned before, we would simply hand you all the assets for the UI and you guys code. If you have any early questions please do send them on to myself. Ill be in touch in coming days when we have.</p>
													<div className="chat_time">09:40PM</div>
												</div>
											</li>
											<li className="clearfix upload-file admin_chat">
												<span className="chat-img">
												</span>
												<div className="chat-body clearfix">
													<div className="upload-file-box clearfix">
														<div className="left">
															<div className="overlay">
																<a href="#">
																	<span><i className="fa fa-angle-down"></i></span>
																</a>
															</div>
														</div>
													</div>
													<div className="chat_time">09:40PM</div>
												</div>
											</li>
										</ul>
									</div>
									<div className="chat-footer">
										<div className="chat_text_area">
											<textarea placeholder="Type your message…"></textarea>
										</div>
										<div className="chat_send">
											<button className="btn btn-link" type="submit"><i className="icon-copy ion-paper-airplane"></i></button>
										</div>
									</div>
								</div>
							</div>
						</div>
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
export default Chat ;