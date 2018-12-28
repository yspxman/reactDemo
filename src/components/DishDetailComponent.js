import React, {Component} from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';


class DishDetail extends Component{
  
    formatDate(date) {
        return new Intl.DateTimeFormat('en-US', {year: 'numeric', month: 'short', day:'2-digit'}).format(new Date(Date.parse(date)));      
    } 

    render(){       
        if (this.props.dish != null){

            const comments = this.props.dish.comments.map((comment)=>{
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
                <div>
                    <div className="col-12 col-md-5 m-1">
                    <Card >
                    <CardImg width="100%" src = {this.props.dish.image} alt = {this.props.dish.name}/>
                    <CardBody>
                        <CardTitle>{this.props.dish.name}</CardTitle>
                        <CardText>{this.props.dish.description}</CardText>
                    </CardBody>
                    </Card>            
                    </div>
                    <div className="col-12 col-md-5 m-1">{comments}</div>  
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