import React from 'react';
import Select from 'react-select';
import 'react-select/dist/react-select.css';
import {Router, Route, IndexRoute, Redirect, Link, IndexRedirect, browserHistory} from 'react-router';
import {Button, Navbar, Nav, NavItem, NavDropdown, MenuItem, Col, Form,Glyphicon, FormGroup, FormControl,InputGroup, ControlLabel} from 'react-bootstrap';

const options = [
  { value: 'feature', label: 'Feature' },
  { value: 'product', label: 'Product' },
  { value: 'user', label: 'User' }
];

class NavBar extends React.Component {

constructor(props){
  super(props);
  this.state = {
    selectedValue: null
  }
  this.handleChange = this.handleChange.bind(this);
}

handleChange(value){
  this.setState({selectedValue: value});
  this.props.onFeatureSelect ? this.props.onFeatureSelect(value): null;
  browserHistory.push('/' + (value? value.value : ''));
}

render() {
    return (	
    <Navbar fixedTop>
    <Navbar.Header>
  	<a href="#"><img src="Allstate.jpg"></img></a>
    </Navbar.Header>
    <Nav>
      <NavItem eventKey={1} href="#"> <Glyphicon glyph="home" /> Home</NavItem>
      <NavItem eventKey={2} href="#"><Glyphicon glyph="plus" /> Feature</NavItem>
	  </Nav>
	  <Nav pullRight style={{"width":"50%"}}>
	   <Form inline>
		<FormGroup controlId="formInlineName">
		<Select name="form-field-name"
			options={options}
      value={this.state.selectedValue}
			onChange={this.handleChange}
			style={{"width":"145px"}}
		/>
		
		</FormGroup>
		{' '}
		<FormGroup>
      <FormControl type="text" placeholder="Search" />
    </FormGroup>
    {' '}
    <Button type="submit">
      <Glyphicon glyph="search" />Search
    </Button>
  	</Form>
  	</Nav> 
    </Navbar>
    );
  }
}	

export default NavBar;