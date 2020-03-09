import React from 'react';

import Title from '../Title'; 
import Form from '../Form';
import List from '../ TaskList';

class App extends React.Component {
	render() {
		// cponst;
		return (
			<div className="box">
	            <Title />
	            <Form />
	            <List />
	        </div>
		)
	}
}

export default App;