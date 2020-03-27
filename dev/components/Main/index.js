import React from 'react';
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

class Main extends React.Component {
    state = {
		tasksList: [], 
    }

    componentDidMount() {
        if (localStorage.getItem('tasksObject') !== null) {
            let tasksObject = localStorage.getItem('tasksObject');
            this.setState({
                tasksList: JSON.parse(tasksObject),
            });
        } else {
            localStorage.setItem('tasksObject', JSON.stringify(TASKS));
            this.setState({
                tasksList: TASKS,
            });
        }
    }

    componentDidUpdate() {
        const { tasksList } = this.state;
        localStorage.setItem('tasksObject', JSON.stringify(tasksList));
    }

    addTask = (newTask ) => {
		const { tasksList } = this.state;
		this.setState({
			tasksList: [newTask, ...tasksList],
		});
	}

	deleteTask = (taskId) => {
        const { tasksList } = this.state;
		this.setState({
			tasksList: tasksList.filter(item => item.id !== taskId),
		});
	}

	appUpdateTask = (task) => {
		const { tasksList } = this.state;
		this.setState({
			tasksList: tasksList.map(item => item.id === task.id ? task : item),
		})
	}
    
	render() {
        const { tasksList } = this.state;
		return (
            <main className={classes.main}>
                <Title />
                <Form submitForm={this.addTask} />
                <List 
                    listUpdateTask={this.appUpdateTask}
                    tasks={tasksList}
                    removeTask={this.deleteTask}
                />
            </main>
        );
	}
}

export default Main;