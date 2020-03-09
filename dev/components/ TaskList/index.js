import React from 'react';

import Task from '../Task';

class  TaskList extends React.Component {
	render() {
		return (
			<ul className="list">
	            <Task />
	            <Task />
	        </ul>
		);
	}
}

export default  TaskList;