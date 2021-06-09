import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


class SelectedBeast extends React.Component {

  render() {
    return (
      <div>
        <Modal show={this.props.show} onHide={this.props.closeModal} centered>
          <Modal.Header closeButton>
            <Modal.Title >
              {this.props.SelectedBeast.title}
            </Modal.Title>
          </Modal.Header>
          <Card.Img className='img-modal' variant="top" src={this.props.SelectedBeast.image_url} />

          <Modal.Body>
          {this.props.SelectedBeast.description}


          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.props.closeModal} variant="info">Close</Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

export default SelectedBeast;