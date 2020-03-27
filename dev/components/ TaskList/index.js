import React from 'react';

import Task from '../Task';
import classes from './TaskList.module.css';


class TaskList extends React.Component {
	state = {
		countTasks: 2,
	}

	handleaddMoreTasks = (e) => {
		const { countTasks } = this.state;
		e.preventDefault();

		this.setState({
			countTasks: countTasks + 2,
		});
	}

	render() {
		const { countTasks } = this.state;
		const {removeTask, listUpdateTask, tasks } = this.props;

		return (
			<>
				<ul className={classes.list}>
					{
						tasks.map(({isCheck, text, id}, index) => (
							index < countTasks ? (
								<Task 
									key={id} 
									isCheck={isCheck} 
									text={text}
									id={id}  
									remove={removeTask}
									itemUpdateTask={listUpdateTask}
								/>
							) : (null)
						))
					}
				</ul>

				{
					tasks.length > countTasks ? (
						<button onClick={this.handleaddMoreTasks} className={classes.btnMore}>Show more</button>
					) : null
				}
			</>
		);
	}
}

export default  TaskList;