import React, { Component, createRef } from 'react';
import classes from './Checkbox.module.css';

class Checkbox extends Component {
	constructor(props) {
		super(props);

		this.state = {
			onChange: this.props.onChange,
		}
	}

	handleChecked = (e, readonly) => {
		if(readonly) {
			return;
		}
		
		const {onChange } = this.state;
		onChange(e);
	}

	render() {
		const { name, isCheck, readonly } = this.props;

		return (
			<label className={classes.container}>Is checked
				<input 
					name={name}
					type="checkbox"
					checked={isCheck}
					onChange={ (e)=>this.handleChecked(e, readonly) }
					className={classes.checkboxInput}
				/>
				<span className={classes.checkmark}></span>
			</label>
		)
	}
}

Checkbox.defaultProps = {
	readonly: false
};

export default Checkbox;