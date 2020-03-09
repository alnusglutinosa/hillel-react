import React from 'react';
import classes from './Checkbox.module.css';

class Checkbox extends React.Component {
	render() {
		return (
			<label className={classes.checkboxLabel}>Is checked
				<input className={classes.checkboxInput} type="checkbox" />
			</label>
		)
	}
}

export default Checkbox;