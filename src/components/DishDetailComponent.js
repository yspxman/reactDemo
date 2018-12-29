import React, {Component} from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import {Link} from 'react-router-dom';


class DishDetail extends Component{
  
    formatDate(date) {
        return new Intl.DateTimeFormat('en-US', {year: 'numeric', month: 'short', day:'2-digit'}).format(new Date(Date.parse(date)));      
    } 

    render(){       
        if (this.props.dish != null){

            const comments = this.props.comments.map((comment)=>{
                return (
                    <div key={comment.id}>
                        <p>By {comment.author}  at  
                        { this.formatDate(comment.date)}</p>
                        <div>
                            {comment.comment}
                        </div>                       
                    </div>
                );
            });

            return(
                <div className="container">
                     <div className="row">
                        <Breadcrumb>
                            <BreadcrumbItem><Link to='/menu'>Menu</Link></BreadcrumbItem>
                            <BreadcrumbItem active>{this.props.dish.name}</BreadcrumbItem>
                        </Breadcrumb>
                        <div className="col-12">
                            <h3>{this.props.dish.name}</h3>
                            <hr/>
                        </div>       
                     </div>
                     <div className="row">
                        <Card >
                        <CardImg width="100%" src = {this.props.dish.image} alt = {this.props.dish.name}/>
                        <CardBody>
                            <CardTitle>{this.props.dish.name}</CardTitle>
                            <CardText>{this.props.dish.description}</CardText>
                        </CardBody>
                        </Card>   
                        {comments}>   
                     </div>
                </div>
            );
        }
        else {
            return(
                <div></div>
            );
        }
    }
}

export default DishDetail;