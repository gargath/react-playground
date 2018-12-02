import React from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome } from '@fortawesome/free-solid-svg-icons'

import { NamespaceDropdown, NamespaceCard } from './namespaces.js'

const App = () => (
  <div className="App">

  	<SideNav defaultExpanded={ true } style={{ backgroundColor: '#326ce5' }}>
		<SideNav.Toggle />
		<SideNav.Nav defaultSelected="home">
			<NavItem eventKey="home">
				<NavIcon style={{ paddingTop: '1.5ex'}}>
					<FontAwesomeIcon icon={ faHome } style={{ fontSize: '1.75em' }} />
				</NavIcon>
				<NavText>
					Home
				</NavText>
			</NavItem>
			<NavItem>
				<div style={{ paddingTop:'0.0ex'}}>
					<NamespaceDropdown namespaces={['default', 'some', 'somemore', 'someother']} />
				</div>
			</NavItem>
		</SideNav.Nav>
	</SideNav>

    <img className="App-Logo" src={logo} alt="React Logo" />
    <h1 className="App-Title">Hello Parcel x React</h1>
	<NamespaceCard />
  </div>
);

ReactDOM.render(<App />, document.getElementById('root'));

// Hot Module Replacement
if (module.hot) {
  module.hot.accept();
}
