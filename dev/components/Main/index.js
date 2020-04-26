import React, { useState, useEffect }from 'react';
import Title from '../Title'; 
import Form from '../Form';
import List from '../ TaskList';
import classes from './Main.module.css';

const TASKS = [
	{
		id: 1,
		isCheck: true,
		text: 'Lorem 1 ipsum dolor sit amet, adipiscing elit, sed do eiusmod tempor incididunt.'
	},
	{
		id: 2,
		isCheck: false,
		text: 'Lorem 2 ipsum dolor sit amet, consectetur elit, sed do eiusmod tempor incididunt.'
	},
	{
		id: 3,
		isCheck: false,
		text: 'Lorem 3 dolor sit amet, adipiscing elit, sed do eiusmod tempor incididunt.'
	},
	{
		id: 4,
		isCheck: false,
		text: 'Lorem 4 dolor sit amet, adipiscing elit, sed do eiusmod tempor incididunt.'
	},
	{
		id: 5,
		isCheck: true,
		text: 'Lorem 5 dolor sit amet, adipiscing elit, sed do eiusmod tempor incididunt.'
	},
	{
		id: 6,
		isCheck: false,
		text: 'Lorem 6 dolor sit amet, adipiscing elit, sed do eiusmod tempor incididunt.'
	},
	{
		id: 7,
		isCheck: true,
		text: 'Lorem 7 dolor sit amet, adipiscing elit, sed do eiusmod tempor incididunt.'
	}
];


const Main = () => {
	const init = () => {
        if (localStorage.getItem('tasksObject') !== null) {
            let tasksObject = localStorage.getItem('tasksObject');
			return JSON.parse(tasksObject);
        } else {
            localStorage.setItem('tasksObject', JSON.stringify(TASKS));
			return TASKS;
        }
    }

	const [tasksList, changeTasks] = useState(init);

	useEffect(() => {
		localStorage.setItem('tasksObject', JSON.stringify(tasksList));
	}, [tasksList]);

	const addTask = (newTask) => {
		changeTasks([newTask, ...tasksList]);
	};

	const deleteTask = (taskId) => {
		changeTasks(tasksList.filter(item => item.id !== taskId));
	};

	const appUpdateTask = (task) => {
		changeTasks(tasksList.map(item => item.id === task.id ? task : item));
	};

	return (
		<main className={classes.main}>
			<Title />
			<Form submitForm={addTask} />
			<List 
				listUpdateTask={appUpdateTask}
				tasks={tasksList}
				removeTask={deleteTask}
			/>
		</main>
	);
}

export default Main;