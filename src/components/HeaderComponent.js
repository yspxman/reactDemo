import React, {Component} from 'react';
import  { Navbar, NavbarBrand, Jumbotron } from  'reactstrap';

class Header extends Component{
    render(){
        return (
            <div>
                <Navbar dark color="primary">
                    <div className='container'>
                        <NavbarBrand href="/">
                        The nav bar title
                        </NavbarBrand>
                    </div>
                </Navbar>
                <Jumbotron>
                <div className='container'>
                    <div className="row row-header">
                        <div className='col-12 col-sm-6'>
                            <h1>Ristorante Con Fusion</h1>
                            <p>We take some words here to describe what we need here</p>
                        </div>
                    </div>
                </div>
                </Jumbotron>
            </div>
        );
    }
}

export default Header;