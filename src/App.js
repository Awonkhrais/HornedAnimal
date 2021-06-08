import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';
import HornedData from './components/data.json';
import SelectedBeast from './components/SelectedBeast ';




class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      dataArray: HornedData,
      show: false,
      // selectedBeast:{},

      // description:'',
      // image_url:'',
      // title:'',


    }
  }

  openModal = () => {
    this.setState({show:true});
  }
  closeModal = () => {
    this.setState({show:false});
  }

render(){

  return(
    <div className='container'>
    <Header/>
    <Main dataArray={this.state.dataArray} openModal={this.openModal}/>
    <Footer/>
    <SelectedBeast show={this.state.show}
                closeModal={this.closeModal}
                
                   description={HornedData.description} 
                   image_url={HornedData.image_url}
                   title={HornedData.title}
                   

                />
    </div>

  )
}


}

export default App;