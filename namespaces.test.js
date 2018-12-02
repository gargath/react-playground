import React from 'react';
import { shallow } from 'enzyme';
import { dispatcher, NamespaceCard } from './namespaces.js';

import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem, Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle } from 'reactstrap';


test('Card updates on dispatch', () => {
	const card = shallow(<NamespaceCard />)
	var text = card.find(CardText);

	expect(card).toHaveState({ selectedNamespace: '' });

	dispatcher.dispatch({
		type: 'namespaceChange',
		newSelection: 'testvalue'
	})

	expect(card).toHaveState({ selectedNamespace: 'testvalue' });

	expect(text).toHaveLength(1);
})
