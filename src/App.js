import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';
import 'bootstrap/dist/css/bootstrap.min.css';
import HornedData from './components/data.json';
import SelectedBeast from './components/SelectedBeast ';
import Forms from './components/Form'




class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      HornedData: HornedData,
      show: false,
      SelectedBeast: '',
      HornsNumber: 'All',





    }
  }

 

  clickFunc = (title) => {
    let SelectedBeast = HornedData.find(item => {
      if (item.title === title) {
        return item;
      }
    })
    this.setState({

      SelectedBeast: SelectedBeast,
      show: true,

    });
  };


  selectNumOfHorn = (event) => {
    this.setState({
      HornsNumber: event.target.value
    });
    // console.log(this.state.HornsNumber)
  }




  closeModal = () => {
    this.setState({ show: false });
  }

  render() {

    return (
      <div className='container'>
        <Header />
        <Forms selectNumOfHorn={this.selectNumOfHorn} />
        <Main HornedData={this.state.HornedData} HornsNumber={this.state.HornsNumber}
          clickFunc={this.clickFunc} />
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