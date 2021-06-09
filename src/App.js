import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';
import HornedData from './components/data.json';
import SelectedBeast from './components/SelectedBeast ';




class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      HornedData: HornedData,
      show: false,
      SelectedBeast:'',




    }
  }



  clickFunc = (title) => {
    let SelectedBeast = HornedData.find(item =>{
      if (item.title===title){
        return item;
      }
    })
    this.setState({
     
      SelectedBeast:SelectedBeast,
      show: true,

    });
  };

  


 
  closeModal = () => {
    this.setState({ show: false });
  }

  render() {

    return (
      <div className='container'>
        <Header />
        <Main HornedData={this.state.HornedData} openModal={this.openModal} clickFunc={this.clickFunc} />
        <Footer />
        <SelectedBeast show={this.state.show}
          closeModal={this.closeModal}
        
          SelectedBeast={this.state.SelectedBeast}
        />
      </div>

    )
  }


}

export default App;