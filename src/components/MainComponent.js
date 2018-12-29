import React, { Component } from 'react';
import Home from './HomeComponent';
import Menu from './MenuComponent';
import Contact from './ContactComponent';
import DishDetail  from './DishDetailComponent';
import Header from './HeaderComponent';
import {DISHES} from '../shared/dishes';
import {COMMENTS} from '../shared/comments';
import {LEADERS} from '../shared/leaders';
import {PROMOTIONS} from '../shared/promotions';
import Footer from './FooterComponent';
import {Switch, Route, Redirect} from 'react-router-dom';

class Main extends Component {

  constructor(props){
    super(props);

    this.state = {
      dishes: DISHES,
      comments: COMMENTS,
      promotions: PROMOTIONS,
      leaders: LEADERS
    };
  }

  render() {

    const HomePage = ()=>{
        return (
        <Home dish={this.state.dishes.filter((d) => d.featured)[0]}
            promotion={this.state.promotions.filter((d) => d.featured)[0]}
            leader={this.state.leaders.filter((d) => d.featured)[0]}
        />
        );
    }

    const DishWithId = ({match})=>{
        var id = parseInt(match.params.dishId, 10);
        return(
            <DishDetail dish={this.state.dishes.filter(d=>d.id === id)[0]}
                comments={this.state.comments.filter(c=>c.dishId === id)}
            />
        );
    }
    return (
      <div>
        <Header/>
        <Switch>
            <Route path="/home" component={HomePage}/>
            <Route exact path='/menu' component={ ()=> <Menu dishes={this.state.dishes}/>}  />
            <Route path='/menu/:dishId' component={ DishWithId}  />
            <Route exact path='/contactus' component={ Contact}  />
            <Redirect to="/home"/>
        </Switch>
        <Footer/>
      </div>
    );
  }
}

export default Main;
