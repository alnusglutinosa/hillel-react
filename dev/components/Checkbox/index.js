import React from 'react';
import classes from './Checkbox.module.css';

class Checkbox extends React.Component {
	render() {
		return (
			<label className={classes.container}>Is checked
				<input className={classes.checkboxInput} type="checkbox" />
				<span className={classes.checkmark}></span>
			</label>
		)
	}
}

export default Checkbox;