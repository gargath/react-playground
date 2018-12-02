import React from 'react';
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

export default class NamespaceDropdown extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false,
	  namespaces: props.namespaces,
	  selectedNamespace: 0
    };
	console.log(this.state)
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }

  setSelected(i) {
	  console.log(i)
	  this.setState({selectedNamespace: i})
  }

  createEntries() {
	  let entries = []
	  for (let i = 0; i < this.state.namespaces.length; i++) {
		  entries.push(<DropdownItem key={i} onClick={() => this.setSelected(i)}>{this.state.namespaces[i]} </DropdownItem>)
	  }
	  return entries
  }

  render() {
	  console.log(this.state)
    return (
	<div>Namespace:&nbsp;
      <ButtonDropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
        <DropdownToggle caret>
          {this.state.namespaces[this.state.selectedNamespace]}
        </DropdownToggle>
        <DropdownMenu>
          <DropdownItem header>Header</DropdownItem>
          <DropdownItem disabled>Action</DropdownItem>
          <DropdownItem divider />
		  {this.createEntries()}
        </DropdownMenu>
      </ButtonDropdown></div>
    );
  }
}
