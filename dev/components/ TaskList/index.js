import React, { useState, useEffect }  from 'react';

import Task from '../Task';
import classes from './TaskList.module.css';
import store from '../../store';


const TaskList = () => {
	const [tasks, changeTasks] = useState(store.getStore());
    const callbackForEmit = () => changeTasks(store.getStore());

    useEffect(() => {
        store.addEventListener(callbackForEmit);

        return () => {
            store.removeEventListener(callbackForEmit);
        };
	}, []);
	

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