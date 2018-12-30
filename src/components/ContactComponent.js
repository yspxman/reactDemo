import React, {Component} from 'react';
import {Breadcrumb, BreadcrumbItem, Button, Form, FormGroup, Label, Input, Col, FormFeedback} from 'reactstrap';
import {Link} from 'react-router-dom';


class Contact extends Component {

    constructor(props){
        super(props);

        this.state = {
            firstname:'',
            lastname: '',
            telnum:'',
            email:'',
            agree: false,
            contactType: 'Tel.',
            message: '',
            touched:{
                firstname: false,
                lastname: false,
                telnum: false,
                email: false
            }
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.checkName = this.checkName.bind(this);
        this.handleBlur = this.handleBlur.bind(this);
    }

    handleInputChange(event){
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked: target.value;
        const name = target.name;

        this.setState({
            [name]: value
        })
    }

    handleSubmit(event){
        var msg = "Current state is: " + JSON.stringify(this.state) + event;
        console.log(msg);
        alert(msg);
        event.preventDefault();
    }

    /// why handle blur should be defined as a closure
    handleBlur = (field) => () =>{
        console.log("the touched field is " + field)
        this.setState({
            touched:{ ...this.state.touched, [field]:true}
        })
    }

    // handleBlur  (field) {
    //     console.log("the touched field is " + field)
    //     this.setState({
    //         touched:{ ...this.state.touched, [field]:true}
    //     })
    // }


    checkName(needToCheck, text, name){

        console.log("checkName : " + needToCheck +  text + name);
        if (needToCheck && text.length < 3)
            return name + ' should be >=3 characters';
        else if(needToCheck && text.length >= 10)
            return name + ' should be <= 10 characters';
        
        return "";
    }

    validate(firstname, lastname, telnum, email){
        const erros = {
            firstname:'',
            lastname: '',
            telnum:'',
            email:'',
        };

        erros.firstname = this.checkName(this.state.touched.firstname, firstname, "First Name");
        erros.lastname = this.checkName(this.state.touched.lastname, lastname, "Last Name");      


        const reg = /^\d+$/;
        if (this.state.touched.telnum && !reg.test(telnum))
            erros.telnum = 'Tel. Number should contain only';

        if (this.state.touched.email &&  email.split('').filter(x=> x==='@').length !== 1)
            erros.email = 'Email should contain @';

        return erros;
    }




    render(){  

        const  errors = this.validate(this.state.firstname, this.state.lastname, this.state.telnum, this.state.email);
            
        return(
            <div className="container">

                    <div className="row">
                        <Breadcrumb>
                            <BreadcrumbItem>   <Link to='/home'>Home</Link>   </BreadcrumbItem>
                            <BreadcrumbItem active>Contact Us</BreadcrumbItem>
                        </Breadcrumb>
                        
                    </div>

                <div className="row row-content">
                    <div className="col-12">
                    <h3>Location Information</h3>
                    </div>
                    <div className="col-12 col-sm-4 offset-sm-1">
                            <h5>Our Address</h5>
                            <address>
                            121, Clear Water Bay Road<br />
                            Clear Water Bay, Kowloon<br />
                            HONG KONG<br />
                            <i className="fa fa-phone"></i>: +852 1234 5678<br />
                            <i className="fa fa-fax"></i>: +852 8765 4321<br />
                            <i className="fa fa-envelope"></i>: <a href="mailto:confusion@food.net">confusion@food.net</a>
                            </address>
                    </div>
                    <div className="col-12 col-sm-6 offset-sm-1">
                        <h5>Map of our Location</h5>
                    </div>
                    <div className="col-12 col-sm-11 offset-sm-1">
                        <div className="btn-group" role="group">
                            <a role="button" className="btn btn-primary" href="tel:+85212345678"><i className="fa fa-phone"></i> Call</a>
                            <a role="button" className="btn btn-info"><i className="fa fa-skype"></i> Skype</a>
                            <a role="button" className="btn btn-success" href="mailto:confusion@food.net"><i className="fa fa-envelope-o"></i> Email</a>
                        </div>
                    </div>
                </div>

                <div className="row row-content">
                    <div className="col-12">
                        <h3>Send us your feedback</h3>
                    </div>

                    {/* feedback form */}
                    <div className="col-12 col-md-9">
                        <Form onSubmit={this.handleSubmit}>
                            <FormGroup row>
                                <Label for="firstname" md={2}> First Name</Label>
                                <Col md={10}>
                                    <Input type="text" id="firstname" name="firstname"
                                        placeholder="First Name"
                                        value = {this.state.firstname}
                                        valid={errors.firstname === ''}
                                        invalid={errors.firstname !== ''}
                                        onBlur={this.handleBlur('firstname')}
                                        onChange={this.handleInputChange}/>    
                                    <FormFeedback>{errors.firstname}</FormFeedback>                           
                                </Col>
                            </FormGroup>

                            <FormGroup row>
                                <Label for="lastname" md={2}> Last Name</Label>
                                <Col md={10}>
                                    <Input type="text" id="lastname" name="lastname"
                                        placeholder="Last Name"
                                        value = {this.state.lastname}
                                        valid={errors.lastname === ''}
                                        invalid={errors.lastname !== ''}
                                        onBlur={this.handleBlur('lastname')}
                                        onChange={this.handleInputChange}/>   
                                    <FormFeedback>{errors.lastname}</FormFeedback>                                  
                                </Col>
                            </FormGroup>

                            <FormGroup row>
                                <Label for="telnum" md={2}> Tel.</Label>
                                <Col md={10}>
                                    <Input type="tel" id="telnum" name="telnum"
                                        placeholder="Tel. Num"
                                        value = {this.state.telnum}
                                        valid={errors.telnum === ''}
                                        invalid={errors.telnum !== ''}
                                        onBlur={this.handleBlur('telnum')}
                                        onChange={this.handleInputChange}/>
                                    <FormFeedback>{errors.telnum}</FormFeedback>                               
                                </Col>
                            </FormGroup>

                            <FormGroup row>
                                <Label for="email" md={2}> Email</Label>
                                <Col md={10}>
                                    <Input type="email" id="email" name="email"
                                        placeholder="Email"
                                        value = {this.state.email}
                                        valid={errors.email === ''}
                                        invalid={errors.email !== ''}
                                        onBlur={this.handleBlur('email')}
                                        onChange={this.handleInputChange}/>   
                                    <FormFeedback>{errors.email}</FormFeedback>                                  
                                </Col>
                            </FormGroup>

                            <FormGroup row>                            
                                <Col md={{size:6, offset: 2}}>
                                    <FormGroup check>
                                        <Label check>
                                            <Input type="checkbox" name="agree"
                                                checked={this.state.agree}
                                                onChange={this.handleInputChange}/> {' '}
                                                <strong>May we contact you?</strong>
                                        </Label>
                                    </FormGroup>
                                </Col>
                                <Col md={{size:3, offset: 1}}>
                                    <Input type = 'select' name="contactType" value={this.state.contactType} onChange={this.handleInputChange}>
                                    <option>Tel.</option>
                                    <option>Email</option>
                                    </Input>
                                </Col>
                            </FormGroup>

                            {/* feedback msg */}
                            <FormGroup row>
                                <Label for="feedback" md={2}> feedback</Label>
                                <Col md={10}>
                                    <Input type="textarea" id="message" name="message"
                                        rows="12"
                                        value = {this.state.message}
                                        onChange={this.handleInputChange}/>                               
                                </Col>
                            </FormGroup>

                            {/* submit */}
                            <FormGroup row>
                            
                                <Col md={{size:10, offset: 2}}>
                                    <Button type="submit" color="primary">
                                    Send Feedback
                                    </Button>                               
                                </Col>
                            </FormGroup>

                        </Form>
                    </div>
                </div>
            </div>
        );
    }
}

export default Contact;