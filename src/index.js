import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App';
import  { Navbar, NavbarBrand } from  'reactstrap';
import * as serviceWorker from './serviceWorker';

 function Square(props){
    return(
        <button className="square" onClick={props.onClick}>
        {props.value}
        </button>
    );
}

class Board extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            squares: Array(9).fill("-"),
            xIsNext: true,
        };
    }
    handleClick(i){
        //const localSquares = this.state.squares.slice();
        //localSquares[i] = 'X';
        //this.setState({squares: localSquares});

        this.state.squares[i] = this.state.xIsNext? 'x' : 'O';
        this.setState({squares: this.state.squares, xIsNext: !this.state.xIsNext
        });
        
    }
    renderSquare(i){
        return <Square value={this.state.squares[i]}
        onClick={()=>this.handleClick(i)} />;
    }

    render(){
        const status = "Next player: " + (this.state.xIsNext ? "X":"O");
        return(
            <div>
            <div>{this.props.mytext}</div>
            <div className="status">{status}</div>
            <div className="board-row">
            {this.renderSquare(0)}
            {this.renderSquare(1)}
            {this.renderSquare(2)}
            </div>

            <div className="board-row">
            {this.renderSquare(3)}
            {this.renderSquare(4)}
            {this.renderSquare(5)}
            </div>

            <div className="board-row">
            {this.renderSquare(6)}
            {this.renderSquare(7)}
            {this.renderSquare(8)}
            </div>
        </div>
        );
        }
}

class Game extends React.Component{
    render(){
        return(
           
            <div className="game">
              <Navbar dark color="primary">
                <div className='container'>
                    <NavbarBrand href="/">
                    The nav bar title
                    </NavbarBrand>
                </div>
              </Navbar>
                <div className="game-board">
                    <Board mytext="This is title"/>
                </div>
                <div className="game-info">
                    <div></div>
                    <ol></ol>
                </div>
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.register();
