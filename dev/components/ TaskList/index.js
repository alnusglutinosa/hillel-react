import React, { useState }  from 'react';

import Task from '../Task';
import classes from './TaskList.module.css';


const TaskList = ({ removeTask, listUpdateTask, tasks }) => {
	const [countTasks, changecountTasks] = useState(2);

	const handleaddMoreTasks = (e) => {
		e.preventDefault();
		changecountTasks(countTasks + 2);
	}

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
					<button onClick={handleaddMoreTasks} className={classes.btnMore}>Show more</button>
				) : null
			}
		</>
	);
}

export default  TaskList;