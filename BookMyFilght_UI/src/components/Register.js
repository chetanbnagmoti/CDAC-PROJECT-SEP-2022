import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import UserService from '../services/UserService';
import planeBG from "../assets/images/planebg.jpg";
import Footer from './Footer';
import Header from './Header';

/** 
 * @author Chetan_Nagmoti
 * This component will render Register page for the app 
 * UserService: Service for registering new user
*/
export default class Register extends Component {

	constructor(props){
		super(props);
		this.service=new UserService();
		this.state={
			userId:0,
			fname:"",
			email:"",
			phone:0,
			username:"",
			password:"",
			isadmin:0
		}
	}

	componentDidMount(){
		
	}

	handleInput=(event)=>{
		const name=event.target.name;
		const value=event.target.value;
		this.setState({
			[name]:value
		});
	}

	/** this method is for password confirmation */ 
	handlePass=(event)=>{
		if(event.target.value!==this.state.password){
			this.setState({cp:"Invalid Password!!"});
			this.setState({flag:false});
		}
		else{
			this.setState({cp:""});
			this.setState({flag:true});
		}
	}

	/** 
	 * this method interacts with service to register new user
	 * redirects to login page
	*/
	registerUser = () =>{
		//alert('willing to register');
		this.service.addUser(this.state).then(response=>{
			if(response.status===200){
				console.log(response.data);
				this.props.history.push('/login/');
			}
		}).catch(error=>{
			console.log(error);
			alert('Registration failed');
		});
		this.setState({userId:0,
		fname:"",
		email:"",
		phone:0,
		username:"",
		password:"",
		isadmin:0
	});
		
	}

	render(){

    return (
        <div class='pt-5'>
            <Header />
			<div className="bg-info  py-5" style={{backgroundImage: `url(${planeBG})`,overflow: 'hidden', height: '1000px',backgroundColor:"#000033"}}>
				<div className="row mb-4">
					<div className="col-lg-8 mx-auto text-center">
					<h1 className="display-6" style={{color:'white', fontWeight:'80pt',fontSize:"50px"}}><span ><b>Registration</b></span></h1>
					</div>
				</div> 
				<div className="row ">
				<div className="col-md-6 mx-auto ">
					<div className="card  ">
					<div className="card-header">
                    <div className=" text-white shadow-sm pt-4 pl-2 pr-2 pb-2" style={{backgroundColor:"#000033"}}>
                       
                    <div className="tab-content">
                        <div className="tab-pane fade show active pt-3">
                            <form >
                                <div className="form-group" > 
									<h6><span className="form-label  ">Name</span></h6>
										<input  type="text" name="fname" value={this.state.fname} onChange={this.handleInput} required className="form-control bg-info-subtle"style={{backgroundColor:"#EEE8AA"} }/>
								</div>
                                <div className="form-group " > 
									<h6><span className="form-label ">Email</span></h6>
										<input  type="email" name="email" value={this.state.email} onChange={this.handleInput} required className="form-control " style={{backgroundColor:"#EEE8AA"} }/>
								</div>
                                <div className="form-group"> 
									<h6><span className="form-label">Contact</span></h6>
										<input  name="phone" pattern="[6-9][0-9]{9}" maxLength="10" value={this.state.phone} onChange={this.handleInput} required className="form-control " style={{backgroundColor:"#EEE8AA"} }/>
								</div>
                                <div className="form-group"> 
									<h6><span className="form-label">Username</span></h6>
										<input type="text" name="username" value={this.state.username} onChange={this.handleInput} required className="form-control"style={{backgroundColor:"#EEE8AA"} } />
								</div>
                                <div className="form-group "> 
									<h6><span className="form-label ">Password</span></h6>
										<input type="password" name="password" value={this.state.password} onChange={this.handleInput} required className="form-control"style={{backgroundColor:"#EEE8AA"} } />
								</div>
                                <div className="form-group "> 
									<h6><span className="form-label ">Confirm Password</span></h6>
										<input type="text" name="cpasswd" onChange={this.handlePass} className="form-control" required style={{backgroundColor:"#EEE8AA"} }/><div className="text-danger">{this.state.cp} </div> 
								</div>
                                
                                <div className="card-footer"> 
								<button onClick={this.registerUser}  className="subscribe btn btn-light text-success btn-block shadow-sm" disabled={!this.state.flag}><h2>Register</h2></button>
								
								</div>      
                            </form>
                            
                        </div>
                    </div>
                    <div classNameName="form-group" > 
				
                       <div ><Link className="card-link" to="/login"><button  type="button" className="btn  btn-link btn-block">Already registered? Login Now!</button></Link>  </div> 
                    </div>
                   </div>
                </div>
            </div>
        </div>
		</div>
	</div>
	<Footer />
            </div>

    );
	}
}