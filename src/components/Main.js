import React from 'react';
import Horned from './Horned';
// import HornedData from './data.json';
import CardGroup from 'react-bootstrap/CardGroup'



class Main extends React.Component{
    render(){
        return(


        <div>

        <CardGroup>

    {this.props.dataArray.map((items,index)=>{
    return(<Horned title={items.title} 
                   description={items.description} 
                   url={items.image_url}
                   openModal={this.props.openModal}

                   />)
    })}
       </CardGroup>


        </div>
        )
    }
}

export default Main;



