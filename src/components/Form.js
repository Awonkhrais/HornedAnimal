import React from 'react';
import Form from 'react-bootstrap/Form'

class Forms extends React.Component {

    
    
    render() {
        return (
            <Form  >
                <Form.Group controlId="exampleForm.SelectCustom">
                    <Form.Label>Filter the gallery by number of horns : </Form.Label>
                    <Form.Control as="select" custom onChange={this.props.selectNumOfHorn} style={{ width :'80px'} } >
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>100</option>
                        <option>All</option>
                    </Form.Control>
                </Form.Group>
            </Form>)
    }
}
export default Forms;