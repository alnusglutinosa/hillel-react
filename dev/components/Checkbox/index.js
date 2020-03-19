import React, { Component, createRef } from 'react';
import classes from './Checkbox.module.css';

class Checkbox extends Component {
	input = createRef();

	handleChecked = (e) => {
		console.log(this.input.current.checked ? 'Задание Выполнено!' : 'Задание НЕ Выполнено!');
	}

	render() {
		const { isCheck } = this.props;

		return (
			<label className={classes.container}>Is checked
				<input 
					defaultChecked={isCheck}
					className={classes.checkboxInput} 
					type="checkbox"
					onChange={ this.handleChecked }
					ref={this.input}
				/>
				<span className={classes.checkmark}></span>
			</label>
		)
	}
}

export default Checkbox;