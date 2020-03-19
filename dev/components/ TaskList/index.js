import React from 'react';

import Task from '../Task';
import classes from './TaskList.module.css';

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

class TaskList extends React.Component {
	constructor() {
		super();
		this.state = {
			countToShow: 0
        };
	
		this.tasks = [];
		this.addMoreTasks = this.addMoreTasks.bind(this);
	}

	componentDidMount() {
		this.addMoreTasks();
	}

	handleClickMore = (e) => {
		e.preventDefault();

		console.log(this.state);
	}

	addMoreTasks() {
		const { countToShow } = this.state;
		let varIncrement = 2;

		for(let i = countToShow, j = 0; (i < TASKS.length && j < varIncrement); j++, i++) {
			this.tasks.push(TASKS[i]);
		}

		this.setState({
			countToShow: countToShow + varIncrement
		}, () => {
			console.log(this.state.countToShow);
		});
	}

	render() {
		const { countToShow } = this.state;

		return (
			<>
				<ul className={classes.list}>
					{
						this.tasks.map(({isCheck, text, id}) => (
							<Task key={id} isCheck={isCheck} text={text} />
						))
					}
				</ul>

				{
					countToShow < TASKS.length ? (
						<button onClick={this.addMoreTasks} className={classes.btnMore}>Show more</button>
					) : null
				}
			</>
		);
	}
}

export default  TaskList;