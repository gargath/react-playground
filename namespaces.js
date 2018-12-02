import React from 'react';
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem, Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle } from 'reactstrap';
import { Dispatcher } from 'flux';

export const dispatcher = new Dispatcher()

export class NamespaceDropdown extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false,
	  namespaces: props.namespaces,
	  selectedNamespace: 0
    };
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }

  setSelected(i) {
	  this.setState({selectedNamespace: i})
	  dispatcher.dispatch({
		  type: 'namespaceChange',
		  newSelection: this.state.namespaces[i]
	  })
  }

  createEntries() {
	  let entries = []
	  for (let i = 0; i < this.state.namespaces.length; i++) {
		  entries.push(<DropdownItem key={i} onClick={() => this.setSelected(i)}>{this.state.namespaces[i]} </DropdownItem>)
	  }
	  return entries
  }

  render() {
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

export class NamespaceCard extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			selectedNamespace: ''
		}
	}

	componentDidMount() {
		this.token = dispatcher.register( dispatch => {
			if (dispatch.type = 'namespaceChange') {
				this.setState({selectedNamespace: dispatch.newSelection})
			}
		});
	}

	componentWillUnmount() {
		dispatcher.unregister(this.token)
	}

  render() {
	  return (
		  <Card>
		  	<CardBody>
		  		<CardTitle>SelectedNamespace</CardTitle>
		  		<CardText>{ this.state.selectedNamespace }</CardText>
		  	</CardBody>
		  </Card>
	  );
  }
}
