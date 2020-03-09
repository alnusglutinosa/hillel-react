import React from 'react';
import classes from './Button.module.css';

class Button extends React.Component {
	render() {
		return (
			<button className={classes.btn}>
				<span className={classes.text}>edit</span>
			</button>
		)
	}
}

export default Button;