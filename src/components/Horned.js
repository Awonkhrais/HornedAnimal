import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';


class Horned extends React.Component{
constructor(props) {
    super(props);
    this.state = {
        numOfHorned : 0
    }
}

increasNumOfHorned = () => {
    this.setState({
        numOfHorned : this.state.numOfHorned+1
    });
    // this.props.openModal();
    

}

update=()=>{
    this.props.clickFunc(this.props.title)
}



render(){
        return(
            <div>

             {/* <h2 className='title'>title: {this.props.title}</h2>
             <img src={this.props.url} alt={this.props.description} title={this.props.title} />
             <p className='desc'>description: {this.props.description}</p> */}

             <Card className='card-name' style={{ width: '18rem' , height:'35rem' }}>
             <Card.Img variant="top" src={this.props.url}  onClick={this.update}  />
             <Card.Body>
             <Card.Title>{this.props.title}</Card.Title>
             <Card.Text>
              ❤️ = {this.state.numOfHorned}
             </Card.Text>

             <Card.Text>
              {this.props.description}
             </Card.Text>
             <Button onClick={this.increasNumOfHorned} variant="info">Vote</Button>

             </Card.Body>
             </Card>


             
           

            </div>

        )
    }
}


export default Horned;