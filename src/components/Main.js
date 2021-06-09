import React from 'react';
import Horned from './Horned';
// import HornedData from './data.json';
import CardGroup from 'react-bootstrap/CardGroup'




class Main extends React.Component {
    
    render() {
        return (


            <div>

                <CardGroup>

                    {this.props.HornedData.map((items, index) => {
                        if( this.props.HornsNumber==='All'){
                        return (<Horned title={items.title}
                            description={items.description}
                            url={items.image_url}

                            // openModal={this.props.openModal}
                            clickFunc={this.props.clickFunc}

                        />)
                        }


                        else if(items.horns == this.props.HornsNumber){
                            return (<Horned title={items.title}
                                description={items.description}
                                url={items.image_url}
    
                                // openModal={this.props.openModal}
                                clickFunc={this.props.clickFunc} 
                         />)
    
                        }
                    })}
                </CardGroup>


            </div>
        )
    }
}

export default Main;



