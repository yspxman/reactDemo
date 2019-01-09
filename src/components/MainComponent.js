import React, { Component } from 'react';
import Home from './HomeComponent';
import Menu from './MenuComponent';
import Contact from './ContactComponent';
import DishDetail  from './DishDetailComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import {Switch, Route, Redirect, withRouter} from 'react-router-dom';
import { connect } from 'react-redux';
import { addComment } from '../redux/ActionCreators';

const mapStateToProps = state => {
    return {
        dishes: state.dishes,
        comments: state.comments,
        promotions: state.promotions,
        leaders: state.leaders

    }
}

const mapDispatchToProps = (dispatch) => {
   addComment: (dishId, rating, author, comment) => dispatch(addComment(dishId, rating, author, comment))
};



class Main extends Component {

  constructor(props){
    super(props);

  }


  render() {

    const HomePage = ()=>{
        return (
        <Home dish={this.props.dishes.filter((d) => d.featured)[0]}
            promotion={this.props.promotions.filter((d) => d.featured)[0]}
            leader={this.props.leaders.filter((d) => d.featured)[0]}
        />
        );
    }

    const DishWithId = ({match})=>{
        var id = parseInt(match.params.dishId, 10);
        return(
            <DishDetail dish={this.props.dishes.filter(d=>d.id === id)[0]}
                comments={this.props.comments.filter(c=>c.dishId === id)}
                addComment = {this.props.addComment}
            />
        );
    }
    return (
      <div>
        <Header/>
        <Switch>
            <Route path="/home" component={HomePage}/>
            <Route exact path='/menu' component={ ()=> <Menu dishes={this.props.dishes}/>}  />
            <Route path='/menu/:dishId' component={ DishWithId}  />
            <Route exact path='/contactus' component={ Contact}  />
            <Redirect to="/home"/>
        </Switch>
        <Footer/>
      </div>
    );
  }
}

export default  withRouter (connect(mapStateToProps, mapDispatchToProps)(Main)) ;
