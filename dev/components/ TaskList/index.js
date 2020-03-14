import React from 'react';

import Task from '../Task';
import classes from './TaskList.module.css'

class  TaskList extends React.Component {
	render() {
		return (
			<ul className={classes.list}>
	            <Task />
	            <Task />
				<Task />
	        </ul>
		);
	}
}

export default  TaskList;